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


const WIDTH_UNIT = 500; // 500px

/**
 * This function is the entry point of the entire application.
 * It manages all the  successive calls to achieve the desired goal.
 */
function main() {
    let inputs = getInputValues();
    let occurencesMap = findOccurences(inputs);
    createBarChart(occurencesMap);
}

/**
 * This function is responsbile to get user inputs from the ui.
 */
function getInputValues() {
    let text = $('textarea').val();
    let letters = $('input').val();

    return {
        text,
        letters: letters.split(",")
    };
}

/**
 * This function finds the occunrences of given letters in the text.  
 *
 * @param letters, the given letters to search for
 * @param text, the text which is analysed by the program.
 */
function findOccurences({letters, text}) {
    let result = new Map();

    letters.forEach(function (pLetter) {
        let pattern = new RegExp(pLetter, "g");
        let count = (text.match(pattern) || []).length;
        result.set(pLetter, count);
    });

    return result;
}

function findColor(pPercentage){
    if(pPercentage < 0.25)
        return "red";
    else if(pPercentage >= 0.25 && pPercentage < 0.5)
        return "orange";
    else if(pPercentage == 0.5)
        return "yellow";
    else if(pPercentage > 0.5 && pPercentage < 0.75)
        return "lightgreen";
    else
        return "darkgreen";
}

function createBarChart(pMap) {
    let total = 
        Array.from(pMap.values()).reduce(function(pAcc, pValue){
            return pAcc + pValue;
        }, 0);
    
    // render
    Array.from(pMap.entries()).forEach(function(pEntry){
        $('section')
            .append(`<div style="width:${(pEntry[1]/total)*WIDTH_UNIT}px; background-color: ${findColor(pEntry[1]/total)}">${pEntry[0]}</div>`);
    })
}
