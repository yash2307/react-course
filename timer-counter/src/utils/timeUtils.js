export const convertToSeconds = (h, m, s) => {
  const total = Number(h || 0) * 3600 + Number(m || 0) * 60 + Number(s || 0);
  return total;
};

export const convertToHMS = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds };
};

export const formatTime = (value) => {
  return value < 10 ? `0${value}` : value;
};