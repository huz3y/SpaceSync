import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";

function Settings() {
  return (
    <div className="row--vertical">
      <Heading>
        <h1>Update settings</h1>
      </Heading>
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
