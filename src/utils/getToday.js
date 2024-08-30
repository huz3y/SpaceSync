export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) {
    today.setHours(23, 59, 59, 999);
  } else if (options?.start) {
    today.setHours(0, 0, 0, 0);
  } else if (options?.currentHour) {
    today.setMinutes(0, 0, 0);
  }

  return today.toISOString();
};
