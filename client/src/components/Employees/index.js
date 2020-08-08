import React, { Component } from 'react';
import { getEmployeeWithReviewer, clearEmployeeWithReviewer } from '../../actions';
import { connect } from 'react-redux';

class EmployeeView extends Component {

    componentWillMount(){
        this.props.dispatch(getEmployeeWithReviewer(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.dispatch(clearEmployeeWithReviewer())
    }

    renderBook = (employees) => (
        employees.employee ?
            <div className="br_container">
                <div className="br_header">
                    <h2>{employees.employee.name}</h2>
                    <h5>{employees.employee.position}</h5>
                    <div className="br_reviewer">
                        <span>Added by:</span> {employees.reviewer.name} {employees.reviewer.lastname}
                    </div>
                </div>
                <div className="br_review">
                    {employees.employee.tasksGiven}
                </div>
                <div className="br_box">
                    <div className="left">
                        <div>
                            <span>PhoneNumber:</span> {employees.employee.phoneNumber}
                        </div>
                        <div>
                            <span>Salary:</span> {employees.employee.salary}
                        </div>
                    </div>
                    <div className="right">
                        <span>Rating</span>
                        <div>{employees.employee.performance}/5</div>
                    </div>
                </div>
            </div>
        :null
    )

    render() {
        let employees = this.props.employees;
        return (
            <div>
                {this.renderBook(employees)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(EmployeeView)
