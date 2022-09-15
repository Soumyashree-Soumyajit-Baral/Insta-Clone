import React, { useState } from 'react'
import "./style.css"
import Cir from "../Images/Cir.svg";
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios';
const Formpage = () => {
    const Navigate = useNavigate()
    const [input , setinput] = useState({Author : "",Location:"",image:"",Description:""})
    const [value,setvalue] = useState("No File Chosen")
    const convertbase64 = (file)=> new Promise((res,rej)=>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => res(reader.result)
        reader.onerror = (err) =>rej(err)
    })
    const onupload = async (e)=>{
        console.log("Hello")
        const file = e.target.files[0]
        const base64 = await convertbase64(file)
        setinput({...input,image:base64})
        setvalue(e.target.value)
    }
    const Submithandler =  (e)=>{
        e.preventDefault()
        if(!input.image){
            alert("Please Post A Image")
        }else{
            axios({
                url:"https://instaclone-10x-back-end.herokuapp.com/",
                method:"POST",
                headers :{
                },
                data : input
               }).then((post)=>{
                    Navigate("/postview")
               }).catch((err)=>{
                console.log(err)
               })
               setinput({Author:"",Location:"",Description:"",image : ""})
               setinput("No File Chosen")
        }
    }  
    return (
        <div className='Container'>
            <header className='Header'>
                <div className='Nav'>
                    <img src={Cir} alt='Logo' />
                    <span className='Text'>InstaClone</span>
                    {/* <img src='instaclone.png' alt='logo' /> */}
                </div>
             <Link to="/formpage"><span className="material-symbols-outlined">+</span></Link>  
            </header>
            <div className='Form-part'> 
                 <form className='FormSection' onSubmit={Submithandler} action='' method='POST'>
                    <div className='part1'>
                        <span>
                          {value}
                        </span>
                        <label htmlFor='file'>
                            Browser
                        </label>
                        <input type="file" id="file" onChange={(e)=> onupload(e)} required/>
                    </div>
                    <div className='part2'>
                        <input type="text" id="Author" value={input.Author}  placeholder='Author' onChange={e => setinput({...input,Author:e.target.value})} required/>
                        <input type="text" value={input.Location} id="Location" placeholder='Location' onChange={e => setinput({...input,Location:e.target.value})} required/>
                    </div>
                    <div className='part3'>
                        <input type="text" value={input.Description} placeholder='Description' id='Description' onChange={e => setinput({...input,Description:e.target.value})} required/>
                    </div>
                    <div className='part4'>
                    <button type='submit'>Post</button>
                    </div>
                 </form>
            </div>
        </div>
    );
}

export default Formpage
