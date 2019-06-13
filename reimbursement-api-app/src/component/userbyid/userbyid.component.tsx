import React from 'react'



/*interface User {

    user_id: string
    username: string
    user_pass: string
    firstname: string
    lastname: string
    email: string
    role_user: number
}

interface GetUser {
    user_id: number
}*/

export class GetUserByIdComponent extends React.Component<any, any> {
    
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }

    // updateUserId = (event) => {
    //     console.log(event)
    //         this.setState({
    //         id: event.target.value
    //     })
    // }

    componentDidMount() {
        
        this.user()
    
    }


    user = async () => {

        // const user_id = this.state.id

        //const userId = this.state.user_id

         //const credentials = {
            // id: number
        //}

        try {
            let id = this.props.match.params.id

            console.log(this.props)
            console.log(this.state)

            const response = await fetch('http://localhost:9050/users/' + id, {
                method: 'GET',
                credentials: 'include',
                //body: JSON.stringify(credentials),
               headers:{
                   'content-type': 'application/json'
                }
            }) 

            if (response.status === 401) {
                console.log("you cant access this page")
            } else if (response.status === 200) {
                 console.log(response)
                
                 const resBody = await response.json()
                 console.log("got users:")
                 this.setState({
                   user : resBody
            }) 
    
            console.log(response.status)
            console.log(resBody)
    
            } else {
               console.log('cant get users')
            }
        } catch(err){
            console.log(err)
        }
    }

    
    render(){
            if(!this.state.user){
                return <>no user to return</>
            }else{
                return(

                    <div>
                        {/* <form className="form user-id text-center" onSubmit={this.user}>
                        <input type="number" id="inputUserId" className="form-control" value={this.state.user_id} onChange={this.updateUserId}placeholder="UserId" required autoFocus/>
                        <p>{this.state.user && this.state.id}</p>
                        <input className="btn btn-lg btn-primary btn-block" type="submit" />
                        </form> */}
    
                        <h1>Single User</h1>
                        <p>{this.state.user.username}</p>
                        <p>{this.state.user.firstname}</p>
                        <p>{this.state.user.lastname}</p>
                        
                   </div>
                )
            }
            
    }
    

}