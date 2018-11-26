import { apiExecute } from "../../api/apiExecute";
export const GetRandomQuote = () => {
    const URL = `/api/webscrape`;
    return apiExecute(URL, "GET", null);
};
export const WebScrapeApi = {
    GetRandomQuote
};
//# sourceMappingURL=index.js.map