 import css from './SearchBox.module.css'



const SearchBox = ({value, onFilter, searchInputId}) => {
    return (
        <div className={css.cntSeaech}>
            <p className={css.text}>Search by name</p>
            <input className={css.search}
                   type="text"
                   value={value}
                   onChange={e => onFilter(e.target.value)}
                   id={searchInputId} 
                   placeholder='...'/>
        </div>
    );
};

export default SearchBox;