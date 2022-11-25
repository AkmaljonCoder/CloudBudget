import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 500px;
    background-color: white;
    max-width: 1440px;
    margin: 0 auto;

    @media screen  and (max-width:1038px) {
        height: auto;
    }

`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;


    @media screen  and (max-width:1038px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

`

export const LeftDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen  and (max-width:1038px) {
        width: 100%;
        padding: 0px 20px 0px 20px;
    }

    @media screen  and (max-width:398px) {
        height: auto;
    }
`


export const InfoDiv = styled.div`
    width: 445px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen  and (max-width:1038px) {
        width: 80%;
    }

    @media screen  and (max-width:837px) {
        width: 100%;
    }

    @media screen  and (max-width:398px) {
        height: 270px;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;


    @media screen  and (max-width:1038px) {
        text-align:center ;
    }

    @media screen  and (max-width:549px) {
        font-size: 30px;
    }

    @media screen  and (max-width:462px) {
        font-size: 25px;
        line-height:35px ;
    }
`

export const Paragraphs = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    @media screen  and (max-width:1038px) {
        text-align:center ;
    }
`

export const MoreText = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #ED4C5C;
    cursor: pointer;

    @media screen  and (max-width:1038px) {
        text-align:center ;
    }
`

// Right Div Start =========================== 

export const RightDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    @media screen  and (max-width:1038px) {
        width: 100%;
        padding: 0px 20px 0px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen  and (max-width:350px) {
       padding: 0px;
    }
`

export const VideoDiv = styled.div`
    width: 478px;
    height: 311px;
    
    @media screen  and (max-width:517px) {
        width: 440px;

    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`