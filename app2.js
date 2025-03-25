const emaildata = ["abhraanil@gmail.com","nil@gmail.com",]
const roolid = ["jn-01","jn-02","jn-03","jn-04","jn-05","jn-06","jn-07","jn-08","jn-09","jn-10",]
but.addEventListener('click', f1);
const fname = document.getElementById('full-name');
const emailf = document.getElementById('email');
const butf = document.getElementById('but');

function f1() {
    if (emaildata.find((email) => email === emailf.value) && roolid.find((roll) => roll === fname.value)) {
        window.location.href = 'co.html';
    }else if (emailf.value === '') {}
    
    else {
        alert('Please enter a valid information');
    }
}

butf.addEventListener('click', f1());

