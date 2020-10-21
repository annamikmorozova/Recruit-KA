import React from "react";
import {Row} from "react-bootstrap";

export default class AboutPlans extends React.Component {
    render() {
        return (
            <Row>
            <div className="col-md-3">
                <h5 className="text-white bg-secondary plan-headers">Basic Plan</h5>
                    <li>Create a RKA profile to share with coaches.</li>
                    <li>When to start looking for a school and what to start from.</li>
                    <li>When and Who you can talk to help with your school search.</li>
                    <li>Connect with other players who are searching for schools.</li>
                    <button className="btn btn-secondary plan-button" href="/pricing">Create your FREE profile &raquo;</button>
            </div>

            <div className="col-md-3">
                <h5 className="text-white bg-secondary plan-headers">Discovery Plan</h5>
                    <li>Basic plan benefits.</li>
                    <li>Your profile will be shared with coaches from American colleges and universities.</li>
                    <li>One evaluation to understand where is your fit based on your academic and athletic skills.</li>
                    <button className="btn btn-secondary plan-button" href="/pricing">Be visible &raquo;</button>
            </div>

            <div className="col-md-3">
                <h5 className="text-white bg-secondary plan-headers">VIP Plan</h5>
                    <li>Two evaluations to understand where is your fit based on your academic and athletic skills.</li>
                    <li>Have the benefits of Basic and Discovery</li>
                    <li>We will walk you from where to start to signing a contract with a school depending on your level and
                        interests.</li>
                <button className="btn btn-secondary plan-button" href="/pricing">See what is included &raquo;</button>
            </div>

            <div className="col-md-3">
                <h5 className="text-white bg-secondary plan-headers">ADD-ONS</h5>
                    <li>NCAA eligibility questions.</li>
                    <li>TOEFL and SAT registration help.</li>
                    <li>School application help.</li>
                    <li>Medical forms.</li>
                    <li>High School transcripts examples.</li>
                    <li>Another help request.</li>
                <button className="btn btn-secondary plan-button" href="/pricing">Learn more now &raquo;</button>
            </div>
        </Row>
        )
    }
}