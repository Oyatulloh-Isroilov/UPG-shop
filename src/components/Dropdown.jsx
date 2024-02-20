import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample({ setSelectedRating }) {
    const handleSelect = (eventKey) => {
        setSelectedRating(eventKey);
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Reyting
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="">Barchasi</Dropdown.Item>
                <Dropdown.Item eventKey="3">3 reytingli</Dropdown.Item>
                <Dropdown.Item eventKey="4">4 reytingli</Dropdown.Item>
                <Dropdown.Item eventKey="5">5 reytingli</Dropdown.Item>
                <Dropdown.Item eventKey="6">6 reytingli</Dropdown.Item>
                <Dropdown.Item eventKey="7">7 reytingli</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicExample;