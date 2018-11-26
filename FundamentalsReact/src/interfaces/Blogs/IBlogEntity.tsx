export interface IBlogEntity {
    UserBaseId?: number,
    Name: string,
    Body: string,
    IsPublic?: boolean,

    Image?: string,
    Id?: number,
    FirstName?: string,
    LastName?: string

    ModifiedDate: string;
    CreatedDate: string;
}