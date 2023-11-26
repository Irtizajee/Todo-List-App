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
        // setUserInput(val)
    }
    function del(e){
        // console.log(e.target.parentElement.remove())
        e.target.parentElement.remove()
        // const p = e.target.parentElement
        // p.removeElenment()

    }
    const [userInput , setUserInput] = useState()

    const [edit_save_btn , setEdit_save_btn] = useState("fa-solid fa-pen-to-square")
    const [userEditField , setUserEditField] = useState({display:"none"})
    const [userEditVal , setUserEditVal] = useState()
    const [save_edit_style , setSave_edit_style] = useState({
       cursor:"pointer",
       
    })
    function mouseEnter(e){
        e.target.parentElement.children[2].style.color = "#51a0e8"
    }
    function mouseOut(e){
        e.target.parentElement.children[2].style.color = "black"
    }
    function edit(e){
        if (e.target.parentElement.children[2].className === "fa-solid fa-pen-to-square")
        {
            
            // console.log(e.target.parentElement.firstElementChild.innerHTML)
        // console.log(e.target.parentElement.children[1].value = e.target.parentElement.children[0].innerHTML);
        e.target.parentElement.children[1].value = e.target.parentElement.children[0].innerHTML
        // console.log(e.target.parentElement.children[2].className = "fa-solid fa-floppy-disk")
        e.target.parentElement.children[2].className = "fa-solid fa-floppy-disk"
        // console.log(e.target.parentElement.children[1].style.display = "block")
        e.target.parentElement.children[1].style.display = "block"
        e.target.parentElement.children[0].innerHTML = ""
            // setEdit_save_btn("fa-solid fa-floppy-disk")
            // console.log()
        }
        else{
            // console.log(e.target.parentElement.firstElementChild.innerHTML = e.target.parentElement.children[1].value)
            e.target.parentElement.firstElementChild.innerHTML = e.target.parentElement.children[1].value
            // console.log(e.target.parentElement.children[2].className = "fa-solid fa-pen-to-square")
            e.target.parentElement.children[2].className = "fa-solid fa-pen-to-square"
        // console.log(e.target.parentElement.children[1].style.display = "none")
        e.target.parentElement.children[1].style.display = "none"
        // e.target.parentElement.children[0].style.display = "block"

        }

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
                        // setUserInput(items)
                        return  <div > <span  > {items} </span> <input onChange={(e) => setUserEditVal(e.target.value)} value={userEditVal} type="text" className='userEditOption' style={userEditField} /> <i onMouseEnter={mouseEnter} onMouseLeave={mouseOut} onClick={edit} style={save_edit_style} class={edit_save_btn}></i>
                        {/* <i class="fa-solid fa-floppy-disk"></i> */}
                         <button onClick={del}>X</button> </div> 
                        // return  <div  onClick={checkInfo} > <input type="text" onChange={(e)=> setUserInput(e.target.value) } value={items}  />  <button onClick={del}>X</button> </div>
                    }
                )
              }
                
            </div>
            <div className='btn-toDo_list'>
                <div className='input_field'>
                    <input value={val} onChange={ (e) => setVal(e.target.value)} type="text" placeholder='Type your task' />
                </div>
                <button onClick={listing} className='add_btn'><i class="fa-solid fa-plus addListBtn"></i></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Basic_two;