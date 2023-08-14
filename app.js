//Way - 1

// let value=0;
// let ele = document.querySelector('.content');
// ele.textContent = value;

//Way - 2
// const countValue = document.querySelector('.content');

//Way - 3
const countValue = document.querySelector('.content');
const btnminus = document.querySelector('.btn-minus')
btnminus.addEventListener('click',decrement);

const btnPlus = document.querySelector('.btn-plus');
btnPlus.addEventListener('click',increment);

function increment(){
    //Way - 1
    // value+=1;
    // ele.textContent=value;
    // console.log('hi');


    // Way - 2 and 3
    let val = parseInt(countValue.innerText);
    val = val+1;
    countValue.innerText = val;
}

function decrement(){
    //Way - 1
    // value-=1;
    // ele.textContent=value;
    // console.log('hello');


    //Way - 2 and 3
    let val = parseInt(countValue.innerText);
    val = val-1;
    countValue.innerText = val;
}