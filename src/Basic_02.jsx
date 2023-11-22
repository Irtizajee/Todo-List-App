import React, { useState } from 'react'
import './App.css';
function Basic_two() {
    let [array , setArry] = useState([])
    let [val , setVal] = useState()

    function listing(){
        setArry( (prev) =>{
            return [...prev , val]
        } )
        setVal("")
    }
    function del(e){
        console.log(e.target.parentElement.remove())
        // const p = e.target.parentElement
        // p.removeElenment()

    }
  return (
    <>
    <div className='body'>
        <div className='toDo_list'>
            <div className='heading-toDo_list' >
                <h3>Todo List</h3>
            </div>
            <div className='listing-toDo_list'>
                {/* <div> <span>hi jsfksn</span>  <button><i class="fa-solid fa-xmark"></i></button> </div> */}
              {
                array.map(
                    (items)=>{
                        return  <div> <span> {items} </span>  <button onClick={del}>X</button> </div> 
                    }
                )
              }
                
            </div>
            <div className='btn-toDo_list'>
                <div className='input_field'>
                    <input value={val} onChange={ (e) => setVal(e.target.value)} type="text" placeholder='Type your task' />
                </div>
                <button onClick={listing} className='add_btn'><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Basic_two;