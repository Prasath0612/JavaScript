const str=new String("Hello All,Welcome to JavaScript");
const str1="   String   ";
console.log(str.length);
console.log(str.charAt(6));
console.log(str.charCodeAt(6));
console.log(str.includes("ell"));
console.log(str.endsWith("Script"));
console.log(str.startsWith("Welc",10));
console.log(str1);
console.log(str1.trimStart());
console.log(str1.trimEnd());
console.log(str1.repeat(3));
console.log(str1.padEnd(18,"$"));
console.log(str1.padStart(20,"*"));
console.log(str.search(/all/ig))
console.log(str.match("Wel"));
console.log(str.replace("Welcome","Namaskaram"));
console.log(str.indexOf("Java"));
console.log(str1.slice(5,13));
console.log(str.substring(7,11));
console.log(str.substr(9,4));
console.log(str.split(","));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str1.concat(str));
console.log(str.lastIndexOf("Sc"));

