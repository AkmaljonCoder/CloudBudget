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

    @media (max-width:500px) {
        width: 120px;
    }
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

    .show{   
        .swt-btn{
            background-color: white;
            h2{
                color: #D52047;
            }
            .down-ic{
                color: #D52047 !important;
                transform: rotate(180deg);
            }
        }
        
        .swt-menu{
            height: 40px;
        }
    }   
`

export const LangSwitch = styled.div`
    width: 100px;
    height: 40px;
    margin-right: 15px;

    .swt-btn{
        cursor: pointer;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: none;
        transition: all ease 0.3s;
        border-radius: 10px 10px 0 0 ;
        background-color: rgb(0,0,0,0);

        img{
            width: 24px;
            height: 24px;
            object-fit: contain;
        }

        h2{
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }
    
    .down-ic{
        width: 20px !important;
        height: 20px !important;
        color: white !important;
        object-fit: contain !important;
        transition: all ease 0.3s;
    }

    .swt-menu{
        width: 100%;
        height: 0;
        overflow: hidden;
        transition: all ease 0.3s;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        background-color: #FFFFFF;

        &:last-child{
            border-radius: 0 0 10px 10px;
        }
        
        .swt-lang{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: start;
            align-items: center;
            cursor: pointer;
            background-color: white;

            img{
                width: 24px;
                height: 24px;
                object-fit: contain;
                margin: 0 5px;
            }

            h2{
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                display: flex;
                align-items: center;
                text-transform: uppercase;
                color: #D52047;
            }

            &:hover{
                background-color: #b8b8b8;
            }
        }
    }

    @media (max-width:600px) {
        margin: 0;
    }

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
    margin-left: 15px;

    @media (max-width:600px) {
        display: none;
        margin:0;
    }
`
