// 如果是 .tsx 檔，不需要特別 import React（Vite 預設 jsx: react-jsx）
// 這行會把專屬樣式載入（也可放到 index.css，看你習慣）
import "../styles/bubbles.css";

export function Bubbles() {
  return (
    // 用 fixed + pointer-events-none 讓泡泡當背景且不擋點擊
    <div id="background-wrap" className="pointer-events-none">
      <div className="bubble x1"></div>
      <div className="bubble x2"></div>
      <div className="bubble x3"></div>
      <div className="bubble x4"></div>
      <div className="bubble x5"></div>
      <div className="bubble x6"></div>
      <div className="bubble x7"></div>
      <div className="bubble x8"></div>
      <div className="bubble x9"></div>
      <div className="bubble x10"></div>
    </div>
  );
}
