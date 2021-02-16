import React, { useContext, useState } from "react";
import { Context } from "../../context";
import { Form, FormGroup, Input, Media, Button } from "reactstrap";

export default function ThirdTab() {
  const {
    formData: { photo },
    setFormData,
  } = useContext(Context);
  const [idElement, setidElement] = useState("");

  const handleBtnClick = () => {
    const input = document.querySelector(".d-none");
    input.click();
  };

  const handleChange = ({ target }) => {
    const filesObj = target.files;
    const filesToArr = Object.values(filesObj);
    filesToArr.splice(5 - photo.length, filesToArr.length);
    const filesToState = filesToArr.map((file) => URL.createObjectURL(file));
    setFormData((prevState) => ({ ...prevState, photo: [...prevState.photo, ...filesToState] }));
  };

  const handleDeleteImg = ({ target }) => {
    const idElement = target.dataset.id;
    const newPhoto = photo.filter((id) => id !== idElement);
    setFormData((prevState) => ({ ...prevState, photo: newPhoto }));
  };

  const handleHoverImg = ({ target }) => {
    const elId = target.src || target.dataset.id;
    setidElement(elId);
  };

  const handleLeaveImg = () => setidElement("");

  return (
    <Form className="mt-3">
      <FormGroup>
        <Input className="d-none" type="file" onChange={handleChange} multiple accept=".png, .jpg, .jpeg" />
        {photo.length < 5 && (
          <Button className="mb-3" onClick={handleBtnClick}>
            Добавить фото
          </Button>
        )}
        {!!photo.length && (
          <>
            {photo.map((file) => (
              <div key={file} className="position-relative mb-3">
                <Button
                  className={file === idElement ? "position-absolute top-10" : "d-none"}
                  onMouseOver={handleHoverImg}
                  onMouseLeave={handleLeaveImg}
                  onClick={handleDeleteImg}
                  data-id={file}
                >
                  удалить
                </Button>
                <Media
                  className="border border-secondary rounded"
                  onMouseOver={handleHoverImg}
                  onMouseLeave={handleLeaveImg}
                  src={file}
                  alt=""
                  width="350"
                  height="auto"
                />
              </div>
            ))}
          </>
        )}
      </FormGroup>
    </Form>
  );
}
