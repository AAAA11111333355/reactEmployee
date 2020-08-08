import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

class UserPosts extends Component {

    componentWillMount(){
        this.props.dispatch(getUserPosts(this.props.user.login.id))
    }

    showUserPosts = (user) => (
        user.userPosts ?
            user.userPosts.map(item => (
                <tr key={item._id}>
                    <td><Link to={
                        `/user/edit-post/${item._id}`
                    }>
                        {item.name}
                    </Link></td>
                    <td>{item.position}</td>
                    <td>
                        {moment(item.createAt).format("MM/DD/YY")}
                    </td>
                </tr>
            ))
        :null
    )

    render() {
        let user = this.props.user;
        return (
            <div className="user_posts">
                <h4>Employees Added:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>position</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserPosts)
