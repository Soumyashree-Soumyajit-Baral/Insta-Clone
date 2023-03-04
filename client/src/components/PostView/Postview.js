import Cir from "../Images/Cir.svg";
import "./style.css"
import React, { useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";



function Postview() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // axios.get("https://instaclone-10x-back-end.herokuapp.com/").then((res)=>{
        // axios.get("http://localhost:4000/home").then((res)=>{
        axios.get("https://instaclone-backend-4cuf.onrender.com/home").then((res)=>{
            let data = res.data.reverse()
            setData(data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    return (
        <div className='Container'>
            <header className='Header'>
                <div className='Nav'>
                    <img src={Cir} alt='Logo' />
                    <span className='Text'>InstaClone</span>
                </div>
             <Link to="/formpage"><span className="material-symbols-outlined">+</span></Link>  
            </header>
            <div className='Cart'> 
                {data.map((dt, index) => {
                    return (
                        <ul key={index} className='Cart_Child'>
                            <li className='row-1 '>
                                <div className='Margin'>
                                    <h3>{dt.Author}</h3>
                                    <span>{dt.Location}</span>
                                </div>
                                <span className="material-symbols-outlined Margin">
                                    ...
                                </span>
                            </li>
                            <li className='row-2'>
                                <img src={dt.image} alt='Post' />
                            </li>
                            <li className='row-1'>
                                <div className='row3'>
                                    <span className="material-symbols-outlined">
                                        <img src="heart.png" alt="img" id="heart"/>
                                    </span>
                                    <span className="material-symbols-rounded">
                                        <img src="arro.png" alt="img" id="heart"/>
                                    </span>
                                    <h6>{dt.likes}Likes</h6>
                                 </div>
                                 <span className='Date'>{dt.date}</span>
                             </li>
                             <li>
                                 <h5 className='des row4'>{dt.Description}</h5>
                             </li>
                         </ul>
                    )
                })}
            </div>
        </div>
    );
}

export default Postview;











