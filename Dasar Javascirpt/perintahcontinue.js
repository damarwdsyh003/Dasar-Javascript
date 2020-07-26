//for(let i=0;i<10;i++){
  //if (i%2===0) continue;
  //process.stdout.write(i+'');
//}

var readline=require('readline-sync');

while(true){
  let nama = readline.question('Nama:');
  let kelas= readline.question('Kelas:');
  if (nama !=='rpl' || kelas !=='5'){
    console.log('nama/kelas salah \n')
    continue;
  }

  console.log('\n Selamat Datang Siswa XI RPL 5');
  break;
}
