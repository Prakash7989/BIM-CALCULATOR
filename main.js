function myfunction(){
    var centi = document.getElementById("centi").value;
    var kilo = document.getElementById("kilo").value;
    var show = document.getElementById("show");
    

    var meters= (centi*1)/100;
    centi = meters*meters;
    var formula=(kilo/centi);


    if(centi===''&&kilo===''){
      window.alert("Enter Height and Weight");
    }
    else if (centi === ''){
      window.alert("Enter Height in cms");
    }
    else if (kilo === ''){
      window.alert("Enter Kilogram in kg");
    }
    
    else{
      if(formula<18.5){
        show.innerHTML=formula.toFixed(2)+" . Underweight, take nutrient food";
      }

      else if(formula>=18.5&&formula<=24.9){
        show.innerHTML=formula.toFixed(2)+" . Normal weight, keep up the good work!'";
      }

      else if(formula>=25&&formula<=29.9){
        show.innerHTML=formula.toFixed(2)+" . Overweight, consider maintaining a healthy lifestyle.";
      }

      else if(formula>=30){
        show.innerHTML=formula.toFixed(2)+" . Obese, consult with a healthcare professional.";
      }
      else{
        show.innerHTML="0";
      }
    }
  }