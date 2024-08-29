import { useQuery } from "@tanstack/react-query";
import { getSpaces } from "../../../services/apiSpaces";

export function useSpaces() {
  const {
    isPending,
    data: spaces,
    error,
  } = useQuery({
    queryKey: ["spaces"],
    queryFn: getSpaces,
  });
  return { isPending, spaces, error };
}
