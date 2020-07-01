/*
* OpMon Creator Tool
* By Navet56 | OpMon Team
* Allows to make json file of an species, a map or a move
* Copyleft 2020
* File under GNU GPL v3
*/

function generateSpeciesJSON(){
    var level = document.getElementById("levelEvol").value;
    var code = "<h3><center>Please create a file with this code in data/species (name example : taupypus.json) :</center></h3><code>{";

    code += "<br>&nbsp\"opDex\" : "+document.getElementById("opdex").value+",";
    code += "<br>&nbsp\"HP\" : "+document.getElementById("hp").value+",";
    code += "<br>&nbsp\"atk\" : "+document.getElementById("atk").value+",";
    code += "<br>&nbsp\"atkSpe\" : "+document.getElementById("atkSpe").value+",";
    code += "<br>&nbsp\"def\" : "+document.getElementById("def").value+",";
    code += "<br>&nbsp\"defSpe\" : "+document.getElementById("defSpe").value+",";
    code += "<br>&nbsp\"spe\" : "+document.getElementById("speed").value+",";
    code += "<br>&nbsp\"captureRate\" : "+document.getElementById("captureRate").value+",";
    code += "<br>&nbsp\"curve\" : "+getString("expEvol")+",";
    code += "<br>&nbsp\"expGiven\" : "+document.getElementById("expGiven").value+",";
    code += "<br>&nbsp\"height\" : "+document.getElementById("height").value+",";
    code += "<br>&nbsp\"weight\" : "+document.getElementById("weight").value+",";
    code += "<br>&nbsp\"evolution\" : [<br>&nbsp&nbsp \"level\" : "+level+",";
    code += "<br>&nbsp&nbsp&nbsp\"species\" : "+
         document.getElementById("opdexEvol").value+
         ",<br>&nbsp&nbsp \"type\" : "+((level!=-1)?"\"level\"":"\"no\"")+
    "<br>&nbsp],";

    code += "<br>&nbsp\"evs\" : [<br>&nbsp&nbsp&nbsp"+document.getElementById("evs").value+"<br>&nbsp],";
    code += "<br>&nbsp\"types\" : [<br>&nbsp&nbsp&nbsp"+getString("type1")+",<br>&nbsp&nbsp&nbsp"+getString("type2")+"<br>&nbsp]";


    code += "<br>}</code><h3><center>And copy-paste this in the languages files (rkeys) :</center></h3>";
    code += "<code>key.opmon.name."+document.getElementById("opdex").value+"="+document.getElementById("name").value;
    code += "<br>key.opmon.desc."+document.getElementById("opdex").value+"="+document.getElementById("desc").value+"</code>";
    document.getElementById("json").innerHTML = code;

}

function generateMoveJSON() {
    var code = "<h3><center>Please create a file with this code in data/moves (name example : tackle.json) :</center></h3><code>{";
    
    code += "<br>&nbsp\"id\" : \""+document.getElementById("id").value+"\",";
    code += "<br>&nbsp\"power\" : "+document.getElementById("power").value+",";
    code += "<br>&nbsp\"types\" : "+getString("type")+",";
    code += "<br>&nbsp\"accuracy\" : "+document.getElementById("accuracy").value+",";
    code += "<br>&nbsp\"special\" : "+document.querySelector('input[name="special"]:checked').value+",";
    code += "<br>&nbsp\"status\" : "+document.querySelector('input[name="status"]:checked').value+",";
    code += "<br>&nbsp\"criticalRate\" : "+document.getElementById("criticalRate").value+",";
    code += "<br>&nbsp\"neverFails\" : "+document.querySelector('input[name="neverFails"]:checked').value+",";
    code += "<br>&nbsp\"ppMax\" : "+document.getElementById("ppMax").value+",";
    code += "<br>&nbsp\"priority\" : "+document.getElementById("priority").value+",";
    code += "<br>&nbsp\"effects\" : [<br>"+
        "&nbsp&nbsp{<br>"+
            "&nbsp&nbsp&nbsp\"null\" : true</br>"+
        "&nbsp&nbsp},</br>"+
        "&nbsp&nbsp{</br>"+
            "&nbsp&nbsp&nbsp\"null\" : true</br>"+
        "&nbsp&nbsp},</br>"+
        "&nbsp&nbsp{</br>"+
            "&nbsp&nbsp&nbsp\"null\" : true</br>"+
        "&nbsp&nbsp}</br>"+
    "&nbsp],</br>"+
    "&nbsp\"animationOrder\" : [18],</br>"+
    "&nbsp\"opMovementsAtk\" : [</br>"+
        "&nbsp&nbsp{</br>"+
           "&nbsp&nbsp&nbsp\"translation\" : {</br>"+
            "&nbsp&nbsp&nbsp\"mode\" : [ 1, 1 ],</br>"+
            "&nbsp&nbsp&nbsp\"formulas\" : [ [ 3, -6, 1, -5, 0, 30 ], [ 3, 6, 1, -5, 0, -30 ] ]</br>"+
            "&nbsp&nbsp},</br>"+
            "&nbsp&nbsp \"time\" : 10</br>"+
            "&nbsp }</br>"+
        " &nbsp],</br>"+
    "&nbsp\"opMovementsDef\" : [</br>"+
    "&nbsp&nbsp{</br>"+
        "&nbsp&nbsp \"translation\" : {</br>"+
            "&nbsp&nbsp \"mode\" : [ 1, 1 ],</br>"+
                "  &nbsp&nbsp \"formulas\" : [ [ 3, 6, 1, -5, 0, -30 ], [ 3, -6, 1, -5, 0, 30 ] ]</br>"+
                " &nbsp&nbsp},</br>"+
       "&nbsp&nbsp&nbsp\"time\" : 10</br>"+
    "&nbsp&nbsp}</br>"+

    "&nbsp],</br>"+
    "&nbsp\"animations\" : [\"default\"]</br>";
    code += "}";
    document.getElementById("json").innerHTML = code;
}


