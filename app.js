let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');

//local storage,cookies
let todos = [];

window.onload = ()=>{ // every time it runs when window load
    todos = JSON.parse(localStorage.getItem('todos')) || []   // The parse method in JavaScript is used to convert a JSON string into a JavaScript object.
    // if any values exist it gets else empty array
    todos.forEach(todo=>addtodo(todo)) 
}

button.addEventListener('click',()=>{
    // todos.push(input.value) // adding the values to todos
    localStorage.setItem('todos',JSON.stringify(todos)) // changing todos to string
    // key : 'todos' , value : [todos]
    // addtodo(input.value) // value as a parameter
    let now = new Date();
    let formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    let todoWithDate = `${input.value} (Added on: ${formattedDate})`;

    todos.push(todoWithDate);
    localStorage.setItem('todos', JSON.stringify(todos));
    addtodo(todoWithDate);

    input.value='' // after entering the input make it input box empty
})


function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
        
        para.addEventListener('click',() => {
            para.style.textDecoration = 'none'
            remove(todo)
        })
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}


// function addtodo(todo){
//     let para = document.createElement('p');
//     // Get current date and time
//     let now = new Date();
//     let formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
//     para.innerText = `${todo} (Added on: ${formattedDate})`;
//     todoList.appendChild(para);
    
//     para.addEventListener('click',()=>{
//         para.style.textDecoration = 'line-through';
//         remove(todo);
//     });
//     para.addEventListener('dblclick',()=>{
//         todoList.removeChild(para);
//         remove(todo);
//     });
// }


function remove(todo){ // delete values from the list using index value
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
      }
    // localStorage.clear() => it clears all data's in the storage 
    localStorage.setItem('todos',JSON.stringify(todos))
    // at before , i deleted the value with the index position 
    // so in the next line i set the values from the fresh list
    // fresh list means without deleted value...
}

// local storage - user oda computer memory ah use panikum...
// avangalodadha avangalodhuleh store pandrom...
// to store small information...