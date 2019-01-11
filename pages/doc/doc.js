const TITLE       = document.getElementById("title");
const LIST        = document.getElementById("list");
const DESCRIPTION = document.getElementById("description");

var docId = location.search.substring(1).split("=")[1];

var depth = 0;

var typeD = 0;

function writeType(type, doLink){
    typeD++;
    var str = "";
    if(type.id && doLink){
	str += '<a href="files.html?=' + type.id + '">' + type.name + "</a>";
    }else{
	str += type.name;
    }
    if(type.template){
	str += "&lt";
	str += writeType(type.template, doLink);
	str += "&gt ";
    }else if(typeD == 1){
	 //str += " ";
    }
    typeD--;
    return str;
}

function writeInList(tab){
    depth++;
    var titleStr = "";
    if(tab.otype == "file"){
	titleStr += writeInList(tab.content);
    }else{
	for(var i = 0; i < tab.length; i++){
	    var linkTxt = "";
	    if(tab[i].otype == "class"){
		linkTxt = '<span style="color: blue; font-weight: bold;">class</span> ' + tab[i].name;
	    }else if(tab[i].otype == "method"){
		linkTxt = '<span style="color: blue; font-weight: bold;">';
		if(tab[i].keywords != undefined){
		    for(var keyword of tab[i].keywords){
			linkTxt += keyword;
			linkTxt += " ";
		    }
		}
		linkTxt += '</span>';
		linkTxt += writeType(tab[i].type, false);
		linkTxt += tab[i].name + "(";
		if(tab[i].parameters != undefined){
		    var counter = 0;
		    for(var param of tab[i].parameters){
			if(param.constkw){
			    linkTxt += '<span style="color: blue; font-weight: bold;">const</span> ';
			}
			linkTxt += writeType(param.type, false);
			linkTxt += " ";
			if(param.mods != undefined){
			    for(var mod of param.mods){
				if(mod.keyword){
				    linkTxt += '<span style="color: blue; font-weight: bold;">';
				}
				linkTxt += mod.txt;
				if(mod.keyword){
				    linkTxt += '</span>';
				}
			    }
			}
			
			counter++;
			if(counter < tab[i].parameters.length){
			    linkTxt += ", ";
			}
		    }
		}
		linkTxt += ")";
		if(tab[i].constkw){
		    linkTxt += ' <span style="color: blue; font-weight: bold;">const</span>';
		}
		if(tab[i].purev){
		    linkTxt += " = 0";
		}
	    }else if(tab[i].otype == "variable"){
		if(tab[i].constkw){
		    linkTxt += '<span style="color: blue; font-weight: bold;">const</span> ';
		}
		linkTxt += writeType(tab[i].type, false);
		linkTxt += " ";
		if(tab[i].mods != undefined){
		    for(var mod of tab[i].mods){
			linkTxt += mod;
		    }
		}
		linkTxt += tab[i].name;
	    }else if(tab[i].otype == "namespace"){
		linkTxt = '<span style="color: blue; font-weight: bold;">namespace</span> ' + tab[i].name;
	    }else if(tab[i].otype == "constructor"){
		linkTxt = tab[i].name + "(";
		if(tab[i].parameters != undefined){
		    var counter = 0;
		    for(var param of tab[i].parameters){
				linkTxt += writeType(param.type, false);
				if(param.mods != undefined){
					for(var mod of param.mods){
						if(mod.keyword){
							linkTxt += '<span style="color: blue; font-weight: bold;">';
						}
						linkTxt += mod.txt;
						if(mod.keyword){
							linkTxt += '</span>';
						}
					}
					
				}
				counter++;
				if(counter < tab[i].parameters.length){
					linkTxt += ", ";
				}
		    }
		}
		linkTxt += ")";
	    }
	    titleStr += '<li><a href="#' + tab[i].id + '">' + linkTxt + '</a>';
	    if(tab[i].content){
		titleStr += "<ul>";
		titleStr += writeInList(tab[i].content);
		titleStr += "</ul>";
	    }
	    titleStr += '</li>';
	}
    }
    depth--;
    return titleStr;
}



