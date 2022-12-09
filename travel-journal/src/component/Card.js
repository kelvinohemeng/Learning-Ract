import React from 'react'
// import CardImage from '../t-j-assets/img-1.jpg'

export default function Card(props){
    return ( 
    <div className='card-container'>
        <div>
        <img className='main-img' src= {`./t-j-assets/${props.image}`}  alt=''/>
        </div>
        <div className='card-others'>
            <div className='top-tag'>
                <div className='location'>
                    <div className='loc-div'>
                        <div>
                        <img className='location-ico' src= {`./t-j-assets/${props.icon}`} alt=''/>
                        </div>
                        <p className='location-name'>{props.location}</p>
                    </div>
                    <a href={props.googleMapsUrl} target="_blank" >View on Google Maps</a>
                </div>
            </div>
            <div className='lower-text'>
                <h1 className='title'>{props.title}</h1>
                <div >
                    <div className='dates'>
                        <p>{props.startDate}</p>
                        <span>-</span>
                        <p>{props.endDate}</p>
                    </div>
                    <div>
                        <p className='desciption'>{props.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}