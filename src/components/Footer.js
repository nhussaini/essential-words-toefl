import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

 const Footer=()=> {
    return (
        <footer className="page-footer" style={{backgroundColor: "#f1f1f1", color: "#008c99", paddingBottom:"5px"}}>
        {/* <div className="footer-copyright"> */}
          <div className="container">
          © 2020 Nasrullah Hussaini
          <a className="grey-text text-lighten-4 right" href="https://www.instagram.com/nasrullahhussaini/"><AiFillInstagram style={{color: "#008c99"}}/></a>
          <a className="grey-text text-lighten-4 right" href="https://github.com/nhussaini"><AiFillGithub style={{color: "#008c99"}}/></a>
          <a className="grey-text text-lighten-4 right" href="https://www.linkedin.com/in/nasrullah-hussaini/"><AiFillLinkedin style={{color: "#008c99"}}/></a>
          
          </div>
        {/* </div> */}
      </footer>
    )
}

export default Footer
