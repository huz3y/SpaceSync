import { useState } from "react";
import SpaceTable from "../features/spaces/SpaceTable";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import CreateSpaceForm from "../features/spaces/CreateSpaceForm";

function Spaces() {
  const [hideForm, setHideForm] = useState(true);

  return (
    <>
      <Heading>
        <h1>Spaces</h1>
        <p>Filter / Sort</p>
      </Heading>
      <div className="row--vertical">
        <SpaceTable />
        <Button onClick={() => setHideForm(!hideForm)}>Create Space</Button>
        {!hideForm && <CreateSpaceForm />}
      </div>
    </>
  );
}

export default Spaces;
