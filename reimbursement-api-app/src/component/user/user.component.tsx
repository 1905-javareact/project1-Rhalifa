import React from 'react';
import { Link } from 'react-router-dom';

interface User {
    user_id: string
    username: string
    user_pass: string
    firstname: string
    lastname: string
    email: string
    role_user: number
}

interface IGetAllUser {

    alluser : User[]
}

export class getAllUserComponent extends React.Component<any, IGetAllUser> {
    
    constructor(props){
        super(props);
        this.state = {
            alluser : [] 
        }
    }


    async componentDidMount(){
        console.log('component mounted')
        await this.users()
    }
    
users = async () => {
    console.log('inside users function')

    try{
    
        const response = await fetch('http://localhost:9050/users' , {
            method: 'GET',
            credentials: 'include',
            headers:{
             'content-type': 'application/json'
            }
        })

      console.log(response)
        if (response.status === 401) {
            console.log("you cant access this page")
        } else if (response.status === 200) {
            
             let res = await response.json()
             console.log("got users:",res)
             this.setState({
             alluser : res
        })

        console.log(response.status)
        console.log(res)

        } else {
           console.log('cant get users')
        }
    } catch (err) {
        console.log(err)
    }
    console.log("out of functions")
}


    render() {
        if(!this.state.alluser[0]){
            return <h1>no user to show</h1>
        }
        else{
            const users = this.state.alluser;
            let list =  users.map((u)=>{
                return(<tr>
                    <td><Link to={'/users/' + u.user_id }>{u.user_id}</Link></td>
                    <td>{u.username}</td>
                    <td>{u.firstname}</td>
                    <td>{u.lastname}</td>
                    <td>{u.email}</td>
                    <td>{u.role_user}</td>
                </tr>)
            });

            return(

                <table>
                    <th>userid</th>
                    <th>username</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>Email</th>
                    <th>role</th>
                   {list}
                   
               </table>
           )
            
        }
        
    }
    
}
