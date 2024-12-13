const FS = require('fs');
const filesPath = "./Tasks.json";

const loadTasks = ()=>{
    try{
        const dataBuffer = FS.readFileSync(filesPath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    }catch(error){
        return [];
    }
}

const addTask = (task) => {
    const tasks = loadTasks();
    task.push(tasks);
}

const cmd = process.argv[2];
const arg = process.argv[3];

if(cmd == add){
    addTask(arg);
}
else if(cmd == list){
    listTasks();
}else if(cmd == remove){
    removeTask(arg);
}else{
    console.log("Not Found");
    
}