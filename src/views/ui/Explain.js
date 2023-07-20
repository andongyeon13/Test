import React, { useState } from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import Image from "../../components/dashboard/Image";

import down from "../../assets/images/bg/down.png";

const Explain = () => {
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
          Data Sheet
        </CardTitle>
        <CardBody className="">
        <Image image={down} />
          <div className="mt-3">
            <Alert color="primary">
              Data Sheet{' '}
              <a href="https://drive.google.com/file/d/1N-rZ-0kqUpp08Sq1xaSrTA763LLc8V4U/view?usp=sharing" className="alert-link">
                Download link
              </a>
              . Give it a click if you like.
            </Alert>

          </div>
        </CardBody>
      </Card>
      </div>
  );
};

export default Explain;
