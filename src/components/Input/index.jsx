import style from 'styled-components'

const Input = style.div`

    width: 40vw;
    height: 5vh;
    
    input{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

`

export default () => {
    return (
        <Input>
            <input type="text" />
        </Input>
    )
}