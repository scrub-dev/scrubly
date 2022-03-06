import React from "react";
import pageconfig from "./pageconfig";

export default class Navbar extends React.Component {
  render(){
    return (
      <header>
        <nav>
          <div className="nav-wrapper main-bg">
            <div className="left">
              <div className="left brand-logo">
                <a href='/' className='accent-underline slight-margin hide-on-mobile'>Scrubly</a>
              </div>
            </div>
          <ul className="right">
            {pageconfig.generateLinks()}
          </ul>
          </div>
        </nav>
      </header>
    )
  }
  // render(){
  //   return (
  //     <nav>
  //     <div class="nav-wrapper">
  //       <a href="#" class="brand-logo right">Logo</a>
  //       <ul id="nav-mobile" class="left hide-on-med-and-down">
  //         <li><a href="sass.html">Sass</a></li>
  //         <li><a href="badges.html">Components</a></li>
  //         <li><a href="collapsible.html">JavaScript</a></li>
  //       </ul>
  //     </div>
  //   </nav>
  //   )
  // }

}