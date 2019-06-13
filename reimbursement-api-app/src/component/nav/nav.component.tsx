import React from 'react';
import { Link } from 'react-router-dom';
//import taylorlogo from '../../assets/taylor-logo.jpeg';

export class NavComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-sm navbar-expand-lg navbar-light bg-light display-front nav-pad">
        <div className="navbar-header c-pointer shift-left">
          <Link to="/home" className="unset-anchor">
            {/* <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" /> */}
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto margin-nav">
            <li className="nav-item active">
              <Link to="/home" className="unset-anchor nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/login" className="unset-anchor nav-link">Sign In</Link>
            </li>
            <li className="nav-item active">
              <Link to="/users" className="unset-anchor nav-link">Users</Link>
            </li>
            <li className="nav-item active">
              <Link to="users/:id" className="unset-anchor nav-link">User by ID</Link>
            </li>
            <li className="nav-item active">
              <Link to="users/users/id" className="unset-anchor nav-link">update user</Link>
            </li>
            <li className="nav-item active">
              <Link to="/reimbursement/reimbursement/all" className="unset-anchor nav-link">All reimbursement</Link>
            </li>
            <li className="nav-item active">
              <Link to="/reimbursement/author/userId/:userId" className="unset-anchor nav-link">reimbursement by id</Link>
            </li>
            <li className="nav-item active">
              <Link to="/reimbursement/status/:statusId" className="unset-anchor nav-link">reimbursement by status</Link>
            </li>
            <li className="nav-item active">
              <Link to="/reimbursement/postReimbursement" className="unset-anchor nav-link">Create reimbursement</Link>
            </li>
            <li className="nav-item active">
              <Link to="/reimbursement/reimbursement/users" className="unset-anchor nav-link">Update reimbursement</Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}