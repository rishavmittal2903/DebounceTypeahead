import { ITypeaheadDataFormat } from "./ITypeaheadDataFormat";

export interface ITypeAheadProps {
    delay: number,
    placeholder: string,
    type:string,
    typeAheadData:Array<ITypeaheadDataFormat>,
    isSecondryTextVisible?:boolean,
    onSearch: (query) => void,
    onItemSelect?:(data?:any)=>void
    
}