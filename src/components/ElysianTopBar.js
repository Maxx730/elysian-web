import React,{ Component } from 'react'
import './css/ElysianTopBar.css'
import Branding from '../resources/images/Logos/branding@2x.png'
import Paper from '@material-ui/core/Paper'
import EVMU from '../resources/images/Logos/vmu_es.png'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { NavigateTo } from '../actions/NavigationActions'

class ElysianTopBar extends Component{
    render(){
        return(
            <div className="ElysianTopBar">
                <div className="TopBarShade">
                    <Paper className="Cornerless">
                        <div className="TopBarContent">
                            <div className="TopBarLogo">
                                <img src = {Branding} width={279}/>
                                <div className="VMUButton">
                                    Check out EVMU
                                </div>
                            </div>
                            <div className="TopBarNavigation">
                                <ul>
                                    <li onClick = {
                                        () => {
                                            this.props.Navigate("INFORMATION")
                                        }
                                    }>
                                        Information
                                    </li>
                                    <li onClick = {
                                        () => {
                                            this.props.Navigate("MEDIA")
                                        }
                                    }>
                                        Media
                                    </li>
                                    <li onClick = {
                                        () => {
                                            this.props.Navigate("UPDATES")
                                        }
                                    }>
                                        Updates
                                    </li>
                                    <li onClick = {
                                        () => {
                                            this.props.Navigate("COMMUNITY")
                                        }
                                    }>
                                        Community
                                    </li>
                                    <li onClick = {
                                        () => {
                                            this.props.Navigate("TEAM")
                                        }
                                    }>
                                        Team
                                    </li>
                                </ul>
                            </div>
                            <div className="ReserveCopy">
                                Reserve Your Copy
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Navigation:state.Navigation
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        Navigate: (Page) => {
            NavigateTo(dispatch,Page)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ElysianTopBar)