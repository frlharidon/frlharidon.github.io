const Prismic = require('prismic-javascript')
const apiEndpoint = "https://thibautdavoult.prismic.io/api/v2"

Prismic.getApi(apiEndpoint).then(function(api) {
  console.log(api.query(""))
  return api.query(""); // An empty query will return all the documents
}).then((res) => {
  var rts = []
  console.log(res)
  res.results.forEach((d) => {
    rts.push('/articles/' + d.id)
  })
  return rts
}, function(err) {
    console.log("Something went wrong: ", err);
});
