import React, { useState, useEffect } from "react";
import api from "../api";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  const fetchPositions = async () => {
    try {
      const res = await api.get("/allPositions");
      setPositions(res.data);
    } catch (err) {
      console.log("Positions error:", err);
    }
  };

  useEffect(() => {
    fetchPositions();

    const interval = setInterval(fetchPositions, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((s, i) => {
              const curValue = s.price * s.qty;
              const pnl = curValue - s.avg * s.qty;
              const isProfit = pnl >= 0;

              return (
                <tr key={i}>
                  <td>{s.product}</td>
                  <td>{s.name}</td>
                  <td>{s.qty}</td>
                  <td>{s.avg?.toFixed(2)}</td>
                  <td>{s.price?.toFixed(2)}</td>
                  <td className={isProfit ? "profit" : "loss"}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={s.isLoss ? "loss" : "profit"}>
                    {s.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;