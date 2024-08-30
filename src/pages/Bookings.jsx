import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";

function Bookings() {
  return (
    <>
      <Heading>
        <h1>Bookings</h1>
        <BookingTableOperations />
      </Heading>
      <BookingTable />
    </>
  );
}

export default Bookings;
