interface Highpoint { 
    name:string,
    state:string,
    lat:float,
    long:float
}

let AL:Highpoint = {
    name:'Cheaha Mountain',
    state:'AL',
    lat:33.48600,
    long:85.809
}

let AK:Highpoint = {
    name:'Denail',
    state:'AK',
    lat:63.06909,
    long:151.00708
}

let AZ:Highpoint = {
    name:'Humphreys Peak',
    state:'AZ',
    lat:35.34640,
    long:111.6778
}

let highpoints:Highpoint[] = [AL, AK, AZ]

export {highpoints, Highpoint}