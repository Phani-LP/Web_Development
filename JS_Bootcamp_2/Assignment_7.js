function vowelcounter(s)
{
	s = s.toLowerCase();
	let vc = 0
	for(let i=0; i<s.length;i++)
	{
		if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u')
		{
            vc++;
		}
	}
	return vc
}

let s = window.prompt("Enter a string: ")
console.log(s ,"have ",vowelcounter(s)," vowels")

/*Output:
Naga Phanindrahave 5 vowels
*/