import React from 'react';
// import TitleLogo from '../../components/title_logo';
// import Button from '../../components/button';
import Input from '../../components/input';
import Dropdown from '../../components/drop_down_gender';
import Dropdown2 from '../../components/drop_down_type';
import "../../styles/global.css";



const SignUp = () => {
    const dropdownOptions = ['Male', 'Female'];
    const dropdownOptions2 = ['passenger', 'driver'];

  return (
    <div>
      {/* <Button backgroundColor='#FADC3D' textColor='white' text='signup' /> */}
      {/* <TitleLogo /> */}
      <Input width='220px' name="last name" label="last Name" placeholder="enter your last Name"/>
      <Dropdown options={dropdownOptions}/>
      <Dropdown2 options={dropdownOptions2}/>
    </div>
  );
};

export default SignUp;
