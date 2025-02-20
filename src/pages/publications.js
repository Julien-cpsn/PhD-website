import Layout from '@theme/Layout';
import React, {useEffect, useState} from "react";
import "../css/index.css"

function getPublications() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        async function retrievePublications() {
            const text = await fetch("http://julien-cpsn.com:3005/?username=Julien%20Caposiena").then(r => r.text())
            console.log(text)
            const xmlDoc = new DOMParser().parseFromString(text, "text/xml")
            const local_items = Array.from(xmlDoc.querySelectorAll("item")).map(item => ({
                title: item.querySelector("title").textContent,
                author: item.querySelector("author").childNodes[0].data,
                description: item.querySelector("description").childNodes[0].data,
                link: item.querySelector("link").childNodes[0].data,
            }))

            setItems(local_items)
        }

        if (items.length === 0) {
            retrievePublications();
        }
    }, [])

    return (
        <>
            {items.length === 0 && <p>Loading...</p>}
            {items.map((item, index) => (
                <div key={item.title}>
                    <h3><a href={item.link} target="_blank">{item.title}</a></h3>
                    <div style={{ opacity: "50%" }}>{ item.author }</div>
                    <div>{ item.description }</div>
                    { index !== items.length-1 &&
                        <hr/>
                    }
                </div>
            ))}
        </>
    )
}

export default function Publications() {
    return (
        <Layout
            title="Publications"
            description="Scientific publications">
            <main className="main-page">
                <div style={{ width: "75%", marginLeft: "auto", marginRight: "auto", marginTop: "50px", marginBottom: "50px" }}>
                    {getPublications()}
                </div>
            </main>
        </Layout>
    );
}
