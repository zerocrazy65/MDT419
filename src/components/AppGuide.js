import {Card,Button} from 'react-bootstrap';
import  './AppGuide.css'

function AppGuide(){
    return(
        <div className='Guide'>
            <div className='Card_Guide'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>Mechanical Keyboard Guide</Card.Title>
                    <Card.Text>
                    Enjoy with custom keyboard knowless.
                    </Card.Text>
                    <Button href="#MKG" variant="dark">Go to check</Button>
                    </Card.Body>
                </Card>
                
            </div>
        </div>
    );
}

export default AppGuide;