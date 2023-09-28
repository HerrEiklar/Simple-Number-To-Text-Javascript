# Dictionary Numbers To Text Converter

This works everywhere!
Even in your browser!

## Test Now:
[Test it here](https://hypnotist1148.github.io/dicttoj/)

![Use in Brave Browser](docs/assets/images/useInBrowser.PNG?raw=true "Using index.js's code in braves console, it works!")

## Description

This is a basic number to text program written by me.
Nothing in here was copied from the internet except of the "Names of large numbers" or "Standard dictionary numbers"

## Issues

Feel free to create issues!

## Run

Just change the number at line 117 in index.js to whatever you like it to be.
It will return following

* original -> the original number as a bigint
* packs -> 3 packs of numbers sorted in original number order
* text -> the text for the number

## Example

Code:
```javascript
console.log(gtftdn("12345678901234567890"))
```

Output:
```json
{
  original: 12345678901234567890n,
  packs: [
    '12',  '345',
    '678', '901',
    '234', '567',
    '890'
  ],
  text: {
    normal: 'Twelve Quintillion Three Hundred Forty Five Quadrillion Six Hundred Seventy Eight Trillion Nine Hundred One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety',
    lowerCase: 'twelve quintillion three hundred forty five quadrillion six hundred seventy eight trillion nine hundred one billion two hundred thirty four million five hundred sixty seven thousand eight hundred ninety'
  }
}
```

## TODO:

[] API Server from this

## Standards

I'm trying to be as close to the standards as possible.
Here is what I am using.

[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
[Semantic Versioning 2.0.0](https://semver.org/lang/de/)
