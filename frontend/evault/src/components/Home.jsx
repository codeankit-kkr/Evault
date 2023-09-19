import React from 'react'
import pxfuel from "../images/pxfuel.jpg"
import description from "../images/description.jpg"
import steps from "../images/steps.jpg"
import web from "../images/web_2_en.jpg"
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
                <div className="navbody">
                    <Link className="navbar-brand" to="/"><img alt="unknown" src={pxfuel} width="60px" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" href="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Documents</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Settings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <img src={web} alt="image" className="imageof" />
            </div>
            <div className="about">
                <div className="description">
                    <h1 >What is E-Vault </h1>
                    <p>DigiLocker is a flagship initiative of Ministry of Electronics & IT (MeitY) under Digital India programme. DigiLocker aims at 'Digital Empowerment' of citizen by providing access to authentic digital documents to citizen's digital document wallet. DigiLocker is a secure cloud based platform for storage, sharing and verification of documents & certificates.
                    </p>
                </div>
                <div className="blockchain">
                    <img alt="unknown" src={description} />
                </div>
            </div>
            <div className="steps">
                <img alt="unknown" src={steps} />
            </div>
            <div className="log">
                <h2>E-vault is safest block chain based vault to store all your Legal records and casefiles with all the safety measures</h2>
                <Link className="btn btn-primary" to="/login" role="button" >SIGN IN / LOG IN</Link>
            </div>
            <section id="7">
                <div className="fot">
                    <footer class="footer">
                        <div class="row">

                            <p>Copyright 2023 Digilocker</p>


                        </div>
                    </footer>
                </div>
            </section>
        </div>
    )
}
