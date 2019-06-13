import React from 'react'

export class GetReimbursementByStatusComponent extends React.Component<any, any> {

    constructor(props){
        super(props);
        this.state = {
            reimbursement: []
        }
    }

    // updateUserId = (event) => {
    //     console.log(event)
    //         this.setState({
    //         id: event.target.value
    //     })
    // }

    componentDidMount() {
        
        this.reimbursementByStatus()
    
    }


    reimbursementByStatus = async () => {

        // const user_id = this.state.id

        //const userId = this.state.user_id

         //const credentials = {
            // id: number
        //}

        try {
            let id = this.props.match.params.statusId

            console.log(this.props)
            console.log(this.state)

            const response = await fetch('http://localhost:9050/reimbursement/status/' + id, {
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
                   reimbursement : resBody
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

    render() {
        if(!this.state.reimbursement){
            return <>no reimbursement to return</>
        }else{

        return(
             <div>
                <p>reimbursement by status id</p>
                <p>{this.state.reimbursement.reimbursement_id}</p>
                <p>{this.state.reimbursement.reimbursement_author}</p>
                <p>{this.state.reimbursement.reimbursement_amount}</p> 
                <p>{this.state.reimbursement.description}</p>
                <p>{this.state.reimbursement.resolver}</p>
                <p>{this.state.reimbursement.status}</p>
              </div>
            )
        }

    }


}