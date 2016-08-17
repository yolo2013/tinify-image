# tinyfy-image
> It's npm tool based on https://tinypng.com API which allows you easier to compress you images.

##Installation
Tool must be installed globally to be used.

1. Inatall node.js and npm from here https://nodejs.org/en/
2. Run `npm install -g tinify-image`

##Usage
1. ```tinyfy-image setKey 'API key'``` to set API key. You can get you API key from [https://tinypng.com/developers](https://tinypng.com/developers).
2. ```tinyfy-image -s 'source image folder name' -t 'output image folder name'``` to compress images.
By default, source folder will be ```source```, output folder will be ```target```. So you can just run ```tinyfy-image``` on this condition.
3. ```tinyfy-image count``` to get info about how much images **the API key** already optimized this month.