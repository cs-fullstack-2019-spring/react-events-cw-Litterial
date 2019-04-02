import React,{Component} from 'react'
import './App.css'
import App from './App'


class Clicking extends Component{

    state={score:0,};
    constructor(props)
    {
        super(props)
    }


    clickme=(e)=>
    {      //this.props.add grapbs the number incrementer from its parent
     this.setState({score:this.state.score+this.props.add})
    };


    render(){
            return(

                <div>
                    <h1>Player:{this.props.Number}</h1>
                    <h2>Score:{this.state.score}</h2>
                    <input type='button' value={this.props.add+'pt'} onClick={this.clickme}/>
                </div>

            )



        }
    }


export default Clicking;