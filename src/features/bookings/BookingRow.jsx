import { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { format, isToday } from "date-fns";
import Tag from "../../ui/Tag";
import { formatCurrency } from "../../utils/convertCurrency";
import { formatDistanceFromNow } from "../../utils/formatDistanceFromNow";
import { useNavigate } from "react-router-dom";
import { useComplete } from "../create-booking/useComplete";
import Button from "../../ui/Button";

function BookingRow({
  booking: {
    id,
    date,
    hour,
    num_people,
    price,
    status,
    clients = {},
    spaces = {},
  },
}) {
  const { full_name: clientName = "Unknown Client", email = "No Email" } =
    clients;
  const { name: spaceName = "Unknown Space" } = spaces;

  const { complete } = useComplete();
  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: "silver",
    completed: "green",
    booked: "blue",
    default: "grey",
  };

  const parsedDate = useMemo(() => {
    return date ? new Date(date) : null;
  }, [date]);
  const isValidDate = parsedDate instanceof Date && !isNaN(parsedDate);

  const formattedDate = isValidDate
    ? format(parsedDate, "MMM dd yyyy")
    : "Invalid date";
  const formattedTime = isValidDate
    ? format(parsedDate, "hh:mm a")
    : "Invalid time";

  const displayStatus =
    typeof status === "string" ? status.replace("-", " ") : "Unknown";

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const bookingEndTime = new Date(
        parsedDate.getTime() + hour * 60 * 60 * 1000
      );

      if (currentTime > bookingEndTime && status !== "completed") {
        complete(id);
      }
    }, 3600000);

    return () => clearInterval(interval);
  }, [parsedDate, hour, id, status, complete]);

  return (
    <div className="booking-row">
      <div className="booking-row__space">{spaceName}</div>

      <div className="booking-row__client">
        <span>
          {clientName} and {num_people - 1}{" "}
          {num_people - 1 === 1 ? "person" : "people"}
        </span>
        <span>{email}</span>
      </div>

      <div className="booking-row__info">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
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
        <Button type="primary" onClick={() => navigate(`/bookings/${id}`)}>
          Details
        </Button>
      </div>
    </div>
  );
}

BookingRow.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
