import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmployee, updateEmployee, clearEmployee, deleteEmployee } from '../../actions'

class EditEmployee extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
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


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(updateEmployee(this.state.formdata))
    }

    deletePost = () => {
        this.props.dispatch(deleteEmployee(this.props.match.params.id))
    }
    redirectUser = () => {
        setTimeout(()=>{
            this.props.history.push('/user/user-tasks')
        },1000)
    }


    componentWillMount(){
        this.props.dispatch(getEmployee(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps){
        let employee = nextProps.employees.employee;
        this.setState({
            formdata:{
                _id:employee._id,
                name:employee.name,
                position:employee.position,
                tasksGiven:employee.tasksGiven,
                phoneNumber:employee.phoneNumber,
                performance:employee.performance,
                salary:employee.salary
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearEmployee())
    }

    render() {
        let employees = this.props.employees;
        return (
            <div className="rl_container article">
                {
                    employees.updateEmployee ?
                        <div className="edit_confirm">
                            task updated , <Link to={`/employees/${employees.employee._id}`}>
                                Click here to see your tasks
                            </Link>
                        </div>
                    :null
                }
                {
                    employees.postDeleted ?
                        <div className="red_tag">
                            Task Deleted
                            {this.redirectUser()}
                        </div>
                    :null
                }

                <form onSubmit={this.submitForm}>
                    <h2>Edit tasksGiven</h2>

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

                    <button type="submit">Edit tasksGiven</button>
                    <div className="delete_post">
                        <div className="button"
                            onClick={this.deletePost}
                        >
                            Delete Employee
                        </div>
                    </div>
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

export default connect(mapStateToProps)(EditEmployee)
