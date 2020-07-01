import React from 'react'
import '../Components/styles/Error.css'
import NotFoundImg from '../images/404.png'

const NotFount = () => (
    <React.Fragment>
        <div className="text-center">
            <h1 className="Error_Text">Error: 404 Page Not Found</h1>    
            <img src={NotFoundImg} alt="404 NotFound" className="Error_Image" />
        </div>
    </React.Fragment>
)

export default NotFount