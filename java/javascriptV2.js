var totalprize = 0;
alert("welkom bij ons cafe Uranus.");
alert("u kunt bij ons kiezen uit fris, bier, wijn of een snack(bitterballen)");
while(order != "stop"){
    var choose
    var amount
    var prize
    var order = prompt("wilt u een bestelling toevoegen?");
    if(order == "stop"|| order == "fris" || order == "bier" || order == "wijn" || order == "snack"){
        if(order != "stop"){
            if(order == "snack"){
                var tally = prompt("Hoeveel bitterballen wilt u bestellen 8 of 16.");
                    if(tally == "8"){
                        choose = 4;
                    }
                    else if(tally == "16"){
                        choose = 7.5;
                    }
                    var variety = prompt("hoeveel schalen bitteballen wilt u?");
                    prize = choose * variety;
                    totalprize += prize;
                document.write("u heeft "+variety+" schalen van "+tally+" bitterballen bestelt voor "+prize+" euro."+"<br>");
            }
            else if(order == "fris" || order == "bier" || order == "wijn"){
                if(order == "fris"){
                    amount = drinkamount(order);
                    prize = amount * 2;
                    totalprize += prize;
                    document.write(drink(order,2,amount)+"<br>");
                }
                else if(order == "bier"){
                    amount = drinkamount(order);
                    prize = amount * 3.5;
                    totalprize += prize;
                    document.write(drink(order,3.5,amount)+"<br>");
                }
                else if(order == "wijn"){
                    amount = drinkamount(order);
                    prize = amount * 5;
                    totalprize += prize;
                    document.write(drink(order,5,amount)+"<br>");
                }
            }
        }
    }
    else if(order != "stop"|| order != "fris" || order != "bier" || order != "wijn" || order != "snack"){
        alert("ongeldig invoer!")
        alert("u kunt keizen uit fris, bier, wijn, snack of stop!")
    }
}
if(order == "stop"){
    document.write("uw totaal bedrag is "+totalprize+" euro.")
}
//de volgende functie krijgt de type drankje door en stelt dan de vraag hoeveel je wilt hebben.
function drinkamount(drankje){ 
    var ask = prompt("hoeveel "+drankje+" wilt u toevoegen aan uw bestelling.");
    return ask;
}
//deze functie krijgt alle benodige informatie die hij nodig heeft voor het berekenen en schrijven van de prijs.
function drink(drankje,number,amount){
    var back;
    if(amount != "stop"){
        var prize = amount * number;
        back = "u heeft "+amount+" "+drankje+" bestelt voor "+prize+" euro.";
    }
    else if(amount == "stop"){
        back = "u heeft deze bestelling geannuleerd.";
    }
    return back;
}