import { ReactNode, Component } from "react";

type TerrorBoundaryProps = {
  fallback: ReactNode;
  children: ReactNode;
};

class ErrorBoundary extends Component<TerrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
