import React from "react";
import {Row} from "react-bootstrap";

class NCAAtable extends React.Component {
    render() {
        return (
            <Row>
                <div className="col-12">
                    <table>
                        <tr>
                            <th></th>
                            <th>Division I</th>
                            <th>Division II</th>
                            <th>Division III</th>
                        </tr>
                        <tr>
                            <td>Men's Tennis</td>
                            <td>263</td>
                            <td>161</td>
                            <td>314</td>
                        </tr>
                        <tr>
                            <td>Women's Tennis</td>
                            <td>320</td>
                            <td>212</td>
                            <td>361</td>
                        </tr>
                    </table>
                </div>
            </Row>
        )
    }
}

export default NCAAtable;