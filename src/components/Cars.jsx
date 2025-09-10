export const Cars = ({children, color, bgColor}) => {
    
    return children ? (
        <>
            <div className="mb-5 bg-amber-800">
                <p>Brand: {children}</p>
                {color ? <p>Color: {color}</p> : null}
            </div>
        </>
    ) : <p>no data</p>
}
