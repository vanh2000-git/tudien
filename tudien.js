let a = ["banana", "apple", "orange"];
let b = ["chuối", "táo", "cam"];
let value = prompt('Nhập vào một từ');
let index = -1;
for (let i = 0; i < a.length; i++) {
    if(a[i]===value){
        index=i;
        break;
    }
}
index>=0?alert(`${b[index]}`):alert('từ không có trong mảng');
