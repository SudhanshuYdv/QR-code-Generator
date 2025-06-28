const inp = document.querySelector('#qrInput');
const genBtn = document.querySelector('#generatebt');
const qrpopup = document.querySelector('#qrpopup');
const qrImg = document.querySelector('#qrImg');
const downloadBtn = document.querySelector('#downloadqr');
const closeqr = document.querySelector('#closeqr');
const mainCon = document.querySelector('#main');

const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

genBtn.addEventListener('click',()=>{
    if(!inp.value){
        alert('Enter text or URL first!');
    }
    else{
        const imgUrl = url + inp.value;
        qrImg.setAttribute('src',imgUrl);
        setTimeout(()=>{
            qrpopup.classList.add('show');
            mainCon.classList.add('opacity');
        },1000)
    }
});


//  to download the qr
downloadBtn.addEventListener('click',()=>{
    const imgUrl = url + inp.value;
    fetch(imgUrl)
    .then((res)=>res.blob())
    .then((blob)=>{
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'qr.jpg';
        link.click();
    })
});

// Close btn

closeqr.addEventListener('click',()=>{
    qrpopup.classList.remove('show');
    mainCon.classList.remove('opacity');
})
