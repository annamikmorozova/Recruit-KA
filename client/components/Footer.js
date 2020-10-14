import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {IoLogoFacebook} from "react-icons/io";
import {TiSocialInstagram} from "react-icons/ti";
import {HiOutlineMail} from "react-icons/hi";

export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="footer-col">
					<div className="footer-inside-col">
						<div className="footer-text">R-KA</div>
						<p className="footer-description">
                            Recruitka is designed to help tennis players continue playing their favorite sport 
                            for an american college or university with academic or athletic scholarship. 
                            We are the first subscription-based recruting agency where you have an option to choose 
                            only the service you need to get into the team of your dream.
						</p>
					</div>

					<div className="footer-inside-col">
						<div className="footer-text">Resources</div>
						{this.props.isLoggedIn ? (
							<a className="admin-login" href="/home">
								Admin Login
							</a>
						) : (
							<a className="admin-login" href="/login">
								Admin Login
							</a>
						)}
						<a className="signup-newsletters" href="/newletters">
							Signup for Newsletters
						</a>
					</div>
				</div>
				<div className="social-media">
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TiSocialInstagram color="white" size={22} />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoLogoFacebook color="white" size={22} />
					</a>
					<a
						href="mailto:recruitka.tennis@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<HiOutlineMail color="white" size={22} />
					</a>
				</div>
				<div className="github-and-developers">
					<div className="designed-by">
						Designed by Anna Morozova and Erik Yeomans
					</div>
					<a
						className="github"
						href="https://github.com/annamikmorozova/Recruit-KA"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
				</div>
			</div>
		);
	}
}

// const mapStateToProps = state => {
// 	return {
// 		isLoggedIn: !!state.user.id,
// 		isAdmin: state.user.role === "admin"
// 	};
// };

// Footer.propTypes = {
// 	isLoggedIn: PropTypes.bool.isRequired
// };

// export default connect(mapStateToProps)(Footer);