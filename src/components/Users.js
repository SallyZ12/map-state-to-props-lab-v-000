import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    const users = this.props.users.map((user, index) =>
      <li key={index}>{user.username}, {user.hometown} </li>)
    return (
      <div>
          {this.props.userCount}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users,
          userCount: state.users.length}
}

export default connect(mapStateToProps)(Users);
