
let begin = () => lesson(1);

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
let r = `1 + 1 = ${ 1 + 1 }`;
let s = `a = ${ a }`;
let t = `a + b = ${ a + b }`;
let u = -1.0;
let v = -1;
let w = 0;
let x = 1;
let y = 2;
let z = 3;

let lesson = (num) => {
  switch(num) {
    case 0:
      console.log(" ")
      console.log(" ")
      console.log("Congratulations, you're officially programming!")
      console.log(" ")
      console.log("Right now you're inside your browser's 'JavaScript Console'. Professional software engineers use this very same 'console' every day in their work.")
      console.log("'JavaScript' is a programming language. It's one of the most important programming languages in the world and is also the primary programming language of the internet.")
      console.log(" ")
      console.log("Every modern web browser has a JavaScript Console similar to this one that allows them to program JavaScript in real time.")
      console.log("As a side note JavaScript is fundamental to making web art and has a reputation for being fun and complex as it has evolved organically in parallel with the internet itself.")
      console.log(" ")
      console.log("The following micro lesson will teach you to write basic JavaScript and use it to manipulate websites in real time. Lets get started by typing 'lesson()' and seeing what happens when we press enter.")
      console.log(" ")
      console.log(" ")
      return
    default:
      console.log(" ")
      console.log(" ")
      console.log("Excellent work, you just called your first function!")
      console.log("Functions are one of the most fundamental concepts in programming. They are basically just sets of instructions that we give a computer to follow.")
      console.log("The name of the function you just called was 'lesson' and the '()' after it told your browser that you wanted to call or 'envoke' it.")
      console.log(" ")
      console.log("Now lets try looking at another key concept, a variable.")
      console.log("Type 'x' and hit enter to see the value of the 'x' variable. There are a few pre-made variables that you can play with here, try any letter of the alphabet and see what happens.")
      console.log("After you've looked at some of these, type 'lesson(2)' to continue.")
      console.log(" ")
      console.log(" ")
  } 
}

lesson(0);
