import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { mutateSpace } from "../../services/apiSpaces";

export function useCreateSpace() {
  const queryClient = useQueryClient();

  const { mutate: createSpace, isPending: isAdding } = useMutation({
    mutationFn: mutateSpace,
    onSuccess: () => {
      toast.success("A new Space has been added for you 😊");
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createSpace, isAdding };
}
