class Pet {
    constructor(name, hunger, happiness) {
        this.name = name;
        this.hunger = hunger;
        this.happiness = happiness;
    }

    eat() {
        this.happiness++;
        if (this.hunger - 1 >= 0) {
            this.hunger--;
        }
    }

    play() {
        this.happiness += 1;
        this.hunger += 2;
    }

    sleep() {
        this.hunger++;
    }

    status() {
        if (this.hunger < 3) {
            return `${this.name} is really hungry`;
        }
        return `${this.name} is feeling great`;
    }

    getOlder() {
        this.happiness -= 1;
        this.hunger += 1;
    }

    introduce() {
        return `Hey, I'm ${this.name}, and my happiness level is ${this.happiness}, hunger is ${this.hunger}`;
    }

    timeout() {
        const initialHappiness = this.happiness;
        this.happiness = 0;
        return `Hey, happiness was ${initialHappiness}, but now it is ${this.happiness}`;
    }
}

const pet1 = new Pet("Bobik", 0, 10);
