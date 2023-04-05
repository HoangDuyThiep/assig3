'use strict';

//chọn phần tử--------------
const form = document.querySelector('.check-email');
const thongTin = document.querySelector('.thong-tin');

const vMore = document.querySelectorAll('.view-more');
const vless = document.querySelectorAll('.view-less');

const kinhNghiem = document.querySelectorAll('.k-n');
const noidungKN = document.querySelectorAll('.noi-dung-kn');

const a = [];
//khi click submid
document.querySelector('.gui-di').addEventListener('click', function () {
  const imeo = document.querySelector('.form-control').value;
  if (imeo === 'yeuxuongvayeubeludaulang@funix.vn') {
    form.classList.toggle('d-none');
    thongTin.classList.toggle('d-none');
  } else {
    alert('Chưa nhập email hoặc email không chuẩn rồi!!!');
  }
});

// nút viu mo và viu lét -------------------------------------
//chưa học xâu nên phải mò theo khả năng bản thân nên lệnh dài quá, và phải copy paste nhiều nữa
for (let i = 0; i < vMore.length; i++) {
  a[i] = 0;
  kinhNghiem[i].addEventListener('mouseover', function () {
    if (a[i] == 0) {
      vMore[i].classList.remove('d-none');
    }
  });
  kinhNghiem[i].addEventListener('mouseout', function () {
    vMore[i].classList.add('d-none');
  });
  vMore[i].addEventListener('click', function () {
    noidungKN[i].classList.remove('d-none');
    vless[i].classList.remove('d-none');
    a[i] += 1;
    vMore[i].classList.add('d-none');
    console.log(a[i]);
  });
  vless[i].addEventListener('click', function () {
    noidungKN[i].classList.add('d-none');
    a[i] -= 1;
    vless[i].classList.add('d-none');
    console.log(a[i]);
  });
}
console.log(a);
