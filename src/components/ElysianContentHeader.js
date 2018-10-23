import React,{ Component } from 'react'
import './css/ElysianContentHeader.css'
import Typography from '@material-ui/core/Typography'

class ElysianContentHeader extends Component{
    render(){
        return(
            <div className="ElysianContentHeader">
                <Typography component="h2" variant="h5">
                    {
                        this.props.Title
                    }
                </Typography>
                <div className="ContentHeaderDate">
                    <Typography>
                        [Author]
                    </Typography>
                    <Typography>
                        [Header Date]
                    </Typography>
                </div>
            </div>
        )
    }
}

export default ElysianContentHeader