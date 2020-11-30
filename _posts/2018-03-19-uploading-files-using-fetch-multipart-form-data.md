---
layout: post
title: Uploading files using 'fetch' and 'FormData'
category: [JavaScript]
tags: [js, til, fetch]
redirect_from: "/uploading-files-using-fetch-multipart-form-data"
---


Today I learned:

To upload files using `fetch` and
 <label class="SideNote-trigger">
`FormData`
</label>
<small class="SideNote">
`FormData` is supported in IE10+.
</small>
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

<!--more-->

## Problem I had

My API wrapper class has default content type header set to:<br />
`'Content-Type': 'application/json'`

So I thought, to upload files using `FormData`, it would be enough to override it with:<br />
`'Content-Type': 'multipart/form-data'`

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
