import React, { Component } from 'react';
import 'isomorphic-fetch'
// import Link from 'next/link'
// import 'es6-promise'

const apiURL = '//swapi.co/api/people/'

const json = fetch(apiURL)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        // console.log(stories)
        console.log('YES I AM RUNNING ... ')
    });

class Foo extends React.Component {

  render () {
      return (
        <div>
          <h2>Hello World from Foo</h2>
          <p>{json}</p>
        </div>
      )
  }
}

export default Foo


// function fetchJSONFromURL() {
//   const json = fetch(apiURL)
//       .then(function(response) {
//           if (response.status >= 400) {
//               throw new Error("Bad response from server");
//           }
//           return response.json();
//       })
//       .then(function(stories) {
//           console.log(stories);
//       });
//       return(json)
// }
//



// console.log(json)
