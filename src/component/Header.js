import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="container">
                 <form action="http://strotam.com/Luneblaze-API/api/app/siteMail.json" method="POST">
        <h1 >Form</h1>
        collegename:<input type="text" placeholder="Enter your college name" required /><br/> <br/>
        personname: <input type="text" placeholder="enter your name"/>
        Email: <input type="email" name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter your email" required /><br/> <br/>
        subject: <input type="text" placeholder="enter your subject name"/>
        
        message: <input type="text"  placeholder="Enter your address" required /><br/><br/>
         <br/>
         <div class="g-recaptcha" data-sitekey="6LcbipwbAAAAAIP9fCGHSoRupHTUe0g9NA44jhR9"> </div>
        <input type="submit" value="Submit"  />
    </form>
            </div>
        )
    }
}

export default Header
