import { useQuery } from "@tanstack/react-query";
import { getSpaces } from "../../../services/apiSpaces";
import Spinner from "../../ui/Spinner";
import SpaceRow from "./SpaceRow";

function SpaceTable() {
  const {
    isPending,
    data: spaces,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["spaces"],
    queryFn: getSpaces,
  });

  console.log({ isPending, isLoading, isSuccess, isError });

  if (isPending) return <Spinner />;
  if (error) return <div>Spaces failed to load</div>;

  return (
    <div className="SpaceTable">
      <header className="SpaceTable__header">
        <div>Space</div>
        <div>Capacity</div>
        <div>Features</div>
        <div>Price/Hour</div>
        <div></div>
      </header>
      {spaces.map((space) => (
        <SpaceRow key={space.id} space={space} />
      ))}
    </div>
  );
}

export default SpaceTable;
