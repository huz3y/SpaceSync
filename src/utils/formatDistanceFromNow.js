import { formatDistance, parseISO, format } from "date-fns";

export const formatDistanceFromNow = (dateStr) => {
  if (!dateStr) return "Invalid date";

  try {
    const date = typeof dateStr === "string" ? parseISO(dateStr) : dateStr;
    const now = new Date();

    if (format(date, "yyyy-MM-dd") === format(now, "yyyy-MM-dd")) {
      return `In ${formatDistance(date, now)}`;
    }

    return formatDistance(date, now, { addSuffix: true })
      .replace("about ", "")
      .replace("in", "In")
      .replace("ago", "ago");
  } catch (error) {
    console.error("Error parsing date:", error);
    return "Invalid date";
  }
};
