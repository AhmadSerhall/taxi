import React from 'react';
// import TitleLogo from '../../components/title_logo';
// import Button from '../../components/button';
import Input from '../../components/input';
import "../../styles/global.css";

const SignUp = () => {
  return (
    <div>
      {/* <Button backgroundColor='#FADC3D' textColor='white' text='signup' /> */}
      {/* <TitleLogo /> */}
      <Input width='220px' name="last name" label="last Name" placeholder="enter your last Name"/>
    </div>
  );
};

export default SignUp;
