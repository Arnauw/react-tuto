import {Component} from "react";
import Car from "./Cars.jsx";
import styled from "styled-components";
import tw from "tailwind-styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Button = tw.button`
    text-white
    font-bold
    py-2
    px-4
    rounded
    hover:bg-blue-600
    bg-indigo-600
`

// const Button = styled.button`
//   //background: black;
//   color: #ffffff;
//   padding: 12px 13px;
//   font-size: 15px;
// `

// const Button = styled.button
// ${twbg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600}
;

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`

class Form extends Component {

    state = {
        username: "", color: "", colors: ["", "red", "blue", "green", "purple", "pink",], comment: "",
    }

    handleNickname = (e) => {
        this.setState({username: e.target.value})
    }

    handleColor = (e) => {
        this.setState({color: e.target.value})
    }

    handleComment = (e) => {
        this.setState({comment: e.target.value})
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(
            `Username: ${this.state.username} 
Comment: ${this.state.comment} 
Color: ${this.state.color}`
        );
    }

    render() {
        return (
            <>
                
            <div>

                <Container>Test</Container>
                <Car color={"red"} height={"400"}></Car>
                <Title>Comments</Title>

                <form action="" className="my-3"
                      onSubmit={this.handleSubmitForm}
                >
                <div>
                        <label htmlFor="" className={"mr-4"}>Nickname</label>
                        <input type="text" value={this.state.username} onChange={this.handleNickname}/>
                </div>

                <div className={"my-3"}>
                    <label htmlFor="" className={"mr-4"}>Color</label>
                    {/*<select name="" id="">*/}
                    {/*    <option value="green">Green</option>*/}
                    {/*    <option value="red">Red</option>*/}
                    {/*    <option value="orange">Orange</option>*/}
                    {/*</select>*/}
                    <select name="" id="" onChange={this.handleColor}>
                        {this.state.colors.map((color, index) => {
                            return <option key={index} value={color}>{color}</option>
                        })}
                    </select>
                </div>

                <div className={"flex justify-center items-center gap-4"}>
                    <label htmlFor="" className={""}>Comment</label>
                    <textarea name="" id="" cols="30" rows="5"
                              value={this.state.comment}
                              onChange={this.handleComment}
                    ></textarea>
                </div>

                {this.state.username
                    ? (
                        <div className={"my-3 flex gap-2 justify-center"}>
                            <div>Nickname:</div>
                            <div className={`text-${this.state.color}-500`}
                                // style={{"color"}}
                            >
                                {this.state.username ? `${this.state.username}` : null}
                            </div>
                        </div>
                    )
                    : null
                }

                {this.state.comment
                    ? (
                        <div className={"my-3 flex gap-2 justify-center"}>
                            <div>Comment:</div>
                            <div className={`text-${this.state.color}-500`}>
                                {this.state.comment}
                            </div>
                        </div>
                    )
                    : null
                }

                {
                    this.state.username && this.state.comment
                        ? (<Button className={"text-amber-600"}>Submit</Button>)
                        : null
                }
                </form>
            </div>
                
        </>
        )
    }
}

export default Form