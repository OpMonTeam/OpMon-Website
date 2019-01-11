const LANGTITLE        = document.getElementById("langTitle");
const CONTACTTITLE     = document.getElementById("contactTitle");
const LANGDESC         = document.getElementById("langDesc");
const LANGDOWNTITLE    = document.getElementById("langDownTitle");
const MENUDOWN         = document.getElementById("menuDown");
const MENUFEATURES     = document.getElementById("menuFeatures");
const MENUABOUT        = document.getElementById("menuAbout");
const MENUTEAM         = document.getElementById("menuTeam");
const MENUDOC          = document.getElementById("menuDoc");
const LANGDOWN         = document.getElementById("langDown");
const LANGGAMEVERS     = document.getElementById("langGameVers");
const LANGDOWNWIN      = document.getElementById("langDownWin");
const LANGDOWNMAC      = document.getElementById("langDownMac");
const LANGDOWNLIN      = document.getElementById("langDownLin");
const LANGODOWN        = document.getElementById("langODown");
const LANGOSDOWN       = document.getElementById("langOSDown");
const LANGALLDOWN      = document.getElementById("langAllDown");
const FEATURESTITLE    = document.getElementById("featuresTitle");
const FEATURESSUBTITLE = document.getElementById("featuresSubTitle");
const FEATURE1T        = document.getElementById("feature1T");
const FEATURE1         = document.getElementById("feature1");
const FEATURE2T        = document.getElementById("feature2T");
const FEATURE2         = document.getElementById("feature2");
const FEATURE3T        = document.getElementById("feature3T");
const FEATURE3         = document.getElementById("feature3");
const ABOUTTITLE       = document.getElementById("aboutTitle");
const ABOUTTEXT        = document.getElementById("aboutText");
const NEWS             = document.getElementById("news");
const DEMOTITLE        = document.getElementById("demoTitle");
const DEMOTEXT         = document.getElementById("demoText");
const GOTOYOUTUBE      = document.getElementById("goToYoutube");
const TEAMTITLE        = document.getElementById("teamTitle");
const TEAMSUBTITLE     = document.getElementById("teamSubTitle");
const JLPPCDESC        = document.getElementById("jlppcDesc");
const NAVET56DESC      = document.getElementById("navet56Desc");
const GITHUBHELP       = document.getElementById("githubHelp");
const CREDITSTITLE     = document.getElementById("creditsTitle");
const FULLCREDITS      = document.getElementById("fullCredits");
const ALLCAT           = document.getElementById("allCat");
const CATREGIMYS       = document.getElementById("catRegimys");
const CATFIGHT         = document.getElementById("catFight");
const CATCITY          = document.getElementById("catCity");
const CATINTERFACE     = document.getElementById("catInterface");
const REPORTBUGS       = document.getElementById("reportBugs");
const GOISSUES         = document.getElementById("goIssues");
const SEEISSUES        = document.getElementById("seeIssues");
const CREATEISSUE      = document.getElementById("createIssue");
const JLPPCROLE        = document.getElementById("jlppcRole");
const NAVET56ROLE      = document.getElementById("navet56Role");
const LINKS            = document.getElementById("links");
const LOOKGITHUB       = document.getElementById("lookGithub");
const LOOKSITEREPO     = document.getElementById("lookSiterepo");
const LOOKYT           = document.getElementById("lookYT");
const LOOKDISC         = document.getElementById("lookDisc");
const LOOKDOC          = document.getElementById("lookDoc");
const DISCLAMER        = document.getElementById("disclamer");

