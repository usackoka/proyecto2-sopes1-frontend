import React, { Fragment, useState, useEffect } from "react";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";

const Index = (props) => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const getData = async () => {
    };

    if (!formData.llenado) {
      getData();
    }
  }, []);

  return (
    <Fragment>
    </Fragment>
  );
};

export default Index;
