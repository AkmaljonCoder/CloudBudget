import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Texts = styled.div`
    max-width: 445px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;

    h2{
        font-weight: 600;
        font-size: 36px;
        line-height: 43px;
        color: #000000;
        margin-bottom: 25px;
    }

    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        text-align: justify;
        color: #000000;
        margin-bottom: 15px;
    }
    
    button{
        padding: 10px 15px;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        text-align: justify;
        color: #ED4C5C;
        background-color: rgb(0,0,0,0);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all ease 0.3s;

        &:hover{
            background-color: #ED4C5C;
            color: white;
        }
    }

    
`

export const Image = styled.img`
    width: 478px;
    height: 311px;
    object-fit: contain;
    margin-right: 30px;
`
