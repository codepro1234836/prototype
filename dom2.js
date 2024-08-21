// Gizli e-posta ve şifre
const hiddenEmail = "@viewmail.com"; // Gizli e-posta
const hiddenPassword = "*****"; // Gizli şifre

// Giriş kontrolü
function giris(email, sifre) {
    // Kullanıcının girdiği bilgileri kontrol et
    if (email === hiddenEmail && sifre === hiddenPassword) {
        alert("Giriş başarılı");
        localStorage.setItem('isLoggedIn', 'true'); // Kullanıcının giriş yaptığını localStorage'da sakla
        window.location.href = 'dom3.html'; // Başarılı girişte yönlendirme
    } else {
        alert("Yanlış bilgi"); // Hata mesajı gösterilebilir
        window.location.href = 'yanlis_bilgi.html'; // Yanlış bilgi durumunda yönlendirme
    }
}

// Eğer kullanıcı zaten giriş yaptıysa, direkt olarak dom.html'e yönlendir
if (localStorage.getItem('isLoggedIn') !== 'true') {
    var email = prompt("Email:");
    var sifre = prompt("Şifre:");
    giris(email, sifre); // Giriş fonksiyonunu çağır
} else {
    window.location.href = 'dom3.html'; // Giriş yapmışsa doğrudan yönlendir
}
function cikis() {
    localStorage.removeItem('isLoggedIn'); // Giriş bilgilerini temizle
    alert("Çıkış yapıldı");
    window.location.href = 'index2.html'; // Ana sayfaya yönlendir
}
