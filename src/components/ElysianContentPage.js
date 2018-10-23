import React,{ Component } from 'react'
import Paper from '@material-ui/core/Paper'
import './css/ElysianContentPage.css'
import ElysianContentHeader from './ElysianContentHeader'
import ElysianContentContent from './ElysianContentContent'
import ElysianContentOptions from './ElysianContentOptions'

class ElysianContentPage extends Component{
    render(){
        return(
            <Paper className="ElysianContentPage Cornerless">
                <ElysianContentHeader Title="[Update Header]" />
                <ElysianContentContent/>
                <ElysianContentOptions/>
            </Paper>
        )
    }
}

export default ElysianContentPage