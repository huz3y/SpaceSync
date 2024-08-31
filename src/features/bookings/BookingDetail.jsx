import BookingDataBox from "./BookingDataBox";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./useBooking";

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: "silver",
    booked: "blue",
    completed: "green",
  };
  if (isLoading) return <Spinner />;
  if (!booking) return <p className="message">Booking details not found</p>;

  const { id, status } = booking;

  return (
    <>
      <div className="booking-detail-row row--horizontal">
        <div className="booking-detail-heading-group">
          <Heading>
            <h1>Booking #{id || "Unknown"}</h1>
          </Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </div>
      </div>

      <BookingDataBox booking={booking} />
      <ButtonGroup className="booking-detail-button-group">
        <Button variation="secondary" extra="back" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button variation="danger">Delete Booking</Button>
        <Button
          variation="primary"
          disabled={status !== "unconfirmed"}
          onClick={() => navigate(`/bookings/create-booking/${id}`)}
        >
          Create Booking
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
