import {Component} from "react";
import {Child} from "./Child.jsx";

class Mom extends Component {

    state = {
        momMessage: null,
        childMessage: null,
    }

    momOrder = () => {
        this.setState({
            momMessage: "Go clean your room right now!"
        })
    }

    answerChild = () => {
        this.setState({
            childMessage: "Fuck you!"
        })
    }

    render() {
        return (
            <>
                <h1>Mom</h1>
                <button onClick={this.momOrder} className="my-5">Mom's Order</button>
                <p>{this.state.momMessage}</p>
                <hr className="my-5" />

                <Child 
                    name={"Michael"}
                    theState={this.state}
                    answerChild={this.answerChild}
                ></Child>
            </>
        )
    }
}

export default Mom;