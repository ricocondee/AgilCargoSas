import React from "react";
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-contacts">
                <ul className="list-contacts">
                    <li>
                        <i class="bi bi-envelope-fill"></i>&nbsp;&nbsp;<a href="mailto:Info@agilcargo.com" target="_blank">Info@agilcargo.com</a> 
                    </li>
                    <li>
                        <i class="bi bi-geo-alt-fill"></i>&nbsp;&nbsp;Calle 0 #00-00 Colombia
                    </li>
                    <li>
                        <i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;+57 123 456 7890
                    </li>
                </ul>
            </div>

            &copy; Copyright 2021, Grupo 4

            <div className="container-social-media">
                <ul className="list-social-media">
                    <li>
                        <i class="bi bi-instagram"></i>
                    </li>
                    <li>
                        <i class="bi bi-linkedin"></i>
                    </li>
                    <li>
                        <i class="bi bi-twitter"></i>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;