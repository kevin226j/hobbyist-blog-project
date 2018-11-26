export interface IGridViewOptions<T> {
    dataItems: T[];
    showEditButton?: boolean;
    showDeleteButton?: boolean;
    showMoreButton?: boolean;
    onButtonClick?: (id:number, action?:string) => void;
    headerColumns?: IHeaderColumn[];

    onHeaderClick?: (columnName: string) => void;
    onLock?: (id: number, action: boolean) => void;
    verified?: (id: number, verify: boolean, pro: boolean) => void;
    professional?: (id: number, verify: boolean, pro: boolean) => void;
}

export interface IHeaderColumn {
    columnName: string;
    columnStyle: string;
}