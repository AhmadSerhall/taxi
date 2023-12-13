import React from 'react';
import './style.css'
import TitleLogo from '../../components/title_logo';
import Button from '../../components/button';
import Input from '../../components/input';
import Dropdown from '../../components/drop_down_gender';
import Dropdown2 from '../../components/drop_down_type';
import "../../styles/global.css";

const SignUp = () => {
    const dropdownOptions = ['Male', 'Female'];
    const dropdownOptions2 = ['passenger', 'driver'];

   
  return (
    <div>
       <div className='center flex'>
      <TitleLogo/>
      <div className='container flex center prim-clr-bg'>
        <div className='items flex column'>
        <h1 className='title'>Sign up</h1>
        <div className='name flex '>
        <Input className="input"name="firstName" placeholder="enter your first name" label="first name" />
        <Input  className="input"name="lastName" placeholder="enter your last name" label="last name"  />
        </div>
        <div className='more-info flex column'>
        <Input className="input"name="email" placeholder="enter your email" label="email" width="auto"/>
        <Input  className="input"name="password" placeholder="enter your password" label="password" width="auto" />
        </div>
        <div className='drop flex row'>
           <Dropdown options={dropdownOptions}/>
           <Dropdown2 options={dropdownOptions2}/>
        </div>
        <Button className="button"color="black" backgroundColor="#D9D9D8"text="sign up" onClick={console.log("signed up pressed")}/>
        </div>
       
      </div>
    </div>
     
    </div>
  );
};

export default SignUp;
