# senaczk

<div align="center">

```txt
fast upload, instant link
```

Personal cloud file uploader built for direct file hosting.

</div>

---

## Features

- Upload images
- Upload videos
- Upload audio
- Upload documents
- Direct file URL generation
- Drag & Drop uploader
- Upload history
- API support
- Mobile optimized
- Dark dashboard UI
- Fast upload system
- Direct CDN access

---

## Preview

```txt
https://cdn.senaku.biz.id
```

---

## Endpoint

```js
POST /upload
```

Upload Example:

```js
const fs = require('fs')
const FormData = require('form-data')
const fetch = require('node-fetch')

async function upload(filePath){

const form = new FormData()

form.append(
'file',
fs.createReadStream(filePath)
)

const res = await fetch(
'https://cdn.senaku.biz.id/upload',
{
method:'POST',
body:form
}
)

const data = await res.json()

return data.url

}

upload('./image.jpg')
.then(console.log)
```

Response:

```json
{
  "success": true,
  "url": "https://cdn.senaku.biz.id/u/x7kd3a.jpg"
}
```

---

## Stack

```txt
NodeJS
ExpressJS
Multer
PM2
Nginx
Ubuntu
```

---

## File URL Example

```txt
https://cdn.senaku.biz.id/u/x7kd3a.jpg
https://cdn.senaku.biz.id/u/q9dm1v.mp4
https://cdn.senaku.biz.id/u/f82ka7.mp3
```

---

## Links

Telegram

```txt
senaczk.t.me
```

GitHub

```txt
https://github.com/senaczk
```

CDN

```txt
https://cdn.senaku.biz.id
```

---

<div align="center">

senaczk

built by Arsena Luciendra

</div>
