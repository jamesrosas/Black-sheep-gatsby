import React, { useState } from 'react'
import styled from 'styled-components'

const StyleStars = styled.div`
    & {
        width: fit-content;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        gap: 3px;
    }
    span{
        font-size: 25px;
        cursor: pointer;
    }
    span:nth-child(-n + ${props => props.selected}) {
        color: orange;
      }
`


const Stars = () => {
    const [star, setStar] = useState(5)
    return(
        <StyleStars selected={star}>
            <span onClick={()=> setStar(1)}>★</span>
            <span onClick={()=> setStar(2)}>★</span>
            <span onClick={()=> setStar(3)}>★</span>
            <span onClick={()=> setStar(4)}>★</span>
            <span onClick={()=> setStar(5)}>★</span>
        </StyleStars>
    )
}

export default Stars