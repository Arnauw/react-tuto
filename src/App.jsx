import {Component} from 'react';
import MyCars from './components/MyCars.jsx';
import './App.css';
import {Welcome} from "./components/Welcome.jsx";
import Mom from "./components/Mom.jsx";
import Maman from "./components/Maman.jsx";

class App extends Component {

    state = {
        titre: 'Mon Catalogue Voitures',
    }

    render() {
        return (
            <div className='App'>

                {/*<Mom></Mom>*/}
                <Maman></Maman>
                {/*  <Welcome/>*/}
                {/*<MyCars title={this.state.titre} />*/}
            </div>
        )
    }
}

export default App;