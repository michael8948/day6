//  var cities = require("all-the-cities")


// var city = cities.filter(function(item){
//     // if (item.country === "US" || item.country === "ES") {
//     //     return true
//     // } else {
//     //     return false
//     // }
    
//     return (item.country === "US" || item.country === "ES")

// })

// console.log(city)

// var someCities = cities.filter(function(item){
//     return (item.name === "")
// })

// console.log(someCities)




// larger, smaller, equals, not equals(!==), smaller or equals, greater or equals

var num1 = 18
var num2 = 303
var name1 = "JIMMY"
var name2 = "jimmy"
var num3 = 3030
var num4 = 3050


// console.log((num1 > num2 || num3 + num2 >= num4 ) && (name1 === name2 && name1.length > name2.length))
//           (   false    ||            true   )   &&  (false         &&         false       )
//                          true                  &&                false
//                                              false

// console.log(num3 === num2 && num1.length === num2.length)


// console.log ( typeof(num1) === "number" || name1 === num2)

// console.log( (num2 * 10) === num3 || (name1.toLowerCase === name2 && num4 === num1))
                    // true   or       (true and false)
                    //  true or false
                    //      true


                    // true || false    true
// true && true     true
// ture && false    false



var airportData = require("airport-data")

// var airport = airportData(function(item){
    
// })

console.log(airportData.length)

