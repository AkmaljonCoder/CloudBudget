import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 630px;
    background-color: white;
    
    @media screen and (max-width:1221px) {
        height: auto;
    }
`

    

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
`

export const TopDiv = styled.div`
    width: 100%;
    height: 20%;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:1221px) {
        height: 100px;
    }
`

export const BottomDiv = styled.div`
    width: 100%;
    height: calc(100% - 20%);
    display: flex;
    justify-content: center; 
`

export const Conteyner = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 0px 20px 0px 20px;

    @media screen and (max-width:1263px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`
export const Card = styled.div`
    width: 350px;
    height: 400px;
    position: relative;
`

export const Img = styled.img`
    width: 350px;
    height: 250px;
`


export const Box = styled.div`
    width: 270px;
    height: 198px;;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    position: absolute;
    top: 160px;
    left: 40px;

`

export const Title = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
`

export const MoreText = styled.span`
    cursor: pointer;
    color: red;
    text-align: center;
`

