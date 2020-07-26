var readline=require('readline-sync');
var ruang = parseInt(readline.question("Masukkan No Ruangan : "));
var kelas;

switch(ruang){
  //case 1 : kelas = "X RPL 1" ; break;
  //case 2 : kelas = "X RPL 2" ; break;
  //case 3 : kelas = "X RPL 3" ; break;
  //case 4 : kelas = "X RPL 4" ; break;
  //case 5 : kelas = "X RPL 5" ; break;
  //case 6 : kelas = "X RPL 6" ; break;
  //case 7 : kelas = "X RPL 7" ; break;
  //case 8 : kelas = "X RPL 8" ; break;
  //case 9 : kelas = "X RPL 9" ; break;
  //case 10 : kelas = "X RPL 10" ; break;
  //case 11 : kelas = "X RPL 11" ; break;
  //case 12 : kelas = "X RPL 12" ; break;
  //case 13 : kelas = "X RPL 13" ; break;
  //case 14 : kelas = "X RPL 14" ; break;
  case 1 :
  case 2 :
  case 3 :
  case 4 :
  case 5 :
  case 6 :
  case 7 :
  case 8 : kelas = "Rekayasa Perangkat Lunak" ; break;
  case 9 :
  case 10 :
  case 11 :
  case 12 :
  case 13 :
  case 14 : kelas = "Teknik Komputer JJaringan" ; break;
  default:{
    console.log('tidak termasuk cluster kelas X')
    //console.log('Tidak termasuk kelas 1')
  }
}

console.log('Kelas ${kelas} adalah ruang ${ruang}');
