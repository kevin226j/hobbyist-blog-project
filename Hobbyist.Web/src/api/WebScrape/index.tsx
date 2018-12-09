import { apiExecute } from "../../api/apiExecute";

export const GetRandomQuote = (): Promise<any> => {
    const URL = `/api/webscrape`;
    return apiExecute(URL, "GET", null)
}

export const WebScrapeApi = {
    GetRandomQuote
}