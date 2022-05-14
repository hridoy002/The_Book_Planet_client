import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            {/* <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link> */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} width="50px" alt="" /><span className="fw-bold"> The Book Planet</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>


                            <Nav.Link as={Link} to='/about'>
                                About Us
                            </Nav.Link>

                            {user ? <>
                                <Nav.Link as={Link} to='/manageInventories'>
                                    Manage Inventories
                                </Nav.Link>
                                <Nav.Link as={Link} to='/uploadProduct'>
                                    Upload Products
                                </Nav.Link>
                                <Nav.Link as={Link} to='/myitem'>
                                    My Item
                                </Nav.Link>
                                <button onClick={logout} style={{ color: "#182D36" }} className=' btn btn-light  fs-6 fw-bold'>Log Out</button>
                            </> :
                                <>
                                    <Nav.Link as={Link} to='login' >Login</Nav.Link>
                                    <Nav.Link as={Link} to='register' >Sign UP</Nav.Link>
                                </>
                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;