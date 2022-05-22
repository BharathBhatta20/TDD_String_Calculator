function Add(string) {
   if(string != ''){
    let numberArray = string.replace(/\n/gm, ',').split(','); // using regular expression to filter the /n characters.
    let result = numberArray.reduce ((previous,final) => parseInt(previous) + parseInt(final));
    return result;
   }else{
       return 0;
   }
}
module.exports = Add;