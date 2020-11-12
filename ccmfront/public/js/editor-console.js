let console = (function (oldConsole){
    return{
        formatArgsOutput: function(arg){
            let outputArgMessage;
            outputArgMessage = arg;
            return outputArgMessage;
        },
        logMultipleArguments: function(arguments){
            let currentLog = "";

            arguments.forEach(arg =>{
                currentLog += arg + " ";
            });

            oldConsole.log.apply(oldConsole,arguments);
            
            consoleMessages.push({
                message: currentLog,
                class: `log log--default`
            });

            oldConsole.log(consoleMessages);
        },
        logSingleArgument: function(logItem){
            oldConsole.log(logItem);
            consoleMessages.push({
                message: logItem,
                class: `log log--default`
            });

            // oldConsole.log(consoleMessages);
        },
        log: function(text){
            let argsArray = Array.from(arguments);
            return argsArray.length != 1 ? this.logMultipleArguments(argsArray) : this.logSingleArgument(text);
        }
    }
})(window.console);