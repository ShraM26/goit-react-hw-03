// import css from './SearchBox.module.css'



const SearchBox = ({value, onFilter}) => {
    return (
        <>
            <p>Search by name</p>
            <input type="text"
                   value={value}
                   onChange={e => onFilter(e.target.value)} />
        </>
    );
};

export default SearchBox;