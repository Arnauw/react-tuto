import {Component} from 'react';
import {Cars} from "./Cars.jsx";

export default class MyCars extends Component {
    state = {
        cars: [
            'Rolls-Royce',
            'Ferrari',
            'Aston Martin'
        ],
    }
    
    render() {
        const colors = ['black', 'red', 'brown'];
        return (
            <div>
                <h1 className={`mb-10 ${this.props.titleColor}`}>
                    {this.props.title}
                </h1>
                
                {
                    this.state.cars.map((car, index) => {
                        return (
                            <Cars color={colors[index]}>
                                {car}
                            </Cars>
                        );
                    })
                }

                {/*<Cars>{this.state.cars[0]}</Cars>*/}
                {/*<Cars color="red">{this.state.cars[1]}</Cars>*/}
                {/*<Cars color="brown">{this.state.cars[2]}</Cars>*/}
            </div>
        );
    }
}