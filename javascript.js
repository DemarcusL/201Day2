alert(
  " Before we begin. Please be seated because you mind is about to be blown because I know . . . " // I wanted to welcome with a game to feel ineractive
);
// I wanted to welcome with a game to feel ineractive
alert(
  " . . . wait for it . . . "
);
alert("  . . . YOU HAVE SUPER POWERS. ");
alert(" You can read my mind from what I assume. Now GUESS these answers to test it ! ");

let yourName = prompt("Sorry.  *how rude of me*  What is your name young Hero?"); // User should enter their own name and recieve it back // requirement for lab 2
{
  alert(
    "It's very nice to meet you " +
    yourName +
    " ! Like I said , " +
    yourName +
    " , you have the Super Power to READ MINDS. So let's test this with a guessing game !"
  );

  //another way to get user confirmation, and consent is always a plus for security purposes !
  alert
    (
      "Are you sure you're ready for this test " +
      yourName +
      " ? ")
    ;
  alert
    (" JUST TYPE 'YES OR 'NO' TO THE FOLLOWING QUESTIONS ! ");
} // I want the user the user to be promted upon entering the webpage. instead of at the end.

let myName = true;
while (myName) {
  // this is an endless thing until conditioned
  let response = prompt(
    "Firstly, Is my name Demarcus Lester? Just answer"
  ).toLowerCase(); // user should enter 'y' or 'n'
  if (response === "y" || response === "yes") {
    myName = false;
    //console.log(myName);
    alert(" Woah, You Do have powers. You got that correct.");
  } else {
    alert(
      " *Your head begins to hurt a little bit. You hear a voice say quietly to try again !* "
    );
  }
}

let myHometown = true;
while (myHometown) {
  let response = prompt(" Am I from Memphis, TN? ").toLowerCase(); // user should enter 'y' or 'n'
  if (response === "y" || response === "yes") {
    myHometown = false;
    //console.log(myHometown);
    alert(" Mane Mane! You have guessed that I am from Memphis, TN ");
  } else {
    alert(
      " * Another voice has echoed from the void. You realize you must attempt that again *"
    );
  }
}

let myAge = true;
while (myAge) {
  let response = prompt("Am I 23 years old?").toLowerCase(); // user should enter 'y' or 'n'
  if (response === "y" || response === "yes") {
    myAge = false;
    //console.log(myAge);
    alert(" Look, while you got that CORRECT I am feeling old ! ");
  } else {
    alert(
      " Wow, you got that wrong. *Your head hurts, and the reality around you warps and time reverese a few seconds . "
    );
  }
}

let myWork = true;
while (myWork) {
  let response = prompt("Am I top flight security or not?").toLowerCase(); // user should enter 'y' or 'n'
  if (response === "y" || response === "yes") {
    myWork = false;
    //console.log(myWork);
    alert(" I AM THE LAW, as long as I observe and report ! Correct ! ");
  } else {
    alert(
      " Your mind broke, and your powers unleased terror! Now reality has warped itself and made it as if the question was never asked ."
    );
  }
}

let mySchool = true;
while (mySchool) {
  let response = prompt("Did I attend UT Knoxville in 2016?").toLowerCase(); // user should enter 'y' or 'n'
  if (response === "y" || response === "yes") {
    mySchool = false;
    //console.log(mySchool);
    alert(" You have guessed that I attended UT Knoxville ");
  }

  else {
    alert(
      " You have guessed incorectly my school history, Do I look uneducated to you ? TRY AGAIN "
    );
  }
}


let myNum = true; // Requirement for Lab 3
while (myNum) {
  let response = prompt("Guess a number between 1 - 15"); // This is where I set my conditions
  if (response === '9') {
    myNum = false;
    console.log(myNum);
    alert(" You Have Guessed The Correct Number ");
  }
  else {
    alert(" Warning. You Have Incorrectly Guessed The Number. Please Try Again ");
  }
}



let topArtist = ['Vince Staples', 'Travis Scott', 'Mac Miller', 'SMINO', 'Isaiah Rashad', 'Takeoff']
for (i = 1; i < 7; i++) {// This will let them guess for 7 chances. the i++ will loop til less than 7 is not true
  
    let artistGuess = prompt(" Guess who is my favorite artist? "); // this should be whatever the user inputs, it will be only one answer but until it is typed, their chnaces will run out.  
    if (artistGuess === guessedArtist[0]) {
    
    correctAnswer++;
    // console.log(numGuess)
  }
}

for (let i = 0; i < 15; i++) {
  console.log()
}
