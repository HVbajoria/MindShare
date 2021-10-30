import React, { useEffect, useState } from 'react'
import logo from "./logo.png";
import "./welcome.scss";
import { Link,Route} from "react-router-dom";
import SawoLogin from 'sawo-react'
import { Redirect } from 'react-router'
import Sawo from 'sawo'

var logIn=false;

const LoginPage = () => {
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'email',
            // Add the API key copied from 5th step
            apiKey: process.env.REACT_APP_API_KEY,
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                return(
                <Redirect to="/loggedin" /> 
                )
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])
    return (
        <div className="homepage">
        <img src={logo} height={120} width={120} />
        <h1>Welcome to MindShare</h1>
        <div id="sawo-container" style={{height:"720px", width:"450px"}} ></div>
        <Link to={`/loggedin`}>
        <button logIn={true}>Join In</button>
      </Link>
        </div>
    )
}

export default LoginPage;