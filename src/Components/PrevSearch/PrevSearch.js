import './PrevSearch.css'
import PrevSearchBlock from './PrevSearchBlock';

const PrevSearch = ({ prevSearch }) => {

    return(
        <div className='prevSearch_container'>
            {
                prevSearch.map((prev , i) => {
                    return (
                    <PrevSearchBlock 
                    key={i}
                    text={prev}
                    />
                    ); 
                })
            }
        </div>
    );


}

export default PrevSearch;