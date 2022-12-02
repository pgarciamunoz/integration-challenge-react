import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function HomeView() {
    return (
        <>
        <div className='div-homeview'>
        <div className="div-homeview">
                <h2>Account Overview</h2>
            </div>
            <div>
            <Link to="/payment"><Button variant="outline-primary">
           Make  Payment</Button></Link>

            
            </div>
        </div>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Groceries</td>
                        <td>11/15/2022</td>
                        <td>$89.67</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Clothing</td>
                        <td>11/13/2022</td>
                        <td>$55.00</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Utilities</td>
                        <td>11/01/2022</td>
                        <td>$150.00</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default HomeView;