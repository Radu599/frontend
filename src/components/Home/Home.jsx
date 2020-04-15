import React, { Component } from 'react';
import './Home.scss';
import { BrowserRouter, NavLink } from 'react-router-dom';
export class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (

            <div className="background">
                <div className="part1">
                    <div className="upperText">
                    </div>
                </div>
                <div className="part2" id="#Overview">
                    <div className="textAbout">
                        <h1 className="paragraphsHead" >
                            Overview
                        </h1>
                        <p className="aboutParagraph">
                            Geolocation is the identification or estimation of the real-world geographic location of an object, such as a radar source, mobile phone, or Internet-connected computer terminal. In its simplest form, geolocation involves the generation of a set of geographic coordinates and is closely related to the use of positioning systems, but its usefulness is enhanced by the use of these coordinates to determine a meaningful location, such as a street address.
                            The phone is going to push data to Firebase periodically. The 2nd app is a website that is retrieving data from firebase and displays it.
                        </p>
                    </div>
                </div>
                <div className="part2">
                    <div className="textAbout">
                        <h1 className="paragraphsHead" >
                        Screenshots
                        </h1>
                        <p className="aboutParagraph">
                            TO DO
                        </p>
                    </div>
                </div>
                <div className="part2">
                    <div className="textAbout">
                        <h1 className="paragraphsHead" >
                            Schematics
                        </h1>
                        <p className="aboutParagraph">
                        </p>
                    </div>
                </div>
                <div className="part2">
                    <div className="textAbout">
                        <h1 className="paragraphsHead" >
                        Pre-requisites
                        </h1>
                        <p className="aboutParagraph">
                            - Android device
                        </p>
                    </div>
                </div>
                <div className="part2">
                    <div className="textAbout">
                        <h1 className="paragraphsHead" >
                        Setup-and-build
                        </h1>
                        <p className="aboutParagraph">
                            The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our iOS, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.                  
                    </p>
                    </div>
                </div>
            </div>


        );
    }
}

export default Home;
