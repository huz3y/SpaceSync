import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";

function CreateSpaceForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="form__row">
        <label className="form__label" htmlFor="name">
          Space name
        </label>
        <Input type="text" id="name" {...register("name")} />
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="max_capacity">
          Maximum capacity
        </label>
        <Input type="number" id="max_capacity" {...register("max_capacity")} />
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="unique_features">
          Features
        </label>
        <Textarea
          id="unique_features"
          {...register("unique_features")}
          placeholder="Describe the features"
        />
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="price">
          Price
        </label>
        <Input type="number" id="price" {...register("price")} />
      </div>

      <div className="form__row form__row--button">
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button type="submit">Add space</Button>
      </div>
    </Form>
  );
}

export default CreateSpaceForm;
