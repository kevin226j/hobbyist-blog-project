import * as React from "react";
import { BlogApi } from "../../api/Blogs/";
import { WebScrapeApi } from "../../api/WebScrape";
import { BlogForm, Bloglist, BlogHeader } from "../Blogs/";
export class BlogContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogEntity: {
                Name: "",
                Body: "",
                IsPublic: false,
                Image: "",
                UserBaseId: 4,
                CreatedDate: "",
                ModifiedDate: ""
            },
            blogEntityItems: [],
            author: "",
            quote: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    //***********************************************************************************************************
    // INITIAL STATE
    //***********************************************************************************************************
    setInitialState() {
        this.setState({
            blogEntity: {
                Name: "",
                Body: "",
                IsPublic: false,
                Image: "",
                UserBaseId: 4,
                CreatedDate: "",
                ModifiedDate: ""
            }
        });
    }
    //***********************************************************************************************************
    // ON CHANGE
    //***********************************************************************************************************
    onChange(fieldName, fieldValue) {
        const nextState = Object.assign({}, this.state, { blogEntity: Object.assign({}, this.state.blogEntity, { [fieldName]: fieldValue }) });
        this.setState(nextState);
    }
    //***********************************************************************************************************
    // ON CHECK
    //***********************************************************************************************************
    onCheck(name, checked) {
        const nextState = {
            blogEntity: Object.assign({}, this.state.blogEntity, { IsPublic: checked })
        };
        this.setState(nextState);
    }
    //***********************************************************************************************************
    // WHEN EDIT OR DELETE BUTTON IS PRESSED
    //***********************************************************************************************************
    onButtonClick(fieldValue, fieldName) {
        //let 'ind' grab the index value that was clicked.
        let ind = this.state.blogEntityItems.findIndex(x => x.Id === fieldValue);
        console.log("ind: ", ind);
        if (fieldName === "edit") {
            if (fieldValue >= 0) {
                this.loadDataList();
                this.setState({ blogEntity: this.state.blogEntityItems[ind] });
            }
        }
        else if (fieldName === "delete") {
            BlogApi.Blog_Delete(fieldValue)
                .then(response => {
                //reload the list entry.
                this.loadDataList();
            });
        }
    }
    //***********************************************************************************************************
    // ON SUBMIT
    //***********************************************************************************************************
    onSubmit() {
        if (this.state.blogEntity.Id > 0) {
            //PUT 
            this.setState({
                //after repopulation of text changes, and alterations, set state of the subscriptionentity.
                blogEntity: this.state.blogEntity
            });
            BlogApi.Blog_Update(this.state.blogEntity)
                .then(response => {
                //reset to initial state, repopulate tier Type list, and reload the tier list.
                this.setInitialState();
                this.loadDataList();
            });
        }
        else {
            //POST
            BlogApi.Blog_Post(this.state.blogEntity).then((response) => {
                console.log(response);
                this.setInitialState();
                this.loadDataList();
            });
        }
    }
    //***********************************************************************************************************
    // GET ALL LIST
    //***********************************************************************************************************
    loadDataList() {
        BlogApi.Blog_GetAll()
            .then((response) => {
            console.log(response);
            this.setState({ blogEntityItems: response.Items });
        });
    }
    //***********************************************************************************************************
    // WHEN THE PAGE LOADS
    //***********************************************************************************************************
    componentDidMount() {
        //Load list Data that appears to the right of the form.
        this.loadDataList();
        //Load Banner Data : Random Quote Generator
        WebScrapeApi.GetRandomQuote()
            .then((response) => {
            this.setState({ author: response.Author });
            this.setState({ quote: response.Quote });
        });
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { width: "100%", minHeight: "150vh" } },
                React.createElement("div", { className: "an-section", id: "work" },
                    React.createElement(BlogHeader, { quote: this.state.quote, author: this.state.author }),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement(BlogForm, { blogEntity: this.state.blogEntity, onChange: this.onChange, onSubmit: this.onSubmit, onCheck: this.onCheck })),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement(Bloglist, { dataItems: this.state.blogEntityItems, onButtonClick: this.onButtonClick, showEditButton: true, showDeleteButton: true }))))));
    }
}
//# sourceMappingURL=BlogContainer.js.map