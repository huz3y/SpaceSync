import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteSpace } from "../../../services/apiSpaces";

export function useDeleteSpace() {
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: deleteSpace,
    onSuccess: () => {
      toast.success("The Space was deleted 😊");
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isPending, mutate };
}
