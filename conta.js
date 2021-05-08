

const prompt = require('prompt-sync')();
 
function view(counter){
    return(`\ncounter: +${counter} \n (+)(-)\n`);
}

function update(msg, counter){

}

function app(counter){

}

readline.question("What would you do: ", msg => {
    readline.close()
});