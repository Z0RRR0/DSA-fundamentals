const obj = {
    name: 'Mazda Veilside RX-7 Fortune', 
    age: 2006,
    'key-three' : true,
    sayMyName: function() {
        console.log(this.name)
    }
}
obj.hobby = 'drifting'
delete obj['key-three']

console.log(obj.name)
console.log(obj['age'])
console.log(obj)
obj.sayMyName()

console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

 // Object.keys() .values() .entries()