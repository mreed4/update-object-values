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

let blankCrewMembers = Object.entries(obj);
let crewMembers = [];
let subCrewMembers = []

let person = "NewCrewMember"; // Represents CrewMember class instantiation

blankCrewMembers.forEach(crewMember => {
  // console.log(crewMember[1]);
  let crewMemberRole = crewMember[0];
  let crewMemberName = crewMember[1];
  let isString = typeof crewMemberName === "string";
  if (isString) {
    crewMembers.push([crewMemberRole, person]);
  } else {
    let blankSubCrewMembers = Object.entries(crewMemberName);
    blankSubCrewMembers.forEach(subCrewMember => {
      let subCrewMemberRole = subCrewMember[0];
      subCrewMembers.push([subCrewMemberRole, person]);
    })
    crewMembers.push([crewMemberRole, Object.fromEntries(subCrewMembers)])
  }
})

newObj = Object.fromEntries(crewMembers)

console.log(obj);
console.log(newObj)