import styled from "styled-components";


export const Main = styled.div`
    width: 100%;
    height: 500px;
    background-color: #ED4C5C;

    @media screen and (max-width:1265px) {
        height: 650px;
    }
   
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    max-width: 1440px;
    margin: 0 auto;

    @media screen and (max-width:1265px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`


export const LeftDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width:1265px) {
        width: 95%;
        justify-content: center;
        align-items: center;
    }
    
`


export const TextDiv = styled.div`
    width: 600px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width:1265px) {
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    @media screen and (max-width:579px) {
        height: 90%;
    }

`

export const Title = styled.h1`
    width: 80%;
    height: auto;
    font-weight: 600;
    font-size: 36px;
    color: white;

    @media screen and (max-width:1265px) {
        width: auto;
        text-align: center;
    }

    @media screen and (max-width:579px) {
        font-size: 30px;
    }
    
`

export const Paragraf = styled.p`
    width: 80%;
    height: auto;
    font-weight: 400;
    color: white;
    font-size: 14px;

    @media screen and (max-width:1265px) {
        text-align: center;
        width: auto;
    }
`

export const IconsDiv = styled.div`
    width: 120px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Icons = styled.img`
    width: auto;
    height: auto;
    cursor: pointer;
`


// Right Div start ///////////////


export const RightDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width:1265px) {
        width: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }
    
`


export const ImgDiv = styled.div`
    width: 640px;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    
`

export const Img1 = styled.img`
    width: 283px;
    height: 267px;

    @media screen and (max-width:603px) {
        display: none;
    }
`

export const Img2 = styled.img`
    width: 283px;
    height: 267px;

    @media screen and (max-width:603px) {
        display: none;
    }
`

export const MainImg = styled.img`
    position: absolute;

    @media screen and (max-width:603px) {
        position: relative;
    }

    @media screen and (max-width:472px) {
        width: 345px;
    }

    @media screen and (max-width:363px) {
        width: 300px;
    }
`