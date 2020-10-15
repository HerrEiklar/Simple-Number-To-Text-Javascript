'strict';

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
    if (!_r) return "";
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

            for (var i = packs.length; i > 0; i--) {
                const pack = packs[i - 1].toString()
                // might needs improvment - as of not yet existing Standard dictionary numbers
                // check by dictionaryNumbers() - if it returns a empty string, we know that we don't need to format it differently
                text += `${gtftdn(pack)} ${dictionaryNumbers(i)} `
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

console.log(gtftdn("12345678901234567890"))