// 25 leqciis davalebebi
        // #2 (დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i , დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i)
for( let i = 0 ; i<=100 ; i++) {
    console.log(i)
};
let index = 0;
while(index < 50){
    index = index + 1 ;
    console.log(index)
}
        // #3 (შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა. ისე როგორც ლექციაზე გავაკეთეთ.)
let array = ['niko' , 'lasha' , 'mamuka' , 'sopo' , 'anastasia']
let pop = array.pop() 
console.log(array)
let shift = array.shift()
console.log(array)
let unshift = array.unshift('mzia')
console.log(array)
let push = array.push('nino')
console.log(array)
        // #4 (შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე ამ ,მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i) მასივში ჩაწერა ხდება push მეთოდის საშუალებით ლექციის ფაილში გვიწერია)
let array2 = []
for(i = 0 ; i<=10000 ; i++){
    let power = i * i ;
    array2.push(power)
}
console.log(array2)
        // #5(შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი)
let arrayNum = [1 , 2 , 3 , 4 , 5]
let sum = 0
for( i = 0 ; i<= arrayNum.length ; i++){
    sum = sum + i
}
console.log(sum)
        // #6 (დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი.)
function getOddOrEven ( number ){
    if (number % 2 == 0){
        return true
    }
    else {
        return false
    }
}
getOddOrEven(14)
        // #7 (დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) და დააბრუნებს LowerCase (my name is john) სტრინგს)
function getLowerCase(upperCaseStr) {
    return upperCaseStr.toLowerCase();
}
let lowerCase = getLowerCase('NIKO')
console.log(lowerCase);
        // #8 (დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება)
function getFilteredArray (anyArray){
    return anyArray.filter( item => item %2 === 0)
}
let filtered = getFilteredArray(arrayNum)
console.log(filtered)
// 26 leqciis davalebebi
        // #1(დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს)
function getNumber ( number ){
    if (number % 3 == 0){
        return true
    }
    else {
        return false
    }
}
let filteredNum = getNumber(8)
console.log(filteredNum)
        // #2(დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.)
function getCurrencySymbolFromCode ( currency ){
    if (currency = 'USD'){
        return '$'
    }
    else if (currency = 'EUR'){
        return '€'
    }
    else if (currency = 'GEL'){
        return 'ლ'
    }
    else{
        return currency
    }
}
let currency = getCurrencySymbolFromCode('EUR')
console.log(currency)
        // #3(დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.)
console.log('es wina davalebashi davwere')
        // #4(დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.)
function getProfit (a , b){
    let x = b-a
    let y = x / a * 100 + '%'
    return y
}
let profit = getProfit(30 ,70)
console.log(profit)
        // #5(დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.)
function odd (x){
    console.log('ukve gavakete')
}
let y = odd(9)
console.log(y)