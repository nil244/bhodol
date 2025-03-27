const students = {
    "abhranil@gmail.com":"jn-01",
    "nil@gmail.com":"jn-02"

}


but.addEventListener('click', f1);
const fname = document.getElementById('full-name');
const emailf = document.getElementById('email');
const butf = document.getElementById('but');

function f1() {
    if (emailf.value in students && students[emailf.value] === fname.value) {
        window.location.href = 'co.html';
    }else if (emailf.value === '') {}
    
    else {
        alert('Please enter a valid information');
    }
}

butf.addEventListener('click', f1());
