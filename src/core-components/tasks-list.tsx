import Button from "../components/button";

import PlusIcon from "../assets/icons/Plus.svg?react";
import TaskItem from "./task-item";

export default function TasksList(){
    return (
        <>
            <section>
                <Button icons={PlusIcon} className="w-full">Nova Tarefa</Button>
            </section>

            <section className="space-y-2">
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </section>
        </>
    );
}