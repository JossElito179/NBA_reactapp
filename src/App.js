import "./assets/css/bootstrap.min.css";
import "./assets/css/LineIcons.3.0.css";
import "./assets/css/main.css";
import React, { useState, useEffect } from 'react';
import WebService from "./WebService";

function Head() {
  return (
    <>
      <head>

        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>NBA</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </head>
    </>
  );
}

function Header() {
  return (
      <>
        <header class="header navbar-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="nav-inner">
                            <nav class="navbar navbar-expand-lg">
                                <a class="navbar-brand" href="index.html">
                                    <img src="assets/images/logo/white-logo.svg" alt="Logo"/>
                                </a>
                                <button class="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" class="navbar-nav ms-auto">
                                        <li class="nav-item">
                                            <a class="dd-menu active collapsed" href="index.html" data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent"
                                                aria-expanded="false" aria-label="Toggle navigation">Actus</a>
                                            <ul class="sub-menu collapse" id="submenu-1-1">
                                                <li class="nav-item active"><a href="index.html">NBA</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a class="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                                aria-expanded="false" aria-label="Toggle navigation">Classement</a>
                                            <ul class="sub-menu collapse" id="submenu-1-2">
                                                <li class="nav-item"><a href="login.html?etat=1">NBA</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a class="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent"
                                                aria-expanded="false" aria-label="Toggle navigation">Scores</a>
                                            <ul class="sub-menu collapse" id="submenu-1-3">
                                                <li class="nav-item"><a href="login.html?etat=0">NBA</a></li>
                                                <li class="nav-item"><a href="creationArticle.html">FootBall</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="contact.html" aria-label="Toggle navigation">Programme</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="button">
                                    <a href="signup.html" class="signup">S'ABONNER</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div> 
        </header>
      </>
  );
}

function Cercles() {
  return (
      <>
        <div className="main__circle" style={{ zIndex: 0 }}></div>
        <div class="main__circle2"></div>
        <div class="main__circle3"></div>
        <div class="main__circle4"></div>
      </>
  );
}

function Container() {
  // const [result, setResult] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/');
  //       const data = await response.json();
  //       setResult(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(result);

  return (
      <>
        <div class="container">
            <div class="row align-items-center">
                <div class="container-fluid">
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">2023-2024 SAISON STATS</p>
                        </div>
                        <div class="card-body">
                            <div id="dataTable" class="table-responsive table mt-2" role="grid" aria-describedby="dataTable_info">
                                <table id="dataTable" class="table my-0">
                                    <thead>
                                        <tr>
                                            <th>Classement</th>
                                            <th>JOUEUR</th>
                                            <th>EQUIPE</th>
                                            <th>M</th>
                                            <th>MJ</th>
                                            <th>PPM</th>
                                            <th>RPM</th>
                                            <th>PDPM</th>
                                            <th>MPM</th>
                                            <th>EFF</th>
                                            <th>FG%</th>
                                            <th>3P%</th>
                                            <th>%LF</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="assets/images/profile/user-1.jpg"/>Airi Satou</td>    
                                            <td>SAC</td>
                                            <td>13</td>
                                            <td>13</td>
                                            <td>13</td>
                                            <td>13</td>
                                            <td>13</td>
                                            <td>13</td>
                                            <td>13</td>
                                            <td>13</td>
                                            <td>13</td>
                                            <td>13</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

function Section() {
  return (
      <>
        <section class="hero-area">
            <Cercles />
            <Container />
        </section>
      </>
  );
}

function Scroll() {
  return (
      <>
        <a href="#" class="scroll-top">
          <i class="lni lni-chevron-up"></i>
        </a>
      </>
  );
}


function Body() {
  return (
      <>
        <body>
            <Header />
            <Section />
            <Scroll />
        </body>
      </>
  );
}

function Page() {
  return (
      <>
        <Head />
        <Body />
      </>
  );
}

export default Page;