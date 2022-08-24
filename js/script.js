let sec = document.querySelector (".s");
let min = document.querySelector (".m");
let hour = document.querySelector (".h");
let hourNum = document.querySelector('.hours');
let minNum = document.querySelector('.minutes');
// console.log(sec);

function clock() {
    let time = new Date();
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    // Повороты
    sec.style.transform= `rotate(${seconds}deg)`;
    min.style.transform= `rotate(${minutes}deg)`;
    hour.style.transform= `rotate(${hours}deg)`;
    hourNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()  ;
    minNum.innerHTML = time.getMinutes()< 10 ? "0" + time.getMinutes() : time.getMinutes();
    setTimeout(() => { clock() }, 1000);
    // console.dir(seconds);
}

clock() 



// Рекурсия 
// let i = 0;
// function rec() {
//     i++;
//     console.log(i);
//     if (i < 5) {
//         rec();
//     }
// }

// rec()

let links = document.querySelectorAll('.tabsItem');
let tabs = document.querySelectorAll('.tabsContentItem');
console.log(tabs);
for (let i = 0; i < links.length; i++) {
    const element = links[i];
    // element.onclick = function () { 
    //     console.log("Привет!");
    //  }
     element.addEventListener("click", function (event) {
        event.preventDefault(); // отмена события по умолчанию
        console.log(this);
        // elem.classList.add(name) - добавляет класс 
        // elem.classList.remove(name) - удаляет класс 
        // elem.classList.contains(name) - проверяет наличие класса класс 
        // elem.classList.toggle(name) - удаляет/добовляет класс 
        for (let x = 0; x < links.length; x++) {
            const y = links[x];
            y.classList.remove("active")
            tabs[x].classList.remove("active")
        }
        this.classList.add("active")
        tabs[i].classList.add("active")
     })
    
     
    }
    
    const secondInfo = document.querySelector('.tabsLink__span');
    const secondWatch = document.querySelector('.stopwatch__seconds');
    const minutesWatch = document.querySelector('.stopwatch__minutes');
    const hoursWatch = document.querySelector('.stopwatch__hours');
    const btnWatch = document.querySelector('.stopwatch__btn');
    
    btnWatch.addEventListener("click", function () {
        if (btnWatch.innerHTML == "start") {
            btnWatch.innerHTML = "stop";
            secondInfo.classList.add("active");
            watch(this, 0);
        } 
        else if(btnWatch.innerHTML == "stop") {
            btnWatch.innerHTML = "clear";
            secondInfo.classList.remove("active");
            secondInfo.classList.add("active_clear");
            
        } 
        else {
            btnWatch.innerHTML = "start";
            secondInfo.classList.remove("active_clear");
        }
    }) 
    
    function watch(el, i) {
        if (el.innerHTML == "stop") {
            
            if (i == 59) {
                i = 0;
                secondWatch.innerHTML = i;

                if (minutesWatch.innerHTML == 59) {
                    minutesWatch.innerHTML = 0;
                    hoursWatch.innerHTML++;
                } else {
                    minutesWatch.innerHTML++;
                }

            } else {
                i++;
                secondWatch.innerHTML = i;
            }
            setTimeout(() => {
                watch(el, i)
            }, 1000);
        }
    }

 