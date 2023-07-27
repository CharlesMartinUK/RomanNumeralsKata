

export function convert(arr) {
	
  // do not need to handle 3000 or more
  if ((arr <= 0) || (arr >= 3000))  return "";
    
  // HOW ? use each letter, but next down combination as well:  // M CM then D CD
  
  // 2001 = M M 1
  // 999 = CM XC IX
  // 700 = D C C
  // 701 = D C C I
  
  let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  let roman = "";
  
  for (let i in lookup ) {
    while ( arr >= lookup[i] ) {
      roman += i; 
      arr -= lookup[i];
    }
  }

  return roman
}
	