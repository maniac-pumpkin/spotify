const greeting = () => {
  const hour = new Date().getHours();
  const isMorning = hour >= 0 && hour < 12;
  const isAfternoon = hour >= 12 && hour < 18;
  const isEvening = hour >= 18 && hour < 22;
  const isNight = hour >= 22 && hour < 0;
  return isMorning
    ? "Good morning"
    : isAfternoon
      ? "Good afternoon"
      : isEvening
        ? "Good evening"
        : isNight
          ? "Good night"
          : "Welcome";
};

export default greeting;
