document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const correctUsername = '123';
    const correctPassword = '123';
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username == correctUsername && password == correctPassword) {
        alert("Selamat, Login Berhasil")
        window.location.href = 'index.html';
    }else{
        alert("Username atau Password anda salah")
    }
});

var a;
function pass() {
    if(a==1)
{
    document.getElementById('password').type='password';
    document.getElementById('pass-icon').src='asset/hide.jpg';
    a=0;
} else {
    document.getElementById('password').type='text';
    document.getElementById('pass-icon').src='asset/show.jpg';
    a=1;
}
}

