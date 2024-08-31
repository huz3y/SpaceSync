import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/convertCurrency";
import { useBooking } from "../bookings/useBooking";
import { useConfirmBooking } from "./useConfirmBooking";

function ConfirmBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { booking, isLoading } = useBooking();
  const { confirmBooking, isConfirming } = useConfirmBooking();
  const navigate = useNavigate();

  useEffect(() => setConfirmPaid(booking?.paid ?? false), [booking]);

  if (isLoading) return <Spinner />;

  const { id: bookingId, clients, price, /* num_people, */ paid } = booking;

  function handleConfirm() {
    if (!confirmPaid) return;
    confirmBooking({ bookingId });
  }

  return (
    <div className="confirm-booking">
      <div className="confirm-booking__header">
        <Heading>
          <h1>Confirm booking #{bookingId}</h1>
        </Heading>
        <ButtonText onClick={() => navigate(-1)}>&larr; Back</ButtonText>
      </div>

      <BookingDataBox booking={booking} />

      <div className="confirm-booking__box">
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid(!confirmPaid)}
          disabled={paid || isConfirming}
          id="confirm"
        >
          I confirm that {clients.full_name} has paid the total amount of{" "}
          {formatCurrency(price)}
        </Checkbox>
      </div>

      <div className="confirm-booking__button-group">
        <Button onClick={handleConfirm} disabled={!confirmPaid || isConfirming}>
          Confirm booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default ConfirmBooking;
