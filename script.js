/* buat angkat random (dari 1 - 10)*/
let secretNum = Math.floor(Math.random()*10)+1;
console.log(secretNum)

/* score awal = 100*/
let score = 100;

/* eventListener jika btn check diclick, ambil nilai dari input */
document.querySelector('.btn-check').addEventListener('click', function() {
    let angka = Number(document.querySelector('.tebak-angka').value);
    
    if ( !angka ) {
        document.querySelector('.notif').textContent = '<<<== masukan angkanya dong!';
    } else {
        if ( score > 1 ) {
            if ( angka === secretNum ) {
                document.querySelector('.notif').textContent = 'Nice, Tebakanmu benar';
                /** modify style or image */
                document.querySelector('.square').src=`./img/misteriuoseBox-${secretNum}.png`
                document.querySelector('body').style.backgroundColor = '#00802b';
                document.querySelector('.square').style.animation = 'shake 0.5s';
                document.querySelector('.square').style.animationIterationCount = 'infinite';
                document.querySelector('.total-score').textContent = `${score}`;
                modal.style.display = "block";
            } else if ( angka > secretNum ) {
                document.querySelector('.notif').textContent = 'hmmmm, terlalu tinggi';
                score -= 25;
                document.querySelector('.score').textContent = score;
                if ( score === 0 ) {
                    document.querySelector('.score').textContent = 0;
                    document.querySelector('body').style.backgroundColor = '#450808';
                    document.querySelector('.notif').textContent = 'Yahh... Kamu kalah !';
                }
            } else if ( angka < secretNum ) {
                document.querySelector('.notif').textContent = 'terlalu rendah, coba lagi';
                score -= 25;
                document.querySelector('.score').textContent = score;
                if ( score === 0 ) {
                    document.querySelector('.score').textContent = 0;
                    document.querySelector('body').style.backgroundColor = '#450808';
                    document.querySelector('.notif').textContent = 'Yahh... Kamu kalah !';
                }
            } 
        } 
    }
}) 

/* eventListener untuk button Bermain lagi >> semua elemet direset*/
document.getElementById('again').addEventListener('click', function(){
    // console.log('btn maen lagi di klik');
    secretNum = Math.floor(Math.random()*10)+1;
    score = 100;
    document.getElementById('score').innerHTML = '100';
    document.getElementById('notif').innerHTML = 'ayoo tebaklah angka dalam kotak....';
    document.getElementById('tebak-angka').innerHTML = 0;
    document.getElementsByClassName('square')[0].src = './img/misteriuoseBox-0.png';
    document.querySelector('.tebak-angka').value = '';
    document.querySelector('body').style.backgroundColor = 'rgb(24, 24, 43)';
    document.querySelector('.square').style.animation = '0s';
    document.querySelector('.square').style.animationIterationCount = '0';
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
// modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
        modal.style.display = "none";
    }
}
