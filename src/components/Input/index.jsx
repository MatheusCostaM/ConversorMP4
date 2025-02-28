import style from 'styled-components'
import Download from '../Download';
import Texto from '../Texto';

const Input = style.div`

    width: 60vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    input{
        width: 80%;
        height: 60%;
        border-radius: 10px;
        font-size: 1.5rem;
    }

    section{
        height: 33%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export default () => {
    return (
        <Input>
            <section><Texto>INSIRA O LINK E BAIXE SEU VÍDEO</Texto></section>
            <section><input type="text" /></section>
            <section><Download /></section>
        </Input>
    )
}