var textFr = {
    langTitle : "Le jeu inspiré de Pokémon !",
    langDesc : "Prenez place dans cette aventure faite de monstres et d'explorations, dans la jolie région de Regimys !",
    langDownTitle : "Télécharger le jeu",
	contactTitle : "Contact (Discord / IRC / Github)",
    menu : {
		down : "Téléchargements",
		features : "Fonctionnalitées",
		about : "A propos du jeu",
		team : "Le Team OPMon",
		contact : "Contact",
		doc : "Documentation"
    },
    langDown : "Téléchargement",
    langGameVers : "Jeu version Alpha " + version + date,
    langDownWin : "Télécharger pour Windows",
    langDownMac : "Télécharger pour Mac",
    langDownLin : "Télécharger pour Debian 9/Ubuntu 18.04/Mint 19",
    langODown : "Autres téléchargements",
    langOSDown : "Toutes plateformes",
    langAllDown : "Voir tous les téléchargements",

    featuresTitle : "Des nouveautés attendues depuis longtemps",
    featuresSubTitle : "par les fans des jeux Pokemons",
    feature1T : "Créé par une équipe bénévole",
    feature1 : "OpMon est développé par une équipe formée a 100% de bénévoles! Nous ne demandons rien a part votre bonheur!",
    feature2T : "Un jeu libre",
    feature2 : "OpMon est un jeu totalement libre open source, l'équipe est bénévole et nous utilisons même des logiciels libres pour le créer: Linux, Cmake, Gimp, Git ect...",
    feature3T : "Fait par des fans, pour des fans",
    feature3 : "Le jeu regeorge(ra) de petits Easters Eggs et clins d'oeils à l'univers de Nintendo et médiavisuel tout en ajoutant des nouveautés qui redonnent un vent de fraicheur à la license.",
    aboutTitle : "Jeu totalement gratuit et libre de droit",
    aboutText : "Le jeu a été imaginé en 2012 et concrétisé en 2016 par une toute petite équipe de fans, le jeu est libre, le code source est ouvert à tous, vous pouvez donc venir nous aider et améliorer le jeu.",
    news : "<h2>Les news du jeu</h2><p>Voici les dernières infos sur le développement du jeu!</p><ul><li>13/08/18 - La version Alpha 0.15 est sortie !</li><li>30/03/18 - Vous pouvez maintenant tester le jeu avec des version chaques semaines, aller dans Téléchargements, puis OpMon Unstable</li><li>21/02/18 - La version Alpha 0.14 stable est sortie!</li><li>06/10/17 - La version Alpha 0.13 stable est sortie!</li><li>19/07/17 - Le developpement se met en pause jusqu'a debut aout, bonnes vacances !</li><li>15/07/17 - La version Alpha 0.12 stable est sortie!</li><li>28/06/17 - La version Alpha 0.11 stable est sortie!</li><li>31/05/17 - La version Alpha 0.1 stable est sortie !</li><li>29/05/17 - Le jeu a changé de moteur graphique et est passsé a SFML</li><li>02/05/17 - Un nouveau Bilan Mensuel est sorti! </li><li>22/04/17 - Une nouvelle version de developpement est sortie!</li><li>28/03/17 - La version 0.09 est sortie!!!</li><li>22/03/17 - Le site a une toute nouvelle interface! </li><li>21/03/17 - Le systeme de sauvegarde est terminé! Le début du travail sur la ville de départ commence!</li></ul>",
    demoTitle : "Démo d'OPMon",
    demoText : "Voici une brève presentation en action du jeu, c'est la ville de départ du personnage principal. Une demo sortira a chaques grosses nouvelles version (0.1, 0.2, 0.3 etc.. jusqu'a la version 1.0)",
    goToYoutube : "Accéder à la page YouTube :",
    teamTitle : "L'équipe de developpement du jeu",
    teamSubTitle : "(Sans compter les contributeurs occasionels, que vous retrouverez sur Github)",
    jlppcDesc : "Créateur, initiateur du projet et programmeur du jeu",
    navet56Desc : "Co-Créateur, game-designer et graphiste du jeu",
    aerziaDesc : "Collaborateur principal, aide à la programmation et à l'innovation",
    githubHelp : "Nous avons besoin d'aide, et même si vous n'avez aucunes connaissances en programmation, vous pouvez quand même nous aider, en nous faisant part des bugs que vous avez trouvé, ou en nous suggerant des améliorations!",
    creditsTitle : "Crédits entiers",
    fullCredits : 'Voir les crédits entiers : <a href="https://github.com/cyrioncentori/OpMon/blob/master/Credits.md">Crédits</a>',
    allCat : "Toutes catégories",
    catRegimys : "La région Regimys",
    catFight : "En combat",
    catCity : "Les villes",
    catInterface : "Interface du jeu",
    links : "Liens",
    lookGithub : "Voir le code source",
    lookSiterepo : "Voir le code source du site",
    lookYT : "Voir la chaine Youtube",
    lookDisc : "Voir le chan Discord",
    lookDoc : "Voir la documentation du code source",
    reportBugs : "Reportez des bugs ou donnez des suggestions !",
    goIssues : "Allez sur Github section Issues !",
    seeIssues : "Voir les Issues sur Github",
    createIssue : "Créer une Issue sur Github",
    jlppcRole : "Programmation et aide sur le projet",
    navet56Role : "Aide graphique, fan-arts"
    
};

