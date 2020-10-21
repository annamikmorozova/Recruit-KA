import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import {
	Login,
	Signup,
	UserHome,
	About,
	PrivacyPolicy,
	TermsConditions,
	ProfileForm
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
				<Route exact path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/privacy-policy" component={PrivacyPolicy} />
				<Route path="/terms-and-conditions" component={TermsConditions} />
				<Route path="/profile" component={ProfileForm} />
				<Route exact path="/" component={About} />
				{isLoggedIn && (
					<Switch>
						<Route path="/home" component={UserHome} />
					</Switch>
				)}
				<Route component={Login} />
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