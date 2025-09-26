function Home () {

    let skills = {
        ["C"]: "img",
        ["Lua"]: "img"
    }

        return (
            <div className="App-header ">
                <div className="container">
                    <h2>About me</h2>
                    <div className="about-me">
                        <p className="intro">
                            Hello, I'm Sam, I'm a recent Computer Science graduate from Dalhousie University.
                        </p>
                        <p className="background">
                            A little bit about me, I began coding on a platform called Roblox when I was 12; I initially learned Lua.
                            I developed small game projects and later on created some more advanced scripts refered to as Admin Scripts.
                            For the most part I learned Lua using Roblox's reference guides and reading the online documentation.
                            I also learned from analyzing code from other users and trying to understand what each line meant.
                            Some notable projects I developed can be found here: [link].
                        </p>
                        <p className="academic-career">
                            During my academic career at Dalhousie I worked on various projects. I did frontend and backend development.
                            I took courses to further my understanding of security and networking where I performed data-gathering, and
                            pen testing. I also gained experience in HCI (human computer interaction), in order to develop user friendly
                            applications. I enjoyed working with my teams to complete projects on time as well as assisting my colleges
                            whenever possible. 
                        </p>
                        <div className="skills-section">
                            <p>
                                I have since gained experience and skills in various programming languages. Likewise, using various tools.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )

}

export default Home