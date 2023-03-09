import { useLayoutEffect, useState } from 'react';
import { useNavigate} from "react-router-dom"
import { goToMainPage } from '../routes/coordinator';
import { isLogged } from '../services/requests/auth';

export const useUnprotectedPage =() => {
    const [status, setStatus] = useState({ loggedIn: null })
    const navigate = useNavigate()

    useLayoutEffect(() => {         
     
        isLogged(setStatus);
        
    },[])

    if(status.loggedIn === true) {
        goToMainPage(navigate)
    }
}

