// converting minutes in  format of hours and minutes.

const minuteToHour = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours} hours and ${remainingMinutes} minutes`;
};

export default minuteToHour;



