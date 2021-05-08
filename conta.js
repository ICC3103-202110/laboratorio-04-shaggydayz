
function view(counter){
    return(`\ncounter: ${counter} \n (+)(-)\n (q)\n`);
}

function update(msg, counter){
    if (msg === '+') 
        return counter = counter + 1;
    else if (msg === '-')
        return counter = counter - 1;
    else if (msg === 'q')
        return msg;
    else
        return counter;
}

function app(counter){
    while (counter != 'q'){
        const currentView = view(counter);
        console.clear();
        console.log(currentView);
        const prompt = require('prompt-sync')();
        const msg = prompt('What would you do? ');
        counter = update(msg, counter);
    }
}
app(0);