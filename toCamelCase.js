//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  
    if(str == '') {
      return '';
    }
    
    let text = str.split(/[^A-Za-z]/);
    let camelCase1 = [];
    let camelCase = [];
    let len = text.length;
    
    
    camelCase.push(text[0])
    
    for (let i = 1; i<len;i++) {
      
      if(text[i].charAt(0) === text[i].charAt(0).toUpperCase()) {
        
        camelCase.push(text[i].charAt(0) + text[i].slice(1, text[i].length));
        
      }

      else {
        camelCase.push(text[i].charAt(0).toUpperCase() + text[i].slice(1, text[i].length));
      }
      
     } 
    
    
    return camelCase.join('');
    
    
  
  }