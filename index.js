const students = [
  'Bella',
  'Ben',
  'Cam',
  'Dani',
  'Emil',
  'Kyoko',
  'Leslie',
  'Lexi',
  'Lianna',
  'Luke',
  'Marie',
  'Matt',
  'Nat',
  'Richard',
  'Rob',
  'Robbie',
  'Welli',
  'Winston',
  'Yuzuki',
  'Zane'
]

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return [...a];
}

function randomiseGroups (groupCount) {
  let shuffled = shuffle(students)
  let groups = {}
  for (var i = 0; i < groupCount; i++) {
    groups[i] = []
  }
  while(shuffled.length > 0) {
    let student = shuffled.pop()
    let grouped = false
    while (!grouped) {
      const groupNum = Math.floor(Math.random() * groupCount)
      const maxGroup = Math.ceil(students.length / groupCount)
      if (groups[groupNum].length < Math.ceil(students.length / groupCount )) {
        groups[groupNum].push(student)
        grouped = true
      }
    }
  }

  return groups
}

function logGroups (groupCount) {
  const groups = randomiseGroups(groupCount)

  Object.values(groups).map((arr, i) => {
    console.log(`Group ${i}:`);
    arr.forEach(student => console.log(student))
    console.log(" --- ");
  })
}

let groupCount = process.argv[2] || 5

console.log(logGroups(groupCount))
