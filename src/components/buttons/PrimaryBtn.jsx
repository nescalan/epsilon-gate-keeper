import React from "react";
import "./PrimaryBtn.styles.css";

function PrimaryBtn({ children }) {
  return <button className="btn-session">{children}</button>;
}

export { PrimaryBtn };
