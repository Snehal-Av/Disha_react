import React from "react"

class Home extends React.Component{
    constructor(){
      super()
      this.state={
        name:"abc",
        age:29
      }
    }
    render(){
        return(
            <div>
            <div>I'm Home</div>
            {this.state.name}
            {this.state.age}
            </div>

        )
    }
}
export default Home