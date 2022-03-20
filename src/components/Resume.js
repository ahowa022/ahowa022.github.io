import React, { Component, Fragment } from "react";
import Expand from "react-expand-animated";


class Resume extends Component {
    state = {works: false, coding: false, software: false};
    
    work = () => {
        this.setState(prevState => ({ works: !prevState.works }));
    };

    coding = () => {
      this.setState(prevState => ({ coding: !prevState.coding }));
    };

    software = () => {
      this.setState(prevState => ({ software: !prevState.software }));
    };

    render() {
        const styles = {
          open: { background: "#ecf0f1" }
        };
        const transitions = ["height", "opacity", "background"];
    
        return (

          <Fragment>
            <div className="max-w-5xl mx-auto text-center text-white-100 bg-black-800 font-bold text-2xl pt-4 pb-2">
              My Experiences</div>
              <div className="max-w-5xl mx-auto text-center">
              <h2>University of Ottawa</h2>
              <h3>Computer Engineering class of 2022</h3>
              </div>
              <br/>
            <main className="max-w-5xl mx-auto text-center">
              <div className="max-w-xs mx-auto my-2.5 text-center">
                <a className="cursor-pointer whitespace-nowrap inline-block h-10 leading-10 pt-0 pb-0 pr-3 pl-3 bg-black rounded text-sm font-semibold text-white hover:bg-blue-800" onClick={this.work}>Work Experience</a>
              </div>
              <Expand
                open={this.state.works}
                duration={1000}
                styles={styles}
                transitions={transitions}>
                <div className="flex justify-around bg-white">
                  <div className="max-w-xs text-white h-80 flex items-center text-xl font-bold bg-blue-800 rounded m-5 p-2 flex-auto" >
                    <div>
                      <h1>CIENA Corporation</h1>
                      <h2>Modem Electro-Optics Firmware Designer</h2>
                      <h2>Sep 2021 - Dec 2021</h2>
                    </div>
                  </div>
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded block m-5 p-2 flex-auto"> 
                  <div >
                      <h1 >CIENA Corporation</h1>
                      <h2>Optical Microsystems Real-Time Embedded Software Developer</h2>
                      <h2>Jan 2021 - Apr 2021</h2>
                    </div>
                  </div>
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto">
                    <div>
                        <h1>CIENA Corporation</h1>
                        <h2>Optical Microsystems Product Verification</h2>
                        <h2>May 2020 - Dec 2020</h2>
                    </div>
                  </div>
                </div>
              </Expand>

              <div className="max-w-xs mx-auto my-2.5 text-center pt-5">
                <a className="cursor-pointer whitespace-nowrap inline-block h-10 leading-10 pt-0 pb-0 pr-3 pl-3 bg-black rounded text-sm font-semibold text-white hover:bg-blue-800" onClick={this.coding}>Coding</a>
              </div>
              <Expand
                open={this.state.coding}
                duration={1000}
                styles={styles}
                transitions={transitions}>
                <div className="flex justify-around bg-white">
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto" >
                      <h1>Java</h1>
                  </div>
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded block m-5 p-2 flex-auto"> 
                      <h1 >C</h1>
                  </div>
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto">
                        <h1>VHDL</h1>
                  </div>
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto">
                        <h1>PostgreSQL</h1>
                  </div>
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto">
                        <h1>Prolog</h1>
                  </div>
                  
                </div>
                <div className="flex justify-around bg-white">
                <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto">
                        <h1>Python</h1>
                  </div>
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto">
                        <h1>Go</h1>
                  </div>
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto">
                        <h1>JavaScript</h1>
                  </div>
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto">
                        <h1>Firebase</h1>
                  </div>
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto">
                        <h1>Assembly</h1>
                  </div>
                </div>
              </Expand>
              

            
              <div className="max-w-xs mx-auto my-2.5 text-center pt-5">
                <a className="cursor-pointer whitespace-nowrap inline-block h-10 leading-10 pt-0 pb-0 pr-3 pl-3 bg-black rounded text-sm font-semibold text-white hover:bg-blue-800" onClick={this.software}>Software/OS</a>
              </div>
              <Expand
                open={this.state.software}
                duration={1000}
                styles={styles}
                transitions={transitions}>
                <div className="flex justify-around bg-white">
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto" >
                      <h1>Jira</h1>
                  </div>
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded block m-5 p-2 flex-auto"> 
                      <h1>Linux</h1>
                  </div>
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto">
                        <h1>Quartus</h1>
                  </div>
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto">
                        <h1>ModelSim</h1>
                  </div>
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto">
                        <h1>Android Studio</h1>
                  </div>
                  
                </div>
                <div className="flex justify-around bg-white">
                <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto">
                        <h1>Trello</h1>
                  </div>
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto">
                        <h1>Jenkins</h1>
                  </div>
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto">
                        <h1>Confluence</h1>
                  </div>
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto">
                        <h1>Bitbucket</h1>
                  </div>
                </div>

                <div className="flex justify-around bg-white">
                <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto">
                        <h1>Artifactory</h1>
                  </div>
                  <div className="max-w-xs text-white h-80 flex items-center text-xl justify-center font-bold bg-blue-800 rounded m-5 p-2 flex-auto">
                        <h1>ROBO Framework</h1>
                  </div>
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto">
                        <h1>Git</h1>
                  </div>
                  <div className="max-w-xs text-black h-80 flex items-center text-xl justify-center font-bold bg-gray-400 rounded m-5 p-2 flex-auto">
                        <h1>Wireshark</h1>
                  </div>
                </div>
              </Expand>

            </main>
            
          </Fragment>

          
        );
      }
    }
    
    export default Resume;