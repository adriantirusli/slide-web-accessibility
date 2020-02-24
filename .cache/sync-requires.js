const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-slide-js": hot(preferDefault(require("/Users/adriantirusli/projects/a11y-talk-gatsby/src/templates/slide.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/adriantirusli/projects/a11y-talk-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/adriantirusli/projects/a11y-talk-gatsby/src/pages/index.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/adriantirusli/projects/a11y-talk-gatsby/src/pages/404.js")))
}

