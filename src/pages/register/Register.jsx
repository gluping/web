import React from 'react'
import Add from '../../images/Add.png'
import './register.css'

export const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'><img src="https://raw.githubusercontent.com/gluping/Gluping_website/master/proapp/images/logos/logo-app.png"/></span>
                <span className='title'>Register</span>
                

                <form>
                    <input type='text' placeholder='username'/>
                    <input type='email'placeholder='email'/>
                    <input type='password'placeholder='password'/>

                    <input style={{display:"none"}} type="file" id="file/"></input>
                    <label htmlFor="file">
                        <img src={Add} alt=""/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Have an account already? Login</p>


            </div>
            
        </div>
    )
}