function getString(selectId){
    var sel = document.getElementById(selectId);
    var string = ""+sel.options[sel.selectedIndex].text;
    if (string.includes("Quick")) {
        string = "800000";
    } else if(string.includes("Parabolic")){
        string = "1059860";
    } else if(string.includes("Slow")){
        string = "1250000";
    } else if(string.includes("Erratic")){
        string = "600000";
    } else if(string.includes("Fluctuating")){
        string = "1640000";
    } else if(string.includes("Normal")){
        string = "1000000";
    } else if(string.includes("LIQUID")){
        string = "3";
    } else if(string.includes("BURNING")){
        string = "6";
    } else if(string.includes("VEGETAL")){
        string = "10";
    } else if(string.includes("ELECTRON")){
        string = "4";
    } else if(string.includes("MENTAL")){
        string = "12";
    } else if(string.includes("BAD")){
        string = "16";
    } else if(string.includes("DRAGON")){
        string = "2";
    } else if(string.includes("FIGHT")){
        string = "1";
    } else if(string.includes("MINERAL")){
        string = "13";
    } else if(string.includes("GROUND")){
        string = "14";
    } else if(string.includes("NEUTRAL")){
        string = "9";
    } else if(string.includes("MAGIC")){
        string = "5";
    } else if(string.includes("GHOST")){
        string = "15";
    } else if(string.includes("TOXIC")){
        string = "11";
    } else if(string.includes("METAL")){
        string = "0";
    } else if(string.includes("BUG")){
        string = "8";
    } else if(string.includes("SKY")){
        string = "17";
    } else if(string.includes("COLD")){
        string = "7";
    } else if(string.includes("NOTHING")){
        string = "-1";
    }
    
    
    return string;
}

var maps = "";
var layer1 = "";
var layer2 = "";
var layer3 = "";
var size = "";

function generateMapJSON() {
    if(maps.length > 300){
        size = "[ ";
        for (let i = 0; i < maps.length; i++) {
            if(maps[i]+maps[i+1] == "wi"){
                size += maps[i+7]+maps[i+8];
            } else if(maps[i]+maps[i+1] == "he"){
                size += ", "+maps[i+8]+maps[i+9];
                break;
            }
        }
        size += " ]";
        var j = 0;
        while(maps[j]+maps[j+1] != "cs")j++;
        j+=5;
        while ( maps[j] != "<") {
            layer1 += maps[j];
            j++;
        }
        while(maps[j]+maps[j+1] != "cs" && j < maps.length)j++;
        j+=5;
        while ( maps[j] != "<") {
            layer2 += maps[j];
            j++;
        }
        while(maps[j]+maps[j+1] != "cs" && j < maps.length)j++;
        j+=5;
        while ( maps[j] != "<" && j < maps.length) {
            layer3 += maps[j];
            j++;
        }        
    } else {
        alert("Please import a Tiled map in .tmx format (https://www.mapeditor.org/)")
    }
    var mapJson = "<h3><center>Please create a file with this code in data/maps (name example : map.json) :</center></h3><code>{<br>&nbsp\"id\" : ";
    mapJson += "\""+document.getElementById("name").value+"\",<br>";

    mapJson += "&nbsp\"tileset\" : \"alpha\",<br> &nbsp\"layers\" : [<br>[";

    mapJson += layer1+ "],<br>[";
    mapJson += layer2 + "],<br>[";
    mapJson += layer3+ "]<br>],";

    mapJson += "<br>&nbsp\"size\" :  "+size+",";

    mapJson += "<br>&nbsp\"music\" :  \""+document.getElementById("music").value+"\",";

    mapJson += "<br>&nbsp\"indoor\" :  \""+document.querySelector('input[name="indoor"]:checked').value+"\",<br>";

    mapJson += "<br>}</code>";
    
    document.getElementById("json").innerHTML = mapJson;
}

function onFileLoad(event) {
    maps = event.target.result;
}

function onChooseFile(event, onLoadFileHandler) {
    if (typeof window.FileReader !== 'function'){
        alert("Your browser is too old");
        throw ("The file API isn't supported on this browser.");
    }
    let input = event.target;
    if (!input){
        alert("Your browser is too old");
        throw ("The browser does not properly implement the event object");
    }
    if (!input.files){
        alert("Your browser is too old");
        throw ("This browser does not support the `files` property of the file input.");
    }
    if (!input.files[0]){
        alert("Error : empty file");
        return undefined;
    }
    let file = input.files[0];
    let fr = new FileReader();
    fr.onload = onLoadFileHandler;
    fr.readAsText(file);
}