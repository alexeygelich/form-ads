import React, { useContext } from "react";
import { Context } from "../../context";
import { Form, FormGroup, Label, Input, InputGroup, InputGroupText } from "reactstrap";

export default function FirstTab() {
  const { formData, setFormData, alert, setAlert } = useContext(Context);

  const handleChange = ({ target }) => {
    if (target.type === "text") {
      setAlert(false);
      setFormData((prevState) => ({ ...prevState, title: target.value }));
    }
    if (target.type === "textarea") {
      setFormData((prevState) => ({ ...prevState, desc: target.value }));
    }
    if (target.type === "checkbox") {
      setFormData((prevState) => ({ ...prevState, checkbox: !prevState.checkbox }));
    }
  };

  return (
    <Form>
      <FormGroup>
        <Label className="w-100 mt-3">
          Заголовок
          <Input type="text" value={formData.title} onChange={handleChange} required />
          {alert && <p className="text-danger">Необходимо заполнить</p>}
        </Label>
        <Label className="w-100">
          Описание
          <Input type="textarea" value={formData.textarea} onChange={handleChange} />
        </Label>
        <InputGroup>
          <InputGroupText>
            <Label className={formData.checkbox ? "text-success" : "text-danger"}>
              <Input
                className="mr-2"
                addon
                type="checkbox"
                name="service 1"
                value={formData.checkbox}
                onChange={handleChange}
              />
              {!!formData.checkbox ? "ON" : "OFF"}
            </Label>
          </InputGroupText>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
