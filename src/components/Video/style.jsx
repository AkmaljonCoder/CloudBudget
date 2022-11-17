import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 500px;
    background-color: white;

    @media screen and (max-width:1011px) {
        height: 800px;
    }

`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media screen and (max-width:1011px) {
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 120px;
    }
`

export const LeftDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:996px) {
       width: 100%;
    }
`


export const InfoDiv = styled.div`
    width: 470px;
    height: auto;

    @media screen and (max-width:511px) {
        padding: 0px 20px 0px 20px;
    }
`

export const Hadding1 = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;

    @media screen and (max-width:511px) {
        text-align: center;
    }

    @media screen and (max-width:433px) {
       font-size: 30px;
    }
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    @media screen and (max-width:511px) {
        text-align: center;
    }
`

export const MoreText = styled.span`
    width: 100%;
    height: auto;
    color: red;
`

/// Right div start

export const RightDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    @media screen and (max-width:996px) {
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
    }
`

export const ImageDiv = styled.div`
    width: auto;
    height: auto;
`

export const Img = styled.img`
    width: auto;
    height: auto;

    @media screen and (max-width:528px) {
        width: 400px;
        height: auto;
    }

    @media screen and (max-width:433px) {
        width: 350px;
        height: auto;
    }

    @media screen and (max-width:375px) {
        width: 300px;
        height: auto;
    }
`