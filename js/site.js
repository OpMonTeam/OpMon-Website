function goTo(url){
    location.href=url;
    reload();
}

var version = "0.15.1";
var date = " (04/11/2018)";

function linuxDown(){
    goTo("https://github.com/OpMonTeam/OpMon/releases/download/alpha-v" + version + "/OpMon-" + version  + "-Linux.deb");
}
function macDown(){
	alert("Warning : You are now downloading a development version, since it's the only version currently avilable on mac. It's only temporary, but there can be many bugs.\nAttention : Vous vous apprêtez à télécharger une version de développement, car c'est la seule version actuellement disponible pour mac. C'est seulement temporaire, mais il peut y avoir beaucoup de bugs.");
    goTo("https://github.com/OpMonTeam/OpMon/releases/download/alpha-v" + version + "/OpMon-Mac.dmg");
}
function linuxDownScript(){
    goTo("https://github.com/OpMonTeam/OpMon/releases/download/alpha-v" + version + "/source.sh");
}
