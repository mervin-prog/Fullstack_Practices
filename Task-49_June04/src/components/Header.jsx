import { Navbar, Nav, Container } from "react-bootstrap";
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
          <Navbar.Brand href="#home" style={{letterSpacing: '3.5px'}}>Fashynation</Navbar.Brand>
          <Navbar.Toggle aria-controls= "basic-navbar-nav" className="toggle"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="#home" value="home" className={activeLink==="home" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"home")}>Home</Nav.Link>
              <Nav.Link href="#shop" value="shop" className={activeLink==="shop" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"shop")}>Shop</Nav.Link>
              <Nav.Link href="#products" value="products" className={activeLink==="products" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"products")}>Products</Nav.Link>
              <Nav.Link href="#testimonial" value="testimonial" className={activeLink==="testimonial" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"testimonial")}>Testimonial</Nav.Link>
              
            </Nav>
            <div className="custom-btn">
            <a href="#footer"><button><span>Contact</span></button></a>
            </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;