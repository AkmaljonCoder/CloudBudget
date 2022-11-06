import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a83c3c;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .burger{
        display: none;
    }

    @media (max-width:960px) {
        .burger{
            display: block;
            margin: 0 30px;
        }
    }
`

export const Logo = styled.img`
    width: 172px;
    height: 30px;
    object-fit: contain;
    margin-left: 30px;
`

export const LinkDiv = styled.div`
    display: flex;
    align-items: center;

    h2{
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: #FFFFFF;
        margin: 0 10px;
        transition: all ease 0.3s;
        cursor: pointer;

        :hover{
            opacity: 0.7;
        }
    }

    @media (max-width:960px) {
        display: none;
    }
`

export const ThirdDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
`

export const LangSwitch = styled.div`
    position: relative;
    display: inline-block;
    

`

export const Button = styled.button`
    width: 100px;
    height: 40px;
    background-color: rgb(0,0,0,0);
    border: 1px solid #FFFFFF;
    border-radius: 6px;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;

    @media (max-width:600px) {
        display: none;
    }
`
