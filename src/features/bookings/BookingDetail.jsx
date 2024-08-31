import BookingDataBox from "./BookingDataBox";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./useBooking";
import { useDeleteBooking } from "./useDeleteBooking";

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { isDeleting, deleteBooking } = useDeleteBooking();
  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: "silver",
    booked: "blue",
    completed: "green",
  };

  if (isLoading) return <Spinner />;
  if (!booking) return <p className="message">Booking details not found</p>;

  const { id, status } = booking;

  const handleDelete = () => {
    const confirmDeletion = window.confirm(
      "Are you sure you want to delete this booking? This action cannot be undone."
    );
    if (confirmDeletion) {
      deleteBooking(id);
      navigate("/bookings");
    }
  };

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
        <Button variation="danger" onClick={handleDelete} disabled={isDeleting}>
          Delete Booking
        </Button>
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
