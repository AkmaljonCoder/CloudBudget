import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 500px;
    background-color: white;
    max-width: 1440px;
    margin: 0 auto;


    @media screen and (max-width:1228px) {
        height: auto;
    }
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width:1228px) {
        height: auto;
    }
`

export const FooterDiv = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;

    @media screen and (max-width:1228px) {
        display: flex;
        flex-wrap: wrap;
        height: auto;
        
    }
`

export const Box = styled.div`
    width: 255px;
    height: 226px;

    @media screen and (max-width:900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Category = styled.h1`
    font-weight: 700;
    font-size: 18px;
`

export const Info = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;

    @media screen and (max-width:900px) {
        text-align: center;
    }
`

export const Image = styled.img`
    margin: 15px 0px 0px 0px;
`

export const PoweredBy = styled.p`
    width: 100%;
    height: 50px;
    text-align: center;
    font-weight: 600;
`

export const Br = styled.br`
    @media screen and (max-width:900px) {
        display: none;
    }
`

