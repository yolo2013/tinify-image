# tinyfy-image
> It's npm tool based on https://tinypng.com API which allows you easier to compress you images.

##Installation
    $ npm install -g tinify-image

##Quick Start

### Setup API Key

You can get your API key from [https://tinypng.com/developers](https://tinypng.com/developers). And then

    $ tinyfy-image setKey 'Your API Key'

### Compress Image

By default, source folder will be **source**, output folder will be **output**. So you can just run ```tinyfy-image``` on this condition.

    $ tinyfy-image -s 'SourceImageFolder' -o 'OutputImageFolder'

###Get Count

Get info about how much images **the API key** already optimized this month.

    $ tinyfy-image count

> Note: you have 500 images per month to optimize for free, you have to pay https://tinypng.com to get more images optimized per 1 month.

##Links
https://tinypng.com/
https://github.com/DarthMarcius/img-tinify

##License
  
MIT