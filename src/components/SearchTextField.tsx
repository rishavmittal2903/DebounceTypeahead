import React from 'react';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styles } from '../styles/styles';

const useStyles = styles;
interface IProps {
    placeholder: string,
    params: any,
    loading?: boolean
}
const SearchTextField: React.FC<IProps> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField
                {...props.params}
                label={props.placeholder}
                variant="outlined"
                inputProps={{
                    ...props.params.inputProps,
                    endAdornment: (
                        <React.Fragment>
                            {props.loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {props.params.InputProps.endAdornment}
                        </React.Fragment>
                    )
                }}
            />
        </div>
    );
}
export default SearchTextField;