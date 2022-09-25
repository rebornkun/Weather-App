import './Search.css'

const Search = ({handleSearchClick}) => {

    return(
        <div className='search_container'>
            <div className='search_input'>
                <form >
                <input name="hidden" type='text' id='search' className='search' />
                </form>
            </div>
            <div id='search_button' className='search_button' onClick={handleSearchClick}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.98856" cy="9.98856" r="8.98856" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.2402 16.7071L19.7643 20.222" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
        </div>
    );


}

export default Search;