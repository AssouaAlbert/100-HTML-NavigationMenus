const path = require("path");
module.exports = {
    entry: {
     app: './scripts/app.js'
    },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, "./scripts/chunks" ) 
    },
    module:{
      rules: [
        {
          test: /\.css/,
          exclude: /node_modules/,
          use: [
            {
              loader:"style-loader"
            },
            {
              loader:"css-loader"
            }
          ]
        }

      ]
    }
}