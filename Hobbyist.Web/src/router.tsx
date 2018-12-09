import * as React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { AboutPage, HomePage } from "./components";
import { BlogContainer } from "./components/Blogs/BlogContainer";
import { HomePageContainer } from "./components/Public/HomePageContainer";
import { PublicApp } from "./PublicApp";

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={PublicApp}>
                <IndexRoute component={HomePageContainer} />
                <Route path="/blogs" component={BlogContainer}/>
            </Route>
        </Router>
    );

}