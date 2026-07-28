import React, { useState } from 'react'
import Input from "./Input"
import Output from './Picture'
import { useDrop } from 'react-dnd'
var arr = ["1", "2"]

const FormData = [
    {
        id: 1,
        name: "email"
    },
    {
        id: 2,
        name: "password"
    },
    {
        id: 3,
        name: "text"
    },
    {
        id: 4,
        name: "date"
    },
    {
        id: 5,
        name: "Number"
    },
    {
        id: 5,
        name: "submit"
    }, {
        id: 6,
        name: "radio"
    }, {
        id: 7,
        name: "text"
    }
]
function DragDrop() {
    const [Form, setForm] = useState([]);


    const [Formname, setFormname] = useState("enter form name")
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => adddata(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })

    }))
    const adddata = (id) => {
        var obj = {}
        if (Form.length >= 5) {
            alert("You can enter 20 inputs only ")
        }
        obj["name"] = id.name;
        obj["id"] = Form.length
        obj["label"] = id.name
        obj["data"] = ""
        Form.push(obj)
        // console.log(Form)


    }
    var object = {}
    const handelSubmit = () => {

        Form.map((e) => {
            if (e.name == "") {

            }
            else {
                object[e.name] = e.data
              

            }




        })
        upload(object)

    }
    function upload(object) {
       
       
        fetch("http://localhost:2233/post", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    


    }


    return (
        <>
            <center><h1><div>Drag left to right sidee</div></h1></center>
            <div className='input'><h2>Form fields</h2>{FormData.map((e, i) => (<Input name={e.name} id={e.id} />))}</div>
            <div className='form' ref={drop}><div>hello</div>{Form.map((e, i) => (<Output name={e.name} id={e.id} val={e} arr={Form} />))}
                {Form.length == 0 ? null : <center><button onClick={() => { handelSubmit() }}>submit</button></center>}
            </div>
        </>
    )
}

export default DragDrop
