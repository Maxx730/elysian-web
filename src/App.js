import React, { Component } from 'react';
import './App.css';
import LorenMap from './resources/images/CanvasMaps/Loren.png'

//Import our created components here.
import ElysianTopBar from './components/ElysianTopBar'

//Since we do not want the canvas to constantly rerender,
//it will be the only HTML element inside of this component.
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      Window:{
        width:-1000,
        height:-1000
      },
      Position:{
        angle:0,
        radius:40,
        centerX:-300,
        centerY:-300,
        top:0,
        left:0
      },
      Animate:this.Animate.bind(this),
      //Grab the canvas element.
      Canvas:null,
      Context:null,
      Image:null
    }
  }

  //On Page load we want to grab the width and
  //height of the window so the canvas will be
  //the size of the window.
  componentDidMount(){
    this.setState({
      Window:{
        width:window.innerWidth,
        height:window.innerHeight
      },
      Canvas:this.refs.ElysianCanvas
    },() => {
      let image = new Image();
      image.src = LorenMap

      //We need to get the canvas context, which we cannot do until the
      //canvas has actually been initialized.
      this.setState({
        Context:this.state.Canvas.getContext("2d"),
        Image:image
      })
    })

    //Start the animation function while also binding in the
    //component object.
    requestAnimationFrame(this.state.Animate)
  }

  render() {
    return (
      <div className="App">
        <ElysianTopBar/>
        <canvas ref="ElysianCanvas" width={ this.state.Window.width } height={ this.state.Window.height }>

        </canvas>
      </div>
    );
  }

  Animate(){
    //Here we are going to set up our initial canvas.
    this.state.Context.clearRect(0,0,this.state.Window.width,this.state.Window.height)

    //Calculates the circular motion.
    this.state.Position.angle = (this.state.Position.angle + Math.PI / 360) % (Math.PI * 2)
    let TempX = this.state.Position.centerX + this.state.Position.radius * Math.cos(this.state.Position.angle)
    let TempY = this.state.Position.centerY + this.state.Position.radius * Math.sin(this.state.Position.angle)
    //Draws image onto the canvas.
    this.state.Context.beginPath()
    this.state.Context.drawImage(this.state.Image,TempX,TempY)
    this.state.Context.closePath()
    this.setState({
      Position:{
        angle:this.state.Position.angle,
        radius:this.state.Position.radius,
        centerX:this.state.Position.centerX,
        centerY:this.state.Position.centerY,
        top:0,
        left:0
      }
    },() => {

    })

    requestAnimationFrame(this.state.Animate)
  }
}

export default App;
