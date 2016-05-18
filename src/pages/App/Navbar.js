import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import React from 'react'

import * as paths from '../../paths'

const AppNav = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Occasions</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavDropdown eventKey={3} title="Login" id="main-login-dropdown">
                    <LinkContainer to={paths.login()}>
                        <MenuItem eventKey={3.1}>do eit</MenuItem>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default AppNav
