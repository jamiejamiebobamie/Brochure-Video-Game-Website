import React,{Component} from 'react'
import NavBar from './NavBar'

// import { NavLink } from 'react-router-dom';


class Download extends Component {
    constructor(props){
        super(props)
    }

render(){
    return (
      <div className="Download">
      <NavBar dropdownMenu={true} width={this.props.width} liftState={this.toggleNavbar} />


          <div className="download_instructions">
              <p>This game is not finished, but I would love some people to play it and give me some feedback. Follow the link below to my Google drive and click the download button in the top right corner.</p>
              <img className="download_instructions" src="/media/imgs/download_instructions/1.png" width="1000" height="625" alt="logo"/>
              <p>To play the game, you will need a Mac operating system and a controller with a USB connector. Once downloaded, the game must be authorized by your Mac to open it.</p>
              <img className="download_instructions" src="/media/imgs/download_instructions/4.png" width="1000" height="625" alt="logo"/>
              <p>Navigate to 'System Preferences' and to the 'Security and Privacy' tab. At the bottom click 'Open Anyway' and then launch the application to play.</p>
              <img className="download_instructions" src="/media/imgs/download_instructions/5.png" width="1000" height="625" alt="logo"/>
              <img className="download_instructions" src="/media/imgs/download_instructions/6.png" width="1000" height="625" alt="logo"/>
              <img className="download_instructions" src="/media/imgs/download_instructions/8.png" width="1000" height="625" alt="logo"/>
              <p>If you have any questions or comments, please contact me at jmccrory@vt.edu! I hope you enjoy playing the game!</p>
          </div>

      </div>

    )
}


}

export default Download

// <a class="download" href="https://drive.google.com/file/d/1gMgRZOwGviJM7Ea-v2l9q56bQqEx7PrX/view?usp=sharing">
// <p class="download_p">Click to Download</p>
// </a>


// <a class="back_button"href="/">
//     <button id="back_button_img" type="button" name="back" title="Back" alt="logo"></button>
// </a>
