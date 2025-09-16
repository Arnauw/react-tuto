import {Component} from "react";
import Car from "./Cars.jsx";

class Form extends Component {

    state = {
        username: "",
        color: "",
        colors: [
            "",
            "red",
            "blue",
            "green",
            "black",
            "purple",
            "pink",
        ],
    }

    handleNickname = (e) => {
        this.setState({username: e.target.value})
    }

    handleColor = (e) => {
        this.setState({color: e.target.value})
    }

    render() {
        return (
            <>

                <div>
                    <Car color={"red"} height={"400"}></Car>
                    <h1 className={"my-3"}>Commentary</h1>
                    <div>
                        <form action="" className="my-3">
                            <label htmlFor="" className={"mr-4"}>Nickname</label>
                            <input type="text" value={this.state.username} onChange={this.handleNickname}/>
                        </form>

                    </div>

                    <div className={"my-3"}>
                        <label htmlFor="" className={"mr-4"}>Color</label>
                        {/*<select name="" id="">*/}
                        {/*    <option value="green">Green</option>*/}
                        {/*    <option value="red">Red</option>*/}
                        {/*    <option value="orange">Orange</option>*/}
                        {/*</select>*/}
                        <select name="" id="" onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>

                    <p className={`my-3`}
                       // style={{"color"}}
                    >
                        {
                            this.state.username ? `Your nickname is: ${this.state.username}` : null
                        }
                    </p>
                </div>

            </>
        )
    }
}

export default Form