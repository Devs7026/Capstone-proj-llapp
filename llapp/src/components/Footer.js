import React from 'react';
import image from '../images/small_logo.png';

const Footer = () => {
    return(
        <footer className="">
            <section className="footy">
            <div className="company-info">
                <div className='logo'><img src={image} alt=""/></div>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            </div>
            <div className="links">
                <h3>Important Links:</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            <div>
                <h3><i class="fa-solid fa-address-book"></i> Contact:</h3>
            <ul>
            <li><i class="fa-solid fa-map-pin"></i> Address: <br/> 123 Town Street,Yelahanka,Bengaluru,India</li>
                <li><i class="fa-solid fa-phone"></i> Phone: <br/> +91 8088046573</li>
                <li><i class="fa-solid fa-envelope"></i> Email: <br/> little@lemon.com</li>
            </ul>
            </div>
            <div className="socials">
                <h3>Social Media Links:</h3>
            <ul>
                <li><a href="/"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                <li><a href="/"><i class="fa-brands fa-square-instagram"></i> Instagram</a></li>
                <li><a href="/"><i class="fa-brands fa-square-x-twitter"></i> Twitter</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;