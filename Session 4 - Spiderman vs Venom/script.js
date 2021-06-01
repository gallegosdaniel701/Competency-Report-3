var spidermanPoints=100;
var venomPoints=100;
var attackPoints=10;
display();
//spiderman function
function display(){

    document.getElementById("spiderman-points").innerHTML=`<b>Points: </b> ${venomPoints}`;
    document.getElementById("status").innerHTML=`<h2>Playing . . .</h2>`
}

function attack(){
    var newPoints=venomPoints-attackPoints;
    venomPoints=newPoints;
    display();
    if(venomPoints===0){
            document.getElementById("attack-btn").style.display="none";
            document.getElementById("status").innerHTML=`<h2>GAME OVER . . .Venom Wins</h2> <button onclick="restart()"> Restart</button>`
    }
}
//Link function
function display(){

    document.getElementById("venom-points").innerHTML=`<b>Points: </b> ${spidermanPoints}`;
    document.getElementById("status").innerHTML=`<h2>Playing: . . .</h2>`
}

function attack(){
    var newPoints=spidermanPoints-attackPoints;
    spidermanPoints=newPoints;
    display();
    if(spidermanPoints===0){
            document.getElementById("attack-btn").style.display="none";
            document.getElementById("status").innerHTML=`<h2>GAME OVER . . .Spiderman Wins</h2> <button onclick="restart()"> Restart</button>`
    }
}

//Restart function
function restart(){
    spidermanPoints=100
    venomkPoints=100
    display();
    document.getElementById("attack-btn").style.display="block";
} 