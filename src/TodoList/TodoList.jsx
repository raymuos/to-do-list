import { useState } from "react"

function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleNewTask = (e) => setNewTask(e.target.value);

    function moveUp(ind){
        const updatedTasks = [...tasks];

        if(ind>0) [updatedTasks[ind], updatedTasks[ind-1]] = [updatedTasks[ind-1], updatedTasks[ind]];
        setTasks(updatedTasks);
    }

    function moveDown(ind){
        const updatedTasks = [...tasks];
        if(ind < updatedTasks.length - 1) [updatedTasks[ind], updatedTasks[ind+1]] = [updatedTasks[ind+1], updatedTasks[ind]];
        setTasks(updatedTasks);
    }

    function handleAddTask() {
        try {
            if(newTask.trim() !== "" ){
                setTasks([...tasks, newTask.trim()]);

                setNewTask("");
            } else {
                throw new Error("Task is empty. Can't add.");
            }
        } catch (error) {
            window.alert(error);
            setNewTask("");
        }
    }

    function handleRemoveTask(ind){
        setTasks(tasks.filter((_,i) => i !== ind));
    }


    return(
    <div className="flex flex-col justify-baseline items-center gap-4 text-xl md:text-2xl">
        <h1 className="text-4xl lg:text-5xl font-semibold my-4 text-center">Another Generic ahh To-Do List</h1>
        <div className="flex">
            <input className="bg-[#eee] outline-0 text-[#333] pl-4 py rounded-l-full " type="text" placeholder="Enter your task" value={newTask} onChange={(e) => handleNewTask(e)}/>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-0.5 rounded-r-full text-white font-semibold cursor-pointer" onClick={handleAddTask} > Add </button>
        </div>
        <div className="flex flex-col gap-2 ">
            {tasks.map((task, index) => 
                        <div className="flex flex-col justify-between bg-[#333] lg:w-[750px] rounded-3xl w-[75vw]  " key = {`task-${index}`}>
                            <p className="p-4">{task}</p>
                            <div className="flex bg-[#1c1c1c] w-full p-4 flex-wrap gap-4 items-center rounded-b-3xl justify-end">
                                <button className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-blue-400 hover:to-cyan-700 h-10 px-4 py-0.5 rounded-full text-white font-semibold cursor-pointer" onClick={() => moveUp(index)}>👆</button>
                                <button className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-blue-400 hover:to-cyan-700 h-10 px-4 py-0.5 rounded-full text-white font-semibold cursor-pointer" onClick={() => moveDown(index)}>👇</button>
                                <button className="bg-gradient-to-r from-orange-500 to-red-700 hover:from-red-700 hover:to-red-900 h-10 px-4 py-0.5 rounded-full text-white font-semibold cursor-pointer" onClick={() => handleRemoveTask(index)}>Delete</button>
                            </div>
                        </div>
                    )}
        </div>
    
    </div>
    )
}

export default TodoList;