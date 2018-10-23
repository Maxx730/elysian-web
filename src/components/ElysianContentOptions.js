import React,{ Component } from 'react'
import './css/ElysianContentOptions.css'

class ElysianContentOptions extends Component{
    render(){
        return(
            <div className="ElysianContentOptions">
                <ul>
                    <li>Option</li>
                    <li className="MiddleButton">Option</li>
                    <li>Share</li>
                </ul>
            </div>
        )
    }
}

export default ElysianContentOptions