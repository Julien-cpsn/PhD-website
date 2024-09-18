import Layout from '@theme/Layout';
import {translate} from "@docusaurus/Translate";
import Card from "@site/static/js/card";
import CardColumn from "../../static/js/card-column";
import React from "react";
import AtacDemo from "@site/static/img/atac_demo.gif"
import SeratoDemo from "@site/static/img/serato_demo.png"
import LaSapienza from "@site/static/img/la_sapienza.png"
import PHP from "@site/static/img/php.png"
import "../../src/css/index.css"


const time_table_title = translate({ message: 'Emploi du temps' })
const time_table_link = `https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&title=${time_table_title}&src=Zjc3ZDlhZWQwMTZkYmNhMzgyYzdlZjczZmEyMTJlMjU0OTJjNjUwNWM3ODBkOGU5NmY4YjQ5YmM4YjRhOTY2OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26`

export default function Home() {
  return (
    <Layout
      title={
        translate({
            message: 'Accueil',
            description: 'The homepage name'
        })
      }
      description="Page d'accueil">
        <main className="main-page">
            <p>
                <strong>Bienvenue sur mon site personnel !</strong><br/><br/>

                Je m'appelle <strong>Julien Caposiena</strong>, doctorant au <a href="https://www.citi-lab.fr/" target="_blank">CITI Lab</a> et à l'<a href="https://www.insa-lyon.fr/" target="_blank">INSA Lyon</a>. Mon travail de
                recherche porte sur la <strong>Conception et développement d’un système d’exploitation open source dédié
                aux routeurs : vers une architecture convergente système et réseaux</strong>. En parallèle, j'enseigne à
                l'<a href="https://iut.univ-lyon1.fr/" target="_blank">IUT Lyon 1</a>, où je partage ma passion pour l'informatique et les réseaux avec les étudiants.<br/>

                Sur ce site, vous trouverez mes cours, ainsi que des articles retraçant l’avancée de ma thèse. N'hésitez
                pas à explorer et à me contacter pour toute question ou collaboration !
            </p>

            <div className="main-container">
                <CardColumn title={translate({message: "Mes cours"})}>
                    <Card
                        title="Cours de PHP"
                        description="Cours de WEB et PHP à l'intetion des 2ème années de BUT parcours DACS. Ce cours est encadré au sein de l'IUT Lyon 1 site de Villeubanne."
                        image={PHP}
                        href="/courses/PHP/preamble"
                    />
                </CardColumn>

                <CardColumn title={translate({message: "Mes publications"})}>
                    <Card
                        title="Un pipeline pour l'interaction parlée entre l'homme et le robot dans des scénarios collaboratifs"
                        description="Dans le contexte de la robotique collaborative, les robots partagent l'espace de travail avec les humains et la communication entre les deux parties est de la plus haute importance."
                        image={LaSapienza}
                        href="/blog/a-pipeline-for-human-robot-spoken-interaction-in-collaborative-scenarios"
                    />
                </CardColumn>

                <CardColumn title={translate({message: "Mes projets"})}>
                    <Card
                        title="ATAC"
                        description="ATAC est sans doute un client API dans ton terminal. Il est basé sur des clients connus tels que Postman ou Insomnia, mais à l'intérieur de votre terminal sans aucun environnement graphique spécifique nécessaire."
                        image={AtacDemo}
                        href="https://github.com/Julien-cpsn/ATAC"
                    />
                    <Card
                        title="Now Playing Serato"
                        description="Ceci est un petit script pour afficher les pistes en cours de lecture du logiciel Serato DJ."
                        image={SeratoDemo}
                        href="https://github.com/Julien-cpsn/NowPlayingSerato"
                    />
                </CardColumn>

                <div style={{ width: '5%' }}></div>

                <iframe
                    className="calendar"
                    src={time_table_link}
                    frameBorder="0"
                    scrolling="no"
                ></iframe>
            </div>
        </main>
    </Layout>
  );
}
