class Calculator {
    constructor(slotdata1, slotdata2) {
      this.slotdata1 = slotdata1
      this.slotdata2 = slotdata2
      this.clear()
    }
    
    clear() {
        this.operand2 = ''
        this.operand1 = ''
        this.operation = undefined
    }
  
     delete() {
        this.operand2 = this.operand2.toString().slice(0, -1)
    }
  
    appendNumber(number) {
        if (number === '.' && this.operand2.includes('.')) return
        if (number === '0' && this.operand2==='0')return
        this.operand2 = this.operand2.toString() + number.toString()
    }
  
    chooseOperation(operation) {
        if (this.operand2 === '') return
        if (this.operand1 !== '') {
          this.compute()
        }
        
        this.operation = operation
        this.operand1 = this.operand2
        this.operand2 = ''
    }
  
    compute() {
        let computation
        const prev = parseFloat(this.operand1)
        const current = parseFloat(this.operand2)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
          case '+':
            computation = prev + current;
            break
          case '-':
            computation = prev - current;
            break
          case 'x':
            computation = prev * current;
            break
          case '/':
            if(current==0){
              alert("Cannot Divide a number by 0");
              computation='';
            }
            else{
              computation = prev / current;
            }
            break
          default:
            return
        }
        this.operand2 = computation
        this.operation = undefined
        this.operand1 = ''
      }
  
    updateDisplay() {
        this.slotdata2.innerText= this.operand2;
        this.slotdata1.innerText= this.operand1;
    }
  }
  
  const numberButtons = document.querySelectorAll('[btn-number]');
  const operationButtons = document.querySelectorAll('[operation_btn]');
  const equalsButton = document.querySelector('[equalbtn]');
  const deleteButton = document.querySelector('[data-deleteno]');
  const allClearButton = document.querySelector('[clear_all]');
  const slotdata1 = document.querySelector('[displayer1]');
  const slotdata2 = document.querySelector('[displayer2]');
  
  const calculator = new Calculator(slotdata1, slotdata2);
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay();
    })
  })
  
  equalsButton.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click',button =>{
    calculator.clear();
    calculator.updateDisplay();
  })
  