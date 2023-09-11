function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let BMI = weight/((height^2)/100);
  let result = BMI;
  let final_result;

  if (BMI < 18.5){
    let state = "underweight";
  }

  else if (BMI < 24.9){
    let state = "healthy weight";
  }  

  else if (BMI < 29.9){
    let state = "overweight";
  }

  else {
    let state = "obese";
  }

  console.log("your state is: " + state);


  if (19 < age || age < 24){
    if (19 < BMI || BMI < 24){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }

  else if (25 < age || age < 34){
    if (20 < BMI || BMI < 25){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }

  else if (35 < age || age < 44){
    if (21 < BMI || BMI < 26){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }

 else if (45 < age || age < 54){
    if (22 < BMI || BMI < 27){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }

  else if (55 < age || age < 64){
    if (23 < BMI || BMI < 28){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }

  else (age > 65){
    if (24 < BMI || BMI < 29){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }
  
  console.log ("your final state based on your age is: " + final_state);
}
