import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AutoComplete from './AutoComplete';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: null,
        };
    }

    updateValue = (selectedValue) => this.setState({ selectedValue });

    render() {
        return (
            <div id="app" style={{ margin: '1rem' }}>
                AutoComplete with allowUserValues=false<br />
                Current value: {this.state.value1}
                <br />
                <br />
                <AutoComplete
                    options={[
                        { name: 'James T. Kirk', value: 'kirk' },
                        { name: 'Spock', value: 'spock' },
                        { name: 'Leonard McCoy', value: 'mccoy' },
                        { name: 'Nyota Uhura', value: 'uhura' },
                        { name: 'Montgomery Scott', value: 'scott' },
                        { name: 'Pavel Chekov', value: 'chekov' },
                        { name: 'Hikaru Sulu', value: 'sulu' },
                    ]}
                    onUpdate={(value1) => this.setState({ value1 })}
                    allowUserValues={false}
                    placeholder="Star Trek TOS Crew"
                    defaultValue="mccoy"
                />
                <br />
                <br />
                <input placeholder="I'm a normal input for testing." />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                AutoComplete with allowUserValues=true<br />
                Current value: {this.state.value2}
                <br />
                <br />
                <AutoComplete
                    options={[
                        { name: 'Jean Luc Picard', value: 'picard' },
                        { name: 'William T. Riker', value: 'riker' },
                        { name: 'Data', value: 'data' },
                        { name: 'Deanna Troi', value: 'troi' },
                        { name: 'Beverley Crusher', value: 'crusher' },
                        { name: 'Jeordi LaForge', value: 'laforge' },
                    ]}
                    onUpdate={(value2) => {this.setState({ value2 })}}
                    allowUserValues={true}
                    placeholder="Star Trek TNG Crew"
                />
                <br />
                <br />
                <input placeholder="I'm a normal input for testing." />
            </div>
        );
    }
}

// Load component into DOM
window.addEventListener('load', () => ReactDOM.render(<App />, document.getElementById('app')));
