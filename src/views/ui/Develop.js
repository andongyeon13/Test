import React, { useState } from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import ProjectTables from "../../components/dashboard/ProjectTable";
import Feeds from "../../components/dashboard/Feeds";

const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Developers
        </CardTitle>
        <CardBody className="">
              <Row>
            <Col xxl="12">
              <ProjectTables />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Alerts;
