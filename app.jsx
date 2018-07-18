import React from 'react';

Class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };

    // Bind is important to fix set state undefined -  because it needs to only read handlechange
    this.handleChange = this.handleChange.bind(this);

handleChange(event) {
  this.setState({
    query: event.target.value,
  });
}

class App extends React.Component {
  render()
    <div>
      <h1 className="title"> </h2>
      NASA Search
        </h1>
      </div> 
  );
  } 
}

export default App;