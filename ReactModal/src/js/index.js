import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from '../js/ReactModal';
import '../styles/index.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    buildModalContent = () => (
        <div id="test-modal">
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="name">Name:</label></td>
                            <td><input id="name" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="address1">Address 1:</label></td>
                            <td><input id="name" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="address2">Address 2:</label></td>
                            <td><input id="name" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="city">City:</label></td>
                            <td><input id="city" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="state">State:</label></td>
                            <td><input id="state" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="zip">Zip:</label></td>
                            <td><input id="zip" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="phone">Phone:</label></td>
                            <td><input id="phone" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email:</label></td>
                            <td><input id="email" /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

    render() {
        return (
            <div>
                <div>{this.state.data}</div>
                <ReactModal
                    trigger={<button>Open Modal</button>}
                    content={this.buildModalContent()}
                />
            </div>
        );
    }
}

window.onload = () => {
    ReactDOM.render(<App />, document.getElementById('app'));
};
