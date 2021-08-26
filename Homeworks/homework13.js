/*
@Date:   Nov 12, 2020
@Author: Carlos Gonzalo Villas Velazquez

Homework Assignment #13: Classes

Details:
    Create a class called "Vehicle" and methods that allow you to set the "Make", "Model", "Year,", and "Weight".
    The class should also contain a "NeedsMaintenance" boolean that defaults to False, and and "TripsSinceMaintenance" Integer that defaults to 0.
    Next an inheritance classes from Vehicle called "Cars".
    The Cars class should contain a method called "Drive" that sets the state of a boolean isDriving to True.  
    It should have another method called "Stop" that sets the value of isDriving to false.
    Switching isDriving from true to false should increment the "TripsSinceMaintenance" counter. 
    And when TripsSinceMaintenance exceeds 100, then the NeedsMaintenance boolean should be set to true.
    Add a "Repair" method to either class that resets the TripsSinceMaintenance to zero, and NeedsMaintenance to false.

    Create 3 different cars, using your Cars class, and drive them all a different number of times. 
    Then print out their values for Make, Model, Year, Weight, NeedsMaintenance, and TripsSinceMaintenance

Extra Credit:
    Create a Planes class that is also an inheritance class from Vehicle. 
    Add methods to the Planes class for Flying and Landing (similar to Driving and Stopping), 
    but different in one respect: Once the NeedsMaintenance boolean gets set to true, 
    any attempt at flight should be rejected (return false), and an error message should be printed saying that 
    the plane can't fly until it's repaired.

*/

class Vehicle {
    constructor (make, model, year, weight){
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.NeedsMaintenance = false;
        this.TripsSinceMaintenance = 0;
    }
}

class Car extends Vehicle{

        constructor (make, model, year, weight, isDriving){
            super(make, model, year, weight);
            this.isDriving = isDriving;
        }
    
    isDriving = false;
    
    Drive(){
        if (this.isDriving === false){
            this.isDriving = true; 
            this.TripsSinceMaintenance +=1;
            if (this.TripsSinceMaintenance >= 100){ 
                this.NeedsMaintenance = true;
            }
        }
    }

    Stop(){
        this.isDriving = false;
    }

    Repair(){
        this.TripsSinceMaintenance = 0;
        this.NeedsMaintenance = false;
    }

    Details(){
        if (this.NeedsMaintenance === false){
            console.log("This car is a " + this.year.toString() + " " + this.make + " " + this.model + ", and weights: " + this.weight.toString() + "TN, has had " + this.TripsSinceMaintenance.toString() + " trips since last maintenance and doesn't need maintenance");
        }else{
            console.log("This car is a " + this.year.toString() + " " + this.make + " " + this.model + ", and weights: " + this.weight.toString() + "TN, has had " + this.TripsSinceMaintenance.toString() + " trips since last maintenance and needs maintenance");
        }
    }   
}

myCar1 = new Car("Ford","Fiesta",2013,3);
myCar2 = new Car("Ferrari","Panamerica",2015,3.5);
myCar3 = new Car("Honda","HRV",2017,6);

for (i = 0; i <= 50; i++){
    myCar1.Drive();
    myCar1.Stop();
}

for (i = 0; i <= 150; i++){
    myCar2.Drive();
    myCar2.Stop();
}

for (i = 0; i <= 200; i++){
    myCar3.Drive();
    myCar3.Stop();
}

myCar3.Repair();

// Printing individually the details
console.log(myCar1.make)
console.log(myCar1.model)
console.log(myCar1.year)
console.log(myCar1.weight)
console.log(myCar1.TripsSinceMaintenance)
console.log(myCar1.NeedsMaintenance)

//Printing all the details
myCar1.Details();
myCar2.Details();
myCar3.Details();

class Plane extends Vehicle{
    constructor(make, model, year, weight, isFlying){
        super(make, model, year, weight);
        this.isFlying = isFlying;
    }
    
    isFlying = false;

    Flying(){
        if (this.isFlying === false && this.NeedsMaintenance === false){
            this.isFlying = true;
            this.TripsSinceMaintenance +=1;
            if (this.TripsSinceMaintenance >= 100 ){ 
                this.NeedsMaintenance = true;
            }
        } else if (this.NeedsMaintenance === true){
            console.log("The plane can't fly until it's repaired.");
        }
    }
        
    Landing(){
        this.isFlying = false;
    }

    Repair(){
        this.TripsSinceMaintenance = 0;
        this.NeedsMaintenance = false;
    }

    Details(){
        if (this.NeedsMaintenance === false){
            console.log("This plane is a " + this.year.toString() + " " + this.make + " " + this.model + ", and weights: " + this.weight.toString() + "TN, has had " + this.TripsSinceMaintenance.toString() + " trips since last maintenance and doesn't need maintenance")
        }else{
            console.log("This plane is a " + this.year.toString() + " " + this.make + " " + this.model + ", and weights: " + this.weight.toString() +  "TN, has had " + this.TripsSinceMaintenance.toString() +  " trips since last maintenance and needs maintenance")
        }
    }
}

myPlane1 = new Plane("Boing","727",2013,300);
myPlane2 = new Plane("Airbus","0811",2015,350);
myPlane3 = new Plane("Boing","737",2017,600);

for (i = 0; i <= 50; i++){
    myPlane1.Flying();
    myPlane1.Landing();
}

for (i = 0; i <= 101; i++){
    myPlane2.Flying();
    myPlane2.Landing();
}

for (i = 0; i <= 101; i++){
    myPlane3.Flying();
    myPlane3.Landing();
}
myPlane3.Repair();

//Printing all the details
myPlane1.Details();
myPlane2.Details();
myPlane3.Details();

myPlane2.Flying();