var textEn = {
    langTitle : "A game inspired by Pokemon !",
    langDesc : "Go for an adventure with exploration and many monsters, in the wonderful region of Regimys !",
    langDownTitle : "Download the game",
	contactTitle : "Contact (Discord / IRC / Github)",
    menu : {
	down : "Downloads",
	features : "Features",
	about : "About the game",
	team : "The OPMon Team",
	contact : "Contacts",
	doc : "Documentation"
    },
    langDown : "Download",
    langGameVers : "Game version : Alpha " + version + date,
    langDownWin : "Download for Windows",
    langDownMac : "Download for Mac",
    langDownLin : "Download for Debian 9/Ubuntu 18.04/Mint 19)",
    langODown : "Other downloads",
    langOSDown : "All platforms",
    langAllDown : "See all downloads",

    featuresTitle : "New features long awaited",
    featuresSubTitle : "by the Pokemon fans",
    feature1T : "Developed by a volunteer team",
    feature1 : "OpMon is developed by a team completely composed of volunteers! We ask nothing, but your happiness!",
    feature2T : "An open source game",
    feature2 : "OPMon is totally open source, and we even use open source software to create it: Linux, Code::blocks, Gimp, Git and many others!",
    feature3T : "Created by fans for fans",
    feature3 : "The game contains plenty of small Easters Eggs to the universe of Nintendo and mediavisual while adding new features that give a wind of freshness to the license.",
    aboutTitle : "Game totally free",
    aboutText : "The game was imagined in 2012 and made concrete in 2016 by a very small team of fans, the game is free, the source code is open to all, so you can come and help us and improve the game.",
    news : "<h2>Game development news!</h2><p>The last news on the game's development!</p><ul><li>13/08/18 - The Alpha 0.15 is out !</li><li>30/03/18 - You can now test the game with versions every week, go to Downloads, then OpMon Unstable</li><li>21/02/18 - The Alpha 0.14 stable is out !</li><li>06/10/17 - The Alpha 0.13 stable is out !</li><li>08/08/17 - New release ! Alpha 0.12.1 is out, bringing many optimisation improvements!</li></ul>",
    demoTitle : "OPMon demo",
    demoText : "A video showing the Alpha 0.1 version of the game!",
    goToYoutube : "Go to the Youtube Channel",
    teamTitle : "The OPMon Team",
    teamSubTitle : '(all other contributors are on Github, see them <a href="https://github.com/cyrioncentori/OpMon/blob/master/Credits.md">here</a>',
    jlppcDesc : "Foundator and programmer",
    navet56Desc : "Co-Creator, game-designer and graphic designer",
    aerziaDesc : "Most important collaborator",
    githubHelp : "We need help, and even if you have not any knowledge in programmation, you can help us anyway by telling us the bugs you have found, or by proposing us enhancements!",
    creditsTitle : "Crédits entiers",
    fullCredits : 'Full credits : <a href="https://github.com/cyrioncentori/OpMon/blob/master/Credits.md">Credits</a>',
    allCat : "All screenshots",
    catRegimys : "The region of Regimys",
    catFight : "In fight",
    catCity : "The cities",
    catInterface : "Game HUD",
    links : "Links",
    lookGithub : "See the source code",
    lookSiterepo : "See this site's source code",
    lookYT : "Go to the Youtube channel",
    lookDisc : "Go to the OpMon's discord server",
    lookDoc : "Go to the OpMon's documentation",
    reportBugs : "To report bugs and make suggestions on GitHub :",
    goIssues : "Go on Github Issues",
    seeIssues : "See all OpMon's Issues on Github",
    createIssue : "Create an Issue on Github",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist"
};

