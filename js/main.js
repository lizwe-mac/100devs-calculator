function Calculator(){
    let num=''
    let value=0
    let num1=0
    let num2=0
    this.writeDisplay=function(val){
        if(val=='.' && num.includes('.')) return
        console.log(`${val} pressed`)
        num=num+val.toString()
        display.innerText=num
    };
    this.operation=function(){
        num1=num
        num=''
        this.clear()
    };
    this.calculate=function(){
        // num2 = num
        try{
            if(num.includes('x')) num=num.replace('x','*')
            value=eval(num)
            display.innerText=value.toString()
            num=''}
            
        catch{
            let err = new Error('Syntax')
            display.innerText=err
        }

        num=''
        
    };

    this.clear=function(){
        display.innerText='0'
        num=''
    }

    this.switch=function(){
    if(display.innerText!=''){ 
        display.innerText=''
        display.style.backgroundColor="#0d1117"
        document.querySelectorAll('.num').forEach(item => {item.style.color="#666"; 
        item.style.borderColor='#666'})
        document.querySelectorAll('.label').forEach(item => {item.style.color="#666"; 
        item.style.borderColor='#666'})    
    }else{
        display.style.backgroundColor="#ee9b00"
        display.style.color="#0d1117"
        document.querySelectorAll('.num').forEach(item => {item.style.color="#ee9b00"; 
    item.style.borderColor='#ee9b00'})
    document.querySelectorAll('.label').forEach(item => {item.style.color="#ee9b00"; 
    item.style.borderColor='#ee9b00'})
    
        display.innerText='0'
    }
    
    }

    this.dateToday=function(){
        let today = new Date()
        let day = today.getDay()
        let month = today.getMonth()
        let year = today.getFullYear()
        display.innerText=`${year}-${month}-${day}`
        return today
    }

    this.timeNow=()=>{
        let __time = this.dateToday()
        let hour = __time.getHours()
        let minute = __time.getMinutes()
        let second = __time.getSeconds()
        display.innerText=`${hour}:${minute}`
    }

}
let calc = new Calculator
let power = document.querySelector('.power')
let clear = document.querySelector('.clear')
let _date = document.querySelector('.date')
let _time = document.querySelector('.time')
let display = document.querySelector('.display');
let equals = document.querySelector('[data-equals]')
let nums = document.querySelectorAll("[data-number]");
nums.forEach(a => {
    
    a.addEventListener("click", () => calc.writeDisplay(a.innerText))
    
});

clear.addEventListener('click', calc.clear)
equals.addEventListener('click', calc.calculate)
power.addEventListener('click', calc.switch)
_date.addEventListener('click',calc.dateToday)
_time.addEventListener('click',calc.timeNow)
