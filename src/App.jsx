import {Component} from 'react';
import MyCars from './components/MyCars.jsx';
import './App.css';
import {Welcome} from "./components/Welcome.jsx";
import Mom from "./components/Mom.jsx";
import Maman from "./components/Maman.jsx";
import Form from "./components/Form.jsx";
import {Exo8} from "./components/Exo8.jsx";

class App extends Component {

    state = {
        titre: 'Mon Catalogue Voitures',
    }

    render() {
        return (
            <div className='App'>
                <Exo8 color="grey" borderRounding="8px" textColor="black">Click me - Grey Soft Rounded Border</Exo8>
                <Exo8 color="red" borderRounding="20px" textColor="white">Click me - Red Hard Rounded Border</Exo8>
                <Exo8 color="blue" borderRounding="8px" textColor="white">Click me - Blue Soft Rounded Border</Exo8>
                <Form></Form>
                {/*<Mom></Mom>*/}
                {/*<Maman></Maman>*/}
                {/*  <Welcome/>*/}
                <MyCars title={this.state.titre} />
            </div>
        )
    }
}

export default App;