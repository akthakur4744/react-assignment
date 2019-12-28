import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import { Table } from 'reactstrap'

const Dashboard = React.memo(props => {

    const {getEmployeeList} = props;

    useEffect(() => {
        getEmployeeList();
    },[getEmployeeList]);

    return (
        <div>
            {props.employeeData &&
                <React.Fragment>
                    <h1>DashBoard</h1>
                    <Table>
                        <thead>
                            <tr>
                                {Object.keys(props.employeeData[0]).map(key =>
                                    <th scope="row" key={key} >{key}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {props.employeeData.map(x => (
                                <tr key={x.id}>
                                    <td >{x.id}</td>
                                    <td>{x.name}</td>
                                    <td>{x.age}</td>
                                    <td>{x.gender}</td>
                                    <td>{x.email}</td>
                                    <td>{x.phoneNo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </React.Fragment>}
        </div>);
});

const mapStateToProps = state => {
    return {
        employeeData: state.employeeData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getEmployeeList: () => dispatch(actions.fetchEmployeeList()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
