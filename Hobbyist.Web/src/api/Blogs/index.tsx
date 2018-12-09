import { apiExecute } from "../../api/apiExecute";

export const Blog_GetAll = (): Promise<any> => {
    const URL = `/api/blogs`;
    return apiExecute(URL, "GET", null)
}

export const Blog_GetById = (id: number): Promise<any> => {
    const URL = `/api/blogs/${id}`;
    return apiExecute(URL, "GET", null)
}

export const Blog_Post = (data: any): Promise<any> => {
    const URL = `/api/blogs`;
    return apiExecute(URL, "POST", data)
}

export const Blog_Update = (data: any): Promise<any> => {
    const URL = `/api/blogs`;
    return apiExecute(URL, "PUT", data)
}

export const Blog_Delete = (id:number): Promise<any> => {
    const URL = `/api/blogs/${id}`;
    return apiExecute(URL, "DELETE", null)
}

export const BlogApi = {
    Blog_GetAll,
    Blog_GetById,
    Blog_Post,
    Blog_Update,
    Blog_Delete
}