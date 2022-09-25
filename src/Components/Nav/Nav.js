import './Nav.css'
import SearchBar from '../Search/Search'
import PrevSearch from '../PrevSearch/PrevSearch';
import ErrorBoundry from '../ErrorBoundary';

const Nav = ({prevSearch, handleSearchClick}) => {

    

    return(
        <div className='nav_container'>
            <SearchBar handleSearchClick={handleSearchClick}/>
            <ErrorBoundry>
                <PrevSearch prevSearch={prevSearch} />
            </ErrorBoundry>
        </div>
    );


}

export default Nav;