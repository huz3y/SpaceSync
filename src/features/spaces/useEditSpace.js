import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { mutateSpace } from "../../services/apiSpaces";

export function useEditSpace() {
  const queryClient = useQueryClient();
  const { mutate: editSpace, isPending: isEditing } = useMutation({
    mutationFn: ({ newSpace, id }) => mutateSpace(newSpace, id),
    onSuccess: () => {
      toast.success("Your space has been updated! 🌟");
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { editSpace, isEditing };
}
