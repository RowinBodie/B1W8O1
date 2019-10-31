const costfris = 2
const costbier = 2.5
var costwijn = 3.5
var drink = 0
alert("welkom bij ons cafe Uranus");
alert("u kunt bij ons kiezen uit fris, bier en wijn");
var askorder = prompt("wilt u een bestelling toevoegen?");
if(askorder == "fris" || askorder == "bier" || askorder == "wijn"){
    var asknumber = prompt("hoeveel "+askorder+" wilt u aan uw bestelling toevoegen?");
    if(asknumber != "stop"){
        if(askorder == "fris"){
            drink = 2
        }
        else if(askorder == "bier"){
            drink = 2.5
        }
        else if(askorder == "wijn"){
            drink = 3.5
        }
        var prize = asknumber * drink
        
        order();
    }
    else if(asknumber == "stop"){
        alert("bestelling gestopt.");
    }
}
else if(askorder == "stop"){
    alert("bestelling gestopt.");
}
else{
    alert("ongeldig invoer!");
}
function drink(){
    var drankje = prompt("wilt u een bestelling toevoegen?");
    return drankje
}
function order(){
    document.write(drink());
    while (dringk() != "stop"){
        
    }
}

document.write("het aantal "+askorder+" dat u heeft bestelt is "+asknumber+" de prijs is "+prize+" euro");