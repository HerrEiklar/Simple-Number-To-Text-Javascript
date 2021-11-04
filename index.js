'strict';

// all the needed digits
numbers = (param) => {
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
        // weird digits
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
        100: "Hundred",
        // large numbers - from wikipedia -> https://en.wikipedia.org/wiki/Names_of_large_numbers
        1002: "Thousand",
        1003: "Million",
        1004: "Billion",
        1005: "Trillion",
        1006: "Quadrillion",
        1007: "Quintillion",
        1008: "Sextillion",
        1009: "Septillion",
        1010: "Octillion",
        1011: "Nonillion",
        1012: "Decillion",
        1013: "Undecillion",
        1014: "Duodecillion",
        1015: "Tredecillion",
        1016: "Quattuordecillion",
        1017: "Quindecillion",
        1018: "Sexdecillion",
        1019: "Septendecillion",
        1020: "Octodecillion",
        1021: "Novemdecillion",
        1022: "Vigintillion",
        1023: "Centillion"
    }
    const _r = _var[param]
    if (!_r) return ""
    return _r
}

// calculate all the shit
getText = (param) => {
    param = BigInt(param.replaceAll(' ', ''))

    const lengthEquals = (l) => param.toString().length == l

    if (lengthEquals(1)) {
        return numbers(param)
    }

    else if (lengthEquals(2)) {
        let _tmp = numbers(param)
        if (_tmp) return _tmp
        return `${numbers(param.toString()[0] + "0")} ${numbers(param.toString()[1])}`
    }

    else if (lengthEquals(3)) {
        return `${numbers(param.toString()[0])} ${numbers(100)} ${getText(param.toString().substr(1, 2))}`
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

            if (!numbers(packs.length+1000)) throw Error("number is to big - more than Centillion")

            for (var i = packs.length; i > 0; i--) {
                const pack = packs[i - 1].toString()
                // might needs improvment - as of not yet existing Standard dictionary numbers
                // check by numbers() - if it returns a empty string, we know that we don't need to format it differently
                if (i < 2) text += `${getText(pack)}`
                else text += `${getText(pack)} ${numbers(i+1000)} `
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

console.table(getText("987654321"))