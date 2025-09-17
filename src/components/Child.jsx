export const Child = (props) => {

    const btnChildAnswer = props.theState.momMessage ? (
        <button onClick={props.answerChild} className="my-5">Answer</button>) : null

    return (
        <>
            <h2>{props.name}</h2>

            <div>{btnChildAnswer}</div>

            <p>{props.theState.childMessage}</p>
        </>
    )
}
