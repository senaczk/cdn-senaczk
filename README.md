<div align="center">

# senaczk cdn

```txt
fast upload, instant link
```

personal cloud uploader for direct file hosting

[![CDN](https://img.shields.io/badge/CDN-cdn.senaku.biz.id-1E3A8A?style=for-the-badge)](https://cdn.senaku.biz.id)
[![Node.js](https://img.shields.io/badge/Node.js-Express-111827?style=for-the-badge&logo=node.js)]()
[![Status](https://img.shields.io/badge/status-online-3B82F6?style=for-the-badge)]()

</div>

---

## overview

`senaczk cdn` is a personal file uploader built for fast upload, direct URL generation, and simple API usage.

```txt
https://cdn.senaku.biz.id/u/file.ext
```

---

## features

| feature | status |
|---|---|
| image upload | active |
| video upload | active |
| audio upload | active |
| file upload | active |
| direct url | active |
| drag and drop | active |
| api endpoint | active |
| upload history | local session |

---

## api

```http
POST /upload
```

field:

```txt
file
```

example:

```js
const fs = require('fs')
const FormData = require('form-data')
const fetch = require('node-fetch')

async function upload(filePath) {
  const form = new FormData()

  form.append(
    'file',
    fs.createReadStream(filePath)
  )

  const res = await fetch('https://cdn.senaku.biz.id/upload', {
    method: 'POST',
    body: form
  })

  const data = await res.json()
  return data.url
}

upload('./image.jpg').then(console.log)
```

response:

```json
{
  "success": true,
  "url": "https://cdn.senaku.biz.id/u/x7kd3a.jpg"
}
```

---

## stack

```txt
Node.js
Express
Multer
Nginx
PM2
Ubuntu
```

---

## links

| platform | url |
|---|---|
| cdn | https://cdn.senaku.biz.id |
| github | https://github.com/senaczk |
| telegram | senaczk.t.me |

---

<div align="center">

built by **Arsena Luciendra**

</div>
