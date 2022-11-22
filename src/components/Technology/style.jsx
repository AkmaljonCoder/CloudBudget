import styled from "styled-components";

// mui
import { CloudDownload } from "@mui/icons-material";
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';


export const Main = styled.div`
    width:100%;
    height:500px;
    background-color:white;
    max-width: 1440px;
    margin: 0 auto;
    

    @media screen and (max-width:1027px) {
        height: auto;
    }
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const TopDiv = styled.div`
    width: 100%;
    height: 25%;
    font-size: 40px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const BottomDiv = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 65px;

    @media screen and (max-width:1027px) {
        height: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
`

export const Box = styled.div`
    width: 255px;
    height: 326px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const Number = styled.div`
    width: 117px;
    height: 110px;
    font-size: 100px;
    font-weight: 600;
    color:  rgba(16, 16, 16, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    


`

export const InfoDiv = styled.div`
    width: 226px;
    height: 200px;
    position: absolute;
    top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImgIcons = styled.img`
    width: auto;
    height: auto;
`

export const Title = styled.h1`
    width: 100%;
    height: auto;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin: 0px 0px 25px 0px;
`

export const Paragraf = styled.h1`
    width: 100%;
    height: auto;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    margin: 0px 0px 55px 0px;

`
