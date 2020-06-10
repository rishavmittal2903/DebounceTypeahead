/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { styles } from '../styles/styles';
import SearchTextField from './SearchTextField';
import { ITypeAheadProps } from '../interface/ITypeAheadProps';
import { getTypeAheadAsPerUserType,getTypeAheadSearchOption, debounceEvent, getInputValue } from '../utils/utilityHelper';
const useStyles =styles;
const DebounceTypeAhead:React.FC<ITypeAheadProps>=(props)=> {
  const classes = useStyles();
  const inputId="debounce_typeAhead";
  const loading =props.typeAheadData.length === 0;
 
const changeHandler = () => {
    props.onSearch(getInputValue(inputId));
}
  return (
    <Autocomplete
      id={inputId}
      style={{ width: 300 }}
      options={props.typeAheadData}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) =>getTypeAheadSearchOption(props.type,option) }
      loading={loading}
      onInputChange={debounceEvent(changeHandler,props.delay)}
      renderOption={(option) =>getTypeAheadAsPerUserType(props.type,option,props) }
      renderInput={(params) => (
          <SearchTextField  loading={loading} placeholder={props.placeholder} params={params}/>
        
      )}
    />
  );
}
export default DebounceTypeAhead;






