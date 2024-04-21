<script lang="ts">
  import fujiLogo from "./assets/images/logo.png";
  import profile from "./assets/images/profile.jpg";
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="Federico Rapetti's Portfolio" />
  <meta name="author" content="Federico 'fuji97' Rapetti" />
  <title>Federico Rapetti - Portfolio</title>

  <script
    src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"
    crossorigin="anonymous"
  ></script>
  <link
    href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
    rel="stylesheet"
    type="text/css"
  />
  <!-- <link href='css/styles.css' rel='stylesheet'/> -->
  <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
</svelte:head>

<svelte:body id="page-top" />

<main>
  <!-- Navigation -->
  <nav
    id="sideNav"
    class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
  >
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Federico Rapetti</span>
      <span class="d-none d-lg-block">
        <img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src={profile}
          alt="Foto"
        />
      </span>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link icon-bigger"
            href="https://github.com/fuji97/fuji97.github.io"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Page Content -->
  <div class="container-fluid p-0">
    <!-- About-->
    <section class="resume-section" id="about">
      <div class="resume-section-content">
        <div class="centered-medium">
          <img
            class="img-fluid mx-auto mb-4"
            src={fujiLogo}
            alt="Logo"
            width="150px"
            height="150px"
          />
          <h1 class="mb-0">
            Federico
            <span class="text-primary">"fuji97"</span>
            Rapetti
          </h1>
          <div class="subheading mb-4">
            Laurea in Sicurezza Informatica, Full Stack e Game Developer - <a
              href="mailto:fuji1097@gmail.com">fuji1097@gmail.com</a
            >
          </div>
        </div>
        <p class="lead mb-2">
          Laureato con 110 e Lode in Informatica presso l'Università degli Studi del
          Piemonte Orientale, e successivamente con 110 e Lode in Sicurezza Informatica presso l'Università degli Studi di Milano.
        </p>
        <p class="lead mb-5">
          Sviluppatore Full Stack C# e Unity per <a href="https://www.reply.com/infinity-reply/en/">Infinity Reply</a>
        </p>
        <div class="social-icons">
          <a class="social-icon" href="https://www.facebook.com/fuji1097"
            ><i class="fab fa-facebook-f"></i></a
          ><a class="social-icon" href="https://t.me/angolodifuji"
            ><i class="fab fa-telegram"></i></a
          ><a
            class="social-icon"
            href="https://www.linkedin.com/in/federico-rapetti/"
            ><i class="fab fa-linkedin-in"></i></a
          ><a class="social-icon" href="https://github.com/fuji97"
            ><i class="fab fa-github"></i></a
          ><a class="social-icon" href="https://twitter.com/1097fuji"
            ><i class="fab fa-twitter"></i></a
          >
        </div>
      </div>
    </section>
    <hr class="m-0" />
    <!-- Projects-->
    <section class="resume-section" id="projects">
      <div class="resume-section-content">
        <h2 class="mb-5">Progetti principali</h2>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">Cremisi Portals</h3>
            <div class="subheading mb-3">Sidereal Works</div>
            <p>
              Videogioco fan-made ispirato a Pokémon in Unity 3D. Lo sviluppo è stato sospeso per mancanza di interesse da parte del team.
            </p>
          </div>
          <div class="flex-shrink-0">
            <a
              class="social-icon icon-spaced icon-bigger"
              href="https://twitter.com/SiderealWorks"
              ><i class="fab fa-twitter"></i></a
            ><a
              class="social-icon icon-spaced icon-bigger"
              href="https://www.facebook.com/SiderealWorks"
              ><i class="fab fa-facebook-f"></i></a
            ><a
              class="social-icon icon-spaced icon-bigger"
              href="https://siderealworks.it/"><i class="fas fa-home"></i></a
            >
          </div>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">Telegram.Bot.Advanced</h3>
            <p>
              Framework per lo sviluppo di bot Telegram in ASP.NET Core basato
              sul pacchetto Telegram.Bot.
            </p>
          </div>
          <div class="flex-shrink-0">
            <a
              class="social-icon icon-spaced icon-bigger"
              href="https://www.nuget.org/packages/Telegram.Bot.Advanced/"
              ><i class="fas fa-cubes"></i></a
            ><a
              class="social-icon icon-spaced icon-bigger"
              href="https://github.com/fuji97/Telegram.Bot.Advanced"
              ><i class="fab fa-github"></i></a
            >
          </div>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">Chaldea Bot</h3>
            <p>
              Bot Telegram per il tracking dei giocatori di Fate/Grand Order
              sviluppato in ASP.NET Core utilizzando il framework
              Telegram.Bot.Advanced.
            </p>
          </div>
          <div class="flex-shrink-0">
            <a
              class="social-icon icon-spaced icon-bigger"
              href="https://t.me/chaldeabot"><i class="fab fa-telegram"></i></a
            ><a
              class="social-icon icon-spaced icon-bigger"
              href="https://github.com/fuji97/chaldea-user-bot"
              ><i class="fab fa-github"></i></a
            >
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div class="flex-grow-1">
            <h3 class="mb-0">Ping</h3>
            <p>
              Un Proof-of-Concept in PHP di un social network basato sulla
              posizione degli utenti.
            </p>
          </div>
          <div class="flex-shrink-0">
            <a
              class="social-icon icon-spaced icon-bigger"
              href="https://github.com/fuji97/Ping"
              ><i class="fab fa-github"></i></a
            >
          </div>
        </div>
      </div>
    </section>
    <hr class="m-0" />

    <!-- Education -->
    <section id="education" class="resume-section">
      <div class="resume-section-content">
        <h2 class="mb-5">Titoli di studio</h2>

        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">
              Istituto di Istruzione Superiore - "CARAMUEL - RONCALLI"
            </h3>
            <div class="subheading mb-3">
              Diploma di Istituto Tecnico - Settore Tecnologico
            </div>
            <div>
              Indirizzo “Informatica e Telecomunicazioni” - Articolazione
              “Informatica”
              <p><b>Voto: </b>100</p>
            </div>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">2010 - 2016</span>
          </div>
        </div>

        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">Università del Piemonte Orientale</h3>
            <div class="subheading mb-3">Laurea in Informatica</div>
            <div>
              <p>
                <b>Voto:</b> 110 e Lode
                <br />
                <b>Tesi:</b>
                <i
                  >“Home Insurance: Un applicazione web per poter accedere a
                  tutte le polizze da casa”</i
                >
              </p>
            </div>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">Agosto 2016 - Ottobre 2019</span>
          </div>
        </div>

        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">Università degli Studi di Milano</h3>
            <div class="subheading mb-3">
              Laurea Magistrale in Sicurezza Informatica
            </div>
            <div>
              <p>
                <b>Voto:</b> 110 e Lode
                <br />
                <b>Tesi:</b>
                <i
                  >“E-Voting: Analisi ed Implementazione di un Sistema di Voto a 2 Fattori”</i
                >
              </p>
            </div>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">2019 - Ottobre 2022</span>
          </div>
        </div>
      </div>
    </section>

    <hr class="m-0" />

    <!-- Skills-->
    <section class="resume-section" id="skills">
      <div class="resume-section-content">
        <h2 class="mb-5">Competenze tecinche</h2>
        <div class="subheading">Linguaggi di programmazione</div>
        <div class="badge rounded-pill text-bg-secondary badge-large">C#</div>
        <div class="badge rounded-pill text-bg-secondary badge-large">
          ASP.NET Core
        </div>
        <div class="badge rounded-pill text-bg-secondary badge-large">
          Entity Framework Core
        </div>
        <div class="badge rounded-pill text-bg-secondary badge-large mb-1">
          Java
        </div>
        <br />
        <div class="badge rounded-pill text-bg-secondary badge-large">
          ASP.NET Core
        </div>
        <div class="badge rounded-pill text-bg-secondary badge-large">Python</div>
        <div class="badge rounded-pill text-bg-secondary badge-large">HTML5</div>
        <div class="badge rounded-pill text-bg-secondary badge-large">CSS3</div>
        <div class="badge rounded-pill text-bg-secondary badge-large mb-3">
          JavaScript
        </div>
        <div class="subheading">Tools</div>
        <div class="badge rounded-pill text-bg-secondary badge-large">GitHub</div>
        <div class="badge rounded-pill text-bg-secondary badge-large">
          GitHub Actions
        </div>
        <div class="badge rounded-pill text-bg-secondary badge-large">Docker</div>
        <div class="badge rounded-pill text-bg-secondary badge-large mb-3">
          Linux
        </div>
        <div class="subheading mb-3">Workflow</div>
        <ul class="fa-ul mb-0">
          <li>
            <span class="fa-li"><i class="fas fa-check"></i></span>Test Driven
            Development
          </li>
          <li>
            <span class="fa-li"><i class="fas fa-check"></i></span>Git &
            Continuous Integration/Delivery
          </li>
          <li>
            <span class="fa-li"><i class="fas fa-check"></i></span>Agile
            Development
          </li>
        </ul>
      </div>
    </section>
    <hr class="m-0" />
    <!-- Interests-->
