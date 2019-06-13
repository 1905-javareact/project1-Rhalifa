import React from 'react'

interface IUpdateReimbursement {
    reimbursement_id: number, 
    reimbursement_author: number
    reimbursement_amount: number
    date_submitted: string
    date_resolved: string
    description: string
    resolver: number
    status: number
    type_reimb: number
    
}

export class UpdateReimbursementComponent extends React.Component<any, IUpdateReimbursement> {

    constructor(props) {
        super(props);
        this.state = {
            reimbursement_id: 0, 
            reimbursement_author: 0, 
            reimbursement_amount: 0,
            date_submitted: '', 
            date_resolved: '', 
            description: '', 
            resolver: 0, 
            status: 0, 
            type_reimb: 0
        }
    }

    updateReimbursementId = (event) => {
        this.setState({
            reimbursement_id: event.target.value
        })
    }

    updateReimbursementAuthor = (event) => {
            this.setState({
            reimbursement_author: event.target.value
        })
    }


    updateReimbursementAmount = (event) => {
        this.setState({
        reimbursement_amount: event.target.value
       })
    }

    updateDateSubmitted = (event) => {
        this.setState({
        date_submitted: event.target.value
       })
    }

    updateDateResolved = (event) => {
        this.setState({
        date_resolved: event.target.value
       })
    }

    updateDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    updateResolver = (event) => {
        this.setState({
            resolver: event.target.value
        })
    }

    updateStatus = (event) => {
        this.setState({
            status: event.target.value
        })
    }

    updateType = (event) => {
        this.setState({
            type_reimb: event.target.value
        })
    }


update = async (event) => {

    event.preventDefault()
       
    const reimbursement_id = this.state.reimbursement_id
    const reimbursement_author = this.state.reimbursement_author
    const reimbursement_amount = this.state.reimbursement_amount
    const date_submitted = this.state.date_submitted
    const date_resolved = this.state.date_resolved
    const description = this.state.description
    const resolver = this.state.resolver
    const status = this.state.status
    const type_reimb = this.state.type_reimb



    const credentials = {
        reimbursement_id,
        reimbursement_author,
        reimbursement_amount,
        date_submitted,
        date_resolved,
        description,
        resolver,
        status,
        type_reimb
    }

    try{
            
        const response = await fetch('http://localhost:9050/reimbursement/reimbursement/users' , {
            method: 'PATCH',
            credentials: 'include',
            body: JSON.stringify(credentials),
            headers:{
                'content-type': 'application/json'
            }
        })
        console.log(response)
        if(response.status === 401){
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
                <h1 className="h3 mb-3 font-weight-normal">Please update reimbursement</h1>
                <label htmlFor="inputReimbursementId" className="sr-only">reimbursement id</label>
                <input type="reimbursementId" id="inputUserId" className="form-control" value={this.state.reimbursement_id} onChange={this.updateReimbursementId} placeholder="userId" required/>
                <label htmlFor="inputUsername" className="sr-only">author</label>
                <input type="text" id="inputUsername" className="form-control" value={this.state.reimbursement_author} onChange={this.updateReimbursementAuthor}placeholder="Author" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">amount</label>
                <input type="text" id="inputPassword" className="form-control" value={this.state.reimbursement_amount} onChange={this.updateReimbursementAmount} placeholder="Amount" required/>
                <label htmlFor="inputFirstname" className="sr-only">date submitted</label>
                <input type="text" id="inputFirstname" className="form-control" value={this.state.date_submitted} onChange={this.updateDateSubmitted} placeholder="date submitted" required/>
                <label htmlFor="inputLastname" className="sr-only">date resolved</label>
                <input type="text" id="inputLastname" className="form-control" value={this.state.date_resolved} onChange={this.updateDateResolved} placeholder="date resolved" required/>
                <label htmlFor="inputEmail" className="sr-only">description</label>
                <input type="text" id="inputEmail" className="form-control" value={this.state.description} onChange={this.updateDescription} placeholder="description" required/>
                <label htmlFor="inputRole" className="sr-only">resolver</label>
                <input type="text" id="inputRole" className="form-control" value={this.state.resolver} onChange={this.updateResolver} placeholder="resolver" required/>
                <label htmlFor="inputRole" className="sr-only">status</label>
                <input type="text" id="inputRol" className="form-control" value={this.state.status} onChange={this.updateStatus} placeholder="status" required/>
                <label htmlFor="inputRolee" className="sr-only">type reimbursement</label>
                <input type="text" id="inputRole" className="form-control" value={this.state.type_reimb} onChange={this.updateType} placeholder="type of reimbursement" required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
            </form>
            </div>
        )
    }


}