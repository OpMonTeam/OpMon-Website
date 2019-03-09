const DONATE          = document.getElementById("thanksfordonate");
const JLPPCROLE        = document.getElementById("jlppcRole");
const NAVET56ROLE      = document.getElementById("navet56Role");

var textFr = {
    thanksfordonate : "Merci beaucoup pour votre soutien !",
    jlppcRole : "Programmation et aide sur le projet",
    navet56Role : "Aide graphique, fan-arts"
}

var textEn = {
    thanksfordonate : "Thank you very much for your support !",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist"
}

var textEs = {
    thanksfordonate : "Muchas gracias por el apoyo ! ",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist"
}

var txtLang = [textFr, textEs, textEn];

function printLang(id){
    var lang = txtLang[id];
    DONATE.innerHTML = lang.thanksfordonate;
    JLPPCROLE.innerHTML = lang.jlppcRole;
    NAVET56ROLE.innerHTML = lang.navet56Role;
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
