import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../context";
import { Nav, NavItem, NavLink, Button, ButtonGroup } from "reactstrap";
import classnames from "classnames";

export default function TabContainer({ children }) {
  const {
    formData: { title, phone },
    activeTab,
    setActiveTab,
    setAlert,
    setModal,
  } = useContext(Context);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      if (title && tab === 2) {
        return setActiveTab(tab);
      }
      if (title && !phone && tab === 1) {
        setAlert(false);
        return setActiveTab(tab);
      }
      if (title && phone) {
        return setActiveTab(tab);
      }
      if (title && !phone) {
        setAlert(true);
        return setActiveTab(2);
      }
      setAlert(true);
    }
  };

  const handleBtnClick = ({ target }) => {
    if (target.name === "Next") {
      if (title && phone) {
        return setActiveTab((prevState) => prevState + 1);
      }
      if (!title) {
        setActiveTab(1);
        return setAlert(true);
      }
      if (title && !phone && activeTab === 2) {
        return setAlert(true);
      }
      setActiveTab((prevState) => prevState + 1);
    }
    if (target.name === "Prev") {
      setAlert(false);
      setActiveTab((prevState) => prevState - 1);
    }
    if (target.name === "Save") {
      setModal(true);
    }
  };

  return (
    <div className="mx-auto w-25">
      <Nav tabs className="mt-5">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 1 })}
            onClick={() => {
              toggle(1);
            }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 2 })}
            onClick={() => {
              toggle(2);
            }}
          >
            Tab2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 3 })}
            onClick={() => {
              toggle(3);
            }}
          >
            Tab3
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 4 })}
            onClick={() => {
              toggle(4);
            }}
          >
            Tab4
          </NavLink>
        </NavItem>
      </Nav>
      {children}
      <ButtonGroup className="w-100">
        {activeTab > 1 && (
          <Button color="warning" name="Prev" onClick={handleBtnClick}>
            Prev
          </Button>
        )}
        <Button color="success" name={activeTab < 4 ? "Next" : "Save"} onClick={handleBtnClick}>
          {activeTab < 4 ? "Next" : "Save"}
        </Button>
      </ButtonGroup>
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
