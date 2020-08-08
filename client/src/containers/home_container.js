import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions';

import EmployeeItem from '../widgetsUI/employee_item';

class HomeContainer extends Component {

    componentWillMount(){
        this.props.dispatch(getEmployees(1,0,'desc'))
    }


    renderItems = (employees) => (
        employees.list ?  
            employees.list.map( item => (
                <EmployeeItem {...item} key={item._id}/>
            ))
        :null
    )

    loadmore = () => {
        let count = this.props.employees.list.length;
        this.props.dispatch(getEmployees(1,count,'desc',this.props.employees.list))
    }

    render() {
        return (
            <div>
               {this.renderItems(this.props.employees)}
               <div 
                    className="loadmore"
                    onClick={this.loadmore}
                >Load More</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        employees:state.employees
    }
}

export default connect(mapStateToProps)(HomeContainer)