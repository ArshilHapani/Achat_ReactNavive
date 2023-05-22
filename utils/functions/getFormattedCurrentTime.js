export const getCurrentTime = () => {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  const isAM = hours < 12;

  // Convert to 12-hour format
  if (hours > 12) {
    hours -= 12;
  }

  // Add leading zero if necessary
  hours = padNumber(hours);
  minutes = padNumber(minutes);

  // Determine A.M. or P.M.
  const meridiem = isAM ? "A.M." : "P.M.";

  // Concatenate the time components
  const currentTime = `${hours}:${minutes} ${meridiem}`;

  return currentTime;
};

const padNumber = (number) => {
  return number.toString().padStart(2, "0");
};
