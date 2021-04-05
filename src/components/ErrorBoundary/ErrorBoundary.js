import React from "react";

import ReactGA from "react-ga";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: "", error: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    ReactGA.exception({
      description:
        "An error ocurred here: " +
        window.location.href +
        " - " +
        error +
        " - " +
        errorInfo,
      fatal: false,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
