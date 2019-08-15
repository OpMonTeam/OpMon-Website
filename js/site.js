function goTo(url){
    location.href=url;
    reload();
}

var version = "0.16";
var date = " (15/08/2019)";

function linuxDown(){
    goTo("https://github.com/OpMonTeam/OpMon/releases/download/alpha-v" + version + "/OpMon-" + version  + "-Linux.deb");
}
function macDown(){
	alert("The Mac 0.16 is not available for now. You'll download OpMon v0.15.1. | La 0.16 mac n'est pas encore disponible. Vous télégargez la version 0.15.1.");
    goTo("https://github.com/OpMonTeam/OpMon/releases/download/alpha-v0.15.1/OpMon-Mac.zip");
}
function linuxDownScript(){
    goTo("https://github.com/OpMonTeam/OpMon/releases/download/alpha-v" + version + "/source.sh");
}
