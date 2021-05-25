import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import {
  BrowserRouter as
  Link
} from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="warning" expand="lg">
        <Navbar.Brand href="#home">PokeFight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Link href="/">Home</Link>
            <Link href="#link">Link</Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;