import { Link } from '@mui/material'
import React from 'react'
import "./box.scss"

const Box = (props) => {
    const date = new Date(props.publishedAt)
    const currentDate = new Date();
    var hours = Math.floor(Math.abs(currentDate - date) / 36e5)

    return (
        <div className='boxContainer'>
            <div className="top d-flex jusify-content-between">
                <div>
                    <div className="title">
                        <span>"{props.title}"</span>
                    </div>
                    <div className="info">
                        {props.source} {hours} hours ago
                    </div>
                </div>
                <div className="img">
                    <img src={props.img} alt="" />
                </div>
            </div>
            <div className="bottom">
                <li className="desc">
                    "{props.desc}"
                </li>
                <a href={props.url}>View Full coverage</a>
            </div>
        </div>
    )
}

export default Box