import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEmployee, clearNewEmployee } from '../../actions'

class AddEmployee extends Component {

    state = {
        formdata:{
            name:'',
            position:'',
            tasksGiven:'',
            phoneNumber:'',
            performance:'',
            salary:''
        }
    }


    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }

    showNewBook = (employee) => (
        employee.post ?
            <div className="conf_link">
                Cool !! <Link to={`/employees/${employee.employeeId}`}>
                    Click the link to see  New employee
                </Link>
            </div>
        :null
    )


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addEmployee({
            ...this.state.formdata,
            ownerId:this.props.user.login.id
        }))
    }

    componentWillUnmount(){
        this.props.dispatch(clearNewEmployee())
    }

    render() {
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add Employee</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={this.state.formdata.name}
                            onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter position"
                            value={this.state.formdata.position}
                            onChange={(event)=>this.handleInput(event,'position')}
                        />
                    </div>

                    <textarea
                        value={this.state.formdata.tasksGiven}
                        onChange={(event)=>this.handleInput(event,'tasksGiven')}
                    />

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter phoneNumber"
                            value={this.state.formdata.phoneNumber}
                            onChange={(event)=>this.handleInput(event,'phoneNumber')}
                        />
                    </div>

                    <div className="form_element">
                        <select
                            value={this.state.formdata.performance}
                            onChange={(event)=>this.handleInput(event,'performance')}
                        >
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select>
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter Salary"
                            value={this.state.formdata.salary}
                            onChange={(event)=>this.handleInput(event,'salary')}
                        />
                    </div>

                    <button type="submit">Click to Add Employee</button>
                    {
                        this.props.employees.newEmployee ?
                            this.showNewBook(this.props.employees.newEmployee)
                        :null
                    }
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        employees:state.employees
    }
}

export default connect(mapStateToProps)(AddEmployee)
