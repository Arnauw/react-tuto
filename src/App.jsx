import {Component} from 'react';
import MyCars from './components/MyCars.jsx';
import './App.css';
import {Welcome} from "./components/Welcome.jsx";
import Mom from "./components/Mom.jsx";
import Maman from "./components/Maman.jsx";
import Form from "./components/Form.jsx";

class App extends Component {

    state = {
        titre: 'Mon Catalogue Voitures',
    }

    render() {
        return (
            <div className='App'>
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