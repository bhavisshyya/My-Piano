const volumeSlider= document.querySelector("#volumeSlider");

const whiteKeys= document.querySelectorAll('.keys-white');
const blackKeys= document.querySelectorAll('.keys-black');

const whiteKeyArray=Array.from(whiteKeys);
const blackKeyArray=Array.from(blackKeys);

whiteKeyArray.forEach((key)=>{
    const audio= new Audio(`tunes/${key.id}.wav`);

    key.addEventListener('click', ()=>{
        audio.volume = volumeSlider.value/100 ;
        audio.play()});
})

blackKeyArray.forEach((key)=>{
    const audio= new Audio(`tunes/${key.id}.wav`);
    key.addEventListener('click', ()=>{
        audio.volume= volumeSlider.value/100 ;
        audio.play()});
})


document.addEventListener('keydown',(e)=>{
    // console.log(e.key);

    whiteKeyArray.forEach((key)=>{
        if(key.id == e.key){
            // if press down key == piano key
            key.click();
            key.classList.add('active-white');
            setTimeout(()=>{
                key.classList.remove('active-white')
        },150)
        }
    })

    blackKeyArray.forEach((key)=>{
        if(key.id == e.key){
            // if press down key == piano key
            key.click();
            key.classList.add('active-black');
            setTimeout(()=>{
                key.classList.remove('active-black')
        },150)
        }
    })
})
