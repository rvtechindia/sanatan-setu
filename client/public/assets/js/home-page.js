//banner
let data = ["Restaurants", "Hotels","Shops","fitness","Shopping"];
let len = 0;
let speed=150;
for (let i = 0; i < data.length; ++i) len += 2*data[i].length;
len += 4*data.length;
function type() {
    let p=0;
    for (let i = 0; i < data.length; ++i) {
        let x = 0;
        while (x <= data[i].length) {
            let y=x;
            setTimeout(()=>{
                document.getElementById('typewriter').innerHTML=`${data[i].substr(0,y)}`
            },p*speed)
            ++x,++p;
        }
        --x,p+=2;
        while (x >= 0) {
            let y=x;
            setTimeout(()=>{
                document.getElementById('typewriter').innerHTML=`${data[i].substr(0,y)}`
            },p*speed)
            --x,++p;
        }
    }
    setTimeout(() => {
        type();
    }, len * speed);
}

function blinkingPointer(){
    setTimeout(()=>{
        document.getElementById('check').style.borderRightColor=`red`;
    },500)  
    setTimeout(()=>{
        document.getElementById('check').style.borderRightColor='transparent'
    },1000)  
    setTimeout(()=>{
        blinkingPointer();
    },1000)

}

blinkingPointer();
type();

//end



