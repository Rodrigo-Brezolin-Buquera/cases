import { auth } from "./config"
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"

export const login = async (form, setLoading) => {
    try {
        setLoading(true)
        await signInWithEmailAndPassword(auth, form.email, form.password)
        setLoading(false)

    } catch (err) {
        console.log(err)
        alert("Login error, try again later")
        setLoading(false)
    }
}

export const singUp = async (form, setLoading) => {
    try {
        setLoading(true)
        await createUserWithEmailAndPassword(auth, form.email, form.password)
        setLoading(false)
    } catch (err) {
        console.log(err)
        alert("SingUp error, try again later")
        setLoading(false)

    }
}

export const logout = async (setLoading) => {
    try {
        setLoading(true)
        await signOut(auth)
        setLoading(false)

    } catch (err) {
        console.log(err)
        setLoading(false)
    }
}

export const isLogged = async (setStatus) => {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            setStatus({ loggedIn: true, userId: user.uid })
        } else {
            setStatus({ loggedIn: false, userId: null })
        }
    })
}