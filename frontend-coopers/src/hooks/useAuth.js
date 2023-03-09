import { useLayoutEffect, useState } from 'react';
import { isLogged } from '../services/requests/auth';

export const useAuth =() => {
    const [status, setStatus] = useState({ loggedIn: null, userId:null })

    useLayoutEffect(() => {  
        isLogged(setStatus);   
    },[])
  return status
}