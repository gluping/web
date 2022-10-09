import React from 'react'

export const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
    
                <span className='logo'><img src="https://raw.githubusercontent.com/gluping/Gluping_website/master/proapp/images/logos/logo-app.png"/></span>
                <span className='title'>Register</span>
                

                <form>
                    
                    <input type='email'placeholder='email'/>
                    <input type='password'placeholder='password'/>

                 
                    <button>Login</button>
                </form>
                <p>Don't have an account? Register</p>


            </div>
            
        </div>
    )
}