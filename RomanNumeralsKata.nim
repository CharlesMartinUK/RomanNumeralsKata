import tables

proc convert(arr: int) : string =

    if arr <= 0 or arr >= 3000:
        return

    #note tables are not normally ordered
    var lookup =  toOrderedTable({"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1})
    var roman = ""
    
    var arr = arr # cannot change parameter, shadow it
    
    for key, value in lookup:
        while arr >= lookup[key]:
            roman.add(key)
            arr -= lookup[key]
    

    return roman
    
    
    
echo( convert(1) )
echo( convert(10) )

echo( convert(11) )
echo( convert(999) )
