function send(){
    num1 = document.getElementById("p1n").value;
    num2 = document.getElementById("p2n").value;
    aa = parseInt(p_1n) * parseInt(p_2n);
    qn = "<h4>" + num1 + "X" + num2 + "</h4>";
    ib = "<br>Answer : <input type='text' id='icb'>";
    cb = "<button class='btn btn-warning' onclick='check()'>CHECK</button>";
    row = qn + ib + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

qt = "p_1";
at = "p_2";
p1s = document.getElementById("p_1s").value;


function check(){
    answer = document.getElementById("icb").value;
    if(answer == aa){
        if(at == p_1){
            p1s = p1s + 1;
            document.getElementById("p_1s").innerHTML = p1s;
        }
        else{
            p2s = p2s + 1;
            document.getElementById("p_2s").innerHTML = p2s;
        }
    }

        if(qt == p_1){
           qt = p_2;
            document.getElementById("p_q").innerHTML = "Question turn - " + p_2;
        }
        else{
            qt = p_1;
            document.getElementById("p_q").innerHTML = "Question turn - " + p_1;
        }

        if(at == p_1){
            at = p_2;
            document.getElementById("p_a").innerHTML = "Answer turn - " + p_2;
        }
        else{
            at = p_1;
            document.getElementById("p_a").innerHTML = "Answer turn - " + p_1;
        }
    
}