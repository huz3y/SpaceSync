import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import { useBookings } from "./useBookings";

function BookingTable() {
  const { bookings, isLoading } = useBookings();
  console.log(bookings);

  if (isLoading) return <Spinner />;

  if (!bookings.length) {
    return (
      <div className="message">
        Looks like we don’t have any bookings at the moment. Check back later 😊
      </div>
    );
  }

  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Space</div>
          <div>Client</div>
          <div>Booking Info</div>
          <div>Duration</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
