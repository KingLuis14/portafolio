const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
 
module.exports = {
 	plugins: [
 		postcssPresetEnv({
 			stage: 2,
 			features: {
 				'nesting-rules': true,
 				'custom-media-queries': true,
 				'media-query-ranges': true,
 			},
 		}),
 		autoprefixer(),
 	],
 };