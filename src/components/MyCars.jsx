import {Component} from 'react'
import Car from './Cars'

class MyCars extends Component {

    state = {
        cars: [
            {
                name: 'Ferrari',
                color: "red",
                year: "2000"
            },
            {
                name: 'Rolls-Royce',
                color: "white",
                year: "2010"
            },
            {
                name: 'Tata',
                color: "purple",
                year: "1990"
            },
        ]
    };

    addTenYears = () => {
        const updatedState = this.state.cars.map((car) => {
            return car.year -= 10;
            // return console.log('test')
        })
        this.setState(
            {updatedState}
        );
    }

    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>

                <button onClick={this.addTenYears}>+10 Years</button>

                <Car
                    year={this.state.cars[0].year}
                    color={this.state.cars[0].color}
                >
                    {this.state.cars[0].name}
                </Car>

                {/*{this.state.map((car, i) => (*/}
                {/*    <Car*/}
                {/*        key={i}*/}
                {/*        year={car.year}*/}
                {/*        color={car.color}*/}
                {/*    >*/}
                {/*        {car.name}*/}
                {/*    </Car>*/}
                {/*))}*/}
            </div>

        )
    }
}

export default MyCars