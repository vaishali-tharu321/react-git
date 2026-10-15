import React from "react";
export class Welcome extends React.Component{
    constructor (){
        super()
        this.state={count:0}
       this.increase=this.increase.bind(this)
       this.Decrease=this.Decrease.bind(this)
       this.Reset=this.Reset.bind(this)
    }
    // use of method
     increase(){
            this.setState({count:this.state.count+1})
        }
     Decrease(){
            this.setState({count:this.state.count-1})
        }
     Reset(){
            this.setState({count:0})
        }
    render(){
        return(
            <>
            <div>
            <h1>hello</h1>
            <h1>count:{this.state.count}</h1>
            {/* <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
            <button onClick={()=>this.setState({count:this.state.count-1})}>-</button>
            <button onClick={()=>this.setState({count:0})}>reset</button> */}
            <button onClick={this.increase} style={{backgroundColor:"green",margin:"5px",width:"10px"}}>+</button>
            <button onClick={this.Decrease} style={{backgroundColor:"green",margin:"5px"}}>-</button>
            <button onClick={this.Reset} style={{backgroundColor:"green",margin:"5px"}}>reset</button>
            </div>
            </>
        )
    }
}