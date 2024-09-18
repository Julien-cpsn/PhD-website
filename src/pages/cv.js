import Layout from "@theme/Layout";
import '../css/cv.css'

export default function CV() {
    return (
        <Layout
            title="CV"
        >
            <body className="c--da4453"  style={{ overflow: "hidden!important" }}>
            <div className="sidebar--bg"></div>
            <aside className="sidebar">
                <div className="avatar--bg"></div>
                <div className="sidebar--data">
                    <h2 style={{ textAlign: 'center', marginLeft: '10px', marginBottom: '5px' }} className="sidebar--title">
                        <span>Données personnelles</span>
                    </h2>
                    <ul className="sidebar--list">
                        <svg className="sidebar--item-icon" fill="var(--css-color)" height="24" viewBox="0 0 24 24" width="24"
                             xmlnsXlink="http://www.w3.org/2000/svg">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>

                        <li className="sidebar--item sidebar--item-personal">
                            <svg className="sidebar--item-icon" fill="var(--css-color)" height="24" viewBox="0 0 24 24" width="24"
                                 xmlnsXlink="http://www.w3.org/2000/svg">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                            Français
                        </li>
                        <li className="sidebar--item sidebar--item-personal">
                            <svg className="sidebar--item-icon octicon" style={{ marginLeft: '6px', marginTop: '-1px'}} xmlnsXlink="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" fill="none" role="img" aria-labelledby="alelaq718e5o4kviz86p62i535zmqdst"><title id="alelaq718e5o4kviz86p62i535zmqdst">LinkedIn</title>
                                <g clipPath="url(#clip0_202_91845)">
                                    <path d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z" fill="currentColor"></path>
                                </g>
                            </svg>
                            <a href="https://www.linkedin.com/in/julien-caposiena-54555a195/" style={{ textDecoration: 'none' }} target="_blank">LinkedIn</a>
                        </li>
                        <li className="sidebar--item sidebar--item-personal">
                            <svg className="sidebar--item-icon octicon" style={{ marginLeft: '6px', marginTop: '-2px' }} xmlnsXlink="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" viewBox="0 0 256 256" xmlSpace="preserve" aria-hidden="true" width="12" height="12">
							<path fill="currentColor" fillRule="evenodd" d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z M86.3,186.2H70.9V79.1h15.4v48.4V186.2z M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5   c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1   C84.2,46.7,88.7,51.3,88.7,56.8z"></path>
						</svg>
                            <a href="https://orcid.org/0009-0002-0684-7221" style={{ textDecoration: 'none' }} target="_blank">ORCID</a>
                        </li>
                    </ul>
                </div>
                <div className="sidebar--data"
                >
                    <h2 style={{ textAlign: 'center', marginTop: '10px', marginLeft: '10px', marginBottom: '5px' }} className="sidebar--title" >
                        <span>Compétences techniques</span>
                    </h2>
                    <ul className="sidebar--list">
                        <li className="sidebar--item">
                            <span className="sidebar--label">PHP / Laravel</span>
                            <span className="sidebar--item-align-right">
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                        </span>
                        </li>
                        <li className="sidebar--item">
                            <span className="sidebar--label">Vue.js / Quasar</span>
                            <span className="sidebar--item-align-right">
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                        </span>
                        </li>
                        <li className="sidebar--item">
                            <span className="sidebar--label">HTML / CSS / JS</span>
                            <span className="sidebar--item-align-right">
                        	<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
							<svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                        </span>
                        </li>
                        <li className="sidebar--item">
                            <span className="sidebar--label">Rust</span>
                            <span className="sidebar--item-align-right">
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                        </span>
                        </li>
                        <li className="sidebar--item">
                            <span className="sidebar--label">C / C++</span>
                            <span className="sidebar--item-align-right">
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                        </span>
                        </li>
                        <li className="sidebar--item">
                            <span className="sidebar--label">Docker / Kubernetes</span>
                            <span className="sidebar--item-align-right">
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
							</svg>
                        </span>
                        </li>
                        <li className="sidebar--item">
                            <span className="sidebar--label">ROS 1 & 2</span>
                            <span className="sidebar--item-align-right">
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
							</svg>
                        </span>
                        </li>
                        <li className="sidebar--item">
                            <span className="sidebar--label">Python AI & ML</span>
                            <span className="sidebar--item-align-right">
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
							</svg>
                        </span>
                        </li>
                        <li className="sidebar--item">
                            <span className="sidebar--label">Git, Administration d'OS, Network, UML/SYSML, Java, Kotlin</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar--data" >
                    <h2 style={{ textAlign: 'center',  marginTop: '10px', marginLeft: '10px', marginBottom: '5px' }} className="sidebar--title" >
                        <span>Langues</span>
                    </h2>
                    <ul className="sidebar--list">
                        <li className="sidebar--item">
                            <span className="sidebar--label">Français – Natif</span>
                            <span className="sidebar--item-align-right">
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                        </span>
                        </li>
                        <li className="sidebar--item">
                            <span className="sidebar--label">Anglais – C1</span>
                            <span className="sidebar--item-align-right">
                                <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                                </svg>
                                <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="7"/>
                                </svg>
                                <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="7"/>
                                </svg>
                                <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="7"/>
                                </svg>
                                <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="7"/>
                                </svg>
                            </span>
                            <br />
                            <span style={{ fontWeight: 150 }}>(certifié Cambridge)</span>
                        </li>
                        <li className="sidebar--item">
                            <span className="sidebar--label">Italien</span>
                            <span className="sidebar--item-align-right">
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" stroke="var(--css-color)" strokeWidth="2" fill="none" />
                            </svg>
                            <svg className="active" fill="var(--css-color)" height="14" viewBox="0 0 24 24" width="14" xmlnsXlink="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="7"/>
                            </svg>
                        </span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar--data" >
                    <h2 style={{ textAlign: 'center', marginTop: '10px', marginLeft: '10px', marginBottom: '5px' }} className="sidebar--title" >
                        <span>Passions</span>
                    </h2>
                    <ul className="sidebar--list">
                        <li className="sidebar--item sidebar--item-text sidebar--item-interest">
                            <i className="sidebar--icon-square"></i>
                            Guitare et production musicale
                        </li>
                        <li className="sidebar--item sidebar--item-text sidebar--item-interest">
                            <i className="sidebar--icon-square"></i>
                            Informatique
                            <ul style={{ paddingLeft: '25px' }}>
                                <li>Contribution à l'open-source</li>
                                <li>Veille technologique</li>
                                <li>Projets personnels (
                                    <a href="https://github.com/Julien-cpsn/ATAC" target="__blank">
                                        ATAC
                                        <svg fill="var(--css-color)" height="12" width="12" viewBox="0 -5 24 24" xmlnsXlink="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                                        </svg>
                                    </a>
                                    )</li>
                            </ul>
                        </li>
                        <li className="sidebar--item sidebar--item-text sidebar--item-interest">
                            <i className="sidebar--icon-square"></i>
                            Ancien président de l'association La Boutique CPE Lyon, ainsi qu'ancien membre de trois associations (Gaelis, BIGG BDE, Student Club)
                        </li>
                    </ul>
                </div>
            </aside>
            <section className="sections">
                <div className="section--name">
                    <h1 style={{ textAlign: 'center' }}>
                        Julien Caposiena
                    </h1>
                </div>
                <div className="section" >
                    <div className="section section--summary"
                    >
                        <div className="section--content">
                            <p style={{ fontSize: '16px', lineHeight: '16pt', margin: '10px 0 5px 0' }}>Apprenti ingénieur en informatique et robotique. Autonome, bien organisé, apprenant rapidement, doté d'excellentes compétences en communication et d'une vaste expérience en développement et conception de solution. Également formateur sur divers sujets et compétences, tel que l'informatique.</p>
                        </div>
                    </div>
                </div>
                <div className="section" >
                    <div className="section--title" >
                        <h2>
                            <i className="section--title-icon education" >
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlnsXlink="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                                </svg>
                            </i>
                            Études
                        </h2>
                    </div>
                    <div className="section--time-line-overlay"></div>
                    <ol className="section--list">
                        <li className="section--item">
                            <div className="section--time-line">
                                <i className="section--time-line-dot"></i>
                            </div>
                            <div className="section--time-line-hide-overlay"></div>
                            <div className="section--heading-group">
                                <div className="section--date">
                                    sept. 2021 - juil. 2024
                                </div>
                                <div className="section--heading">
                                    <h3>Diplôme d'ingénieur - Informatique et réseaux de communication</h3>
                                </div>
                                <div className="section--sub-heading">
                                    Cursus en alternance — CPE Lyon, Villeurbanne (69)
                                </div>
                            </div>
                            <div className="section--content">

                                <p><b>Majeures&nbsp; :</b> Robotique (Tello, Parrot Bebop, TurtleBot), Développement</p>
                                <p><b>Mineures&nbsp;:</b> Gestion de projets, Communication, Gestion d'équipe et d'entreprise, Economie, Probabilités & Statistiques, Algèbre linéaire</p>
                            </div>
                        </li>
                        <li className="section--item">
                            <div className="section--time-line">
                                <i className="section--time-line-dot"></i>
                            </div>
                            <div className="section--time-line-hide-overlay"></div>
                            <div className="section--heading-group">
                                <div className="section--date">
                                    sept. 2019 - juil. 2021
                                </div>
                                <div className="section--heading">
                                    <h3>DUT Informatique</h3>
                                </div>
                                <div className="section--sub-heading">
                                    Institut Universitaire Technologique Lyon 1, Bourg-en-Bresse (01)
                                </div>
                            </div>
                            <div className="section--content">
                                <p><b>Majeures :</b> Informatique, Sciences de l'ingénieur</p>
                                <p><b>Mineures :</b> Communication, Economie, Business, Algebre linéaire, Analyse, Statistiques</p>
                            </div>
                        </li>
                        <li className="section--item">
                            <div className="section--time-line">
                                <i className="section--time-line-dot"></i>
                            </div>
                            <div className="section--time-line-hide-overlay"></div>
                            <div className="section--heading-group">
                                <div className="section--date">
                                    sept. 2016 - juil. 2019
                                </div>
                                <div className="section--heading">
                                    <h3>Baccalauréat STI2D</h3>
                                </div>
                                <div className="section--sub-heading">
                                    Lycée Léon Blum, Le Creusot (71)
                                </div>
                            </div>
                            <div className="section--content">
                                <p>Obtenu mention très bien.</p>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="section" >
                    <div className="section--title" >
                        <h2>
                            <i className="section--title-icon work">
                                <svg fill="var(--css-color)" height="24" viewBox="0 0 24 24" width="24" xmlnsXlink="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none"/>
                                    <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"/>
                                </svg>
                            </i>
                            Emplois & expériences techniques
                        </h2>
                    </div>
                    <div className="section--time-line-overlay"></div>
                    <ol className="section--list">
                        <li className="section--item">
                            <div className="section--time-line">
                                <i className="section--time-line-dot"></i>
                            </div>
                            <div className="section--time-line-hide-overlay"></div>
                            <div className="section--heading-group">
                                <div className="section--date">sep. 2021 - juil. 2024</div>
                                <div className="section--heading">
                                    <h3>Alternant Ingénieur en developpent web & support TV à SFR</h3>
                                </div>
                                <div className="section--sub-heading">
                                    Fullstack dev. — Vue.js, Quasar, PHP Laravel, PostgreSQL, Kubernetes
                                </div>
                            </div>
                            <div className="section--content">
                                <p>Conceptualisation, développement et maintien d'une application métier pour mon équipe répondant à leurs besoins et améliorant leur productivité. L'application intègre en temps réel les équipements de l'activité TV de SFR.</p>
                            </div>
                        </li>
                        <li className="section--item">
                            <div className="section--time-line">
                                <i className="section--time-line-dot"></i>
                            </div>
                            <div className="section--time-line-hide-overlay"></div>
                            <div className="section--heading-group">
                                <div className="section--date">avril 2021 - août 2021</div>
                                <div className="section--heading">
                                    <h3>Stage de DUT dans la start-up Tokatab</h3>
                                </div>
                                <div className="section--sub-heading">
                                    Dev. — Vue.js, Quasar, PHP Laravel, PostgreSQL, TornadoFX
                                </div>
                            </div>
                            <div className="section--content">
                                <p>
                                    <a href="https://www.tokatab.com/" target="__blank">
                                        Tokatab
                                        <svg fill="var(--css-color)" height="12" width="12" viewBox="0 -5 24 24" xmlnsXlink="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                                        </svg>
                                    </a>
                                    est une application WEB pour apprendre à jouer du piano et à chanter sans connaître le solfège. Élaboration et développement de nouvelles fonctionnalités et maintenance de l'application.</p>
                            </div>
                        </li>
                        <li className="section--item">
                            <div className="section--time-line">
                                <i className="section--time-line-dot"></i>
                            </div>
                            <div className="section--time-line-hide-overlay"></div>
                            <div className="section--heading-group">
                                <div className="section--date">sept. 2020 - avril 2021</div>
                                <div className="section--heading">
                                    <h3>Dictionnaire d'accords de piano avec Tokatab</h3>
                                </div>
                                <div className="section--sub-heading">
                                    Dev. — Vue.js, Quasar, PHP Laravel, PostgreSQL
                                </div>
                            </div>
                            <div className="section--content">
                                <p>développement d'une application WEB facile d'accès pour un dictionnaire d'accords de piano.</p>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="section" >
                    <div className="section--title" >
                        <h2>
                            <i className="section--title-icon work">
                                <svg className="svg-icon" height="24" width="24" viewBox="0 -110 1024 1124" version="1.1" xmlnsXlink="http://www.w3.org/2000/svg">
                                    <path d="M213.333333 0l597.333333 0q52.992 0 90.496 37.504t37.504 90.496l0 768q0 52.992-37.504 90.496t-90.496 37.504l-597.333333 0q-52.992 0-90.496-37.504t-37.504-90.496l0-768q0-52.992 37.504-90.496t90.496-37.504zM341.333333 725.333333l341.333333 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-341.333333 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333zM341.333333 554.666667l341.333333 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-341.333333 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333zM810.666667 85.333333l-597.333333 0q-17.664 0-30.165333 12.501333t-12.501333 30.165333l0 768q0 17.664 12.501333 30.165333t30.165333 12.501333l597.333333 0q17.664 0 30.165333-12.501333t12.501333-30.165333l0-768q0-17.664-12.501333-30.165333t-30.165333-12.501333zM341.333333 384l341.333333 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-341.333333 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333zM341.333333 213.333333l170.666667 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-170.666667 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333z"  />
                                </svg>
                            </i>
                            Travaux de recherche
                        </h2>
                    </div>
                    <div className="section--time-line-overlay"></div>
                    <ol className="section--list">
                        <li className="section--item">
                            <div className="section--time-line">
                                <i className="section--time-line-dot"></i>
                            </div>
                            <div className="section--time-line-hide-overlay"></div>
                            <div className="section--heading-group">
                                <div className="section--date">juin 2023 - août 2023</div>
                                <div className="section--heading">
                                    <h3>
                                        <a href="https://doi.org/10.1007/978-981-99-8718-4_9" target="__blank">
                                            Empowering Collaboration: A Pipeline for Human-Robot Spoken Interaction in Collaborative Scenarios
                                            <svg fill="var(--css-color)" height="12" width="12" viewBox="0 -5 24 24" xmlnsXlink="http://www.w3.org/2000/svg">
                                                <path d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                                            </svg>
                                        </a>
                                    </h3>
                                </div>
                                <div className="section--sub-heading">
                                    Stage de recherche à l'université La Sapienza — Rome, Italie
                                </div>
                            </div>
                            <div className="section--content">
                                <p>Recherche sur le Speech-To-Text dans le milieu viticole et conception d'une pipeline générique de gestion de robot pour le projet européen
                                    <a href="https://canopies.inf.uniroma3.it/" target="__blank">
                                        CANOPIES
                                        <svg fill="var(--css-color)" height="12" width="12" viewBox="0 -5 24 24" xmlnsXlink="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                                        </svg>
                                    </a>
                                    Le papier a été publié et présenté au Qatar à la conférence
                                    <a href="https://icsr23.qa/" target="__blank">
                                        ICSR 2023
                                        <svg fill="var(--css-color)" height="12" width="12" viewBox="0 -5 24 24" xmlnsXlink="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                                        </svg>
                                    </a>
                                    .
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
            </body>
        </Layout>
    )
}