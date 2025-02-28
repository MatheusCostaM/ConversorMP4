import style from 'styled-components'

const Download = style.div`

width: 10vw;
height: 10vh;
position: absolute;
top: 58%;
display: flex;
justify-content: center;
align-items: center;
background-color: gray;
border-radius: 20px;


h3{
    z-index: 2;
    position: absolute;
}

`

const Loading = style.div`

width: 10vw;
height: 10vh;
position: absolute;
/* background-color: green; */
border-radius: 20px;
z-index: 1;

`

export default () => {
    return (
        <Download>
            <h3>DOWNLOAD</h3>
            <Loading />
        </Download>
    )
}