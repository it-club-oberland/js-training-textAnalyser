$("button")
    .on("click", function () {
        // handle the click event
        main();
    });


/*
jQuery
1) Register an event handler on click event
2) Get values (text, letters)

Javascript
3) Find occurences in the given text for the given letters
4) Save all the information into a suitable data structure

Jquery
5) Based on the collected information, create the bar chart.
*/


const WIDTH_UNIT = 50; // 50px

function main() {
    let inputs = getInputValues();
    let occurencesMap = findOccurences(inputs);
    createBarChart(occurencesMap);
}

function getInputValues() {
    let text = $('textarea').val();
    let letters = $('input').val();

    return {
        text,
        letters: letters.split(",")
    };
}

function findOccurences({letters, text}) {
    let result = new Map();

    letters.forEach(function (pLetter) {
        let pattern = new RegExp(pLetter, "g");
        let count = (text.match(pattern) || []).length;
        result.set(pLetter, count);
    });

    return result;
}

function createBarChart(pMap) {
    let total = 
        Array.from(x.values()).reduce(function(pAcc, pValue){
            return pAcc + pValue;
        }, 0);
    
    
}
