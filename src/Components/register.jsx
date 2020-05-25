import React, { Component } from 'react'
import '../Components/Login.css';


export default class register extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            fname:"",
            lname:"",
            email:"",
            show: false
        };
    }

    changeFname(event) {
        this.setState({
            fname: event.target.value
        });
    }

    changeLname(event) {
        this.setState({
            lname: event.target.value
        });
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }



    setShow(val) {
        this.setState({show: val})
    }

    render() {
        let divShow = <table>
            <tr>
                <th>
                    First Name  
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Email Id
                </th>
                <th>
                    Password
                </th>
            </tr>
            <tr>
                <td>{this.state.fname}</td>
                <td>{this.state.lname}</td>
                <td>{this.state.email}</td>
            </tr>
        </table>
        let divReg = 
        <form>
     <div class="container">
     <h1> Welcome to register page</h1>
    <p>Please fill in this form to create an account.</p>

    <label for="fname"><b>First Name</b></label>
    <input type="text" placeholder="fname" onChange={(e) => this.changeFname(e)} value={this.state.fname} name="fname" required/>
    
    <label for="lname"><b>Last Name</b></label>
    <input type="text" placeholder="lname" onChange={(e) => this.changeLname(e)} value={this.state.lname} name="lname" required/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" onChange={(e) => this.changeEmail(e)} value={this.state.email} name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" onClick={()=> {this.setState({show:true})}} class="registerbtn" >Register</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
    </form> 
    
    let divPresent = <h1></h1>

    if(!this.state.show){
            divPresent = divReg;
    }else {
        divPresent = divShow;
    }
    
        return (
            <div>
             {divPresent}
            </div>
        )
    }
}
