import React from 'react'
import { Link } from 'react-router-dom';


interface Reimbursement {
    reimbursement_id: number
    reimbursement_author: string
    reimbursement_amount: string
    date_submitted: string
    date_resolved: string
    description: string
    resolver: number
    status: number
    type_reimb: number
}

interface IGetAllReimbursement {

    allReimbursement : Reimbursement[]
}

export class getAllReimbursementComponent extends React.Component<any, IGetAllReimbursement> {
    
    constructor(props){
        super(props);
        this.state = {
            allReimbursement : []
        }
    }


    async componentDidMount(){
        console.log('component mounted')
        await this.reimbursement()
    }
    
reimbursement = async () => {
    console.log('inside users function')

    try{
    
        const response = await fetch('http://localhost:9050/reimbursement/reimbursement/all' , {
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
             allReimbursement : res
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
        if(!this.state.allReimbursement[0]){
            return <h1>no reimbursement to show</h1>
        }
        else {
            const reimbursement = this.state.allReimbursement;
            let list = reimbursement.map((u)=>{
                return(<tr>
                    <td>{u.reimbursement_id}</td>
                    <td><Link to ={'/reimbursement/author/userId/' + u.reimbursement_author}>{u.reimbursement_author}</Link></td>
                    <td>{u.reimbursement_amount}</td>
                    <td>{u.date_submitted}</td>
                    <td>{u.date_resolved}</td>
                    <td>{u.description}</td>
                    <td>{u.resolver}</td>
                    <td><Link to ={'/reimbursement/status/' + u.status}>{u.status}</Link></td>
                    <td>{u.type_reimb}</td>
                </tr>)
            });

            return(

                <table>
                    <th>reimbursement_id</th>
                    <th>reimbursement_author</th>
                    <th>reimbursement_amount</th>
                    <th>date_submitted</th>
                    <th>date_resolved</th>
                    <th>description</th>
                    <th>resolver</th>
                    <th>status</th>
                    <th>type_reimb</th>
                   {list}
                   
               </table>
            )
        }   
     
    }   
    
}



