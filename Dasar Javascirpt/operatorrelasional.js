var a-10, b-20;
console.log('a \t: ${a}');
console.log('a \t: ${b}');
console.log('a==b \t: ${(a==b)}');
console.log('a!=b \t: ${(a!=b)}');
console.log('a<b \t: ${(a<b)}');
console.log('a>b \t: ${(a>b)}');
console.log('a<=b \t: ${(a<=b)}');
console.log('a>=b \t: ${(a>=b)}');

if(a<b){
  console.log('a lebih kecil dari b');
}

var i=a;
while(i<=b){
  process.stdout.write('${i}');
  i +=2
}
