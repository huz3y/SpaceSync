import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useComplete() {
  const queryClient = useQueryClient();

  const { mutate: complete, isLoading: isCompleting } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "completed",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} marked as completed!`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },

    onError: () => toast.error("Error occurred while attempting status update"),
  });

  return { complete, isCompleting };
}
