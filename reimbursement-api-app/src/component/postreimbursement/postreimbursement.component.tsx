import React from 'react'

interface IReimbursement {
    amount: number,
    description: string,
    type: number  
}

export class PostReimbursementComponent extends React.Component<any, IReimbursement> {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            description: '',
            type: 0
        }
    }

    updateAmount = (event) => {
        console.log(event)
            this.setState({
            amount: event.target.value
        })
    }


    updateDescription = (event) => {
        this.setState({
           description: event.target.value
        })
    }
    updateType = (event) => {
        this.setState ({
            type: event.target.value
        })
    }



    postReimbursement = async (event) => {
        event.preventDefault()

        const amount = this.state.amount
        const description = this.state.description
        const type = this.state.type


            const credentials = {
                amount,
                description,
                type
            }
            console.log('this are my credentials:',credentials)
        try{
            
            const response = await fetch('http://localhost:9050/reimbursement/postreimbursement' , {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(credentials),
                headers:{
                    'content-type': 'application/json'
                }
            })
            console.log(response)
            if(response.status === 401){
                console.log('fail to p[ost reimbursement')
            } else if(response.status === 201){
                const resBody = await response.json()
                console.log(resBody)
            
            } else {
                //document.getElementById('error-message').innerText = 'You Can\'t login right now'
            }  
        } catch(err) {
            console.log(err) 
        }

    }

    componentDidMount(){
          console.log(this.props)
    }

    render(){
        return(
            <div>
                <form className="form-update text-center" onSubmit={this.postReimbursement}>
                <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Create reimbursement</h1>
                <label htmlFor="inputAmount" className="sr-only">Amount</label>
                <input type="text" id="inputAmount" className="form-control" value={this.state.amount} onChange={this.updateAmount} placeholder="Amount" required/>
                <label htmlFor="inputDescription" className="sr-only">Description</label>
                <input type="text" id="inputUsername" className="form-control" value={this.state.description} onChange={this.updateDescription}placeholder="Description" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Type of Reimbursement</label>
                <input type="password" id="inputPassword" className="form-control" value={this.state.type} onChange={this.updateType} placeholder="Type of Reimbursement" required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Create</button>
                </form>

            </div>
        )
    }

}