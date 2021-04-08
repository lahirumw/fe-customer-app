import React, {Component} from 'react';
import Display from './components/display'; 
import Contact from './components/contact';

class App  extends Component {

  render(){
    return (
      <div className="App">
        <Display name="Contact Display"/>
        <Contact />
      </div>
    );
  }
}

export default App;
