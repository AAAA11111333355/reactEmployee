import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeItem = (item) => {
    return (
        <Link to={`/employees/${item._id}`} className="employee_item">
            <div className="employee_header">
                <h2>{item.name}</h2>
            </div>
            <div className="employee_items">
                <div className="employee_author">{item.position}</div>

                <div className="employee_bubble">
                    <strong>Salary</strong> Rs. {item.salary}
                </div>

                <div className="employee_bubble">
                    <strong>phoneNumber</strong>  {item.phoneNumber}
                </div>

                <div className="employee_bubble performance">
                    <strong> perFormance </strong>  {item.performance}
                </div>

            </div>
        </Link>
    );
};

export default EmployeeItem;
