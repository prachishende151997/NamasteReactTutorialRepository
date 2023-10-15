import React from "react";

class UserClass extends React.Component{

constructor(props){
    super(props);
    console.log(props)

    //state  in class component
    this.state={
      count:0,
      count2:1,
    };
console.log(this.props.name + " child CONSTRUCTOR CALLED")
}

componentDidMount(){
  console.log(this.props.name +"component did mount from child component called")
  //api call we need to make here


}

render(){

    const{name,location}=this.props;
    const{count,count2}=this.state

    console.log(this.props.name + "child render called")

    return(
        <div className='user-card'>
          <h1>Count : {this.state.count}</h1>
          <h1>Count : {count}</h1>
          <h1>Count : {count2}</h1>
          <button onClick={()=>{
            this.setState({
              count:this.state.count+1,
              count2:this.state.count2+1,
            });
          }}>Count Increase</button>

        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : p@gmail.com</h4>
        </div>
        )
  }
}

export default UserClass;