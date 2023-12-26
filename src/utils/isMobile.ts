const isMobile = () => {
  const maxTouchPoints = navigator.maxTouchPoints > 0;
  const userAgent = /Android|iPhone/i.test(navigator.userAgent);
  const smallBreakPoint = innerWidth <= 576;
  return maxTouchPoints || userAgent || smallBreakPoint;
};

export default isMobile;
