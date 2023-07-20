import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Image = (props) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
    </Card>
  );
};

export default Image;
