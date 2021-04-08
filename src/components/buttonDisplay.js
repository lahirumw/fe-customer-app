import React, {Component}  from 'react';

class ButtonDisplay extends Component{

	displayNext() {
	    console.log("next");
	}

	displayPrev() {
	    console.log("prev");
	}

	render(){
		return (
			<div>
				<button onClick={this.displayNext}>Next</button>
				<button onClick={this.displayPrev}>Previous</button>	
			</div>	
		);
	}
}

export default ButtonDisplay;
