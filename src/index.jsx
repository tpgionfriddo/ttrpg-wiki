import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Article, { loader as contactLoader, } from './routes/wiki/article'
import ArticleEditor, { loader as editorLoader, } from './routes/editor'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "page/:pageId",
        element: <Article />,
        loader: contactLoader,
      },
      {
        path: "edit/:pageId",
        element: <ArticleEditor />,
        loader: editorLoader,
      }
    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

