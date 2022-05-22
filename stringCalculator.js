function Add(string) {
   if(string != ''){
    let numberArray = string.split(',');
    let result = parseInt(numberArray.reduce ((previous,final) => parseInt(previous) + parseInt(final)));
    return result;
   }else{
       return 0;
   }
}
module.exports = Add;