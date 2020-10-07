import React from "react";
import {Row} from "react-bootstrap";

export default class AboutPlans extends React.Component {
    render() {
        return (
            <Row>
            <div className="col-md-3">
                <h2 className="text-white bg-secondary plan-headers">Basic Plan</h2>
                    <li>Creating a player's profile to share with coaches.</li>
                    <li>When to start looking for a school and what to start from.</li>
                    <li>When and Who you can talk to help with your school search.</li>
                    <li>Connect with other players who are searching for schools.</li>
                <p><a className="btn btn-secondary plan-button" href="/pricing" role="button">Create your FREE profile &raquo;</a></p>
            </div>

            <div className="col-md-3">
                <h2 className="text-white bg-secondary plan-headers">Discovery Plan</h2>
                    <li>Your profile will be shared with all the coaches from NCAA Division I,II, III in the USA, NAIA, and NJCAA I, II, III schools. Choose all or a few divisions.</li>
                <p><a className="btn btn-secondary plan-button" href="/pricing" role="button">Be visible &raquo;</a></p>
            </div>

            <div className="col-md-3">
                <h2 className="text-white bg-secondary plan-headers">VIP Plan</h2>
                    <li>Individual player's evaluation. We will exaplain your chances of schools based on your level and test scores.</li>
                    <li>Have the benefits of Basic, Discovery, and ad-ons.</li>
                    <li>We will walk you from where to start to signing a contract with a school depending on your level and
                        interests.</li>
                <p><a className="btn btn-secondary plan-button" href="/pricing" role="button">See what is included &raquo;</a></p>
            </div>

            <div className="col-md-3">
                <h2 className="text-white bg-secondary plan-headers">ADD-ONS</h2>
                    <li>See what else you can add to your plan.</li>
                    <li>TOEFL and SAT registration help, school applications, NCAA eligibility questions and more.</li>
                <p><a className="btn btn-secondary plan-button" href="/pricing" role="button">Learn more now &raquo;</a></p>
            </div>
        </Row>
        )
    }
}