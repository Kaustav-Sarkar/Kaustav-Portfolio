import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Earth Canvas Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="earth-placeholder">
          <div className="gradient-fallback"></div>
          <div className="loading-indicator error">
            {this.props.fallbackText || "Failed to load 3D content"}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
