const userInput = document.getElementById("userInput");
const addTaskButton = document.querySelector(".addTaskButton");
// const finiButoon = document.querySelector(".finiButton");
// const deleteButton = document.querySelector(".deleteButton");
const taskList = document.querySelector("#taskList");
const completedTask = document.querySelector("#completedTask")
const userTaskData = [];


function add() {
  const userTaskList = document.createElement('li');
  userTaskList.className = "rel";
  userTaskList.innerHTML += `${userInput.value}
  <div class="butt-group">
      <button class="finiButton">
          <i class="fa-solid fa-circle-check"></i>
      </button>
      <button class="deleteButton">
          <i class="fa-solid fa-trash"></i>
      </button>
  </div>`
 
  
  if(userInput.value === ''){
    alert('please add a task');
  }else{
    taskList.appendChild(userTaskList);
    userTaskData.push(userInput.value);
    console.log(userTaskData);
    userInput.value = '';
    userInput.innerHTML = '';
  }
  
  

  const deleteButton = userTaskList.querySelector('.deleteButton');
  deleteButton.addEventListener('click',()=>handleDelete(userTaskList));

  const finiButoon = userTaskList.querySelector('.finiButton');
  finiButoon.addEventListener('click',()=>handleFinish(userTaskList));
}
function handleFinish(listdata){
   alert(`Congrest Your ${listdata.innerText.trim()} Task is Completed`);
   const finish = listdata.querySelector(".finiButton");
   finish.classList.add('none');
   listdata.classList.add('color');
   completedTask.appendChild(listdata);
   
   
} 
function handleDelete(listdata){
    const data = listdata.innerText;
    const index = userTaskData.indexOf(data.trim());
    console.log("heelo",index);
    if(index!==-1){
        userTaskData.splice(index,1);
    }
    console.log(userTaskData);
    if(listdata.parentElement === taskList){
      taskList.removeChild(listdata);
    }else if(listdata.parentElement === completedTask){
      completedTask.removeChild(listdata);
    }
}



addTaskButton.addEventListener("click", add);
