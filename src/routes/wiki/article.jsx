import { useLoaderData } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export async function loader({ params }) {
    console.log(params)
    const page = {'title':params.pageId, "content":"eeee"};
    console.log(page)
    return { page };
  }



export default function Article() {
    const [data, setData] = useState(null);
    const { page } = useLoaderData();

  useEffect(() => {
    fetch(`api/page/${page.title}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  },
   []);

    return (
        <div>
        <h1>{data.title}</h1>
        <p class="siteSub">From Wikipedia, the free encyclopedia</p>
        <p class="roleNote">This article is about {data.title}.</p>

        <div class="articleRight">
            <div class="articleRightInner">
                <img src="./img/pencil.jpg" alt="pencil" />
            </div>
            This is a blue <a href="">pencil</a>
        </div>
        <p>
        {data.content}
        </p>
        <div class="lavenderBox">
            <div class="header">Panel title</div>
            <div class="subtitle linklist"><a href="#">Lorem</a> <a href="#">Ipsum</a> <a href="#">Dolorestitas</a> </div>
            <div class="linklist">
                <a href="#">Percipit </a> <a href="#">Mnesarchum </a> <a href="#">Molestie </a> <a href="#">Phaedrum </a> <a href="#">Luptatum constituam </a> <a href="#">Habeo adipisci </a> <a href="#">Inani zril  </a> <a href="#">Forensibus sea </a> <a href="#">Habeo adipisci </a> <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Has et partem </a><a href="#">Percipit </a> <a href="#">Mnesarchum </a> <a href="#">Molestie </a> <a href="#">Phaedrum </a> <a href="#">Luptatum constituam </a> <a href="#">Habeo adipisci </a> <a href="#">Inani zril  </a> <a href="#">Vel nisl albucius </a> <a href="#">Habeo adipisci </a> <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Percipit maiestatis </a> <a href="#">Regione suscipit </a> <a href="#">Percipit maiestatis </a>
            </div>
            
            <div class="subtitle">Subtitle</div>
        </div>
        
        <div class="categories">
            <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Has et partem </a>
        </div>
        </div>
    )}