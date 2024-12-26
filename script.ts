class Calculator {
    private memory: number | null = null;
    private history: string[] = [];

    constructor(initialValue?: number) {
        if (initialValue!== undefined) {
            this.set(initialValue);
        }
    }

    private logOperation(operation: string, value: number, result: number): void {
        console.log(` Memory: ${this.memory} | Operation: ${operation}(${value}) | Result: ${result} `);
        this.history.push(` Memory: ${this.memory} | Operation: ${operation}(${value}) | Result: ${result} `);
    }

    private validateNumber(value: number): void {
        if (isNaN(value)) {
            throw new Error('Argument must be a valid number (not NaN)');
        }
    }

    public set(value: number): void {
        this.validateNumber(value);
        this.memory = value;
        console.log(`Memory set to: ${value}`);
        this.history.push(`Memory set to: ${value}`);
    }

    public plus(value: number): void {
        this.validateNumber(value);
        if (this.memory === null) {
            throw new Error('Memory is empty');
        }
        const result = this.memory + value;
        this.memory = result;
        this.logOperation('Plus', value, result);
    }

    public minus(value: number): void {
        this.validateNumber(value);
        if (this.memory === null) {
            throw new Error('Memory is empty');
        }
        const result = this.memory - value;
        this.memory = result;
        this.logOperation('Minus', value, result);
    }

    public multiply(value: number): void {
        this.validateNumber(value);
        if (this.memory === null) {
            throw new Error('Memory is empty');
        }
        const result = this.memory * value;
        this.memory = result;
        this.logOperation('Multiply', value, result);
    }

    public divide(value: number): void {
        this.validateNumber(value);
        if (this.memory === null) {
            throw new Error('Memory is empty');
        }
        if (value === 0) {
            throw new Error('Division by zero');
        }
        const result = this.memory / value;
        this.memory = result;
        this.logOperation('Divide', value, result);
    }

    public pow(exponent: number): void {
        this.validateNumber(exponent);
        if (this.memory === null) {
            throw new Error('Memory is empty');
        }
        const result = Math.pow(this.memory, exponent);
        this.memory = result;
        this.logOperation('Pow', exponent, result);
    }

    public clear(): void {
        this.memory = null;
        console.log('Memory cleared');
        this.history.push('Memory cleared');
    }

    public getHistory(): void{
        console.log('--- Operation History ---');
        this.history.forEach((entry) => console.log(entry));
        console.log('--- End of History ---');
    }
}

// Создание экземпляра калькулятора с начальным значением
const calc = new Calculator(10);

// Цепочка операций
calc.plus(5);       // (10) + 5
calc.multiply(3);   // (15) * 3
calc.divide(45);    // (45) / 45
calc.clear();       // Очистка
calc.set(3);        // Установили 3
calc.pow(2);        // (3) ^ 2
calc.minus(4);      // (9) - 4
calc.clear();       // Очистка

// Вывод истории операций
calc.getHistory();