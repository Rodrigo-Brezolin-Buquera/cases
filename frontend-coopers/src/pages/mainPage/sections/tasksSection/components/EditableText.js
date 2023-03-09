import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { updateTask } from "../../../../../services/requests/crud";

export const EditableText = (props) => {
  const [text, setText] = useState(props.task.name);
  const [showInputEle, setShowInputEle] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      const editedTask = { name: text, done: props.task.done }
      await updateTask(props.userId, props.task.id, editedTask, setLoading)
      setShowInputEle(false)
    }
  };

  return (
    <div>
      {
        showInputEle ? (
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={() => setShowInputEle(false)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
        ) : (
          <Text
            fontFamily={"primary"}
            fontSize={"xl"}
            textDecoration={ props.task.done ? "line-through" : "none"}
            m={"0.2em"}
            pb={"0.2em"}
            onDoubleClick={() => setShowInputEle(true)}
            ref={props.providedRef}
            {...props.draggableProps}
            {...props.dragHandleProps}
          >
            {text}
            {props.providedPlaceholder}
          </Text>
        )
      }

    </div>
  );
}

