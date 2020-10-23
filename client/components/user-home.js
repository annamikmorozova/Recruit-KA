import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class UserHome extends Component {
	render () {
		const {firstName} = this.props;

		return (
			<div>
				<h3 className="welcome-user">
					Welcome {this.props.firstName}
				</h3>
			</div>
		);
	}
};

const mapState = state => {
	return {
		user: state.user,
		firstName: state.user.firstName
	};
};

export default connect(mapState)(UserHome);

UserHome.propTypes = {
	firstName: PropTypes.string
};