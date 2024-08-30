import PropTypes from "prop-types";
import { format, isToday } from "date-fns";
import Tag from "../../ui/Tag";
import { formatCurrency } from "../../utils/convertCurrency";
import { formatDistanceFromNow } from "../../utils/formatDistanceFromNow";

function BookingRow({
  booking: { date, hour, num_people, price, status, clients = {}, spaces = {} },
}) {
  const { full_name: clientName = "Unknown Client", email = "No Email" } =
    clients;
  const { name: spaceName = "Unknown Space" } = spaces;

  const statusToTagName = {
    unconfirmed: "silver",
    completed: "green",
    booked: "blue",
    default: "grey",
  };

  const parsedDate = date ? new Date(date) : null;
  const isValidDate = parsedDate instanceof Date && !isNaN(parsedDate);

  const formattedDate = isValidDate
    ? format(parsedDate, "MMM dd yyyy")
    : "Invalid date";
  const formattedTime = isValidDate
    ? format(parsedDate, "hh:mm a")
    : "Invalid time";

  // Ensure status is a valid string before calling replace
  const displayStatus =
    typeof status === "string" ? status.replace("-", " ") : "Unknown";

  return (
    <div className="booking-row">
      <div className="booking-row__space">{spaceName}</div>

      <div className="booking-row__client">
        <span>{clientName}</span>
        <span>{email}</span>
      </div>

      <div className="booking-row__info">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
        <span>{num_people} people</span>
      </div>
      <div className="booking-row__info">
        <span>
          {isValidDate && isToday(parsedDate)
            ? "Today"
            : formatDistanceFromNow(parsedDate)}
        </span>
        <span>
          for {hour} hour{hour > 1 ? "s" : ""}
        </span>
      </div>

      <Tag type={statusToTagName[status] || "default"}>{displayStatus}</Tag>

      <div className="booking-row__amount">{formatCurrency(price)}</div>

      <div>
        <button className="button button--primary">Details</button>
      </div>
    </div>
  );
}

BookingRow.propTypes = {
  booking: PropTypes.shape({
    date: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    num_people: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    clients: PropTypes.shape({
      full_name: PropTypes.string,
      email: PropTypes.string,
    }),
    spaces: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default BookingRow;
