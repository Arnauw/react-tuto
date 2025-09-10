import {Wrapper} from "./Wrapper.jsx";
export const Cars = ({children, color,}) => {

    return children && (
        <>
            <Wrapper>
                <p>Brand: {children}</p>
                {color ? <p>Color: {color}</p> : null}
            </Wrapper>
        </>
    )
}
