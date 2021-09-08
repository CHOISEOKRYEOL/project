// false: 0, -0, '', null, undefined
// true: -1, 'hello', 'false', obj
let obj = {

}
if (obj) {
    console.log(obj);
}

obj && console.log(obj);