import React, { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState();
    function Addtodo() {
        let newTodos = [...todos, { todo: newTodo.trim() }]
        setTodos(newTodos);
        setNewTodo("")
        console.log(newTodos)
    }
    
  function clearTodo() {
    setTodos([])
  }
    return (
        <div className='fluid-container'>
            <h1 className='text-center display-3' style={{ color: "blue", fontWeight: "bold", backgroundColor: "skyblue", borderRadius: "10px" }} >Make A List</h1>
            <input type='text' placeholder='Add Your List' className='form-control' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <br />
            <button className='btn btn-success' onClick={Addtodo}>Save List</button>
            <button className='btn btn-danger' onClick={clearTodo}>Clear List</button>
            <hr />
            <table className='table'>
                <tr>
                    <th>All Save List</th>
                </tr>
                {
                    todos.map((tod) => (
                        <tr>
                            <td>{tod.todo}</td>
                        </tr>
                    ))}
            </table>
            <style>{'body{background-color:skyblue;}'}</style>
        </div>
    )
}
export default TodoList
