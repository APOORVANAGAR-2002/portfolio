function Navbar() {
    return (
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/skills'>
                    Skills
                </NavLink>
                {/* <NavLink to='/project'>
                    Project
                </NavLink> */}
                <NavLink to='/volunteer'>
                    Volunteer
                </NavLink>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
            </NavMenu>
        </Nav>
    )
}

export default Navbar;