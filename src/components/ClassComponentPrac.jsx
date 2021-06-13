import React, { Component } from 'react'

export default class ClassComponentPrac extends Component {
    constructor(props)
    {
        super(props);
        console.log("hi am i constructor");
        this.state = {
            favcolor: 'red',
            name:'sonu'
            
            
        }
    }
    
    static getDerivedStateFromProps(props, state) {
       return {name:props.name}
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ favcolor: 'yellow' });  
        },1000)
       
    }

    // shouldComponentUpdate() {
    //     return false
    // }
   


    render() {
        console.log("render func")
        return (
            <div>
                <p>my name is {this.state.name}</p>
                <h1>my Favarate color is {this.state.favcolor}</h1>
                <button onClick={()=>{this.setState({name:'rohit'})}}>click</button>
            </div>
        )
    }
}
