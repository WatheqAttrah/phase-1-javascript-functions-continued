// code your solution here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");



function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork();
mondayWork("work from home.");

function wrapAdjective(string="*") {
    return function(parameter="special"){
        return `You are ${string}${parameter}${string}!`;
    }
}
wrapAdjective("*",parameter("a hard worker"));