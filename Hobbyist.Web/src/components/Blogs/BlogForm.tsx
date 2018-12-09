import * as React from "react";
import { Link } from "react-router";
import { IBlogFormEntity } from "../../interfaces/Blogs/IBlogFormEntity";
import { Button, Input, TextArea, Checkbox } from "../../common/components/form"

export const BlogForm: React.StatelessComponent<IBlogFormEntity> = (props: IBlogFormEntity) => {
    return (
        <React.Fragment>
        <header className ="headerBlogForm"> BLOG FORM </header>
        <form id="form" className="topBefore">
             <Input
                className = "blogInput"
                label="Blog Image"
                value={props.blogEntity.Image}
                type="text"
                id="name"
                name="Image"
                onChange={props.onChange}
                placeholder = "IMAGE ?"
            />
            <Input
                className = "blogInput"
                label="Name of Blog"
                value={props.blogEntity.Name}
                type="text"
                id="name"
                name="Name"
                error={props.NameError}
                onChange={props.onChange}
                placeholder = "NAME"
            />
            <TextArea
                className = "blogInput"
                label="Blog Content"
                value={props.blogEntity.Body}
                id="message"
                rows={8}
                name="Body"
                error={props.BodyError}
                onChange={props.onChange}
                placeholder = "BODY"
            />
            <Checkbox
                label="Is Public"
                name="isPublic"
                checked={props.blogEntity.IsPublic}
                onCheck={props.onCheck}
            />
            <Button
                className="an-btn an-btn-default"
                label="Submit Blog"
                onClick={props.onSubmit}
            />
        </form>
            </React.Fragment>
    );
}