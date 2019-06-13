import React from 'react';
//import logo from './logo.svg';
import './include/bootstrap'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignInComponent } from './component/signin/signin.component';
//import { NavComponent } from './component/nav/nav.component';
import { getAllUserComponent } from './component/user/user.component';
import { HomePageComponent } from './component/homepage/homepage.component';
import { GetUserByIdComponent } from './component/userbyid/userbyid.component';
import { UpdateUserComponent } from './component/updateUser/updateuser.component';
import { getAllReimbursementComponent } from './component/allreimbursement/allreimbursement.component';
import { GetReimbursementByIdComponent } from './component/reimbursementbyid/reimbursementbyid.component';
import { GetReimbursementByStatusComponent } from './component/reimbursementbystatus/reimbursementbystatus.component';
import { PostReimbursementComponent } from './component/postreimbursement/postreimbursement.component'
import { UpdateReimbursementComponent } from './component/updatereimbursement/updatereimbursement.component'
const App: React.FC = () => {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


return (
  <BrowserRouter>
  
  <div className="App">

    <Switch>
      <Route exact path='/' component={SignInComponent}/>
      <Route path='/home' component={HomePageComponent}/>
      <Route exact path='/users' component={getAllUserComponent}/>
      <Route exact path='/users/:id' component={GetUserByIdComponent}/>
      <Route exact path ='/users/users/id' component={UpdateUserComponent}/>
      <Route exact path ='/reimbursement/reimbursement/all' component={getAllReimbursementComponent}/>
      <Route exact path='/reimbursement/author/userId/:userId' component={GetReimbursementByIdComponent}/>
      <Route exact path='/reimbursement/status/:statusId' component={GetReimbursementByStatusComponent}/>
      <Route exact path='/reimbursement/postreimbursement' component={PostReimbursementComponent}/>
      <Route exact path='/reimbursement/reimbursement/users' component={UpdateReimbursementComponent}/>
    </Switch>
  </div>
  </BrowserRouter>
);
}

export default App;


