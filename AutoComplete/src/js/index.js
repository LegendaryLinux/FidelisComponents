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
            <div id="app" style={{margin: '1rem'}}>
                Currently selected value: {this.state.selectedValue}
                <br /><br />
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
                    onUpdate={this.updateValue}
                />
            </div>
        );
    }
}

// Load component into DOM
window.addEventListener('load', () => ReactDOM.render(<App />, document.getElementById('app')));
