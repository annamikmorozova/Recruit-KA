import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../store";
import {Row, Col, Navbar, Nav} from "react-bootstrap";

class MainNavbar extends React.Component {

	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#home">About</Nav.Link>
						<Nav.Link href="#plans">Plans</Nav.Link>
						<Nav.Link href="#login">Login</Nav.Link>
						<Nav.Link href="#signup">Signup</Nav.Link>
					</Nav>
			</Navbar>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: !!state.user,
		isAdmin: !!state.user && state.user.role === "admin"
	};
};

const mapDispatch = dispatch => {
	return {
		handleClick() {
			dispatch(logout());
		}
	};
};

MainNavbar.propTypes = {
	handleClick: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatch)(MainNavbar);