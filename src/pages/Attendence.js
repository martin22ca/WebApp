import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar'
import "../styles/Assistence.css";
import pic1 from "../assets/temp/Abril.10.jpg"
import pic2 from "../assets/temp/tici.7.jpg"
import pic3 from "../assets/temp/cami.7.jpg"
import pic4 from "../assets/temp/Martin.10.jpg"
import pic5 from "../assets/temp/cata.10.jpg"
import pic6 from "../assets/temp/Videla.10.jpg"
import pic7 from "../assets/temp/marti.4.jpg"


function Attendence() {

    const alumni = {
        present: [
            { image: pic1, name: "Nanfara Abril", status: "green" },
            { image: pic2, name: "Cobresi Ticiana", status: "green" },
            { image: pic3, name: "Londero Camila", status: "green" },
            { image: pic7, name: "Martina Ceballos", status: "green" }],
        missing: [
            { image: pic4, name: "Martin Caceres", status: "red" },
            { image: pic5, name: "Catalina Paschini", status: "red" }],
        unknown: [
            { image: pic6, name: "unknown", status: "yellow" },
        ]
    }

    const renderCard = (card, index) => {
        return (
            <>
                < Card key={index} className="card" >
                    <Card.Img src={card.image} className="card_img" style={{ "border-color": card.status }} />
                    <Card.Body className='card_body'>
                        <Card.Title className='card_text'>{card.name}</Card.Title>
                        <Button variant="primary">Detalles</Button>
                    </Card.Body>
                </Card >
            </>
        )
    }

    return (
        <>
            <Navbar />
            <Container fluid className='card_container'>
                <Row>
                    <Col className='card_col'>
                        <div className='card_grid' >{alumni.present.map(renderCard)}</div>
                    </Col>
                    <Col className='card_col'>
                        <div className='card_grid'>{alumni.missing.map(renderCard)} </div>
                    </Col>
                    <Col className='card_col'>
                        <div className='card_grid'>{alumni.unknown.map(renderCard)}</div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Attendence

/*  < Card style = {{ width: '18rem' }} bg = { card.status } key = { index } className = 'card_container' >
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body>
                      <Card.Title>{card.name}</Card.Title>
                      <Button variant="primary">Detalles</Button>
                  </Card.Body>
              </Card >*/