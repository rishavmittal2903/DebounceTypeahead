import { makeStyles } from "@material-ui/core";

export const styles=makeStyles((theme)=>({
    marginLeft10:{
      marginLeft:"10px"
    },
    secondry:{
      color:"grey",
      fontSize:"14px",
      display:"inline-block",
    width:"180px",
    whiteSpace: "nowrap",
    overflow:"hidden !important",
    textOverflow: "ellipsis",
    '&:hover': {
    width:"100%",
    whiteSpace: "normal",
    }
    },
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
    margin: {
      margin: theme.spacing(1),
  },
  iconButton: {
      padding: 10,
      marginRight: 50
  },
  root:{
    
  }
  })
);