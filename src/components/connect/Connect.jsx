import React from "react";
import "./connect.scss"
import Button from '@material-ui/core/Button';
import {GitHub, LinkedIn, Email, Instagram, Assignment} from "@material-ui/icons"

export default function Connect() {
    return (
        <div className="connect" id="connect">

            <div className="left">
                <div>
                    <h1>Contact</h1>

                    <form action="action_page.php">
                        <label htmlFor="fname" className="labels">First Name:</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                        <label htmlFor="lname" className="labels">Last Name:</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                        <label htmlFor="email" className="labels">Email Address:</label>
                        <input type="text" id="email" name="email" placeholder="example@mail.com"></input>

                        <label htmlFor="Reasons for Reaching Out"></label>
                        <p className="labels">Reason for Contact:</p>
                        <select name="service" id="service" placeholder="Reason for Contact" className="labels">
                            <option value="request">Request Develop Services</option>    
                            <option value="internship">Reaching Out About Internship/Job</option>
                            <option value="other">Other</option>
                        </select>

                        <label htmlFor="subject" className="labels">Other Comments:</label>
                        <textarea name="message" id="message" class="form-control" rows="4" placeholder="Write Here..." required="" data-lt-tmp-id="lt-734569" spellcheck="false" data-gramm="false"></textarea>
                        <input type="submit" value="Submit" className="labels"/>
                    </form>
                </div>
            </div>

            <hr />

            <div className="right">
                
                <h1 className="header">Links</h1>
                <br /> <br /> <br />
                <div className="buttonGroup">
                <Button variant="contained" color="default" href="https://www.linkedin.com/in/aditya-srikanth-472540117/" target="_blank"
                    startIcon={<LinkedIn />} className="linkedIn">
                    LinkedIn
                </Button>
                <br /> <br /> <br />
                <Button variant="contained" color="default" href="https://github.com/AdityaSri11" target="_blank"
                    startIcon={<GitHub />} className="gitHub">
                    GitHub
                </Button>
                <br /> <br /> <br />
                <Button variant="contained" color="default" href="http://instagram.com/aditya.srikanth" target="_blank"
                    startIcon={<Instagram />} className="instagram">
                    Instragram
                </Button>
                <br /> <br /> <br />
                <Button variant="contained" color="default" href="mailto: aditya.srikanth11@gmail.com"
                    startIcon={<Email />} className="email">
                    Email
                </Button>
                <br /> <br /> <br />
                <Button variant="contained" color="default" href="https://drive.google.com/file/d/1OFxT3Z8zJuYOi-pb1Qg0xjH-icPuRh2I/view?usp=sharing"
                    target="_blank" startIcon={<Assignment />} className="resume">
                    Résumé
                </Button>
                </div>
            </div>

            
        </div>
    ) 
}