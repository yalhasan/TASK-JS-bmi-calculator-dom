function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let BMI = weight/((height/100)**2);
  let result = BMI;
  let final_result;

  if (BMI < 18.5){
    alert ("you are underweight");
  }

  else if (BMI <= 24.9){
    alert("you have a healthy weight");
  }  

  else if (BMI <= 29.9){
    alert("you are overweight");
  }

  else {
    alert("you are obese!");
  }


  if (19 <= age && age <= 24){
    if (19 <= BMI && BMI <= 24.9){
      alert("you are healthy");
    }
    else{
      alert("you are not healthy");
    }
  }

  else if (25 <= age && age <= 34){
    if (20 <= BMI && BMI <= 25){
      alert("you are healthy");
    }
    else{
      alert("you are not healthy");
    }
  }

  else if (35 <= age && age <= 44){
    if (21 <= BMI && BMI <= 26){
      alert("you are healthy");
    }
    else{
      alert("you are not healthy");
    }
  }

 else if (45 <= age && age <= 54){
    if (22 <= BMI && BMI <= 27){
      alert("you are healthy");
    }
    else{
      alert("you are not healthy");
    }
  }

  else if (55 <= age && age <= 64){
    if (23 <= BMI && BMI <= 28){
      alert("you are healthy");
    }
    else{
      alert("you are not healthy");
    }
  }

  else if(age > 65){
    if (24 <= BMI && BMI <= 29){
      alert("you are healthy");
    }
    else{
      alert("you are not healthy");
    }
  }

}
