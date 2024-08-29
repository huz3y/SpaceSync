import Spinner from "../../ui/Spinner";
import SpaceRow from "./SpaceRow";
import Table from "../../ui/Table";
import { useSpaces } from "./useSpaces";

function SpaceTable() {
  const { isPending, spaces, error } = useSpaces();

  if (isPending) return <Spinner />;
  if (error) return <div>Spaces failed to load</div>;

  return (
    <Table columns="2fr 1fr 2fr 1fr 1fr">
      <Table.Header>
        <div>Space</div>
        <div>Capacity</div>
        <div>Features</div>
        <div>Price/Hour</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={spaces}
        render={(space) => <SpaceRow key={space.id} space={space} />}
      />
    </Table>
  );
}

export default SpaceTable;
