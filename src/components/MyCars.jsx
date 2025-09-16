import {Component} from 'react'
import Car from './Cars'

import imgFerrari from "./imgs/red-ferrari.jpg";
import imgRollsroyce from "./imgs/black-rollsroyce.jpg";
import imgTata from "./imgs/tata-white.jpg";
import imgTest from "./imgs/purple-chrystler.jpg";


class MyCars extends Component {

    getAge = (year) => {
        const now = new Date().getFullYear();
        const age = now - year;
        
        console.log(now, age);

        let englishYearStr = "";
        age === 1 ? englishYearStr = "year" : englishYearStr = "years";
        

        return age === 0 ? null : `${age} ${englishYearStr}`
    }

    state = {
        cars: [
            {
                name: 'Ferrari',
                color: "red",
                year: 2000,
                image: imgFerrari,
            },
            {
                name: 'Rolls-Royce',
                color: "green",
                year: 2010,
                image: imgRollsroyce,
            },
            {
                name: 'Tata',
                color: "black",
                year: 1990,
                image: imgTata,
            },
            {
                name: 'Test',
                color: "purple",
                year: 2025,
                image: imgTest,
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
                <h1 className="mb-5">{this.props.title}</h1>
                <button onClick={this.addTenYears} className="mb-5">+10 Years</button>

                {this.state.cars.map(({year, color, name, age, image}, i) => (
                    <div key={i}>
                        <Car
                            year={year}
                            color={color}
                            age={this.getAge(year)}
                            image={image}
                        >
                            {name}
                        </Car>
                    </div>
                ))}
            </div>
        )
    }
}

export default MyCars