let newMap = new Map
newMap.set('name', 'yql')
newMap.set('age', 18)
console.log(newMap)
for (let [key, val] of newMap) {
  console.log(key, val)
}

for (let [key, val] of newMap.entries()) {
  console.log(key, val)
}

console.log(Array.from(newMap))//[ [ 'name', 'yql' ], [ 'age', 18 ] ]
console.log([...newMap]);//[ [ 'name', 'yql' ], [ 'age', 18 ] ]