class Calculator {
    private result: number;
    private history: string[] = [];
    private options: Intl.NumberFormatOptions = { maximumFractionDigits: 2 }; // Опции для форматирования чисел

    constructor(initialValue?: number) {
        if (initialValue!== undefined) {
            this.set(initialValue);
        }
    }

    private logOperation(operation: string, value: number, memory: number, result: number): void {
        const formattedResult = this.formatNumber(memory);
        const formattedValue = this.formatNumber(value);
        const formattedMemory = this.formatNumber(this.result);
        const logMessage = `Память: ${formattedMemory}  | Операция: ${operation}(${formattedValue}) | Результат: ${formattedResult}`;
        console.log(logMessage);
        this.history.push(logMessage);
    }

    private validateNumber(value: number): void {
        if (isNaN(value)) {
            throw new Error('Число должно быть действительным');
        }
    }

    private formatNumber(value: number): string { //задаём ограничение на кол-во чисе после запятой
        return new Intl.NumberFormat([],this.options).format(value);
    }

    public set(value: number): void {  //установка числа
        this.validateNumber(value);
        this.result = value;
        const logMessage = `Число задано: ${this.formatNumber(value)}`;
        console.log(logMessage);
        this.history.push(logMessage);
    }

    public plus(value: number): void {  //плюс
        this.validateNumber(value);
        const memory:number = this.result + value;
        this.logOperation('Сложение', value, memory, this.result);
        this.result = memory;
    }

    public minus(value: number): void { //минус
        this.validateNumber(value);
        const memory:number = this.result - value;
        this.logOperation('Вычитание', value, memory, this.result);
        this.result = memory;
    }

    public multiply(value: number): void { //умножение
        this.validateNumber(value);
        const memory:number = this.result * value;
        this.logOperation('Умножение', value, memory, this.result);
        this.result = memory;
    }

    public divide(value: number): void {  //деление
        this.validateNumber(value);
        if (value === 0) {
            throw new Error('Деление на ноль');
        }
        const memory:number = this.result / value;
        this.logOperation('Деление', value, memory, this.result);
        this.result = memory;
    }

    public pow(exponent: number): void { //степень
        this.validateNumber(exponent);
        const memory:number = Math.pow(this.result, exponent);
        this.logOperation('Возведение на степень', exponent, memory, this.result);
        this.result = memory;
    }

    public clear(): void { //очистка
        this.result = null;
        console.log('Память очищена');
        this.history.push('Память очищена');
    }

    public getHistory(): void { //типо, история
        console.log('___________ИСТОРИЯ____________');
        this.history.forEach((entry) => console.log(entry));
        console.log('_____________КОНЕЦ____________');
    }
}


const calc = new Calculator(10);
calc.plus(5);
calc.plus(5);
calc.multiply(3);
calc.divide(45);
calc.clear();
calc.set(3);
calc.pow(2);
calc.minus(4);
calc.multiply(2);
calc.clear();
// calc.getHistory();  // получении истории