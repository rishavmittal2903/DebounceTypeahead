import React  from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { debounceEvent, getInputValue } from '../utils/utilityHelper';
import { styles } from '../styles/styles';

const useStyles = styles;
interface IDebounceInputProps {
    onSearch: (query) => void,
    delay: number,
    placeholder: string
}
const DebouncedSearchInput: React.FC<IDebounceInputProps> = (props) => {
    const classes = useStyles();
    const inputId = "debounceInputId";
    const changeHandler = () => {
        props.onSearch(getInputValue(inputId));
    }
    return (
        <div  className={classes.root}>
            <Input
                id={inputId}
                placeholder={props.placeholder}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                inputProps={{
                    autoComplete: 'new-password',
                  }}
                onChange={debounceEvent(changeHandler, props.delay)}
            /> 
        </div>
    );
}
export default DebouncedSearchInput;