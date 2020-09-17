const presidents = ['Clinton','Bush','Obama','Trump']
console.log(presidents)
presidents.pop()
console.log(presidents)
presidents.push('Biden')
console.log(presidents)
presidents.shift()
console.log(presidents)
presidents.unshift('Kerry')
console.log(presidents)
presidents.splice(0,1,'Bush Senior')
console.log(presidents)
presidents[1]='Bush Junior'
console.log(presidents)
presidents.splice(1,0,'Clinton')
console.log(presidents)
presidents.splice(4,0,'Trump')
console.log(presidents)
presidents.push('Kamala')
console.log(presidents)

presidents.forEach(function(item,index) {
    console.log(`President ${index+1}: ${item}`)
})

for(let i=0;i<presidents.length;i++) {
    console.log(`President ${i+1}: ${presidents[i]}`)
}

