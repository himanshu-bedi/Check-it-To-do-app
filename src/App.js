import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App=()=>{
    
  
    const [list,setList]=useState("");
    let [items,setItems]=useState([]);
    const [Button,setButton]=useState(true);
    const [weNeedid,setweNeedid]=useState(null);

    let fromlocalstorage=JSON.parse(localStorage.getItem({items}));

    
    // console.log(fromlocalstorage,"this one");
    // console.log("items", items);


    if(fromlocalstorage)
    {
      if(items.length===0)
      {
        for(let i=0;i<fromlocalstorage.items.length;i++)
        {
          items.push(fromlocalstorage.items[i]);
        }
      }
    }

    // console.log("items now ",items);
    localStorage.setItem({items},JSON.stringify({items}));

    // if(fromlocalstorage)
    // items=[fromlocalstorage];




    const inputlist=(e)=>{
        let x=e.target.value;
        setList(x);
    }

    const show=()=>{

      if(!list)
      {

      }
      else
      {
        setItems((prevValue)=>{
           let modified={id:new Date().getTime().toString(),name:list}
            let arr= [...prevValue,modified];
           
            return arr;
            
        })

       
        setList("");
      }
    }

    const deleteItems=(id)=>{
          // console.log("hello pj");  
          if(items.length===1)
          {
            items=[];
            localStorage.clear();
          }
          console.log(id);

         const updated=items.filter((ele)=>{
          return ele.id!==id;
         })
         setItems(updated);
    };

    const editItems=(id)=>{
      // const thing=items[id];
      setButton(false);

      const clickedItem=items.find((ele)=>{
        return ele.id===id;
      })
      console.log(clickedItem);

      setList(clickedItem.name);

      setweNeedid(clickedItem.id);
      
    }

    const editButton=()=>{
         const newitemarray=items.map((ele)=>{
          if(ele.id===weNeedid)
          {
            return {...ele, name:list}
          }
          else
          return ele;
         })
         setItems(newitemarray);
         setButton(true);
         setList('');
    }

    
   
      

   return (
    <>
      <div className='main_div'>
        <div className='center_div'>
            <h1>To do List</h1>
            <input type="text" placeholder="Write item to add" className='input_field' onChange={inputlist} value={list}></input>

            {
            Button===true?
            <button className='btn' onClick={show} >+</button>:
            <button className='fa fa-edit' onClick={editButton} ></button>
            }

            <ol>
                
                   { //for javascript 
                    
                    items.map((val,index)=>{
                       return <ToDoList 
                       itemval={val.name}
                       id={val.id}
                       whenclick={deleteItems}
                       editit={editItems}
                       />
                       })
                   }
               
            </ol>
        </div>
      </div>
     </>
   );

}


export default App;