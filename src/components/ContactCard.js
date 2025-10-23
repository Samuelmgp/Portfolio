import '../css/Contact.css';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";

function ContactCard () {
    return (
        <div className="contact-card">
            <div className="contact-info-img">
                <img src={require("../assets/contact.png")} alt="Myself." />
            </div>
            <div className="contact-info">
                <div className="contact-info-item">
                    <h1>Let's Connect!</h1>
                    <p className="contact-tagline">Software Developer | Problem Solver </p>
                    <p className="contact-description">
                        Click on any of the icons bellow to connect with me!
                    </p>
                    <div className='contact-links'>
                        <a href="mailto:samuelmgp@icloud.com">
                            <MdOutlineAlternateEmail size={48} />
                        </a>
                        <a href="https://www.linkedin.com/in/samuel-garcia-65589923b/">
                            <IoLogoLinkedin size={48} />
                        </a>
                        <a href="https://github.com/Samuelmgp">
                            <IoLogoGithub size={48} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard