import './ErrorBox.css'
import sunnyicon from '../../Assets/sun.svg'

const ErrorBox = ({errorDetials}) => {

    let errorcode = errorDetials.code
    let errortype = `Error Type: ${errorDetials.type}`
    let errorinfo = `Error Info: ${errorDetials.info}`
    let errorMessage;

    if (errorcode === 104){
        errorMessage = "Sorry my Api Usuage for this month has reach its limit. Cant blame me tho, no money to sub to a higher plan"
    }

    return(
        <div className='error_container'>
            <div>
                <p>{errorMessage}</p>
            </div>
        </div>
    );


}

export default ErrorBox;