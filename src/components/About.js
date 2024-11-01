import React from "react";
import User from "./User";


class About extends React.Component {
  constructor(props){
    super(props);

    // console.log('parent Contructor');
  }

  componentDidMount(){
    // console.log('parent component did mount');
    
  }

  render(){
    // console.log('parent render');
    return (
      <div>
        <h1>About class component</h1>
        <h2>This is Namaste React</h2>
        <User name="jishnu" location="angamaly"/>
      </div>
    )
  }
}

export default About;