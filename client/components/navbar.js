import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../store";
import {Row, Col, Navbar, Nav} from "react-bootstrap";

class MainNavbar extends React.Component {

	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="/home">R-KA</Navbar.Brand>
				{this.props.isLoggedIn ? (
					<Nav className="mr-auto panel">
						<Nav.Link className="Nav-item" href="/home">About</Nav.Link>
						<Nav.Link className="Nav-item" href="/plans">Plans</Nav.Link>
						<a href="#" onClick={this.props.handleClick}>
                    		Logout
                  		</a>
					</Nav>
				) : (
					<Nav className="mr-auto panel">
						<Nav.Link className="Nav-item" href="/home">About</Nav.Link>
						<Nav.Link className="Nav-item" href="/plans">Plans</Nav.Link>
						<Nav.Link className="Nav-item" href="/login">Login</Nav.Link>
						<Nav.Link className="Nav-item" href="/signup">Signup</Nav.Link>
					</Nav>
				)}
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