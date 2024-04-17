import React from 'react';
import VismeForm from './feed';

class Project extends React.Component {
  scrollToFirstDiv() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToContainerDiv() {
    const containerDiv = document.querySelector('.container');
    containerDiv.scrollIntoView({
      behavior: 'smooth'
    });
  }

  scrollToThirdDiv() {
    const div = document.querySelector('.About');
    div.scrollIntoView({
      behavior: 'smooth'
    });
  }

  scrolltofourth() {
    const div1 = document.querySelector('.fourthdiv');
    div1.scrollIntoView({
      behavior: 'smooth'
    });
  }

  scrolltocontact() {
    const div2 = document.querySelector('.fifthdiv');
    div2.scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Function to handle the "Help" button click
  handleHelpButtonClick = () => {
    // Display contact information
    alert("For help, contact:\nMobile Number: +91 7017246470\nEmail: singhkunal8923@gmail.com\nAddress: NIET Knowledge Park 2, Greater Noida(UP), India");
  };

  render() {
    return (
      <div className="project">
        <div className="first-container">
          {/* NAV BAR */}
          <nav className="nav-bar" id="navbar">
            <div className="logo"><img src="\src\assets\Components\Bhaichara.png" alt="Logo" /></div>
            <ul className="list-container">
              <li onClick={this.scrollToFirstDiv}>Home</li>
              <li onClick={this.scrollToContainerDiv}>Report</li>
              <li onClick={this.scrollToThirdDiv}>About</li>
              <li onClick={this.scrolltofourth}>Clients</li>
              <li onClick={this.scrolltocontact}>Contact</li>
            </ul>
            {/* Add onClick event to the Help button */}
            <button className="nav-button" onClick={this.handleHelpButtonClick}>Help</button>
          </nav>
          <div className="headline">
            <span>Our analysis report<br />says a lot!</span>
            <h6 className="subheadline">We make your work easier</h6>
            <button className="homebutton" onClick={this.scrollToContainerDiv}>Let's Go</button>
          </div>
        </div>
        {/* Second Div */}
        <div className="container">
          <div className="text-container">
            <h2>Here we do sentimental <br /> analysis of youtube comment section</h2>
            <p>Fill the form to get to know about your audience Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus laborum repellat aut fugit placeat praesentium labore, id eos, mollitia voluptatibus molestias maxime eum, dolorum expedita fugiat rerum blanditiis. Enim, exercitationem. </p>
          </div>
          <div className="contact-box">
            <div className="left">
              
            </div>
            <div className="right">
              <h2>Fill the Required Details</h2>
              <input type="text" className="field" placeholder="Your Name" />
              <input type="email" className="field" placeholder="Your Email" />
              <input type="text" className="field" placeholder="Channel Name" />
              <input type="url" className="field" placeholder="Channel Url" />
              <button className="btn">Generate Analysis</button>
            </div>
          </div>
        </div>
        {/* Third div */}
        <div className="About">
          <div className="line">
            <h1>Beyond Likes and Dislikes</h1>
          </div>
          <div className="para">
            Yeah Hello to everyone,Me(Kunal) and my friend Rajeev are from engineering background.<br />
            So one day we both were watching comedy videos of our favourite creators and <br /> then my friend noticed something
            about the comment section. He suggested to automate the process <br />of comment section into one analysis report. Guess what here we are now......
          </div>
        </div>
        {/* Fourth Div */}
        <div className="fourthdiv">
          <h1>Our Happy Clients</h1>
          <div className="clients">
            <img className="client-pic" src="\src\assets\Components\carrylogo.jpg" alt="Client 1" />
            <img className="client-pic" src="\src\assets\Components\fblogo.jpg" alt="Client 2" />
            <img className="client-pic" src="\src\assets\Components\technologo.jpg" alt="Client 3" />
            <img className="client-pic" src="\src\assets\Components\mortallogo.jpg" alt="Client 4" />
          </div>
        </div>
        {/* Fifth Div */}
        <div className="fifthdiv">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Email: mymailwork5402@outlook.com</p>
            <p>Phone: +91 7892989876</p>
            <p>Address: NIET Knowledge Park 2 ,Greater Noida(UP), India</p>
          </div>
          <div className="feedback-form">
            <VismeForm/>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer">
          &copy; 2024 BhaicharaAtBottom. All rights reserved.
        </footer>
      </div>
    );
  }
}

export default Project;

