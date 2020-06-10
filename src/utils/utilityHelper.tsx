import { TypeAheadEnum } from "../enums/TypeAheadEnum"
import React from "react"
import { ITypeAheadProps } from "../interface/ITypeAheadProps"
import ImageTypeFormat from "../components/ImageTypeFormat"
import TextTypeFormat from "../components/TextTypeFormat"
import { ITypeaheadDataFormat } from "../interface/ITypeaheadDataFormat"

export const getTypeAheadAsPerUserType=(type:string,option:any, props:ITypeAheadProps)=>{
    switch(TypeAheadEnum[type.toUpperCase()])
    {
        case TypeAheadEnum.IMAGETYPE:{
            return <ImageTypeFormat 
            option={option} 
            isSecondryTextVisible={props.isSecondryTextVisible} 
            onItemSelect={props.onItemSelect}
            />
            
        }
        case TypeAheadEnum.TEXTONLY:{
            return <TextTypeFormat 
            option={option} 
            isSecondryTextVisible={props.isSecondryTextVisible} 
            onItemSelect={props.onItemSelect}
            />
           
        }
        
    }
}
export const getTypeAheadSearchOption=(type:string,option:ITypeaheadDataFormat)=>{
    switch(TypeAheadEnum[type.toUpperCase()])
    {
        case TypeAheadEnum.IMAGETYPE:{
            return option.primaryText +"("+option.secondryText+")";
            
        }
        case TypeAheadEnum.TEXTONLY:{
            return option.primaryText;
           
        }
    }
}

export const debounceEvent=(fn, delay) => {
    var timer = null;
  
    return function () {
        clearTimeout(timer);
        timer = setTimeout(()=> {
            fn.call();
        }, delay);
    };
}

export  const getInputValue = (id) => {
    const htmlElm:any = document.getElementById(id);
    return htmlElm.value;
}