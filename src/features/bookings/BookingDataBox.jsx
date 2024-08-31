import PropTypes from "prop-types";
import {
  HiOutlineUser,
  HiOutlineCalendarDays,
  HiOutlineClock,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/convertCurrency";

function BookingDataBox({ booking }) {
  const {
    date,
    hour,
    num_people,
    price,
    paid,
    clients: { full_name: clientName, email, national_id },
    spaces: { name: spaceName, unique_features },
  } = booking;

  const bookingDateTime = new Date(date);
  const bookingTime = bookingDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="booking-data-box">
      <header className="booking-data-box__header">
        <div className="booking-data-box__details">
          <HiOutlineUser />
          <p>
            {num_people} {num_people < 2 ? "person" : "people"} in:{" "}
            <span>{spaceName}</span>
          </p>
        </div>

        <div className="booking-data-box__datetime">
          <div className="booking-data-box__datetime-item">
            <HiOutlineCalendarDays />
            <span>{bookingDateTime.toLocaleDateString()}</span>
          </div>
          <div className="booking-data-box__datetime-item">
            <HiOutlineClock />
            <span>{bookingTime}</span>
          </div>
        </div>
      </header>

      <section className="booking-data-box__section">
        <div className="booking-data-box__client">
          <p>{clientName}</p>
          <span>-</span>
          <p>{email}</p>
          <span>-</span>
          <p>National ID: {national_id}</p>
        </div>

        <div className="booking-data-box__features">
          {unique_features.split(", ").map((feature, index) => (
            <div className="feature" key={index}>
              {feature}
            </div>
          ))}
        </div>

        <div className={`booking-data-box__price ${paid ? "paid" : "pending"}`}>
          <p style={{ fontWeight: "500" }}>
            Total price: {formatCurrency(price)}
          </p>
          <p>{paid ? "Paid" : "Pending payment"}</p>
        </div>
      </section>

      <footer className="booking-data-box__footer">
        <p>Booking duration: {hour} hours</p>
      </footer>
    </section>
  );
}

BookingDataBox.propTypes = {
  booking: PropTypes.shape({
    date: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    num_people: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    paid: PropTypes.bool.isRequired,
    clients: PropTypes.shape({
      full_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      national_id: PropTypes.string.isRequired,
    }).isRequired,
    spaces: PropTypes.shape({
      name: PropTypes.string.isRequired,
      unique_features: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default BookingDataBox;
