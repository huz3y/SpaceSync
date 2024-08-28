import SpaceTable from "../features/spaces/SpaceTable";
import Heading from "../ui/Heading";

function Spaces() {
  return (
    <>
      <Heading>
        <h1>Spaces</h1>
        <p>Filter / Sort</p>
      </Heading>
      <div className="row--vertical">
        <SpaceTable />
      </div>
    </>
  );
}

export default Spaces;
