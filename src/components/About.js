import { render } from "react-dom";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

constructor(props){
    super(props);

console.log("parent constructor")
}

componentDidMount(){
    console.log("component did mount from parent component called")
  }

    render(){
        console.log("parent render")
        return(
            <div>
                <h1>About us page</h1>
                <h1>About class component</h1>
                <User name={'Prachi Shende (functional component props)'}/>
                <UserClass  name={'Prachi Shende (Class component props)' } location={"Nagpur class based component"} />
                <UserClass  name={'prangha (Class component props)' } location={"Nagpur class based component"} />
            </div>
        )
    }
}

export default About;

// parent constructor
// parent render 

// first constructor
// first render

// second constructor
// second render

// <DOM UPDATED -IN SINGLE BATCH>
//     first componentDidMount
//     second componentDidMount

//     parent ComponentDidMount
