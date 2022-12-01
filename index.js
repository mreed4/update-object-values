let obj = {
  key1: '',
  subObj1: {
    subKey1: '',
    subKey2: '',
  },
  subObj2: {
    subKey1: '',
    subKey2: '',
  },
  subObj3: {
    subKey1: '',
    subKey2: ''
  }
}

let entries = Object.entries(obj);
let arr = [];
let subArr = []
let desiredThing = "New value"; // Every value will be replaced with this

entries.forEach(entry => {
  let key = entry[0];
  let value = entry[1]; // In the scope of this repl, this is either a string or an object
  let isString = typeof value === "string";
  if (isString) {
    arr.push([key, desiredThing]);
  } else {
    let subEntries = Object.entries(value);
    subEntries.forEach(subEntry => {
      let subKey = subEntry[0];
      subArr.push([subKey, desiredThing]);
    })
    arr.push([key, Object.fromEntries(subArr)])
  }
})

newObj = Object.fromEntries(arr)


console.log(obj);
console.log(newObj)