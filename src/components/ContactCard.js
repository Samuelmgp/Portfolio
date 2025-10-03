import '../css/Contact.css'

function ContactCard () {
    return (
        <div className="contact-card">
            <div className="contact-info-img">
                <img src={require("../assets/contact.png")} alt="Myself." />
            </div>
            <div className="contact-info">
                <div className="contact-info-item">
                    <h1>Let's Connect!</h1>
                    <p className="email">Email: <a href="mailto:samuelmgp@icloud.com">samuelmgp@icloud.com</a></p>
                    <p className="phone">Phone: <a href="tel:+19029303239">+1 (902) 930-3239</a></p>
                    <p className="linkedin">LinkedIn: <a href="https://www.linkedin.com/in/samuel-garcia-65589923b/">https://www.linkedin.com/in/samuel-garcia-65589923b/</a></p>
                    <p className="github">GitHub: <a href="https://github.com/Samuelmgp">https://github.com/Samuelmgp</a></p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard