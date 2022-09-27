import './Nav.css'
import SearchBar from '../Search/Search'
import PrevSearch from '../PrevSearch/PrevSearch';
import ErrorBoundry from '../ErrorBoundary';

const Nav = ({prevSearch, handleSearchClick}) => {

    function handleclick(){
        let navblock = document.getElementById('nav_container');
        let toggle = document.getElementById('nav_toggler_container')

        if (navblock.classList.contains('open')){
            navblock.classList.remove("open")
            toggle.classList.remove('open')
        }else{
            navblock.classList.add("open")
            toggle.classList.add("open")
        }
    }

    return(
        <div>
            <div id='nav_container' className='nav_container'>
                <SearchBar handleSearchClick={handleSearchClick}/>
                <ErrorBoundry>
                    <PrevSearch prevSearch={prevSearch} />
                </ErrorBoundry>
            </div>

            <div onClick={handleclick} id='nav_toggler_container' className='nav_toggler_container'>
                <div className='nav_toggler'>
                <span></span>
                </div>
            </div>
        </div>
    );


}

export default Nav;