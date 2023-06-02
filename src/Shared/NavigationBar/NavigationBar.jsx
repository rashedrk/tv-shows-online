import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <>
        {/* nav bar that remains in all page */}
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img style={{width: '30px'}} src="https://www.favicon.cc/logo3d/238565.png" alt="" /></Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
        
    );
};

export default NavigationBar;