import SpaceTable from "../features/spaces/SpaceTable";

function Spaces() {
  return (
    <>
      <div className="row--horizontal">
        <h1>Spaces</h1>
      </div>
      <div className="row--vertical">
        <SpaceTable />
      </div>
    </>
  );
}

export default Spaces;
