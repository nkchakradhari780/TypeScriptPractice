class Car {
    model: string;
    doors: number;
    isElectric: boolean;
    constructor(model: string, doors: number, isElectric: boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    displayMake(): void {
        console.log(`Car Model: ${this.model}, Doors: ${this.doors}, Electric: ${this.isElectric}`);
    }
}

const bmw = new Car("BMW", 4, true);
bmw.displayMake();