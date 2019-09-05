import styled from 'styled-components';

export const Display = styled.div`
    width: 1430px;
    height: 309px;
    margin-left: 48px;
    overflow: hidden;
` 

export const Outer = styled.div`
    width: 4290px;
    height: 309px;
    background-color: red;
    position: relative;
    display:flex;
`
export const Element = styled.div`
    width: 1430px;
    height: 309px;
    display:flex;
    flex-grow:1
`

export const PageBtnLeft = styled.img.attrs({
    src:'../../../static/img/up.png'
})`
    position: absolute;
    top:118px;
    left:-5px;
    width: 60px;
    height: auto;
    border-radius:50%;
    border: 1px;
    border-color:black;
`;
export const PageBtnRight = styled.img.attrs({
    src:'../../../static/img/down.png'
})`
    position: relative;
    float:right;
    top:-191px;
    left: 100px;
    width: 60px;
    height: auto;
    border-radius:50%;
    border: 1px;
    border-color:black;
`;

export const MovieDiv = styled.div`
    width: 293px;
    height: 271px;
    flex-grow:1;
`