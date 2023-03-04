class Vehicle {
    constructor(color, make, model, year, engine){
        this.color = color
        this.make = make
        this.model = model
        this.year = year
        this.engine = engine
    }

    driveFor(){
        console.log(`The ${this.make} ${this.model} is driving forward.`)
        if(this.engine === 'V8'){
            console.log(`It's moving fast with that ${this.engine}`)
        }
        else if(this.engine === 'V10'){
            console.log(`It's moving REALLY fast with that ${this.engine}!!`)
        }
        else{
            console.log(`It's moving.`)
        }
    }

    driveBack(){

    }

    stop(){
        console.log(`The ${this.make} ${this.model} is stopped.`)
    }

}

const johnVehicle = new Vehicle('White', 'Toyota', 'Tacoma', '2023', 'V6')
johnVehicle.driveFor()

const fastVehicle = new Vehicle('Grey', 'Audi', 'R8', '2015', 'V10')
fastVehicle.driveFor()