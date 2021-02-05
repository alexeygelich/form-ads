import React, { useContext } from "react";
import { Context } from "../../context";
import { Form, FormGroup, Label, Input, Media } from "reactstrap";

export default function ThirdTab() {
  const {
    formData: { photo },
    setFormData,
  } = useContext(Context);

  const handleChange = ({ target }) => {
    const filesObj = target.files;
    const filesToArr = Object.values(filesObj);
    filesToArr.splice(5, filesToArr.length);
    const filesToState = filesToArr.map((file) => URL.createObjectURL(file));
    setFormData((prevState) => ({ ...prevState, photo: filesToState }));
  };

  return (
    <Form className="mt-3">
      <FormGroup>
        <Label>
          Добавить Фото
          <Input type="file" onChange={handleChange} multiple accept=".png, .jpg, .jpeg" />
        </Label>
        {!!photo.length && (
          <>
            {photo.map((file) => (
              <Media
                className="mb-3 border border-secondary rounded"
                key={file}
                src={file}
                alt=""
                width="100%"
                height="150"
              />
            ))}
          </>
        )}
      </FormGroup>
    </Form>
  );
}
