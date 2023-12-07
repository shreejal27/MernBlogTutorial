import React from 'react'

const NotFound=()=>{
    const myComponentStyle = {
        textAlign: 'center',
        fontSize: '3rem',
        marginTop: '12rem',
     }
    return(
        <p style={myComponentStyle}> 
            404: Page Not Found
        </p>
    )
}
export default NotFound;