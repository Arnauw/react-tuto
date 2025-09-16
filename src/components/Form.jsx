import {Component} from "react";
import Car from "./Cars.jsx";

class Form extends Component {
    
    state = {
        username: "",
    }

    handleNickname = (e) => {
        this.setState({ username: e.target.value })
    }

    render() {
        return (
            <>

                <div>
                    <Car color={"red"} height={"400"}></Car>
                    <h1 className={"my-3"}>Commentary</h1>

                    <form action="" className="my-3">
                        <label htmlFor="" className={"mr-4"}>Nickname</label>
                        <input type="text" value={this.state.username} onChange={this.handleNickname} />
                    </form>

                    <p>{this.state.username? `Your nickname is: ${this.state.username}`: null }</p>
                </div>

            </>
        )
    }
}

export default Form