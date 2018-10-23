import React,{ Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import './css/ElysianInformationSlide.css'
import Screenshot from '../resources/images/Screenshots/museum_resize.jpg'
import Lorem from 'react-lorem-component'

class ElysianInformationSlide extends Component{
    render(){
        return(
            <Paper className="Cornerless Slide" style={{
                
            }}>
                <div className="SlideContent">
                    <div className="SlideImage SlideHalf">
                        <img width={100} src = {Screenshot} alt = "Museum"/>
                    </div>
                    <div className="SlideTitle SlideHalf">
                        <Typography variant="h3">
                            {
                                this.props.Title
                            }
                        </Typography>
                        <Typography variant="h5">
                            {
                                this.props.Subtitle
                            }
                        </Typography>
                        <Typography>
                            <Lorem count={1}/>
                        </Typography>
                    </div>
                </div>
            </Paper>
        )
    }
}

export default ElysianInformationSlide