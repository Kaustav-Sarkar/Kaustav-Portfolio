import React, { useState } from "react";
import "./SimpleAccordion.css";

export const SimpleAccordion = ({ children }) => {
  return <div className="simple-accordion">{children}</div>;
};

export const SimplePanel = ({
  title,
  children,
  initialExpanded = false,
  theme,
}) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  return (
    <div className="simple-panel">
      <div
        className="simple-panel-header"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          backgroundColor: theme.highlight,
          background: `linear-gradient(135deg, ${theme.highlight} 0%, ${theme.body} 100%)`,
          color: theme.text,
        }}
      >
        <span>{title}</span>
        <span className="simple-panel-toggle">{isExpanded ? "−" : "+"}</span>
      </div>
      {isExpanded && (
        <div
          className="simple-panel-content"
          style={{ backgroundColor: theme.body }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
