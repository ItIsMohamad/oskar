import React from 'react'
import airplane from '../images/airplane.jpg'
import location_tag from '../images/tag.png'



export default function Cards(props){
    return(
        <div>
        <div className='card'>
           <div className='photo-div'>
        <img src={props.image} className="photo"/>
        
        </div>
        <div >
        <div className='first-line'>
        <img src={location_tag} className="tag"></img>
        <div className='country'>{props.country}</div>
        <div><a href={props.link_address} >View On GoogleMaps</a></div>
        </div>
        
        <h2>{props.name}</h2>
        <h4>{props.date}</h4>
        <p>{props.description}</p>
        <button className='but'>button</button>
        </div>
       
        </div>
        <hr className='hr-1'/>
        </div>
        
       
    )
}