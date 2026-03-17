//CLasses

class Rectangle{
    constructor (width , height , color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const ans = this.height * this.width ;
        return ans;
    }

    paint(){
        console.log("Paint with color" + this.color);
    
    }
}

const rect = new Rectangle (2,4,"red");
const area = rect.area();
console.log(area);




// ----------------------Inheritence----------------------

// Perent class
class shape  {
    constructor(color){
        this.color = color;
    }
    paint(){
        console.log(`Paint color with ${this.color}`);
    }

    area(){
        throw new Error('The area method must be implemented in the subclass');
    }
    getDescription(){
        return `A shape with color ${this.color}`;

    }
}
 // child class 
class Rectangle extends shape {
    constructor(width, height, color){
        super(color);
        this.width = width ;
        this.height = height;
    }

    area(){
        return this.height * this.width;
    }

    getDescription(){
        return `A rectangle with width : ${this.width}, height ${this.height}, and color ${this.color}`;
    
    }
}
 
// child class 
class Circle extends shape{
    constructor (radius , color){
        super(color);
        this.radius = radius;
    }
    area(){
        return Math.PI * (this.radius * this.radius);
    }
     getDescription(){
          return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}



const rect1 = new Rectangle(2, 4, "red");
console.log(rect1.getDescription());

const circle1 = new Circle( 4 , "blue");
console.log(circle1.area());


//--------------Some more class---------------- 

//Date
const now = new Date();
console.log(now.toString());

Maps 
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));
console.log(map);
