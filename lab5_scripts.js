const time_now = () => {
  const dateElement = document.getElementById("currentDate");
  const timeElement = document.getElementById("currentTime");

  const today = new Date();

  dateElement.textContent =
    "Today is " +
    today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    ", " +
    today.toLocaleDateString("en-US", {
      weekday: "long",
    });

  timeElement.textContent =
    "The current time is " +
    today.toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    });
};