var textEs = {
    langTitle : "Un juego inspirado de Pokemon !",
    langDesc : "Venid a la aventura donde hay muchos de monstruos y explorad la bonita región de Regimys!",
    langDownTitle : "Descargar el juego",
	contactTitle : "Contacto (Discord / IRC / Github)",
    menu : {
	down : "Descargas",
	features : "Funcionalidades",
	about : "Acerca del juego",
	team : "El equipo de OpMon",
	contact : "Contacto",
	doc : "Documentación"
    },
    langDown : "Descargas",
    langGameVers : "Juego versión Alpha " + version + date,
    langDownWin : "Descargar para Windows",
    langDownMac : "Descargar para Mac",
    langDownLin : "Descargar para Debian 9/Ubuntu 18.04/Mint 19",
    langODown : "Otras Descargas",
    langOSDown : "Todas las plataformas",
    langAllDown : "Ver todas las descargas",

    featuresTitle : "Las novedades desde hace mucho tiempo",
    featuresSubTitle : "hecho por los fanaticos de juegos Pokemons",
    feature1T : "Creado por un equipo voluntario",
    feature1 : "¡ OpMon fue creado por un equipo unicamente constituido de benévolos! ¡ No pedimos nada mas que su placer !",
    feature2T : "Un juego open-source",
    feature2 : "OpMon es un juego totalemente libre, y utilizamos programas libres para crearlo: Linux, Gimp, Git etcétera...",
    feature3T : "Hecho por fans, para los fans",
    feature3 : "El juego esconde muchos sorpresas ocultas y referencias al universo de Nintendo y medios visuales agregando novedades que dan una gran cantidad de cambios a la licencia.",
    aboutTitle : "Juego totalemente gratís y libre de derechos",
    aboutText : "El juego fue imaginado en 2012 y hecho en 2016 , el código del juego esta abierto a todos, podéis venir ayudarnos y mejorar el juego.",
    news : "<h2>Las noticias del juego</h2><p>aqui tiene las últimas informaciones del juego!</p><ul><li>13/08/18 - La versión Alpha 0.15 salió!</li><li>21/02/18 - La versión Alpha 0.14 salió!</li><li>06/10/17 - La versión Alpha 0.13 salió!</li><li>08/08/17 - La versión Alpha 0.12.1 salió!</li></ul>",
    demoTitle : "Demo de OPMon",
    demoText : "Demo de la versión Alpha 0.1",
    goToYoutube : "La pagina Youtube:",
    teamTitle : "El equipo que ha creado el juego",
    teamSubTitle : '(no hay los contribuyentes, que estan en la pagina Github)',
    jlppcDesc : "Creador del juego",
    navet56Desc : "Artista gráfico del juego",
    aerziaDesc : "Contribuyente primario, ayuda al desarrollo",
    githubHelp : "Necesitamos su ayuda, si no tiene conocimientos de programación también puede ayudarnosn puede dar consejos para mejorar el juego",
    creditsTitle : "Contribuyentes",
    fullCredits : 'Ver todos los contribuyentes : <a href="https://github.com/cyrioncentori/OpMon/blob/master/Credits.md">contribuyente',
    allCat : "All screenshots",
    catRegimys : "La regiona Regimys",
    catFight : "In fight",
    catCity : "The cities",
    catInterface : "Game HUD",
    links : "Links",
    lookGithub : "Ver el source code",
    lookSiterepo : "Ver el site source code",
    lookYT : "Ver el Canal de YouTube",
    lookDisc : "Ver el Discord canal",
    lookDoc : "Ver la documentacion",
    reportBugs : "Para reportar errores y hacer sugerencias en GitHub :",
    goIssues : "Ir a la pagina de los issues",
    seeIssues : "Ver todos los issues de OpMon en Github",
    createIssue : "Crear un issue en Github",
    jlppcRole : "Programación y preguntas sobre el proyecto",
    navet56Role : "Diseñador de juegos y grafista"
};
 
