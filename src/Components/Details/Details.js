import './Details.css'
import sunnyicon from '../../Assets/sun.svg'

const Details = () => {

    return(
        <div className='details_container'>
            <div className='degree'>
                <p className='degree_num'>26</p>
                <p className='degree_sym'>&deg;</p>
            </div>
            <div className='location_date'>
                <p className='location'>London</p>
                <p className='time_date'>06:09 - Tuesday, 6 Oct '19</p>
            </div>
            <div className='weather'>
                <img className='weather_icon' src={sunnyicon}/>
                <p className='weather_name'>Sunny</p>
            </div>
        </div>
    );


}

export default Details;