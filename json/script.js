//Menggunakan JSON.stringify
// let mahasiswa = {
//     nama : "Yolantika Nur",
//     nrp : "334343434",
//     email : "yolantikan34@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

// let xhr = new XMLHttpRequest();


//Menggunakan Vanila JS
// xhr.onreadystatechange = function (){
//     if(xhr.readyState == 4 && xhr.status ==200){
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET','coba.json', true);
// xhr.send();

// Menggunakan Jquery
$.getJSON('coba.json', function(data){

console.log(data);


});
