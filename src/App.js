import React,  {useState, useEffect} from 'react'
import './App.css';
import Input from './components/Input/Input';
import List from './components/List/List';
import { getFromStore, addToStore, removeFromStore, markComplete, redo} from './utils/store';
import { v4 as uuidv4 } from 'uuid'



function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    setTodos(getFromStore())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uuidv4()
    
    const {todoList, error} = addToStore(e.target.input.value, id)
    setInput('')
    if(error){
      alert(error)
    }else{
      setTodos(todoList)
    }
}


  const handleIconClick = (e) =>{

        if(e.target.id === 'trashbtn'){
            
            const {filterTodos} = removeFromStore(e.target.parentElement.firstElementChild.id)
            setTodos(filterTodos)
        }

        if(e.target.id === 'completebtn'){
          const {editedTodos} = markComplete(e.target.parentElement.firstElementChild.id)
          setTodos(editedTodos)
        }
        if(e.target.id === 'redobtn'){
          const {editedTodos} = redo(e.target.parentElement.firstElementChild.id)
          setTodos(editedTodos)
        }
    }


  return (
    <div className="app">
    
      <h3 className='mt-5'>ToDo List</h3>
      <Input input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <List todos={todos}  handleIconClick={handleIconClick}/>
    </div>
  );
}

export default App;
