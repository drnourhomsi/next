import Link from 'next/link'
import Logo from './Logo'
import Links from './Links'
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function MainNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="none" variant="light" className="border-top border-bottom scrolled bg-light navbar-light " id="mainNav">
                <Container>
                    <Link href="/" passHref>
                        <Navbar.Brand>
                            <Logo />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            {/* <Links /> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}