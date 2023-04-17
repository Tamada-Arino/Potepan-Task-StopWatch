$(document).ready(function(){
    let dec=0;
    let sec=0;
    let min=0;
    let hour=0;
    let timerId;
    $("#watch").html("0:0:0:0");


    $("#start").click(function(){
        timerId = setInterval(countup, 100);

        $("#start, #reset").prop("disabled",true);
        $("#stop").prop("disabled",false);
    });
    
    $("#stop").click(function(){
        clearInterval(timerId);

        $("#stop").prop("disabled",true);
        $("#start, #reset").prop("disabled",false);
    });

    $("#reset").click(function(){
        dec=0;
        sec=0;
        min=0;
        hour=0;
        $('#watch').html('0:0:0:0');
        clearInterval(timerId);

        $("#start").prop("disabled",false);
        $("#reset").prop("disabled",true);
    });



    let countup=()=>{

    dec+=1;

    if(dec>9){
        dec=0;
        sec+=1;
    }
  
    if (sec>59) {
      sec=0;
      min+=1;
    }

    if (min > 59) {
      min=0;
      hour+=1;
    }

        $("#watch").html(hour+":"+min+":"+sec+":"+dec);
    }


  });//jQuery記述おわり