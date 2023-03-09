import { auth } from "./config"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { goToLoginPage, goToMainPage } from "../../routes/coordinator"

export const login = async (form, navigate, setLoading) => {
    try {
        await signInWithEmailAndPassword(auth, form.email, form.password)
        goToMainPage(navigate)
    } catch (err) {
        console.log(err)
        alert("Erro no login, tente novamente")
        setLoading(false)
    }
}

export const logout = async (navigate, setLoading) => {
    try {
        await signOut(auth)
        goToLoginPage(navigate)
    } catch (err) {
        console.log(err)
        setLoading(false)
    }
}

export const isLogged =  async(setStatus) => {
  return onAuthStateChanged(auth, (user)=>{
       if(user){
        setStatus({loggedIn: true})
       } else {
        setStatus({loggedIn: false})
       }
    })
}