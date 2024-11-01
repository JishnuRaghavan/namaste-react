import React from 'react'

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state  =   {
            name:"dummy name",
            location:"dummy location",
            avatar:""
        }

        // console.log(this.props.name+' constructor');
    }

    componentDidMount(){
        this.timer =   setInterval(() => {
            console.log('namaste react');
        }, 1000);
        console.log('child- component did mount')
    }

    componentDidUpdate (prevProps,prevState){

        console.log('component did update');
        if(this.state.name !== prevState.name){
            console.log('component did update locally')
        }
    }

    componentWillUnmount (){
        console.log('component unmounted');
        clearInterval(this.timer);
    }

    render(){

        console.log("child render");

        return (
            <div className="user-card">
                <img src={this.state.avatar} alt='profile picture'/>
                <h2>Name        :   {this.state.name}</h2>
                <h3>Location    :   {this.state.location}</h3>
                <h4>Contact     :   @jishnu.raghavan</h4>
            </div>
        )
    }
}

export default UserClass;