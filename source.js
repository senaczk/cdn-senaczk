console.clear()

const logs = [
"[SYSTEM] initializing environment...",
"[CORE] checking dependencies...",
"[CORE] loading node modules...",
"[CORE] loading internal packages...",
"[DATABASE] searching database configuration...",
"[DATABASE] mongodb configuration found",
"[DATABASE] attempting connection...",
"[DATABASE] establishing secure connection...",
"[DATABASE] connection established",
"[CACHE] initializing cache engine...",
"[CACHE] loading temporary memory...",
"[CACHE] cache ready",
"[API] scanning routes...",
"[API] loading middleware...",
"[API] loading handlers...",
"[API] loading upload service...",
"[UPLOAD] checking storage path...",
"[UPLOAD] checking upload permissions...",
"[UPLOAD] storage available",
"[UPLOAD] initializing upload engine...",
"[AUTH] generating access token...",
"[AUTH] generating temporary key...",
"[AUTH] validating session...",
"[SERVER] reading configuration...",
"[SERVER] validating environment...",
"[SERVER] optimizing source...",
"[SERVER] compressing assets...",
"[SERVER] building source cache...",
"[SERVER] preparing services...",
"[SERVER] initializing background process...",
"[SERVER] starting internal service...",
"[SERVER] checking network...",
"[SERVER] binding localhost...",
"[SERVER] binding public host...",
"[SERVER] checking available ports...",
"[SERVER] port 3000 available",
"[SERVER] starting server...",
"[SERVER] waiting response...",
"[SERVER] service online",
"",
"[SYSTEM] source loaded successfully",
"[SYSTEM] final verification...",
"",
"LOL 😂",
"there is no source here bro",
"only README + aura",
"",
"github.com/senaczk"
]

let current = 0
const total = logs.length

function progressBar(percent){
const size = 20
const filled = Math.floor((percent/100)*size)

return `[${'█'.repeat(filled)}${'░'.repeat(size-filled)}] ${percent}%`
}

function run(){

if(current >= total){
process.exit()
}

const percent = Math.floor(((current+1)/total)*100)

console.log(
`${progressBar(percent)}`
)

console.log(
logs[current]
)

console.log("")

current++

const delay = Math.floor(Math.random()*1200)+700

setTimeout(run,delay)

}

run()
