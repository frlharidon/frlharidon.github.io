const Prismic = require('prismic-javascript')
const apiEndpoint = "https://frlharidon.prismic.io/api/v2"

// Prismic.getApi(apiEndpoint).then(function(api) {
//   console.log(api.query(""))
//   return api.query(""); // An empty query will return all the documents
// }).then((res) => {
//   var rts = []
//   console.log(res)
//   res.results.forEach((d) => {
//     rts.push('/articles/' + d.id)
//   })
//   return rts
// }, function(err) {
//     console.log("Something went wrong: ", err);
// });

// Prismic.getApi(apiEndpoint).then(function(api) {
//   console.log(api.query(''))
//   return api.query('')
// }).then((res) => {
//   var rts = []
//   console.log(res)
//   res.results.forEach((d) => {
//     rts.push('/articles/' + d.id)
//   })
//   return rts
// }, function(err) {
//     console.log("Something went wrong: ", err);
// });

// Prismic.getApi(apiEndpoint)
//   .then((api) => {
//     return api.query(
//       Prismic.Predicates.at('document.type', 'blog_post')
//     ) // An empty query will return all the documents
//   })
//   .then((res) => {
//     var rts = [];
//     console.log("res.results", res)
//     res.results.forEach((d) => {
//       rts.push('/articles/' + d.uid)
//     })
//     console.log(rts)
//     return rts;
//   },
//   (err) => {
//     console.log("Something went wrong: ", err);
//   }
// );

Prismic.getApi(apiEndpoint).then((api) => {
  return api.query('')
}).then((res) => {
  return console.log(res)
})
