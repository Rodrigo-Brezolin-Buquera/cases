import { useLayoutEffect, useState } from 'react';
import { useNavigate} from "react-router-dom"
import { goToLoginPage } from '../routes/coordinator';
import { isLogged } from '../services/requests/auth';

export const useProtectedPage =() => {
    const [status, setStatus] = useState({ loggedIn: null })
    const navigate = useNavigate()

    useLayoutEffect(() => {  
   
        isLogged(setStatus);
        
    },[])

    if(status.loggedIn === false) {
        goToLoginPage(navigate)
    }
}