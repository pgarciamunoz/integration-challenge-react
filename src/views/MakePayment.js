import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { post } from '../services/api';

function BasicExample() {

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
            //navigate("/homeview")
            //window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Recepient</Form.Label>
        <Form.Control type="text" placeholder="Recepient" />
      </Form.Group>
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