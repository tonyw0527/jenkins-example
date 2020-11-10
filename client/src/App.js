import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
        data: ''
        };
    }

    componentDidMount() {
        fetch('/data', {method: 'GET', headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(json => this.setState({data: json.data[0].title}))
        .catch(e => { this.setState({data: `Error - ${e}`})});
    }


    render() {
        return (
        <div>
            <h1>Auto Distribution Test with Jenkins</h1>
            
            <h2>From Nginx</h2>
            <div>Hello React!</div>
            
            <h2>From pm2</h2>
            <div>{this.state.data}</div>
        </div>
        );
    }
}

export default App;
