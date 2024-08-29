import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../../services/apiSettings";

export function useSettings() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { data, isLoading, error };
}
