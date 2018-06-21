//% color=#5042f4 icon="\uf2c9"
namespace DS18B20 {

    // Functions for interfacing with the DS1820

    /**
     * Reads the temperature from the one-wire temperature sensor.
     * Returns a 4 digit number. value should be divided by 100 to get 
     *temperature in hundreths of a degree centigrade. 
     * block="Temperature(C)"
     */

     export enum pin {
       //% block=pin0
       pin0 = 0,
       //% block=pin1
       pin1 = 1,
       //% block=pin2
       pin2 = 2,
       //% block=pin5
       pin5 = 5,
       //% block=pin8
       pin8 = 8,
       //% block=pin11
       pin11 = 11,
       //% block=pin12
       pin12 = 12,
       //% block=pin13
       pin13 = 13,
       //% block=pin14
       pin14 = 14,
       //% block=pin15
       pin15 = 15,
       //% block=pin16
       pin16 = 16
     }
     
     
    //% shim=DS18B20::Temperature
    export function Temperature(p: number): number {
        // Fake function for simulator
        return 0
    }
    
    //% weight=10 blockId="Temperature_number" 
    //% block="|%p| Temperature_number "
    //% p.fieldEditor="gridpicker" p.fieldOptions.columns=4
    export function Temperature_number(p: pin): number {
        // Fake function for simulator
        return Temperature(p)
    }
    
    //% weight=10 blockId="Temperature_string" 
    //% block="|%p| Temperature_string "
    //% p.fieldEditor="gridpicker" p.fieldOptions.columns=4
    export function Temperature_string(p: pin) : string{
        let temp = Temperature(p);
        let x = (temp / 100)
        let y = (temp % 100)
        let z = ''
        if((y < 10)&&(y >= 0)){
            z = x.toString() + '.0' + y.toString()
        }
        else if(y >= 10){
            z = x.toString() + '.' + y.toString()
        }
        else if((y > -10)&&(y < 0)&&(x==0)){
            z = '-' + x.toString() + '.0' + (-y).toString()
        }
        else if((y > -10)&&(y < 0)&&(x!=0)){
            z = x.toString() + '.0' + (-y).toString()
        }
        else if((y < -10)&&(x==0)){
            z = '-' + x.toString() + '.' + (-y).toString()
        }
        else if((y < -10)&&(x!=0)){
            z = x.toString() + '.' + (-y).toString()
        }
        return z
    }
}
