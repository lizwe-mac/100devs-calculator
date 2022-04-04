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
        try{value=eval(num)
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

}
let calc = new Calculator
let display = document.querySelector('.display');
let equals = document.querySelector('[data-equals]')
let num = document.querySelectorAll("[data-number]");
num.forEach(a => {
    
    a.addEventListener("click", () => calc.writeDisplay(a.innerText))
    
});

display.addEventListener('click', calc.clear)
equals.addEventListener('click', calc.calculate)
