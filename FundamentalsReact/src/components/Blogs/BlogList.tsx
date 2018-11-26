import * as React from "react";
import { Link } from "react-router";
import { IGridViewOptions } from "../../interfaces";
import { IBlogEntity } from "../../interfaces/Blogs/IBlogEntity";

export const Bloglist: React.StatelessComponent<IGridViewOptions<IBlogEntity>> = (props: IGridViewOptions<IBlogEntity>) => {
    return (

         <React.Fragment>
            <header className ="headerBlogForm"> YOUR BLOGS </header>
                     <div className="an-blog-container blogscrollbar" style={listBody} id = "style-4">
                        <div className="row">
                        {props.dataItems.map(buildRow(props))}
                    </div>
                </div>
        </React.Fragment>

    )
}

//***********************************************************************************************************
// STYLING
//***********************************************************************************************************
const listBody: React.CSSProperties = {
    maxHeight: 500,
    borderLeft: "1px solid #EDEDED",
    margin: '0 auto',
    overflowY: "scroll"
}

const buildRow = (props: IGridViewOptions<IBlogEntity>) => (itm: IBlogEntity, ndx: number) => {
    return (
        <div className="col-md-6 col-sm-6 cube fadeInUp wow" key={ndx}>
            <div className="an-blog-single with-shadow-dark fadeIn" style={{visibility: "visible", animationName: "fadeIn"}}>
            <div className="blog-image-container" style= {{background: 'url(' + itm.Image + ') center center no-repeat',
                backgroundSize:'cover'}}>
            </div>
            <div className="padding20">
                <h3><a href="$">{itm.Name}</a></h3> <span><span className = {(itm.IsPublic == true)? "glyphicon glyphicon-ok-sign" : ""}></span></span>
                <div className="blog-meta">
                <p>By <a href="#">{itm.FirstName} {itm.LastName}</a> <a href="#"> <b>Last Modified : </b></a> <a href="#">{itm.ModifiedDate.substring(0,10).replace('-', '/')}</a></p>
                </div>
                <div className="blog-content">
                <p> {(itm.Body.length < 150 ? itm.Body : itm.Body.substring(0,147) + " ...")} </p>
                </div>
                {props.showEditButton ? (<button type="button" className="an-btn an-btn-default btn-sm" onClick={buttonClick(props, itm.Id, "edit")}>Edit</button>) : ("")}
                    <div className = "divider"></div>
                {props.showDeleteButton ? (<button type="button" className="an-btn an-btn-default btn-sm" onClick={buttonClick(props, itm.Id, "delete")}>Delete</button>) : ("")}
            </div>
            </div> 
        </div>
        );
};

const buttonClick = (props: IGridViewOptions<IBlogEntity>, id: number, action: string) => (e: React.SyntheticEvent<HTMLButtonElement>) => {
    props.onButtonClick(id, action);
};