import './styles.css'
import P from 'prop-types';

export const TextInput = ({searchValue, handleChange}) =>{
    return(
        <input type="search" onChange={handleChange} value={searchValue} className="text-input" />
    )
};

TextInput.propTypes = {
    searchValue: P.string.isRequired,
    handleChange: P.func.isRequired
};