function writeInDesc(tab){
    depth++;
    var descStr = "";
    if(tab.otype == "file"){
	console.log("Files");
	descStr += writeInDesc(tab.content);
    }else{
		for(var i = 0; i < tab.length; i++){
			var oname = "";
			if(tab[i].otype == "class"){
			oname = '<span style="color: blue; font-weight: bold;">class</span> ' + tab[i].name;
			}else if(tab[i].otype == "method"){
			oname = '<span style="color: blue; font-weight: bold;">';
			if(tab[i].keywords != undefined){
				for(var keyword of tab[i].keywords){
				oname += keyword;
				oname += " ";
				}
			}
			
			oname += writeType(tab[i].type, true);
			oname += " ";
			oname += '</span>' + tab[i].name + "(";
			if(tab[i].parameters != undefined){
				var counter = 0;
				for(var param of tab[i].parameters){
				if(param.constkw){
					oname += '<span style="color: blue; font-weight: bold;">const</span> ';
				}
				
				oname += writeType(param.type, true) + " ";
				
				if(param.mods != undefined){
					for(var mod of param.mods){
					if(mod.keyword){
						oname += '<span style="color: blue; font-weight: bold;">';
					}
					oname += mod.txt;
					if(mod.keyword){
						oname += '</span>';
					}
					}
				}
				
				if(param.name){
					
					oname += param.name;
					
					if(param.dvalue != undefined){
					oname += " = " + param.dvalue;
					}
				}
				
				counter++;
				if(counter < tab[i].parameters.length){
					oname += ", ";
				}
				}
			}
			oname += ")";
			if(tab[i].constkw){
				oname += ' <span style="color: blue; font-weight: bold;">const</span>';
			}
			if(tab[i].purev){
				oname += " = 0";
			}
			}else if(tab[i].otype == "variable"){
			if(tab[i].constkw){
				oname += '<span style="color: blue; font-weight: bold;">const</span> ';
			}
			
			oname += writeType(tab[i].type, true);
			oname += " ";
			if(tab[i].mods != undefined){
				for(var mod of param.mods){
				if(mod.keyword){
					oname += '<span style="color: blue; font-weight: bold;">';
				}
				oname += mod.txt;
				if(mod.keyword){
					oname += '</span>';
				}
				}
			}
			oname += tab[i].name;
			if(tab[i].dvalue != undefined){
				oname += " = " + tab[i].dvalue;
			}
			}else if(tab[i].otype == "namespace"){
			oname = '<span style="color: blue; font-weight: bold;">namespace</span> ' + tab[i].name;
			}else if(tab[i].otype == "constructor"){
			oname = tab[i].name + "(";
			if(tab[i].parameters != undefined){
				var counter = 0;
				for(var param of tab[i].parameters){
				oname += writeType(param.type, true) + " ";
				if(param.mods != undefined){
					for(var mod of param.mods){
					if(mod.keyword){
						oname += '<span style="color: blue; font-weight: bold;">';
					}
					oname += mod.txt;
					if(mod.keyword){
						oname += '</span>';
					}
					}
				}
				if(param.dvalue != undefined){
					oname += " = " + param.dvalue;
				}
				
				if(param.name){
					
					oname += param.name;
					
					if(param.dvalue != undefined){
					oname += " = " + param.dvalue;
					}
				}
				
				counter++;
				if(counter < tab[i].parameters.length){
					oname += ", ";
				}
				
				}
			}
			oname += ")";
			}
			descStr += '<li><span class="likeH" id="' + tab[i].id + '"><code>' + oname + '</code></span>' + (tab[i].inherits ? '<span style="display: flex;font-size:0.85em; margin-left: 10px; margin-bottom: -35px;"><br/> ↳ Inherits from <code>' + tab[i].inherits + '</code></span><br/>' : "") + (tab[i].overrides ? '<span style="display: flex; font-size: 0.85em; margin-left: 10px; margin-bottom: -35px;"><br/> ↳ Overrides <code>' + tab[i].overrides.obj + '</code> from <code>' + tab[i].overrides.orig + '</code></span><br/>' : "") + '<p>';
			if(tab[i].documentation){
			for(var descLines of tab[i].documentation){
				descStr += descLines;
			}
			}else{
				descStr += "Missing documentation";
			}
			descStr += "<br/>";
			if(tab[i].parameters){
				var checkDesc = false;
				for(var param of tab[i].parameters){
					if(param.documentation){
						checkDesc = true;
						break;
					}
				}
				if(checkDesc){
					descStr += 'Parameters : ';
					descStr += '<ul style="margin-top: -15px;">';
					for(var param of tab[i].parameters){
						if(param.documentation){
							descStr += "<li>";
							descStr += param.name;
							descStr += " : ";
							for(var descLines of param.documentation){
								descStr += descLines;
							}
							descStr += "</li>";
						}
					}
					descStr += "</ul>";
				}
				
			}
			descStr += '</p>';
			descStr += '</li>';
			if(tab[i].content){
				descStr += "<ul>";
				descStr += writeInDesc(tab[i].content);
				descStr += '</ul>'
			}
		}
    }
    depth--;
    return descStr;
}

function printDoc(id){
    
    if(files.get(id) != undefined){
	var file = files.get(id);
	TITLE.innerHTML = file.name;
	var titleStr = "";
	var descStr = "";
	titleStr = '<ul style="font-family: Consolas; font-size: 85%; margin: 0px;">';

	titleStr += writeInList(file);
	
	titleStr += "</ul>";
	LIST.innerHTML = titleStr;
	
	descStr += writeInDesc(file);
	
	DESCRIPTION.innerHTML = descStr;
    }else{
	titleStr = "Unknown page ! Sorry.";
	LIST.innerHTML = titleStr;
    }
}

printDoc(docId);
