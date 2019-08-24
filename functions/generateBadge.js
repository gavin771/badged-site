const badge = require("gh-badges")

const formatData = ({
  title = "Default Title",
  color = "green",
  value = "Default Value",
  template = "flat-square",
}) => {
  return {
    text: [` ${title} `, ` ${value} `],
    colorscheme: color,
    template: template,
  }
}

exports.handler = function(event, context, callback) {
  // const requestBody =  JSON.parse(event.query)
  console.log(event)

  badge(formatData(event.query), (svg, err) => {
    var response

    err === undefined ? (response = svg) : (reponse = err)

    callback(null, {
      statusCode: err ? 500 : 200,
      headers: {
        "Content-Type": "image/svg+xml",
      },
      body: response,
    })
  })
}
