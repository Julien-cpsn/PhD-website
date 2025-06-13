import Layout from '@theme/Layout';
import React, {useEffect, useState} from "react";
import "../css/publications.css"

function getPublications() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        async function retrievePublications() {
            const text = await fetch("https://publications-rss.julien-cpsn.com/?username=Julien%20Caposiena").then(r => r.text())

            const xmlDoc = new DOMParser().parseFromString(text, "text/xml")
            const local_items = Array.from(xmlDoc.querySelectorAll("item")).map(item => ({
                title: item.querySelector("title").textContent,
                author: item.querySelector("author").childNodes[0].data,
                content: item.querySelector("encoded").childNodes[0].data,
                description: item.querySelector("description")?.childNodes[0].data,
                pubDate: item.querySelector("pubDate").childNodes[0].data,
                source: {
                    name: item.querySelector("source").childNodes[0].data,
                    url: (() => {
                        const url = item.querySelector("source").attributes['url'].value.trim()

                        if (url.startsWith("https://")) {
                            return url
                        }
                        else {
                            return 'https://' + url
                        }
                    })()
                },
                link: item.querySelector("link").childNodes[0].data,
                pdf_link: item.querySelector("enclosure")?.attributes['url'].value,
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
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3><a href={item.link} target="_blank">{item.title}</a></h3>
                        { item.pdf_link &&
                            <a href={item.pdf_link} target="_blank">[PDF]</a>
                        }
                    </div>
                    <div style={{ opacity: "50%" }}>
                        <span>{ item.author }&nbsp;-&nbsp;</span>
                        <span>{ item.description }&nbsp;-&nbsp;</span>
                        <span>{ item.pubDate }&nbsp;-&nbsp;</span>
                        <span><a href={item.source.url} target="_blank">{ item.source.name }</a></span>
                    </div>
                    <div>{ item.content }</div>
                    { index !== items.length-1 &&
                        <hr style={{ opacity: "0.25" }}/>
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
                <div className="content">
                    {getPublications()}
                </div>
            </main>
        </Layout>
    );
}
