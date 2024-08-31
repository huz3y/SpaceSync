import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useConfirmBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: confirmBooking, isLoading: isConfirming } = useMutation({
    mutationFn: ({ bookingId }) =>
      updateBooking(bookingId, {
        status: "booked",
        paid: true,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully confirmed`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      navigate("/");
    },

    onError: () =>
      toast.error("There was an error while confirming the booking"),
  });

  return { confirmBooking, isConfirming };
}
