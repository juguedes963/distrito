import React from 'react'
import Carrosel from './carrosel/index'
import { Navbar, Nav, NavDropdown,Card,Accordion,useAccordionToggle } from 'react-bootstrap'
import Logo from '../../../assets/Logo.png'
import "./index.css"
export default function Header() {
    let conteudoButtons=['Home','Curiosidade','Produtos','Login',"Admistração"]
  
    return (
        <div  className="nav">
            <header>

             

                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{backgroundColor:"#4f1233b5!important"}}>
                        <Navbar.Brand href="#home">  <div className="logo">
                            <img src={Logo} alt="logo" width={120} />
                        </div></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            {conteudoButtons.map(e=>{
                                return(
                                    <Nav.Link href={e}> {e}</Nav.Link>
                                )
                            })}
                            </Nav>
                        
                        </Navbar.Collapse>
                    </Navbar>
              

            </header>
         
            <div className="carrosel" >
                <Carrosel />

            </div>
        </div>
    )
}
function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  
  function Example() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">Home</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>
    );
  }
  