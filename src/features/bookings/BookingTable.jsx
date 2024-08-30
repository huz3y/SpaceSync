import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import { useBookings } from "./useBookings";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

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
      <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 0.5fr">
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
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
