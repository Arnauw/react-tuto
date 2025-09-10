import {Component} from 'react'
import MyCars from "./components/MyCars.jsx";

import './App.css'
import {Cars} from "./components/Cars.jsx";

class App extends Component {
    state = {
        title: 'My Cars Collection',
        titleColor: 'text-green-500',
    }

    render() {
        return (
            <div className="">
                <MyCars
                    title={this.state.title}
                    titleColor={this.state.titleColor}
                />
            </div>
        )
    }
}

export default App
