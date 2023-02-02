import Cir from "../Images/Cir.svg";
import "./style.css"
import React, { useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";



function Postview() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        // axios.get("https://instaclone-10x-back-end.herokuapp.com/").then((res)=>{
        // axios.get("http://localhost:4000/home").then((res)=>{
        axios.get("https://instaclone-backend-4cuf.onrender.com/home").then((res)=>{
            let data = res.data.reverse()
            setAPIData(data)
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
                {APIData.map((data, index) => {
                    return (
                        <ul key={index} className='Cart_Child'>
                            <li className='row-1 '>
                                <div className='Margin'>
                                    <h3>{data.Author}</h3>
                                    <span>{data.Location}</span>
                                </div>
                                <span className="material-symbols-outlined Margin">
                                    ...
                                </span>
                            </li>
                            <li className='row-2'>
                                <img src={data.image} alt='Post' />
                            </li>
                            <li className='row-1'>
                                <div className='row3'>
                                    <span className="material-symbols-outlined">
                                        <img src="heart.png" alt="img" id="heart"/>
                                    </span>
                                    <span className="material-symbols-rounded">
                                        <img src="arro.png" alt="img" id="heart"/>
                                    </span>
                                    <h6>{data.likes}Likes</h6>
                                 </div>
                                 <span className='Date'>{data.date}</span>
                             </li>
                             <li>
                                 <h5 className='des row4'>{data.Description}</h5>
                             </li>
                         </ul>
                    )
                })}
            </div>
        </div>
    );
}

export default Postview;











