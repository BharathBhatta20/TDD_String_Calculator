function Add(string) {
   if(string != ''){
    let numberArray = string.replace(/\//g, '').replace(/[\n;|'{}]/gm, ',').split(',').filter(n => n); 
    // replacing starting delimiters and replacing /n and colon characters.
     // .filter(n => n) removes the null element index from array after the spliting. 
    let result = parseInt(numberArray.reduce ((previous,final) => parseInt(previous) + parseInt(final)));
    return result;
   }else{
       return 0;
   }
}
module.exports = Add;