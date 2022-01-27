import React from "react";
import Error from "../components/Error";
import logo from "../assets/syncee-logo.png"

export default class Login extends React.Component {
  constructor() {
    super()

    this.state = {email: "", password: "", error:false, msg:"Hiba történt", logged:false};

    this.handleChange = this.handleChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
      this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit(event) {
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;
    if(this.state.password.length < 5){
      this.setState({ error : true, msg: "Password too small!", logged:false });
      event.preventDefault()
    }
    else if(!regularExpression.test(this.state.password)){
      this.setState({ error: true, msg : 'Wrong password format!', logged:false });
      event.preventDefault()
    }else{
      this.setState({ error: false, msg : "",  logged:true});  
    }
  }

  render() {
    if(this.state.logged){
      return (<p>{this.state.email}</p> );
    }else{
    return (
      <div className="main-box row">
        <div className="col-lg-6 left-side h-100">
            <img className="logo mb-5" src={logo}/>
            <h2>Login</h2>
            <p>See your growth and get consulting support!</p>
            {/* className="g-signin2 sign-in-with-google mt-4 "*/ }
            <button className="sign-in-with-google mt-4 ">Sign in with Google</button>
            <p className="mt-3 text-center"><span className="line-effect">or Sign in with Email</span></p>
            <form onSubmit={this.handleSubmit}>
              <Error msg={this.state.msg} error={this.state.error}/>
              <div className="mt-3">
                <b>E-mail*</b>
                <input className="unique-input" placeholder="mail@website.com" value={this.state.email} name="email" onChange={this.handleChange} type="email" />
              </div>
              <div className="mt-3">
                <b>Password*</b>
                <input className="unique-input" placeholder="Min. 8 character" value={this.state.password} name="password" onChange={this.handleChange} type="password" />
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <div>
                  <input type="checkbox"/> <b>Remember me</b>
                </div>
                <div>
                  <a href="#" className="link">Forget password?</a>
                </div>
              </div>
              <button className="login mt-4" type="submit">Login</button>
            </form>
            <p className="mt-3">Not registered yet? <a href="#" className="link">Create an Account</a></p>
            <p className="mb-5 mt-5 all-rights">2022 Syncee All rights reserved.</p>
          </div>
        <div className="col-lg-6 right-side">
        </div>
      </div>
    );
  }
}
}