import React from "react";
import {Row} from "react-bootstrap";
import RegulatoryAssociations from "./RegulatoryAssociations";
import NCAAtable from "./NCAAtable";
import AboutPlans from "./AboutPlans";

export default class About extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <p className="text-black">Recruitka is designed to help tennis players continue playing their favorite sport for an american
                    college or university with academic or athletic scholarship. We are the first subscription-based
                    recruting agency where you have an option to choose only the service you need to get into the team of
                    your dream.</p>
                    <p className="text-black">From own experience coming to the USA with a full-scholarship following with getting a
                    tuition-free master's degree, we will help you to follow the same path. Look at your options below to
                    get started.</p>
                </div>
                
                <AboutPlans />

                <Row>
                    <div className="col-md-12">
                        <p className="text-black">If you love competing but would like to get a college degree as well, you have probably
                            thought of an opportunity playing for an American college. Because tennis is one of the most popular sports
                            globally, a competition of players’ recruitment is very high. With the opportunity to learn English, play
                            international tournaments and easily travel around the world, the market of the high level of players is
                            extremely intense.
                        </p>

                        <p className="text-black">As of right now, the United States of America is the only country in the world that can
                        offer athletes the opportunity to compete at an elite level while studying to obtain a college degree. Aspiring
                        young athletes from all over the world are driven to the United States not only for a college diploma but also to
                        take advantage of the training and competition opportunities, all while receiving financial support through
                        academic and athletic scholarships.
                        </p>
                    </div>
                </Row>

                <RegulatoryAssociations />

                <Row>
                    <div className="col-md-12">
                        <h4>NCAA loves its international student-athletes!</h4>
                        <p className="text-dark">According to recent NCAA Division I records (2018-2019), international student-athletes who
                            are
                            playing tennis is about 30%, while it is the same for Division II, the numbers are much smaller in Division
                            III
                            where it is only 3%. It could be explained through the fact of fewer scholarships giving out in the lower
                            division.
                        </p>
                        <p className="text-dark">If you are looking for a full financial support, 
                            we recommend you to focus on NCAA Division I and II schools.
                        </p>
                    </div>
                </Row>

                <h4>NCAA Women's and Men's Tennis Teams</h4>
            
                <NCAAtable />

                <Row>
                    <div className="col-6">
                        <p>NCAA allows to 4.5 full scholarships per team in each men's team in each Division.</p>
                        <p>NCAA allows to 8 full scholarships per team in 
                            each women's team for Division I and 6 for Division II and III teams.
                        </p>
                        <p>If full scholarship is not a deciding point for you, there are always walk-on and partial/ academic
                            scholarship
                            opportunities depending on a school and team.
                        </p>
                    </div>
                </Row>

            </div>
        )
    }
}