import { Redirect } from "wouter";

function NavigateToHome() {
  return <Redirect to="/" replace />;
}

export default NavigateToHome;
