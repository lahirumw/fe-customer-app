import React, {Component} from 'react';


class Contact extends Component{

	constructor(props){
		super(props)

		this.state = {
	        people: [],
	        apiUrl: 'http://localhost:8080/v1/customers/?',
	        name: '',
	        page: 0,
	        size: 10
     	}

     	this.searchName = this.searchName.bind(this)
     	this.handleChange = this.handleChange.bind(this)
	}

	

	componentDidMount() {
		const searchParams = new URLSearchParams();
    	searchParams.append("page", this.state.page);
    	searchParams.append("size", this.state.size);

      	this.callContactApi(this.state.apiUrl+ searchParams.toString())
    }

    searchName(){
    	this.setState({
  			page: 0
  		},
  		() => {
	    	const searchParams = new URLSearchParams();
	    	searchParams.append("name", this.state.name);
	    	searchParams.append("page", this.state.page);
	    	searchParams.append("size", this.state.size);

	    	this.callContactApi(this.state.apiUrl + searchParams.toString())
	    })
    }

    handleChange(event) {
    	this.setState({
    		name: event.target.value
    	});
  	}

  	nextPage(){
  		this.setState({
  			page: this.state.page + 1
  		},
  		() => {
  			console.log(this.state.page)
  			const searchParams = new URLSearchParams();
	    	searchParams.append("name", this.state.name);
	    	searchParams.append("page", this.state.page);
	    	searchParams.append("size", this.state.size);

	    	this.callContactApi(this.state.apiUrl + searchParams.toString())
  		})
  		
  	}
  		

  	prevPage(){
  		this.setState({
  			page: this.state.page - 1
  		},
  		() => {
  			console.log(this.state.page)
  			const searchParams = new URLSearchParams();
	    	searchParams.append("name", this.state.name);
	    	searchParams.append("page", this.state.page);
	    	searchParams.append("size", this.state.size);

	    	this.callContactApi(this.state.apiUrl + searchParams.toString())
  		})
  	}

  	callContactApi(url){
  		console.log(url)
  		fetch(url)
        .then((response) => response.json())
        .then((data) => {
        	console.log(data)
        	this.setState({people: data.content})
        })
  	}

    render(){
		return (
			<div>
				<div>
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
					<button onClick={this.searchName}>Search</button>
				</div>

				<div>

			      {this.state.people.map(person => (
			        <div key={person.id} style={{display: 'inline-block', width:'50%'}}>
			        	
			        	<div style={{display: 'inline-block'}}>
			        		<img style={{}} src={person.url} />
			        	</div>

			        	<div style={{display: 'inline-block', width:'50%'}}>
			        		<p style={{fontSize:'18px', color: 'blue', position: 'relative', bottom: '60px', left: '20%'}}>{person.name}</p>
			        	</div>

			        </div>
			      ))}
			    </div>

			    <div>
			    	<button onClick={() => this.nextPage()}>Next</button>
			    	<button onClick={() => this.prevPage()}>Previous</button>
			    </div>
			  
		    </div>
    	);
	}

 }


export default Contact;