import { IBlogEntity } from "./IBlogEntity";o
import { IKeyValue } from "../IKeyValue";

export interface IBlogFormEntity {
    blogEntity: IBlogEntity,


    onChange: (fieldName: string, fieldValue: string) => void,
    onSubmit: () => void,
     onCheck: (name: string, checked: boolean) => void,


    NameError?: string,
    BodyError?: string
}