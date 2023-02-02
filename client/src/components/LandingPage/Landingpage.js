import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Landingpage = () => {
  return (
      <div className='Landing'>
        {/* <img src="https://picsum.photos/seed/picsum/200/300" alt=''/> */}
        <img src="https://tse3.mm.bing.net/th?id=OIP.JvJlzAtZEMQAIKPuJ_RjgAHaFj&pid=Api&P=0" alt=''/>
        <div className='routingpart'>
          <h4><span>10X</span><span>Team</span><span>04</span></h4>
         <Link to='/postview'><button type='button' className='enter'>Enter</button></Link> 
        </div>
      </div>
  )
}

export default Landingpage;


















