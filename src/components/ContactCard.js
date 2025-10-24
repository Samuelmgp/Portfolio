import myPhoto from "../assets/myPhoto.jpeg";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";

import "../css/Contact.css"

function ContactCard () {
    const skills = [
                    'C', 'Java', 'React', 'HTML5', 'Python', 'Lua'
                ];

    return (
        <div className="contact-card">
            <div className="contact-info-img">
                <img src={myPhoto} alt="Me" />
            </div>
            <div className="contact-info">
                <div className="contact-info-item">
                    <h1>Samuel Garcia</h1>
                    <p className="contact-tagline">Software Developer | Cyber Security Enthusiest | Problem Solver </p>
                    <div className="skills-badges">
                    {skills.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                    ))}
                </div>
                    <p className="contact-description">
                        I'm a recent Computer Science graduate from Dalhousie University.<br /> 
                        I am passionate about cyber secruity, coding, and new technologies. I am also striving to enhance
                        my understanding AI, and refine my skills and understanding.
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