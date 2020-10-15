# Dictionary Numbers To Text Converter

## Try now:
<input type="text” onclick="run()" />

This works everywhere!
Even in your browser!

![Use in Brave Browser](https://github.com/HerrEiklar/Simple-Number-To-Text-Javascript/blob/master/docs/assets/images/useInBrowser.PNG?raw=true "Using index.js's code in braves console, it works!")

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

<script>
staticNum = (param) => {
    const _var = {
        // single digits
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        // digits that're written differently
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Ninteen",
        // double digits
        10: "Ten",
        20: "Twenty",
        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety",
        // hundret is here instead of dictionaryNumbers
        100: "Hundred"
    }
    const _r = _var[param]
    if (!_r) return "";
    return _r
};


// 1 000 000 000 000 000
dictionaryNumbers = (param) => {
    const _var = {
        // all dictionary numbers - from wikipedia -> https://en.wikipedia.org/wiki/Names_of_large_numbers
        2: "Thousand",
        3: "Million",
        4: "Billion",
        5: "Trillion",
        6: "Quadrillion",
        7: "Quintillion",
        8: "Sextillion",
        9: "Septillion",
        10: "Octillion",
        11: "Nonillion",
        12: "Decillion",
        13: "Undecillion",
        14: "Duodecillion",
        15: "Tredecillion",
        16: "Quattuordecillion",
        17: "Quindecillion",
        18: "Sexdecillion",
        19: "Septendecillion",
        20: "Octodecillion",
        21: "Novemdecillion",
        22: "Vigintillion",
        23: "Centillion"
    }
    const _r = _var[param]
    if (!_r) return null;
    return _r
}

// getTextFromMaxThreeDigitNumber
gtftdn = (param) => {
    const lenght = (l) => param.toString().length == l;

    if (lenght(1)) {
        return staticNum(param)
    }

    else if (lenght(2)) {
        let _tmp = staticNum(param)
        if (_tmp) return _tmp
        return `${staticNum(param.toString()[0] + "0")} ${staticNum(param.toString()[1])}`
    }

    else if (lenght(3)) {
        return `${staticNum(param.toString()[0])} ${staticNum(100)} ${gtftdn(param.toString().substr(1, 2))}`
    }

    else {
        try {
            let number = new String(param).toString()
            let original = BigInt(param)
            let packs = []
            let text = ""

            do {
                packs.push(number.slice((number.length >= 3 ? (number.length - 3) : 0), number.length))
                number = number.slice(0, (number.length >= 3 ? number.length - 3 : 0))
            } while (number.length > 0)

            if (!dictionaryNumbers(packs.length)) throw Error("number is to big - more than Centillion")

            for (var i = packs.length; i > 0; i--) {
                const pack = packs[i - 1].toString()
                // might needs improvment - as of not yet existing Standard dictionary numbers
                // check by dictionaryNumbers() - if it returns a empty string, we know that we don't need to format it differently
                if (i < 2) text += `${gtftdn(pack)}`
                else text += `${gtftdn(pack)} ${dictionaryNumbers(i)} `
            }

            // little bit of formatting
            packs = packs.reverse()
            text = text.replace(/  /gi, ' ').trim()

            return { original: original, packs: packs, text: { normal: text, lowerCase: text.toLowerCase()} }
        } catch (error) {
            return { message: "make sure you've used a valid number", error: error.message }
        }
    }
}

function run() {
  alert("Test");
}
</script>
