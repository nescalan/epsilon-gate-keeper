import React from "react";
import "./PrimaryBtn.styles.css";

function PrimaryBtn({ children }) {
  return <button className="btn">{children}</button>;
}

export { PrimaryBtn };
