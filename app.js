
let a = "cat";
let b = "dog";
let c = "pizza";
let d = "studio";
let e = "museum";
let f = "fine art";
let g = "figuration";
let h = "post-modernism";
let i = 0.25;
let j = 0.5;
let k = 0.75;
let l = 1.00;
let m = undefined;
let n = null;
let o = NaN;
let p = console.log;
let q = console.clear;
let r = `1 + 1 = ${1 + 1}`;
let s = `a = ${a}`;
let t = `a + b = ${a + b}`;
let u = -1.0;
let v = -1;
let w = 0;
let x = 1;
let y = 2;
let z = 3;

let lesson = (num) => {
  switch (num) {
    case 0:
      console.log(" ")
      console.log(" ")
      console.log("Congratulations, you're officially programming!")
      console.log(" ")
      console.log("Right now you're inside your browser's 'JavaScript Console'. Professional software engineers use this very same 'console' every day in their work.")
      console.log("'JavaScript' is one of the most important programming languages in the world and is also the primary programming language of the internet.")
      console.log(" ")
      console.log("Every modern web browser has a JavaScript Console similar to this one that allows you to program JavaScript in real time.")
      console.log("As a side note JavaScript is fundamental to making web art and has a reputation for being fun and complex as it has evolved organically in parallel with the internet itself.")
      console.log(" ")
      console.log("The following micro lesson will teach you to write basic JavaScript and use it to manipulate websites and make web-art in real time. By the end of these lessons you'll be a proficient web artist and JavaScript programmer!")
      console.log(" ")
      console.log("Lets get started by typing 'lesson(1)' and seeing what happens when we press enter.")
      console.log(" ")
      console.log(" ")
      return
    case 1:
      console.log(" ")
      console.log(" ")
      console.log("Excellent work, you just called your first function!")
      console.log("Functions are one of the most fundamental concepts in programming. They are basically just sets of instructions that we give a computer to follow.")
      console.log("The name of the function you just called was 'lesson' and the '(1)' after it told your browser that you wanted to call or 'envoke' it, giving it an input of '1'.")
      console.log(" ")
      console.log("Now lets try looking at another key concept, a variable.")
      console.log("Type 'x' and hit enter to see the value of the 'x' variable. There are a few pre-made variables that you can play with here, try any letter of the alphabet and see what happens. Then try some variables that we haven't defined like 'cat' or 'banana' and see what happens.")
      console.log(" ")
      console.log("After you've looked at some of these, type 'lesson(2)' and hit enter to continue.")
      console.log(" ")
      console.log(" ")
      return
    case 2:
      console.log(" ")
      console.log(" ")
      console.log("Well done! You've now played around with calling both functions and variables. These are probably the two most fundamental concepts in programming.")
      console.log("When we call a variable, we're essentially asking the computer if it has anything stored in an imaginary box labelled 'x'. These boxes are in the computer's memory, and we can label them and fill them with pretty much whatever we want.")
      console.log("")
      console.log("One of the powerful things about variables is that we can tell them to interact with eachother. Try adding some of our 'a' through 'z' variables together using the '+' symbol and see what happens. Some of them will get along, some wont, but notice how no matter what we do to them if we call 'x' again (or any other variable) it hasn't changed. We'll learn how to change variables in the next lesson.")
      console.log(" ")
      console.log("When you've had some fun adding variables together, try subtracting with '-', multiplying with '*' and dividing with '/'. You can even try throwing your own values in instead of variables like 'a + \"!\"' or 'z * 7'.")
      console.log(" ")
      console.log("After you explore these a bit type 'lesson(3)' and hit enter to continue.")
      console.log(" ")
      console.log(" ")
      return
    default:
      console.log(" ")
      console.log(" ")
      console.log("Congratulations, you've finished all the lessons for now!")
      console.log(" ")
      console.log(" ")
      return
  }
}

// automatically run the first lesson when the page loads
lesson(0);