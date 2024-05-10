class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="160" height="160" x="70" y="20" fill="${this.color}" />`;
    }
}

export { Circle, Triangle, Square };
