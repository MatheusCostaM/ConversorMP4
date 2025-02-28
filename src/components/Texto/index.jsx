import style from 'styled-components'

const Texto = style.div`

font-size: 3rem;

`

export default ({ children }) => {
    return (
        <Texto>
            <strong>{children}</strong>
        </Texto>
    )
}