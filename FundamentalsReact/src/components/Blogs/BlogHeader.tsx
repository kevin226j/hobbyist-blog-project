import * as React from "react";
import {WebScrapeApi} from "../../api/WebScrape";
import {IRandomQuote} from "../../interfaces/Blogs/IRandomQuote";

export const BlogHeader: React.StatelessComponent<IRandomQuote> = (props : IRandomQuote) => {
    return (
        <div className = "container">
        <header className="w3-container w3-center w3-padding-48 w3-white header-site" style ={{background : "url('')"}}>
            <h1 className="w3-xxxlarge"><b>BLOG</b></h1>
            <h6>{props.quote} <br/><br/> <span className="w3-tag"> {props.author}</span></h6>
        </header>
        </div>      
    )
};


