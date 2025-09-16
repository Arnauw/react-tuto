import {Component} from "react";
import Car from "./Cars.jsx";

class Form extends Component {
    
    state = {
        username: "",
    }
    
    
    render() {
        return (
            <>

                <div>
                    <Car color={"red"} height={"400"}></Car>
                    <h1 className={"my-3"}>Commentary</h1>

                    <form action="" className="my-3">
                        <label htmlFor="">Nickname</label>
                        <input type="text" value={this.state.username}/>
                    </form>
                </div>

            </>
        )
    }
}

export default Form