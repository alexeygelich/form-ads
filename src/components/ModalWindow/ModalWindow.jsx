import React, { useContext } from "react";
import { Context } from "../../context";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Media } from "reactstrap";

export default function ModalWindow() {
  const {
    formData: { title, desc, checkbox, phone, email, photo, service1, service2, service3, service4, service5 },
    modal,
    setModal,
  } = useContext(Context);

  const closeModal = () => setModal(false);

  return (
    <Modal isOpen={modal} toggle={closeModal}>
      <ModalHeader toggle={closeModal}>Ваше объявление</ModalHeader>
      <ModalBody>
        <ListGroup>
          <ListGroupItem>Название: {title}</ListGroupItem>
          <ListGroupItem>Номер телефона: {phone}</ListGroupItem>
          <ListGroupItem>Чекбокс: {!!checkbox ? "ON" : "OFF"}</ListGroupItem>
          {!!email && <ListGroupItem>email: {email}</ListGroupItem>}
          {!!desc && <ListGroupItem>Описание: {desc}</ListGroupItem>}
          {!!photo && (
            <ListGroupItem className="d-flex flex-wrap justify-content-center">
              {photo.map((file) => (
                <Media
                  className="ml-3 mb-3 border border-secondary rounded"
                  key={file}
                  src={file}
                  alt=""
                  width="100"
                  height="100"
                />
              ))}
            </ListGroupItem>
          )}
          {!!service1 && <ListGroupItem>Услуга 1</ListGroupItem>}
          {!!service2 && <ListGroupItem>Услуга 2</ListGroupItem>}
          {!!service3 && <ListGroupItem>Услуга 3</ListGroupItem>}
          {!!service4 && <ListGroupItem>Услуга 4</ListGroupItem>}
          {!!service5 && <ListGroupItem>Услуга 5</ListGroupItem>}
        </ListGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={closeModal}>
          Закрыть
        </Button>
      </ModalFooter>
    </Modal>
  );
}
