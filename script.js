function reverseNumber(num) {                     // 1. First task.
    if(typeof num != String) {
        num = num + "";
    }
    let newArr = [];
    for(let i = 0; i < num.length; i++) {
        newArr.push(num[(num.length-1)-i]);
    } 
    let newNum = newArr[0];
    for(let i = 1; i<newArr.length; i++) {
        newNum += newArr[i];
    }
    return newNum;
}

function func(elem) {                            // 2. Second task.
    console.log(elem);
}

function forEach(arr, func) {                           //2.1  first edition    
    for(let el in arr) {
        func(arr[el]);
    }
}

function forrEach(arr, func) {                          // 2.2 second edition
    for(let val of arr) {
        func(val);
    }
}

function func(elem) {                            // 3. Third task.
    return elem*2;
}

function map(arr, func) {
    let newArr = [];
    for(let el in arr) {
        newArr.push(func(arr[el]));
    }
    return newArr;
}

function func(elem) {                            // 4. Fourth task.
    return elem % 2 === 0;
}

function filter(arr, func) {
    let newArr = [];
    for(let el in arr) {
        if(func(arr[el])) {
            newArr.push(arr[el]);
        }
    }
    return newArr;
}

function getAdultAppleLovers (arr) {             // 5. Fifth task.
    let names = [];
    for(let el of arr) {
        if(el.age > 18 && el.favoriteFruit === "apple") {
            names.push(el.name);
        }
    }
    return names;
}

function getKeys(obj) {                           // 6.Sixth task.
    let keys = [];
    for(let el in obj) {
        keys.push(el);
    }
    return keys;
}

function getValues(obj) {                         // 7.Seventh task.
    let keys = [];
    for(let el in obj) {
        keys.push(obj[el]);
    }
    return keys;
}

function showFormattedDate(date) {                   // 8. Eighth task.
    myMonth = date.toLocaleString('en', { month:'short'});
    myDay = date.getDate();
    myYear = date.getFullYear();

    return `It is ${myDay} of ${myMonth}, ${myYear}`;
}