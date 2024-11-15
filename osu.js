let a = [-1, -2, -3, -4, -5, -5, -100];
let value = +prompt('Nhập vào một số');
let check = false;
for (let i = 0; i < length; i++) {
    if(a[i]===value){
        check = true;
        break;
    }
}
check = true?alert('số có trong mảng'):alert('số không có trong mảng');
