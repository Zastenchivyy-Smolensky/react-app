import React, { useEffect, useState } from 'react';

const ToggleButton=()=> {
    const [open,setOpen] = useState(false)
    const toggle =()=>{
        setOpen(prevState=>!prevState)
    }
    useEffect(()=>{
        console.log("current state is", open)
        if(open){
            console.log("Subscribe database ...")
        }
        return ()=>{
            console.log("unsubscribe database!")
        }
    })
    return(
    <div>
        <button onClick={toggle}>
            {open ? "open": "close"}
        </button>
    </div>
    )
}

export default ToggleButton;
