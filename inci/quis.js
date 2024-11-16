const text = 'Some random text with #hash1 and #anotherhash12345.';
const regex = /\b\w{7,}\b/g;
const hashes = text.match(regex);
console.log(hashes); // Output: ["#anotherhash12345"]
