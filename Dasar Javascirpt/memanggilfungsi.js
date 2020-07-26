var readline=require('readline-sync');

function kali(a,b){
  return a*b;
}

let a=parseFloat(readline.question('Masukkan Nilai A: '));
let a=parseFloat(readline.question('Masukkan Nilai B: '));
let c;

c=kali(a,b);

//console.log('${a}x${b}={c}');
console.log('${a}x${b}={kali(a,b)}');
