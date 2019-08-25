const { BadgeFactory } = require("gh-badges")
const badge = new BadgeFactory()

const formatData = ({
  title = "Default Title",
  color = "green",
  value = "Default Value",
  template = "flat-square",
}) => {
  return {
    text: [` ${title} `, ` ${value} `],
    color: color,
    template: template,
  }
}

exports.handler = function(event, context, callback) {
  console.log(event.queryStringParameters)

  const svg = badge.create(formatData(event.queryStringParameters))

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
    body: svg,
  })
}
