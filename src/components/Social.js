import './Social.scss'
const Social = () => {
    // in order to get vertical effect, will need to use css rotation
    return (
         <div className='Social'>
            <a><i className="fab fa-facebook-f"></i></a>
            <a><i className="fab fa-github"></i></a>
            <a><i className="fab fa-linkedin-in"></i></a>
            <a><i className="fab fa-twitter"></i></a>
            <div className='line'></div>
        </div>
    )
   
}

export default Social;