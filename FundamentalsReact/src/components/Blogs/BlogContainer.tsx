import * as React from "react";
import { BlogApi } from "../../api/Blogs/";
import {WebScrapeApi} from "../../api/WebScrape";
import { BlogForm,Bloglist,BlogHeader } from "../Blogs/";
import { IError, IKeyValue } from "../../interfaces";
import { IBlogEntity, IRandomQuote } from "../../interfaces/Blogs/";

interface IBlogState {
    blogEntity: IBlogEntity;
    blogEntityItems : IBlogEntity[];
    //randomQuoteEntity : IRandomQuote;
    quote : string;
    author : string;
    //selectedValue: string;
    //tierTypeArray: IKeyValue[];
    //subscriptionEntityItems: ISubscriptionTierFormEntity[];
}

export class BlogContainer extends React.Component<{}, IBlogState>{
    constructor(props) {
        super(props);
        this.state = {
            blogEntity: {
                Name: "",
                Body : "",
                IsPublic: false,
                Image : "",
                UserBaseId : 4,
                CreatedDate:"",
                ModifiedDate : ""
            },
            blogEntityItems : [],
            author : "",
            quote : ""
            
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    //***********************************************************************************************************
    // INITIAL STATE
    //***********************************************************************************************************
    private setInitialState () {
        this.setState({
             blogEntity: {
                Name: "",
                Body : "",
                IsPublic: false,
                Image : "",
                UserBaseId : 4,
                CreatedDate:"",
                ModifiedDate : ""
            }
        })
    }
    //***********************************************************************************************************
    // ON CHANGE
    //***********************************************************************************************************
    private onChange(fieldName: string, fieldValue: string) {
        const nextState = {
            //spread operator is used to inherit properties of an object. Only 'subscriptionEntity' is altered.
            ...this.state,
            blogEntity: {
                //all properties are inhereited within the "blogEntity"
                ...this.state.blogEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState);
    }
    //***********************************************************************************************************
    // ON CHECK
    //***********************************************************************************************************
    private onCheck(name: string, checked: boolean) {
        const nextState = {
            blogEntity: {
                //Update the checkbox state in the 'blogEntity'
                ...this.state.blogEntity,
                IsPublic: checked
            }
        }
        this.setState(nextState);
    }
    //***********************************************************************************************************
    // WHEN EDIT OR DELETE BUTTON IS PRESSED
    //***********************************************************************************************************
    private onButtonClick(fieldValue: number, fieldName: string) {
        //let 'ind' grab the index value that was clicked.
        let ind = this.state.blogEntityItems.findIndex(x => x.Id === fieldValue)
        console.log("ind: ", ind);
        if (fieldName === "edit") {
            if (fieldValue >= 0) {
                this.loadDataList();
                this.setState({ blogEntity: this.state.blogEntityItems[ind] });
            }
        } else if (fieldName === "delete") {
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
    private onSubmit() {

        if (this.state.blogEntity.Id > 0) {
            //PUT 
            this.setState({
                //after repopulation of text changes, and alterations, set state of the subscriptionentity.
                blogEntity:
                this.state.blogEntity
            });
            BlogApi.Blog_Update(this.state.blogEntity)
                .then(response => {
                    //reset to initial state, repopulate tier Type list, and reload the tier list.
                    this.setInitialState();
                    this.loadDataList();
                })
        } else {
            //POST
            BlogApi.Blog_Post(this.state.blogEntity).then((response) => {
            console.log(response);
            this.setInitialState();
            this.loadDataList();
        })
        }
    }
    //***********************************************************************************************************
    // GET ALL LIST
    //***********************************************************************************************************
    public loadDataList(){
    BlogApi.Blog_GetAll()
        .then((response) => {
            console.log(response)
            this.setState({blogEntityItems : response.Items})
        })
    }
    //***********************************************************************************************************
    // WHEN THE PAGE LOADS
    //***********************************************************************************************************
    public componentDidMount() {
        //Load list Data that appears to the right of the form.
        this.loadDataList();

        //Load Banner Data : Random Quote Generator
        WebScrapeApi.GetRandomQuote()
            .then((response) => {
                this.setState({author : response.Author});
                this.setState({quote : response.Quote});
            });
           
    }
   

    public render() {
        return (
            <React.Fragment>
                <div style = {{width: "100%", minHeight: "150vh"}}>
                <div className="an-section" id = "work">
                {/*
                   
                */}
                     <BlogHeader
                    quote = {this.state.quote}
                    author = {this.state.author}
                    />
                <div className="col-md-6">
                    <BlogForm
                        blogEntity={this.state.blogEntity}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        onCheck = {this.onCheck}
                    />
                </div>
                <div className="col-md-6">
                    <Bloglist
                        dataItems = {this.state.blogEntityItems}
                        onButtonClick = {this.onButtonClick}
                        showEditButton={true}
                        showDeleteButton={true}
                    /> 
                </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}