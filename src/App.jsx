import {Component} from 'react'
import Mycars from "./components/Mycars.jsx";

import './App.css'

class App extends Component {
    state = {title: 'My Cars Catalog',}

    render() {
        return (
            <div className='App'>
                {/*<Mycars></Mycars>*/}
                <Mycars/>
            </div>
        )
    }

}

export default App