var txtLang = [textFr, textEs, textEn];

function printLang(id){
    var lang = txtLang[id];
    LANGTITLE.innerHTML = lang.langTitle;
    LANGDESC.innerHTML = lang.langDesc;
    LANGDOWNTITLE.innerHTML = lang.langDownTitle;
    MENUDOWN.innerHTML = lang.menu.down;
    MENUFEATURES.innerHTML = lang.menu.features;
    MENUABOUT.innerHTML = lang.menu.about;
    MENUTEAM.innerHTML = lang.menu.team;
    MENUDOC.innerHTML = lang.menu.doc;
    LANGDOWN.innerHTML = lang.langDown;
    LANGGAMEVERS.innerHTML = lang.langGameVers;
    LANGDOWNWIN.innerHTML = lang.langDownWin;
    LANGDOWNMAC.innerHTML = lang.langDownMac;
    LANGDOWNLIN.innerHTML = lang.langDownLin;
    LANGODOWN.innerHTML = lang.langODown;
    LANGOSDOWN.innerHTML = lang.langOSDown;
    LANGALLDOWN.innerHTML = lang.langAllDown;
    FEATURESTITLE.innerHTML = lang.featuresTitle;
    FEATURESSUBTITLE.innerHTML = lang.featuresSubTitle;
    FEATURE1T.innerHTML = lang.feature1T;
    FEATURE1.innerHTML = lang.feature1;
    FEATURE2T.innerHTML = lang.feature2T;
    FEATURE2.innerHTML = lang.feature2;
    FEATURE3T.innerHTML = lang.feature3T;
    FEATURE3.innerHTML = lang.feature3;
    ABOUTTITLE.innerHTML = lang.aboutTitle;
    ABOUTTEXT.innerHTML = lang.aboutText;
    NEWS.innerHTML = lang.news;
    DEMOTITLE.innerHTML = lang.demoTitle;
    DEMOTEXT.innerHTML = lang.demoText;
    GOTOYOUTUBE.innerHTML = lang.goToYoutube;
    ABOUTTITLE.innerHTML = lang.aboutTitle;
    ABOUTTEXT.innerHTML = lang.aboutText;
    JLPPCDESC.innerHTML = lang.jlppcDesc;
    NAVET56DESC.innerHTML = lang.navet56Desc;
    GITHUBHELP.innerHTML = lang.githubHelp;
    CREDITSTITLE.innerHTML = lang.creditsTitle;
    FULLCREDITS.innerHTML = lang.fullCredits;
    ALLCAT.innerHTML = lang.allCat;
    CATREGIMYS.innerHTML = lang.catRegimys;
    CATFIGHT.innerHTML = lang.catFight;
    CATCITY.innerHTML = lang.catCity;
    CATINTERFACE.innerHTML = lang.catInterface;
    REPORTBUGS.innerHTML = lang.reportBugs;
    GOISSUES.innerHTML = lang.goIssues;
    SEEISSUES.innerHTML = lang.seeIssues;
    CREATEISSUE.innerHTML = lang.createIssue;
    JLPPCROLE.innerHTML = lang.jlppcRole;
    NAVET56ROLE.innerHTML = lang.navet56Role;
    LOOKGITHUB.innerHTML = lang.lookGithub;
    LINKS.innerHTML = lang.links;
    LOOKSITEREPO.innerHTML = lang.lookSiterepo;
    LOOKYT.innerHTML = lang.lookYT;
    LOOKDISC.innerHTML = lang.lookDisc;
    LOOKDOC.innerHTML = lang.lookDoc;
    if(id == 1){
	DISCLAMER.innerHTML = "Este sitio no está completamente traducido, y algunos de sus pasajes se traducen gracias a un software de traducción. Si usted desea ayudar, puede contactar con nosotros jlppcprog@ntymail.com.";
    }
    
    
}

if (navigator.browserLanguage)
    var language = navigator.browserLanguage;
else
    var language = navigator.language;
console.log("Language : " + language);
if(language.indexOf('fr') > -1)
    printLang(0);
else if(language.indexOf('es') > -1)
    printLang(1);
else
    printLang(2);

