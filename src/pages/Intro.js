import Login from "../components/Login";
import {useState, useEffect, useContext} from "react"
import { DataContext} from '../data/DataContext';
import { Carousel } from "react-bootstrap";
import UncontrolledExample from "../components/Carousel";

function Intro(){
    
    const [user, setUser] = useContext(DataContext);


    const noUser = () => {
        return (
            <p className="welcome">Welcome</p>
        )
    }
  
    const yesUser = () => {
            return (
              <div className="loginField">
                <p className="currentUser-display"> Welcome {user}</p>
              </div>
        )
        //console.log(dataContext[0])
      }

    return(
        <div className="intro-wrapper">
            <div className="login-wrapper">
            <Login />
            </div>
            {user ? yesUser() : noUser()}
            <UncontrolledExample/>
        </div>
    )
}

export default Intro;