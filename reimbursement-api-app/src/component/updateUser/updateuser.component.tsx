import React from 'react'

interface IUpdateUser {
    user_id: number
    username: string
    user_pass: string
    firstname: string
    lastname: string
    email: string
    role_user: number
}

export class UpdateUserComponent extends React.Component<any, IUpdateUser> {

    constructor(props) {
        super(props);
        this.state = {
            user_id: 0,
            username: '',
            user_pass: '',
            firstname: '',
            lastname: '',
            email: '',
            role_user: 0
        }
    }

    updateUserId = (event) => {
        this.setState({
            user_id: event.target.value
        })
    }

    updateUsername = (event) => {
            this.setState({
            username: event.target.value
        })
    }


    updatePassword = (event) => {
        this.setState({
        user_pass: event.target.value
       })
    }

    updateFirstname = (event) => {
        this.setState({
        firstname: event.target.value
       })
    }

    updateLastname = (event) => {
        this.setState({
        lastname: event.target.value
       })
    }

    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    updateRole = (event) => {
        this.setState({
            role_user: event.target.value
        })
    }


update = async (event) => {

    event.preventDefault()
       
    const user_id = this.state.user_id
    const username = this.state.username
    const user_pass = this.state.user_pass
    const firstname = this.state.firstname
    const lastname = this.state.lastname
    const email = this.state.email
    const role_user = this.state.role_user


    const credentials = {
        user_id,
        username,
        user_pass,
        firstname,
        lastname,
        email,
        role_user
    }

    try{
            
        const response = await fetch('http://localhost:9050/users/users/id' , {
            method: 'PATCH',
            credentials: 'include',
            body: JSON.stringify(credentials),
            headers:{
                'content-type': 'application/json'
            }
        })
        console.log(response)
        if(response.status === 401){
            // this.setState({
            //    //console.log('')  
            // })
            console.log("error")
        } else if(response.status === 200){
            console.log('logged in')
            const responseBody = await response.json()
            console.log(responseBody)
            console.log ('user updated')
        } else {
            document.getElementById('error-message').innerText = 'You Can\'t login right now'
        }  
    } catch(err) {
        console.log(err) 
    }
}

    render(){

        return(
            <div>
            <form className="form-update text-center" onSubmit={this.update}>
                <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Please update user</h1>
                <label htmlFor="inputUserId" className="sr-only">user id</label>
                <input type="userid" id="inputUserId" className="form-control" value={this.state.user_id} onChange={this.updateUserId} placeholder="userId" required/>
                <label htmlFor="inputUsername" className="sr-only">Username</label>
                <input type="text" id="inputUsername" className="form-control" value={this.state.username} onChange={this.updateUsername}placeholder="Username" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" value={this.state.user_pass} onChange={this.updatePassword} placeholder="Password" required/>
                <label htmlFor="inputFirstname" className="sr-only">firstname</label>
                <input type="firstname" id="inputFirstname" className="form-control" value={this.state.firstname} onChange={this.updateFirstname} placeholder="firstname" required/>
                <label htmlFor="inputLastname" className="sr-only">inputLastname</label>
                <input type="lastname" id="inputLastname" className="form-control" value={this.state.lastname} onChange={this.updateLastname} placeholder="lastname" required/>
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="email" id="inputEmail" className="form-control" value={this.state.email} onChange={this.updateEmail} placeholder="Email" required/>
                <label htmlFor="inputRole" className="sr-only">Role</label>
                <input type="role" id="inputRole" className="form-control" value={this.state.role_user} onChange={this.updateRole} placeholder="UserRole" required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
            </form>
            </div>
        )
    }

}


