var totalprize = 0;
alert("welkom bij ons cafe Uranus.");
alert("u kunt bij ons kiezen uit fris, bier, wijn of een snack(bitterballen)");
while(order != "stop"){
    var choose
    var amount
    var prize
    var order = prompt("wilt u een bestelling toevoegen?");
    if(order != "stop"){
        if(order == "snack"){
            var tally = prompt("Hoeveel bitterballen wilt u bestellen 8 of 16.");
            var variety = prompt("hoeveel schalen bitteballen wilt u?");
                amount = drinkamount(order);
                if(amount == "8"){
                    choose = 2.9;
                }
                else if(amount == "16"){
                    choose = 4.2;
                }
                prize = amount * choose * variety;
                totalprize += prize;
            document.write(+"<br>");
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
if(order == "stop"){
    document.write("uw totaal bedrag is "+totalprize+" euro.")
}
function snack(amount){
    var back;
    if(amount == "8"){

    }
    else if(amount == "16"){

    }
    else{
        alert("ongeldig aantal");
        back = "-";
        return back;
    }
}
function drinkamount(drankje){
    var ask = prompt("hoeveel "+drankje+" wilt u toevoegen aan uw bestelling.");
    return ask;
}
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