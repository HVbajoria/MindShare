import React, { useEffect, useState } from 'react'
import logo from "./logo.png";
import "./welcome.scss";
import { Link,Route} from "react-router-dom";
import { Redirect } from 'react-router'

const LoginPage = () => {
    return (
        <div className="homepage">
        <img src={logo} height={220} width={220} />
        <h1>Welcome to MindShare</h1>
        <Link to={`/loggedin`}>
        <button logIn={true}>Join In</button>
      </Link>
        </div>
    )
}

export default LoginPage;