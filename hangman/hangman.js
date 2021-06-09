var password = "SKY IS LIMIT";
var loss = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

password = password.toUpperCase();

var passLength = password.length;
var password1 = "";

for(i=0; i<passLength; i++){
    if(password.charAt(i) == " "){
        password1 = password1 + " ";
    }
    else{
        password1 = password1 + "-";
    }
}

function sign_password(){
    document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letters = new Array(35);
letters[0] = 'A';
letters[1] = 'B';
letters[2] = 'C';
letters[3] = 'D';
letters[4] = 'E';
letters[5] = 'F';
letters[6] = 'G';
letters[7] = 'H';
letters[8] = 'I';
letters[9] = 'J';
letters[10] = 'K';
letters[11] = 'L';
letters[12] = 'M';
letters[13] = 'N';
letters[14] = 'O';
letters[15] = 'P';
letters[16] = 'Q';
letters[17] = 'R';
letters[18] = 'S';
letters[19] = 'T';
letters[20] = 'U';
letters[21] = 'V';
letters[22] = 'W';
letters[23] = 'X';
letters[24] = 'Y';
letters[25] = 'Z';


function start(){

    var div_content = "";
    
    for(i=0; i<=25; i++){
        var element = "lit" + i;
        div_content = div_content + '<div class="letter" onclick=+check('+i+') id ="'+element+'">'+letters[i]+'</div>';
        if((i+1)%7==0)div_content = div_content + '<div style="clear:both;"></div>';
    }
    document.getElementById("alphabet").innerHTML = div_content;
    sign_password();    
}

String.prototype.setSign = function(position, sign){
    if(position > this.length-1) return this.toString();
    else return this.substr(0, position) + sign + this.substr(position+1);    
}

function checkIfLoss(losses){
    if(losses>8) {
        document.getElementById("alphabet").style.fontSize="38px";
        document.getElementById("alphabet").innerHTML = "YOU LOST XD" + 
        '<br /><br /><span class="reset" onclick="location.reload()">AGAIN ?</span';

    }else if(password == password1){
        document.getElementById("alphabet").style.fontSize="38px";
        document.getElementById("alphabet").innerHTML = "YOU WIN"+ 
        '<br /><br /><span class="reset" onclick="location.reload()">AGAIN ?</span';
    }
    else{
        sign_password();
    }
}

function check(nr){

    var pick = false;

    for(i=0; i<passLength; i++){
        if(password.charAt(i) == letters[nr]){
            password1 = password1.setSign(i, letters[nr]);
            pick = true;
        }             
    }

    if(pick){
        var element = "lit" + nr;
        yes.play();
        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.color="#00C000";
        document.getElementById(element).style.border="3px solid #00C000";
        document.getElementById(element).style.cursor="default";

        sign_password();
    }else{
        no.play();
        loss = loss + 1;
        var element = "lit" + nr;
        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#C00000";
        document.getElementById(element).style.border="3px solid #C00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById("gallow").innerHTML = "<img src=\"img/s"+loss+".jpg\" >"
        document.getElementById(element).setAttribute("onclick",";");
    }
    checkIfLoss(loss);
    
}

