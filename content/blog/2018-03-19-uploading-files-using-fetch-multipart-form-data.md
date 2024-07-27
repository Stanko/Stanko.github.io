+++
title = "Uploading files using 'fetch' and 'FormData'"
aliases = ["/uploading-files-using-fetch-multipart-form-data/"]

[taxonomies]
category = ["JavaScript"]
tags = ["js", " til", " fetch"]

[extra]
comments = [
  "comments/uploading-files-using-fetch-multipart-form-data/1529983713718.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1531503909278.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1536868168203.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1537839300637.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1537945990671.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1537994201332.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1542389604239.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1544681136662.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1544691432808.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1549497099199.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1550131964721.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1552300770413.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1552302071050.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1552568069700.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1554360813086.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1557953426609.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1559677154883.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1559679952961.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1559744632674.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1562831731712.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1563558489626.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1569105608891.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1569233084994.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1569368941885.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1571090624532.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1574937881404.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1578477275450.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1578477554707.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1579598662748.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1582989334163.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1585808470476.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1585818037895.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1593151805934.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1593156427054.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1593514261021.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1599760603657.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1599764489205.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1599775034404.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1603326171948.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1603376071815.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1608768592645.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1608938773265.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1609004550982.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1611076665463.toml",
  "comments/uploading-files-using-fetch-multipart-form-data/1612516860013.toml"
]

+++


Today I learned:

To upload files using `fetch` and
 {{ sidenote(text="
`FormData`
", note="
`FormData` is supported in IE10+.
") }}
you **must not** set `Content-Type` header.

```js
const fileInput = document.querySelector('#your-file-input') ;
const formData = new FormData();

formData.append('file', fileInput.files[0]);

const options = {
  method: 'POST',
  body: formData,
  // If you add this, upload won't work
  // headers: {
  //   'Content-Type': 'multipart/form-data',
  // }
};

fetch('your-upload-url', options);
```

<!-- more -->

## Problem I had

My API wrapper class has default content type header set to:
```
'Content-Type': 'application/json'
```

So I thought, to upload files using `FormData`, it would be enough to override it with:
```
'Content-Type': 'multipart/form-data'
```

But alas, it didn't work, server couldn't parse the files I was uploading.
I've wasted about half an hour, and then noticed that simple HTML form was setting something else:
```
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryIn312MOjBWdkffIM
```

It had this `boundary` thing I didn't know anything about.

Then I started searching around the internet and found the solution.
To set the correct boundary, I had to explicitly delete `Content-Type` header.
In that case browser will set the correct `boundary` itself.

Adding this line solved it.

```js
// Remove 'Content-Type' header to allow browser to add
// along with the correct 'boundary'
delete options.headers['Content-Type'];
```

## Explanation

What is `boundary` and why I had to `delete` the header?

Multipart form allow transfer of binary data,
therefore server needs a way to know where one field's data ends and where the next one starts.

That's where `boundary` comes in.
It defines a delimiter between fields we are sending in our request (similar to `&` for GET requests).
You can define it yourself, but it is much easier to let browser do it for you.

Example payload:

```
------WebKitFormBoundaryIn312MOjBWdkffIM
Content-Disposition: form-data; name="file"; filename="my-image.jpg"
Content-Type: image/jpeg


------WebKitFormBoundaryIn312MOjBWdkffIM
Content-Disposition: form-data; name="field"

imagePortrait
------WebKitFormBoundaryIn312MOjBWdkffIM--
```

That's why I had to manually delete existing header, as it didn't contain boundary,
and server was unable to parse the file correctly.

Read more about it on this [StackOverflow question](https://stackoverflow.com/questions/3508338/what-is-the-boundary-in-multipart-form-data) and [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition).
