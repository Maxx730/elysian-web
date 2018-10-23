import React,{ Component } from 'react'
import ElysianInformationSlide from './ElysianInformationSlide'

class ElysianInformationSlider extends Component{
    constructor(props){
        super(props)

        this.state = {
            Slides:new Array(),
            Slide:{
                Current:0
            }
        }
    }

    //Populate our slide array with slide objects.
    componentDidMount(){
        this.setState({
            Slides:[<ElysianInformationSlide Title="STORY" Subtitle="of Elysian Shadows"/>,<ElysianInformationSlide Title="ABOUT" Subtitle="of Elysian Shadows"/>,<ElysianInformationSlide Title="COOL" Subtitle="of Elysian Shadows"/>]
        })

        setInterval(() => {
            if(this.state.Slide.Current == this.state.Slides.length - 1){
                this.setState({
                    Slide:{
                        Current:0
                    }
                })
            }else{
                this.setState({
                    Slide:{
                        Current:this.state.Slide.Current + 1
                    }
                })
            }
        },100)
    }

    render(){
        return(
            <div>
                <ElysianInformationSlide Title="STORY" Subtitle="of Elysian Shadows"/>
                <ElysianInformationSlide Title="ABOUT" Subtitle="of Elysian Shadows"/>
                <ElysianInformationSlide Title="COOL" Subtitle="of Elysian Shadows"/>
            </div>
        )
    }
}

export default ElysianInformationSlider