import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import {
	Login,
	UserHome,
	About,
	PrivacyPolicy
} from "./components";
import {me} from "./store";

class Routes extends Component {
	componentDidMount() {
		this.props.loadInitialData();
	}

	render() {
		const {isLoggedIn} = this.props;

		return (
			<Switch>
				<Route path="/home" component={About} />
				<Route path="/login" component={Login} />
				<Route path="/privacy-policy" component={PrivacyPolicy} />
				{isLoggedIn && (
					<Switch>
						<Route path="/home" component={UserHome} />
					</Switch>
				)}
			</Switch>
		);
	}
}

const mapState = state => {
	return {
		isLoggedIn: !!state.user
	};
};

const mapDispatch = dispatch => {
	return {
		loadInitialData() {
			dispatch(me());
		}
	};
};

export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
	loadInitialData: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired
};