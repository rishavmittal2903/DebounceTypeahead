import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { styles } from '../styles/styles';
import { ITypeaheadDataFormat } from '../interface/ITypeaheadDataFormat';
interface IProps {
  option: ITypeaheadDataFormat,
  isSecondryTextVisible: boolean,
  onItemSelect?: (data?: any) => void
}
const useStyles = styles;
const ImageTypeFormat: React.FC<IProps> = (props) => {
  const { primaryText, secondryText, image } = props.option;
  const classes = useStyles();

  return (
    <React.Fragment >
      <span><Avatar alt={primaryText} src={image}>
      </Avatar>
      </span>
      <span className={classes.marginLeft10} onClick={() => props.onItemSelect?props.onItemSelect(props.option):{}}>
        <div>{primaryText}</div>
        {props.isSecondryTextVisible ? <div className={classes.secondry}>{secondryText}</div> : null}</span>

    </React.Fragment>
  );
} 
export default ImageTypeFormat;
