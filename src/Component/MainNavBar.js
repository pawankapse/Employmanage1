


import { Link } from 'react-router-dom';
import {useAuth} from '../Component/AuthContaxt'
import axios from 'axios';
export default function MainNavBar() {

    const {logOut} = useAuth();
    const handleout = () =>{
        logOut();
    }
    return (
      <div className='nav'>
         <Link to="/addemp">addemp</Link>
          <Link to="/view">view All employ</Link>
          <button onClick={handleout}>LogOut</button>
           
      </div>
    )
  }




