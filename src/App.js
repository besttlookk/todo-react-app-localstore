import React,  {useState, useEffect} from 'react'
import './App.css';
import Input from './components/Input/Input';
import List from './components/List/List';
import { getFromStore, addToStore, removeFromStore, markComplete, redo} from './utils/store';
import { v4 as uuidv4 } from 'uuid'
import Message from './components/Message/Message';



function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [message, setMessage] =useState('')
  const [variant, setVariant] = useState('')

  useEffect(()=>{
    setTodos(getFromStore())
  }, [])

  const showMessage = (message, variant)=>{
    setMessage(message)
        setVariant(variant)
      setTimeout(()=>{
        setMessage("")
        setVariant("")
      },2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uuidv4()
    // const formValue
    const {todoList, error} = addToStore(e.target.input.value, id)
    setInput('')
    if(error){
      alert(error)
    }else{
      setTodos(todoList)

      showMessage("Item Added Successfully", "success")
      

    }
}


  const handleIconClick = (e) =>{

        if(e.target.id === 'trashbtn'){
            
            const {filterTodos} = removeFromStore(e.target.parentElement.firstElementChild.id)
            setTodos(filterTodos)

            showMessage("Item removed Successfully", "danger")
        }

        if(e.target.id === 'completebtn'){
          const {editedTodos} = markComplete(e.target.parentElement.firstElementChild.id)
          setTodos(editedTodos)
          showMessage("Item marked as complete", "warning")

        }
        if(e.target.id === 'redobtn'){
          const {editedTodos} = redo(e.target.parentElement.firstElementChild.id)
          setTodos(editedTodos)
          showMessage("Item adain added", "info")

        }
    }


  return (
    <div className="app">
      {message && <Message variant={variant}>{message}</Message>}
      <h3 className='mt-5'>ToDo List</h3>
      <Input input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <List todos={todos}  handleIconClick={handleIconClick}/>
    </div>
  );
}

export default App;
