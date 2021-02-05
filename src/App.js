import React, { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { Context } from "./context";

import TabContainer from "./components/TabContainer";
import FiresTab from "./components/FirstTab";
import SecondTab from "./components/SecondTab";
import ThirdTab from "./components/ThirdTab";
import FourthTab from "./components/FourthTab";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [alert, setAlert] = useState(false);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    checkbox: false,
    phone: "",
    email: "",
    photo: [],
    service1: false,
    service2: false,
    service3: false,
    service4: false,
    service5: false,
  });

  return (
    <Context.Provider value={{ formData, setFormData, alert, setAlert, activeTab, setActiveTab, modal, setModal }}>
      <TabContainer>
        <TabContent activeTab={`${activeTab}`}>
          <TabPane tabId="1">
            <FiresTab />
          </TabPane>
          <TabPane tabId="2">
            <SecondTab />
          </TabPane>
          <TabPane tabId="3">
            <ThirdTab />
          </TabPane>
          <TabPane tabId="4">
            <FourthTab />
          </TabPane>
        </TabContent>
      </TabContainer>
    </Context.Provider>
  );
}

export default App;
