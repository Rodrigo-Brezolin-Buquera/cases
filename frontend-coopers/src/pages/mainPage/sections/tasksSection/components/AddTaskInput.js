import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { createTask } from "../../../../../services/requests/crud";

export const AddTaskInput = ({userId, setLoading }) => {
    const [text, setText] = useState("");

    const handleKeyPress = async (e) => {
       if(e.key === "Enter"){
        const newTask = {name: text, done: false}
        await createTask(userId,newTask,setLoading, setText)
        
    }}

    return (
            <Input 
              type="text"
              variant='unstyled'
              fontFamily={"primary"}
              fontWeight={"black"}
              color={"black"}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
              placeholder="Add a new task!"
              mb={"0.2em"}
            />        
    )
}