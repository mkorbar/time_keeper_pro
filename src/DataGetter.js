import {useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

function DataGetter({form_data, set_form_data}) {
  const [coworkers, set_coworkers] = useState([]);
  const [start_from, set_start_from] = useState('08:00');
  const [start_to, set_start_to] = useState('09:00');
  const [end_from, set_end_from] = useState('16:00');
  const [end_to, set_end_to] = useState('17:00');
  const [buttonDisabled, setButtonDisabled] = useState(true);


  function generate(e){
    e.preventDefault();
    set_form_data({coworkers, start_from, start_to, end_from, end_to})
  }


  return (
      <Form action='parseForm'>
        <Row className='mt-3'>
          <Col>
            <Form.Control as='textarea' rows='10' cols='50' defaultValue='Vpiši imena sodelavcev, ločenih z vejico' onChange={(e) => {set_coworkers(e.target.value.split(',')); setButtonDisabled(false) }}></Form.Control>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <h3>Začetek delovnika</h3>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <Form.Label>Od</Form.Label>
            <Form.Control name='start-from' type='time' defaultValue='08:00' onChange={e => set_start_from(e.target.value)} />
          </Col>
          <Col>
            <Form.Label>Do</Form.Label>
            <Form.Control name='start-to' type='time' defaultValue='09:00' onChange={e => set_start_to(e.target.value)} />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <h3>Konec delovnika</h3>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <Form.Label>Od</Form.Label>
            <Form.Control name='end-from' type='time' defaultValue='16:00' onChange={e => set_end_from(e.target.value)} />
          </Col>
          <Col>
            <Form.Label>Do</Form.Label>
            <Form.Control name='end-to' type='time' defaultValue='17:00' onChange={e => set_end_to(e.target.value)} />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <Button disabled={buttonDisabled} onClick={generate}>Generiraj ure</Button>
          </Col>
        </Row>
      </Form>
  );
}

export default DataGetter;
