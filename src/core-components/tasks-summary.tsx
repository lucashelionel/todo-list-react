import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {

    const {createdTaskCount, concludedTaskCount, isLoadingTasks} = useTasks();

    return (
        <>
        
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
                <Badge variant="secondary" loading={isLoadingTasks}>{createdTaskCount}</Badge>  
            </div>

            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300">Concluídas</Text>
                <Badge variant="primary" loading={isLoadingTasks}>{concludedTaskCount} de {createdTaskCount}</Badge>  
            </div>

        </>
    );
}