import * as React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { BlogContainer } from "./components/Blogs/BlogContainer";
import { HomePageContainer } from "./components/Public/HomePageContainer";
import { PublicApp } from "./PublicApp";
export const AppRouter = () => {
    return (React.createElement(Router, { history: browserHistory },
        React.createElement(Route, { path: "/", component: PublicApp },
            React.createElement(IndexRoute, { component: HomePageContainer }),
            React.createElement(Route, { path: "/blogs", component: BlogContainer }))));
};
//# sourceMappingURL=router.js.map