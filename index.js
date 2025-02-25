// code 

function add(numbers) {
    if (!numbers) return 0;
    
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts.slice(1).join("\n");
    }
    
    const numArray = numbers.split(delimiter).map(num => num.trim()).filter(num => num !== "");
    
    return numArray.reduce((sum, num) => sum + Number(num), 0);
}

