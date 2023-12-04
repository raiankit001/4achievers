import React, { useState } from 'react'

const Usestate = () => {
    const [color, setColor] = useState("red")
    return (
        <>
            <h1 style={{ color: `${color}` }}>color : {color}</h1>

            <button onClick={() => {
                if (color === 'red') {
                    setColor("black")
                }
                else {
                    setColor("red")
                }
            }}
            style={{borderRadius:"5px",fontSize:"1.3rem"}}
            >change</button>
        </>
    )
}

export default Usestate