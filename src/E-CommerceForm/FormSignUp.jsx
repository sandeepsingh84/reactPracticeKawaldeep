import React from 'react';
import "./style.css"

const FormSignUp = () => {
  return (
      <div className='mainn'>
      <input type="radio" id='chk1' name='al' style={{display:'none'}}/>
      <input type="radio" id='chk2' name='al' style={{display:'none'}}/>
    <div className='box'>
        <div className='a'>
            <label htmlFor="chk1">Login</label>
            <label htmlFor="chk2" id='sup'>Sign up</label>
        </div>
        <div className='b'>
            <form action="" className='frm'>
                <h6 className='title'>SIGN-UP FORM</h6>
                <input type="text" placeholder='Enter Full Name' />
                <input type="text" placeholder='Enter Username' />
                <input type="text" placeholder='Email Address' />
                <input type="text" placeholder='Enter Password' />
                <input type="text" placeholder='Comfirm Password' />
                <input type="button" value="Sign up" id="btn" />
                <label htmlFor="chk1" id='btm'>login here</label>
                
            </form>

        </div>
        <div className='c'>
        <form action="" className='frm'>
            <br></br> <br></br>
                <h6 className='title'>LOGIN FORM</h6>
                <input type="text" placeholder=' Username or Email' />
                <input type="text" placeholder='Enter Password' />
                <input type="button" value="Login" id="btn" />
                <label htmlFor="chk2" id='btm'>signup here</label>
                
            </form>

        </div>
        <div className='d'></div>
        <div className='e'></div>

    </div>
   </div> 
  )
}

export default FormSignUp;