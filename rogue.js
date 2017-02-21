require('isomorphic-fetch');

// const apiURL = '//swapi.co/api/people/';
//
// fetch(apiURL).then(function(response) {
//   var contentType = response.headers.get("content-type");
//   if(contentType && contentType.indexOf("application/json") !== -1) {
//     return response.json().then(function(json) {
//       console.log(json)
//     });
//   } else {
//     console.log("Oops, we haven't got JSON!");
//   }
// });
//
// fetch(apiURL)
//     .then(function(response) {
//         if (response.status >= 400) {
//             throw new Error("Bad response from server");
//         }
//         return response.json();
//     })
//     .then(function(stories) {
//         console.log(stories)
//         console.log('')
//         console.log('YES I AM RUNNING ... ')
//     });

url = 'https://node-mvc-api-ykzjdbxwsk.now.sh/api/';

fetch(url)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
