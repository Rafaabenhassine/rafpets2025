import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="testbox">
      <h1>Registration</h1>

      <form action="/">
        <div className="accounttype">
          <input type="radio" value="None" id="radioOne" name="account" checked />
          <label htmlFor="radioOne" className="radio">Personal</label>
          <input type="radio" value="None" id="radioTwo" name="account" />
          <label htmlFor="radioTwo" className="radio">Company</label>
        </div>
        
        <label htmlFor="email"><i className="icon-envelope"></i></label>
        <input type="text" name="email" id="email" placeholder="Email" required />
        <label htmlFor="name"><i className="icon-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Name" required />
        <label htmlFor="password"><i className="icon-shield"></i></label>
        <input type="password" name="password" id="password" placeholder="Password" required />
        <div className="gender">
          <input type="radio" value="None" id="male" name="gender" checked />
          <label htmlFor="male" className="radio">Male</label>
          <input type="radio" value="None" id="female" name="gender" />
          <label htmlFor="female" className="radio">Female</label>
        </div>
        <p>By clicking Register, you agree to our <a href="#">terms and conditions</a>.</p>
        <button type='submit' className='button'>Register</button>
      </form>
      
    </div>
  );
};

export default Register;
