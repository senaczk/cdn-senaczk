console.clear()

const lines = [
'loading source...',
'checking files...',
'starting backend...',
'connecting database...',
'initializing modules...',
'',
'LOL 😂',
'there is no source here bro',
'only README + aura',
'github.com/senaczk'
]

let i = 0

const interval = setInterval(() => {
if(i >= lines.length){
clearInterval(interval)
process.exit()
}

console.log(lines[i])
i++
},500)
