import React from "react";

class UserClass extends React.Component{

constructor(props){
    super(props);
    console.log(props)

    //state  in class component
    this.state={
      userInfo:{
        name:"Dummy",
        location:"Default",
        avatar_url:"http://dummy-photo.com"

      }
    };
console.log(this.props.name + " child CONSTRUCTOR CALLED")
}

async componentDidMount(){
  console.log(this.props.name +"component did mount from child component called")
  //api call we need to make here

  const data = await fetch("https://api.github.com/users/prachishende151997")
  const json = await data.json();

  this.setState({
    userInfo:json
  });

  console.log(json);

}

componentDidUpdate(){
  console.log("compoenentDidUpdate called");
}

componentWillUnmount(){
  console.log("componentWillUnmount called");
}

render(){

    const {name,location,avatar_url}= this.state.userInfo;

    console.log(this.props.name + "child render called")

    return(
        <div className='user-card'>
          <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : p@gmail.com</h4>
        </div>
        )
  }
}

export default UserClass;