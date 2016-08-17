# tinyfy-image
> It's npm tool based on https://tinypng.com API which allows you easier to compress you images.

##Installation
    $ npm install -g tinify-image

##Quick Start
    $ tinyfy-image setKey 'API key'
 
to set API key. You can get you API key from [https://tinypng.com/developers](https://tinypng.com/developers).
    $tinyfy-image -s 'source image folder name' -t 'output image folder name'
    
to compress images. By default, source folder will be ```source```, output folder will be ```target```. So you can just run ```tinyfy-image``` on this condition.
    $tinyfy-image count
    
to get info about how much images **the API key** already optimized this month.

> Note: you have 500 images per month to optimize for free, you have to pay https://tinypng.com to get more images optimized per 1 month.