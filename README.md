# tinyfy-image
> It's npm tool based on https://tinypng.com API which allows you easier to compress you images.

##Installation
    $ npm install -g tinify-image

##Quick Start

### Setup API key

You can get you API key from [https://tinypng.com/developers](https://tinypng.com/developers).

    $ tinyfy-image setKey 'API key'

### Compress Image

By default, source folder will be ```source```, output folder will be ```target```. So you can just run ```tinyfy-image``` on this condition.

    $ tinyfy-image -s 'SourceImageFolder' -t 'TargetImageFolder'

###Get Count

get info about how much images **the API key** already optimized this month.

    $ tinyfy-image count


> Note: you have 500 images per month to optimize for free, you have to pay https://tinypng.com to get more images optimized per 1 month.