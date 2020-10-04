import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../store";
import {Row, Col} from "react-bootstrap";

class MainNavbar extends React.Component {

	render() {
		return (
			<div className="container">
				<div>Hiiiiiiiii</div>
			</div>
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