import { Navbar, Nav, Container } from "react-bootstrap";
import {useState, useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Header(){

    const [activeLink, setActiveLink]=useState("home");
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
          <Navbar.Brand href="#home">MR</Navbar.Brand>
          <Navbar.Toggle aria-controls= "basic-navbar-nav" className="toggle"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" value="home" className={activeLink==="home" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"home")}>Home</Nav.Link>
              <Nav.Link href="#skills" value="skills" className={activeLink==="skills" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"skills")}>Skills</Nav.Link>
              <Nav.Link href="#projects" value="projects" className={activeLink==="projects" ? "active navbar-link" : "navbar-link"} onClick={handleClick.bind(null,"projects")}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <button className="contact-btn"><span>Contact Me</span></button>
            </span>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;