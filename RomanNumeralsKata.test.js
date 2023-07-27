import { convert } from "./RomanNumeralsKata";

describe("Convert to roman Numerals",() => {
	test("check basic convert" ,()=>  {  
	
		expect( convert(1)).toBe("I"),
		expect( convert(2)).toBe("II"),
		expect( convert(3)).toBe("III"),
		expect( convert(4)).toBe("IV"),
		expect( convert(5)).toBe("V"),
		expect( convert(6)).toBe("VI"),
		expect( convert(7)).toBe("VII"),
		expect( convert(8)).toBe("VIII"),
		expect( convert(9)).toBe("IX"),
		expect( convert(10)).toBe("X"),
		expect( convert(11)).toBe("XI"),
		expect( convert(12)).toBe("XII")
		
		expect( convert(999)).toBe("CMXCIX")
		
		expect( convert(2000)).toBe("MM")
		expect( convert(2001)).toBe("MMI")
		
		expect( convert(2999)).toBe("MMCMXCIX")
	
	}),
	test("Test invalid input" ,()=>  { 
	
		expect( convert(0)).toBe(""),
		expect( convert(-10)).toBe(""),
		expect( convert(3000)).toBe("")
		
	})
})
	