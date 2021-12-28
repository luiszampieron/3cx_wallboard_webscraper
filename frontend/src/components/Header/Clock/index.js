import React from "react";
import styled from "styled-components";

export default ({ date }) => {
    const zeroPad = (num, places) => String(num).padStart(places, "0")
    return (
        <>
            <Div>
                {zeroPad(date.getHours(), 2)}:{zeroPad(date.getMinutes(), 2)}
            </Div>
        </>
    )
}

const Div = styled.div`
    color: #fff;
    font-size: 2rem;
`