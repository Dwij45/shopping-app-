import React from 'react'

export default function Footer() {
  return (
    <>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-column">
                <h3>Useful Links</h3>
                <ul>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Policies</h3>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Exchange Policy</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Contact</h3>
                <p><i class="fa fa-map-marker"></i> IIT Madras, Chennai-600036.</p>
                <p><i class="fa fa-phone"></i> +91 98765 43210</p>
                <div class="social-icons">
                    <a href="#" class="fa fa-whatsapp"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-facebook"></a>
                </div>
            </div>
            © Developed by Dwij Gosai
        </div>
    </footer>
    </>
  )
}
