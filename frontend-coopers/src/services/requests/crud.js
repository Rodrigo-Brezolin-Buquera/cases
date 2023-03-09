import { doc, setDoc,collection, updateDoc, getDocs, deleteDoc, runTransaction  } from "firebase/firestore/lite"
import { database } from "./config"

export const getAllTasks = async (userId, setTasks) => {
    try {
        const taskCollection = collection(database, userId)
        const res = await getDocs(taskCollection)
        const tasksList = res.docs.map((doc) => { return { ...doc.data(), id: doc.id } })
        setTasks(tasksList)
    } catch (err) {
        console.log(err)
    }

}

export const createTask = async (userId, task, setLoading, setState) => { 
    try {
        setLoading(true)
        const taskCollection = collection(database, userId)
        const docRef = doc(taskCollection)
        await setDoc(docRef, {name: task.name, done: task.done})
        setLoading(false)
        setState("")
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao criar tarefa, tente novamente")
    }

}

export const updateTask = async (userId, taskId, task, setLoading) => { 
    try {
        setLoading(true)
        const taskCollection = collection(database, userId)
        const docRef = doc(taskCollection, taskId)
        await updateDoc(docRef, {name: task.name, done: task.done})
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao editar tarefa, tente novamente")
    }

}

export const deleteTaskById = async (userId, taskId, setLoading) => { 
    try {
        setLoading(true)
        const taskCollection = collection(database, userId)
        const docRef = doc(taskCollection, taskId)
        await deleteDoc(docRef)
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao deletar tarefa, tente novamente")
    }

}

export const deleteTaskByStatus = async (userId, status, setLoading) => {
    try {
        setLoading(true)
        await runTransaction(database, async (transaction) => {
            const taskCollection = collection(database, userId)

            const res = await getDocs(taskCollection)

            const toDeleteTasks = res.docs
                .map((doc) => { return { ...doc.data(), id: doc.id } })
                .filter(task => task.done === status)

            toDeleteTasks.forEach((task) => {
                const docRef = doc(taskCollection, task.id)
                transaction.delete(docRef)
            })
        })
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao deletar tarefa, tente novamente")
    }

}