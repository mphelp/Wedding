### The following Heroku buildpack for Deno was pivotal: 

https://github.com/chibat/heroku-buildpack-deno.git

### Here is my process for creating React icons:
- Find an icon PNG on https://icons8.com/icons (PNG free, SVG not)
- Download a low quality PNG from above OR a high quality PNG via the following CDN for example https://img.icons8.com/material-sharp/1024/000000/2010.png (style/size/000000/name)
- Turn it into SVG via https://picsvg.com/ (my settings: "Great" and "Ready #3" and any color)
- Install `svg2react` [click here](https://github.com/boopathi/react-svg-loader/tree/master/packages/react-svg-loader-cli#install) 
- Run ``` `npm bin`/svg2react --jsx your.svg```
- Change resulting js file to tsx extension and replace the JS style React import to Deno CDN (jspm) style and remove React components args/props
- Import into your app and use with `yourIcon({})`
