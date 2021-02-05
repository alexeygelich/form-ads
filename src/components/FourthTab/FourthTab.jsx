import React, { useContext } from "react";
import { Context } from "../../context";
import { InputGroup, Label, InputGroupText, Input, Form } from "reactstrap";
import ModalWindow from "../ModalWindow";

export default function FourthTab() {
  const { setFormData } = useContext(Context);

  const handleChange = ({ target }) => {
    target.name === "service 1" && setFormData((prevState) => ({ ...prevState, service1: !prevState.service1 }));
    target.name === "service 2" && setFormData((prevState) => ({ ...prevState, service2: !prevState.service2 }));
    target.name === "service 3" && setFormData((prevState) => ({ ...prevState, service3: !prevState.service3 }));
    target.name === "service 4" && setFormData((prevState) => ({ ...prevState, service4: !prevState.service4 }));
    target.name === "service 5" && setFormData((prevState) => ({ ...prevState, service5: !prevState.service5 }));
  };

  return (
    <Form>
      <InputGroup className="mb-1 mt-3">
        <InputGroupText className="w-100">
          <Label>
            <Input
              className="mr-3"
              addon
              type="checkbox"
              name="service 1"
              value={setFormData.service1}
              onChange={handleChange}
            />
            Услуга 1
          </Label>
        </InputGroupText>
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroupText className="w-100">
          <Label>
            <Input
              className="mr-3"
              addon
              type="checkbox"
              name="service 2"
              value={setFormData.service2}
              onChange={handleChange}
            />
            Услуга 2
          </Label>
        </InputGroupText>
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroupText className="w-100">
          <Label>
            <Input
              className="mr-3"
              addon
              type="checkbox"
              name="service 3"
              value={setFormData.service3}
              onChange={handleChange}
            />
            Услуга 3
          </Label>
        </InputGroupText>
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroupText className="w-100">
          <Label>
            <Input
              className="mr-3"
              addon
              type="checkbox"
              name="service 4"
              value={setFormData.service4}
              onChange={handleChange}
            />
            Услуга 4
          </Label>
        </InputGroupText>
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroupText className="w-100">
          <Label>
            <Input
              className="mr-3"
              addon
              type="checkbox"
              name="service 5"
              value={setFormData.service5}
              onChange={handleChange}
            />
            Услуга 5
          </Label>
        </InputGroupText>
      </InputGroup>
      <ModalWindow />
    </Form>
  );
}
