import React, {Component} from 'react';

class Display extends Component{

	render(){
		return <h1 style={{display: 'flex'}}>{this.props.name}</h1>;
	}
}

export default Display;