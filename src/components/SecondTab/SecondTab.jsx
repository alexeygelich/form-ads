import React, { useContext } from "react";
import { Context } from "../../context";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function SecondTab() {
  const { formData, setFormData, alert, setAlert } = useContext(Context);

  const handleChange = ({ target }) => {
    if (target.name === "number") {
      setAlert(false);
      setFormData((prevState) => ({ ...prevState, phone: target.value }));
    }
    if (target.name === "email") {
      setFormData((prevState) => ({ ...prevState, email: target.value }));
    }
  };

  return (
    <Form>
      <FormGroup className="mt-3">
        <Label className="w-100">
          Номер телефона
          <Input type="text" name="number" value={formData.phone} onChange={handleChange} />
          {alert && <p className="text-danger">Необходимо заполнить</p>}
        </Label>
        <br />
        <Label className="w-100">
        Почта
          <Input type="text" name="email" value={formData.email} onChange={handleChange} />
        </Label>
      </FormGroup>
    </Form>
  );
}
