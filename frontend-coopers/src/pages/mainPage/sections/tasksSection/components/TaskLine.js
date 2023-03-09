import { Draggable } from 'react-beautiful-dnd';
import { EditableText } from './EditableText';
import { Box, Checkbox } from '@chakra-ui/react';
import { DeleteTaskButton } from './DeleteTaskButton';
import { updateTask } from '../../../../../services/requests/crud';

export const TaskLine = ({ index, userId, task, setLoading }) => {

    const changeStatus = () => {
        const newTask = { name: task.name, done: !task.done }
        updateTask(userId, task.id, newTask, setLoading)
    }

    return (
        <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
                <Box display={"flex"} alignItems="center" justifyContent={"space-between"}>
                    <Box display={"flex"} gap={"0.5em"} alignItems={"center"}>
                        <Checkbox
                            variant={"circle"}
                            size={"lg"}
                            isChecked={task.done}
                            onChange={changeStatus}
                            colorScheme= {task.done ? "green" : "orange"}

                        />
                        <EditableText
                            userId={userId}
                            task={task}
                            providedRef={provided.innerRef}
                            draggableProps={{ ...provided.draggableProps }}
                            dragHandleProps={{ ...provided.dragHandleProps }}
                            providedPlaceholder={provided.placeholder}
                        />
                    </Box>

                    <DeleteTaskButton
                        userId={userId}
                        taskId={task.id}
                        setLoading={setLoading}
                    />
                </Box>

            )}
        </Draggable>
    )
}