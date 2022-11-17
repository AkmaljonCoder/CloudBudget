import styled from "styled-components";


export const Main = styled.div`
    width: 100%;
    height: 500px;
    background-color: #ED4C5C;

   @media screen and (max-width:1289px) {
        height: 700px;
   }
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media screen and (max-width:1289px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        gap: 70px;
        height: auto;

    }
`


export const LeftDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width:1236px) {
        width: auto;
    }
    
    @media screen and (max-width:613px) {
        height: 300px;
        width: auto;
    }
`


export const TextDiv = styled.div`
    width: 600px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width:618px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: auto;
    }
`

export const Title = styled.h1`
    width: 80%;
    height: auto;
    font-weight: 600;
    font-size: 36px;
    color: white;

    @media screen and (max-width:618px) {
        width: 90%;
        text-align: center;
    }
`

export const Paragraf = styled.p`
    width: 80%;
    height: auto;
    font-weight: 400;
    color: white;
    font-size: 14px;

    @media screen and (max-width:618px) {
        width: 90%;
        text-align: center;
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

    @media screen and (max-width:1236px) {
        width: auto;
    }
`


export const ImgDiv = styled.div`
    width: 640px;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width:671px) {
        width: auto;
    }
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