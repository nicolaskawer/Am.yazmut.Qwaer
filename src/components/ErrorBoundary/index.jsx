import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log to console in dev; swap for a real logger (Sentry etc.) in prod
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#0c0c0c",
            color: "#f0f0f0",
            textAlign: "center",
            padding: "2rem",
            direction: "rtl",
            fontFamily: "Heebo, Arial, sans-serif",
          }}
        >
          <h1 style={{ color: "#ffaa00", fontSize: "2rem", marginBottom: "1rem" }}>
            אירעה שגיאה
          </h1>
          <p style={{ color: "#888", maxWidth: "480px", lineHeight: 1.8 }}>
            משהו השתבש. אנא רעננו את הדף או חזרו מאוחר יותר.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1.5rem",
              padding: "0.7rem 1.6rem",
              background: "#ffaa00",
              color: "#000",
              border: "none",
              borderRadius: "6px",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            רענן דף
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
