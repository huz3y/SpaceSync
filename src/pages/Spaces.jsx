import { useState } from "react";
import SpaceTable from "../features/spaces/SpaceTable";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import CreateSpaceForm from "../features/spaces/CreateSpaceForm";

function Spaces() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = () => {
    if (!isFormVisible) setIsFormVisible(true);
  };

  const closeForm = () => {
    if (isFormVisible) setIsFormVisible(false);
  };

  return (
    <>
      <Heading>
        <h1>Spaces</h1>
      </Heading>
      <div className="row--vertical">
        <SpaceTable />
        <Button onClick={openForm}>Create new Space</Button>
        {isFormVisible && <CreateSpaceForm onToggle={closeForm} />}
      </div>
    </>
  );
}

export default Spaces;
