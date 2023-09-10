import { Form, useLoaderData } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export async function loader({ params }) {
    const pageId = params.pageId;
    return { pageId };
}


function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    console.log(form)
    const formData = new FormData(form);
    // You can pass formData as a fetch body directly:
    (async () => {
        const rawResponse = await fetch(`/api/page/${formData.get('title')}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: formData.get('title'), content: formData.get('content') })
        });
        // const content = await rawResponse.json();
    })()
}

export default function ArticleEditor() {
    const { pageId } = useLoaderData();
    const [data, setData] = useState({ 'title': pageId, 'content': '' });
    useEffect(() => {
        fetch(`/api/page/${pageId}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    },
        []);
    return (
        <Form onSubmit={handleSubmit} id="contact-form">
            <input
                placeholder="Title"
                aria-label="Title"
                type="text"
                name="title"
                defaultValue={data.title}
            />
            <textarea
                placeholder="Content"
                aria-label="Content"
                type="text"
                name="content"
                defaultValue={data.content}
            />
            <input type="submit" value="Submit" />
        </Form>

    );
}