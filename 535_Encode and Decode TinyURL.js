/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let urls = {};

var encode = function(longUrl) {
    let uniqueKey = Date.now().toString(36);
    urls[uniqueKey] = longUrl;
    return "http://tinyurl.com/" + uniqueKey;
};

var decode = function(shortUrl) {
    return urls[shortUrl.split("com/")[1]];
};

//unique date + string
/**
 * Your functions will be called as such:
 * decode(encode(url));
 */