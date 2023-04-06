import React from 'react'
import "./contact.css"

const Contact = () => {
    return (
        <>
            <div className='contact'>
                <form className='form'>

                    <h3 className='h13'>Contact US</h3>
                    <input type='text' id="firstName" placeholder='First Name'className='imput-box' required />
                    <input type='text' id="lastName" placeholder='Last Name'  className='imput-box'required />
                    <input type='email' id="email" placeholder='Email'  className='imput-box'required />
                    <input type='text' id="mobile" placeholder='Mobile' className='imput-box' required />
                    <h4 className='h4'>Type your Message here...</h4>
                    <textarea required></textarea>
                    <input type="submit" value="send" id="button"  className='imput-box'/>
                </form>
            </div>

        </>
    )
}

export default Contact