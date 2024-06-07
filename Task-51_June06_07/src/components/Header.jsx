import { Navbar, Nav, Container , NavDropdown } from "react-bootstrap";
import {useState, useEffect} from "react";

function Header(){

    const [activeLink, setActiveLink]=useState("");
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

    function handleClick(value){
      setActiveLink(value);
    };

    return(
        <Navbar expand="md"  className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home" style={{letterSpacing: '3.5px'}}>Coastal Paradise</Navbar.Brand>
          <Navbar.Toggle aria-controls= "basic-navbar-nav" className="toggle"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="#home" value="home" className={activeLink==="home" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"home")}>Home</Nav.Link>
              <Nav.Link href="#services" value="services" className={activeLink==="services" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"services")}>Services</Nav.Link>
              <Nav.Link href="#explore" value="explore" className={activeLink==="explore" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"explore")}>Explore</Nav.Link>
              <Nav.Link href="#meals" value="meals" className={activeLink==="meals" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"meals")}>Meals</Nav.Link>

              <NavDropdown title="Rooms" id="basic-nav-dropdown" value="rooms" className={activeLink==="rooms" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"rooms")}>
              <NavDropdown.Item href="#rooms">Single Room</NavDropdown.Item>
              <NavDropdown.Item href="#rooms">Standard Double Room</NavDropdown.Item>
              <NavDropdown.Item href="#rooms">Deluxe Double Room</NavDropdown.Item>

              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}

            </NavDropdown>
              
            </Nav>
            <div className="custom-btn">
            <a href="#footer"><button><span>Book Now</span></button></a>
            </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;