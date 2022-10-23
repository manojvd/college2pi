// import React from 'react'
// import './Signup.css'

// function Signup() {
//     return (
//         <div className="Signup">
//             <h2>__Signup__</h2><br/><br/>
//             <form>              
//                 <input type="text" id="name" name="name" placeholder="Enter full name" style={{width:"75%"}} required/><br /><br/>
//                 <input type="email" id="mailid" name="mailid" placeholder="Enter E-mail" style={{width:"75%"}} required/><br /><br/>
//                 <input type="text" id="course" name="name" placeholder="Enter Desired Course" style={{width:"65%"}} required/><br /><br/>
//                 <input type="number" id="pincode" name="pincode" placeholder="Enter pincode" pattern="[1-9]{1}[0-9]{5}" required size="6" style={{width:"25%"}}/><br/><br/>
//                 <input type="text" id="userid" name="userid" placeholder="Set User Id" style={{width:"50%"}} required/><br /><br/>
//                 <input type="password" id="pwd" name="pwd" placeholder="Set Password" style={{width:"50%"}} required/><br/> <br/>
//                 <button>Signup</button>
//             </form>
//         </div>
//     )
// }

// export default Signup
import React from 'react';
import './Signup.css'
import axios from 'axios'

class Signup extends React.Component {
    constructor(){
        super()
        this.state={
            fullName:"",
            username:"",
            email:"",
            password:""
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmial = this.changeEmial.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value,
            })
    }
    changeUserName(event){
        this.setState({
            username:event.target.value,
        })
    }
    changeEmial(event){
        this.setState({
            email:event.target.value,
        })
    }
    
    changePassword(event){
        this.setState({
            password:event.target.value,
            })
    }
    onSubmit(event){
        event.preventDefault()
        const registered={
            fullName :this.state.fullName,
            username :this.state.username,
            email :this.state.email,
            password :this.state.password
        }
        axios.post('http://localhost:3000/app/signup',registered)
        .then(response=>console.log(response.data))

        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        },alert("Signup Successful")
        )
    }

    render() { 
        return (
        <div>
            <div className="container bgColor Signup" >
                
                <div className="form-div">
                    <h2 style={{color:'black'}}>__Register__</h2><br/><br/>
                    <form onSubmit={this.onSubmit}>
                        
                        <input type="text"
                        placeholder='Fullname'
                        onChange={this.changeFullName}
                        value={this.state.fullName}
                        className='form-controll form-group form-input'
                        required/><br /><br/>

                        <input type="text"
                        placeholder='username'
                        onChange={this.changeUserName}
                        value={this.state.username}
                        className='form-controll form-group form-input'
                        required/><br /><br/>

                        <input type="text"
                        placeholder='email'
                        onChange={this.changeEmial}
                        value={this.state.email}
                        className='form-controll form-group form-input'
                        required/><br /><br/>

                        <input type="text"
                        placeholder='password'
                        onChange={this.changePassword}
                        value={this.state.password}
                        className='form-controll form-group form-input'
                        required/><br /><br/>

                        <input type='submit' className='btn btn-danger btn-block'value='Submit' style={{width:"30%"}} />
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
 
export default Signup;