// Calculate time to Event
export const calculateTimeToEvent = () => {
  // Event date
  const eventDate = new Date("2023-11-02T09:00:00-07:00");
  // Current date
  const currentDate = new Date();
  // time remaining
  const timeRemaining = eventDate.getTime() - currentDate.getTime();

  // Calculate days, hours, minutes, and seconds from the time remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
