export const Welcome = () => {

    const simpleFunction = () => {
        alert('bonjour');
    }

    const functionWithArg = (text) => {
        alert(text);
    }

    return (
        <>
            <button onClick={simpleFunction}>
                Simple function
            </button>
            <button onClick={() => functionWithArg("bonsoir")}>
                Function With Arg
            </button>
            <button onClick={() => alert('bonne nuit')}>
                Direct Function
            </button>

        </>
    )
}
