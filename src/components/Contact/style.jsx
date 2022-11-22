import styled from "styled-components";

//Mui
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export const Main = styled.div`
    width: 100%;
    height: 500px;
    background-color: white;
    max-width: 1440px;
    margin: 0 auto;


    @media screen and (max-width:1224px) {
        height: auto;
    }
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media screen and (max-width:1224px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 100px;
    }

    /* @media screen and (max-width:654px) {
        padding: 0px 15px 0px 15px;
    } */

`

export const LeftDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width:1043px) {
        width: auto;
        padding: 0px 15px 0px 15px;
    }

`

export const ContactDiv = styled.div`
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    @media screen and (max-width:654px) {
        width: auto;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 36px;
    color: black;

    @media screen and (max-width:1224px) {
        text-align: center;
        width: auto;
    }
`

export const Pitag = styled.p`
    width: 90%;
    font-weight: 400;
    font-size: 14px;
    color: black;

    @media screen and (max-width:1224px) {
        text-align: center;
        width: auto;
    }

`

// Right Div Start //////////////


export const RightDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width:1043px) {
        width: auto;
    }
`

export const FormDiv = styled.form`
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width:654px) {
        width: auto;
    }
`

export const Names = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NameInp = styled(TextField)`
    width: 47% !important;
    height: auto !important;
    color: black !important;
`

export const MuiInp = styled(TextField)`
    width: 100% !important;
    
`

export const MuiBtn = styled(Button)`
    background-color: #ED4C5C !important;
    color: white !important;
    width: 160px !important;
`