import React from "react";
import {Row} from "react-bootstrap";

class RegulatoryAssociations extends React.Component {
    render() {
        return (
            <Row>
                <div className="col-md-12">
                <h4 className="text-primary">Regulatory Associations:</h4>
                <table>
                    <tr>
                        <th>Association</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td className="table-Divisions">NCAA I, II, III</td>
                        <td>The National Collegiate Athletic Association is the most popular regulatory association of colleges
                            and
                            universities that includes 1,268 institutions in the USA from Divisions I, II, III where “I” is
                            considered
                            the strongest.
                        </td>

                    </tr>
                    <tr>
                        <td>NAIA</td>
                        <td>The National Association of Intercollegiate Athletics has 251 small institutions under their
                            control.
                        </td>
                    </tr>
                    <tr>
                        <td>NJCAA I, II, III</td>
                        <td>The National Junior College Athletic Association is controlling 525 community colleges all over the
                            USA from
                            Divisions I, II, III accordingly with “I” being the highest.
                        </td>

                    </tr>
                </table>
                </div>
            </Row>
        )
    }
}

export default RegulatoryAssociations;