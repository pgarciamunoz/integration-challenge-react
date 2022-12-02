import { useNavigate } from "react-router"
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { post } from '../services/api';

function BasicExample() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userResponse = await post({

        customerId: "dummy",
        action: "getScore",
        customerSessionId: "jgh875wdwlv0skue63",
        activityType: "MAKE_PAYMENT",
        uuid: "tdfvhewdwd",
        brand: "SD",
        solution: "ATO"

      });
      console.log("User Response", userResponse);
      navigate("/homeview")
      //window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Form className="form payment">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Recepient</Form.Label>
        <Form.Control type="text" placeholder="Recepient" />
      </Form.Group>

      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree to terms and services" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;