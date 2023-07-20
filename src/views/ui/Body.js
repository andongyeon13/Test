import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
} from "reactstrap";

import React, { useState } from "react";

import { CSSTransition } from "react-transition-group";
import Image from "../../components/dashboard/Image";
import body1 from "../../assets/images/bg/base.png";
import cdh from "../../assets/images/bg/cdh.png";
import orai from "../../assets/images/bg/orai.png";
import cacna from "../../assets/images/bg/cacna.png";
import cacnad from "../../assets/images/bg/cacna2d.png";
import atp from "../../assets/images/bg/atp.png";
import cacnb from "../../assets/images/bg/cacnb.png";

const Body = () => {

  const [selectedImage, setSelectedImage] = useState(body1); // Initial image is body1

  const handleButtonClick = (image) => {
  console.log("Selected Image:", image);
    setSelectedImage(image);

  };

  return (
  <Card>
    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
      <i className="bi bi-bell me-2"> </i>
        Body Diagram
    </CardTitle>
    <CardBody className="">
        <Row>
          <div className="d-flex align-items-center" >
          <Col xxl="9">
          <CSSTransition in={true} appear={true} timeout={1500} classNames="fade">
                <div>
                  <Image image={selectedImage} style={{ height: '100vh'}}/>
                </div>
          </CSSTransition>

          </Col>
          <Col xxl="3">
            <Alert color="primary" style={{ height: '140vh' }}>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
                    <Button className="btn" color="primary" style={{ width: '30vh', fontSize: '20px' }} onClick={() => handleButtonClick(cdh)}>
                        CDH1
                    </Button>
                    <br/>
                    <Button className="btn" color="primary" style={{ width: '30vh', fontSize: '20px' }} onClick={() => handleButtonClick(orai)}>
                        ORAI1
                    </Button>
                    <br/>
                    <Button className="btn" color="primary" style={{ width: '30vh', fontSize: '20px' }} onClick={() => handleButtonClick(cacna)}>
                        CACNA1
                    </Button>
                    <br/>
                    <Button className="btn" color="primary" style={{ width: '30vh', fontSize: '20px' }} onClick={() => handleButtonClick(cacnad)}>
                        CACNA2D1
                    </Button>
                    <br/>
                    <Button className="btn" color="primary" style={{ width: '30vh', fontSize: '20px' }} onClick={() => handleButtonClick(atp)}>
                        ATP2B1
                    </Button>
                    <br/>
                    <Button className="btn" color="primary" style={{ width: '30vh', fontSize: '20px' }} onClick={() => handleButtonClick(cacnb)}>
                        CACNB1
                    </Button>
                </div>
            </Alert>
          </Col>
          </div>
      </Row>

    </CardBody>
  </Card>
  );
};

export default Body;