<!--    <section class="resume-section" id="interests">-->
<!--      <div class="resume-section-content">-->
<!--        <h2 class="mb-5">Interessi e storia</h2>-->
<!--        <p>-->
<!--          Una delle mie passioni principali sono i videogiochi, sono in questo-->
<!--          mondo sin da piccolo e ho sviluppato nel tempo l'interesse di-->
<!--          svilupparli.-->
<!--        </p>-->
<!--        <p>-->
<!--          Ho iniziato come "modder" nel mondo di Pokémon sul forum <a-->
<!--            href="https://pokemonhacking.it">PokemonHacking.it</a-->
<!--          >, con le cosiddette "Hack ROM", versioni modificate dei giochi-->
<!--          principali per includere nuovi Pokémon, mappe, storie e meccaniche di-->
<!--          gioco.-->
<!--        </p>-->
<!--        <p>-->
<!--          Col tempo ho conosciuto diverse persone con cui successivamente-->
<!--          fondammo l'Hoseki Team, un team a supporto del progetto<i-->
<!--            >Pokémon Cremisi Portals</i-->
<!--          >, un gioco fan-made basato su Pokémon Essentials, un toolkit per-->
<!--          creare giochi Pokémon-like su RPG Maker XP.-->
<!--        </p>-->
<!--        <p>-->
<!--          Successivamente, a causa del rinnovato interesse per il progetto ed un-->
<!--          sostanziale cambio di membri del team, si è deciso di rimuovere-->
<!--          completamente tutti i riferimenti a Pokémon ed avviare un progetto da-->
<!--          0 su Unity 3D sotto il nome di <i>Sidereal Works</i>.-->
<!--        </p>-->
<!--      </div>-->
<!--    </section>-->
    <hr class="m-0" />
  </div>
  <section>
    <div class="footer">
      Based on the free theme <a href="https://startbootstrap.com/themes/resume"
        >Resume</a
      >
      from <a href="https://startbootstrap.com/">Start Bootstrap</a> - Hosted on
      <a href="https://pages.github.com/">GitHub Pages</a>
    </div>
  </section>
</main>

<!-- <style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .read-the-docs {
    color: #888;
  }
</style> -->
