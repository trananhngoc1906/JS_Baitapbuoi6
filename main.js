//bài tập 1:
function baitap1() {
  var result = 0;

  for (var i = 0; result < 10000; i++) {
    result += i;
  }

  document.getElementById("showKetQuaBT1").innerHTML = i;
}

//bài tập 2:
function baitap2() {
  //input nhận dữ liệu người dùng

  var soX = +document.getElementById("soX").value;
  var soN = +document.getElementById("soN").value;
  var n = 1;
  var tong = 0;

  //xu ly

  while (n <= soN) {
    tong += Math.pow(soX, n);
    n++;
  }

  //output
  document.getElementById("showKetQuaBT2").innerHTML = tong;
}

//bài tập 3:
function baitap3() {
  //input: lay gia tri nguoi dung
  var result = 1;
  var input = +document.getElementById("inputBT3").value;

  //xuly
  for (var i = 1; i <= input; i++) {
    result *= i;
  }

  //output
  document.getElementById("showKetQuaBT3").innerHTML = result;
}

//bài tập 4:
function baitap4() {
  var i = 1;
  var ketQua = "";
  while (i <= 10) {
    if (i % 2 !== 0) {
      ketQua += "<div style='background-color: red'>Lẻ</div>";
    } else {
      ketQua += "<div style='background-color: #4B8FF0'>Chẵn</div>";
    }
    i++;
  }

  document.getElementById("showKetQuaBT4").innerHTML = ketQua;
}

//Bài tập 5:
function baitap5() {
  // //input: nhận giá trị user nhập vào
  var input = +document.getElementById("bt5").value;
  var ketQua = "";

  //khai bao gia tri su dung de check
  var soHang = 1;
  var check = 0;

  //xu ly
  while (soHang <= input) {
    check = checkSNT(soHang);
    if (check == 1) {
      ketQua += soHang + " ";
    }
    soHang++;
  }

  //ham check soNT
  function checkSNT(n) {
    //flag = 0 => khong phai so nguyen to
    //flag = 1 => so nguyen to

    let flag = 1;
    if (n < 2) {
      // so nho hon 2 khong phai so nguyen to => tra ve 0
      flag = 0;
    }

    let i = 2;
    while (i < n) {
      if (n % i === 0) {
        flag = 0;
        break;
      }
      i++;
    }
    return flag;
  }

  console.log(ketQua);
  //output
  document.getElementById("showKetQuaBT5").innerHTML = ketQua;
}
