const Car = ({color, children, year}) => {

    const colorInfo = color ? <p>Color: {color}</p> : <p>Color: "Nether"</p>;

    if (children) {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p>Brand: { children }</p>
                <p>Year: { year }</p>
                {colorInfo}
            </div>
        )
    }

    // return null // ce return est Facultatif
}

export default Car
