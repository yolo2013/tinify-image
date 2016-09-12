
<a href="https://www.npmjs.com/package/tinify-image"> <img src="https://img.shields.io/badge/npm-v1.0.0-brightgreen.svg" alt="Version"></a>

# tinify-image
> It's npm tool based on https://tinypng.com API which allows you easier to compress you images.

##Installation
    $ npm install -g tinify-image

##Quick Start

### Setup API Key

You can get your API key from [https://tinypng.com/developers](https://tinypng.com/developers). And then

    $ tinify-image setKey 'Your API Key'

### Compress Image

By default, source folder will be **source**, output folder will be **output**. So you can just run ```tinify-image``` on this condition.

    $ tinify-image -s 'SourceImageFolder' -o 'OutputImageFolder'

###Get Count

Get info about how much images **the API key** already optimized this month.

    $ tinify-image count

> Note: you have 500 images per month to optimize for free, you have to pay https://tinypng.com to get more images optimized per 1 month.

##Links

[https://tinypng.com/](https://tinypng.com/)
[https://github.com/DarthMarcius/img-tinify](https://github.com/DarthMarcius/img-tinify)

##License
  
MIT