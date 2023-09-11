function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let BMI = weight/(hight^2);
  let result = BMI;
  let final_result;

  if (BMI < 18.5){
    let state = "underweight";
  }

  if (BMI < 24.9){
    let state = "healthy weight";
  }  

  if (BMI < 29.9){
    let state = "overweight";
  }

  if (BMI <= 30.0){
    let state = "obese";
  }

  console.log(state);


  if (19 < age < 24){
    if (19 < BMI < 24){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }

  if (25 < age < 34){
    if (20 < BMI < 25){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }

  if (35 < age < 44){
    if (21 < BMI < 26){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }

  if (45 < age < 54){
    if (22 < BMI < 27){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }

  if (55 < age < 64){
    if (23 < BMI < 28){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }

  if (age > 65){
    if (24 < BMI < 29){
      final_result = "healthy";
    }
    else{
      final_result = "not healthy";
    }
  }
  
  console.log (final_state);
}
