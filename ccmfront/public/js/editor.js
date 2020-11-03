const consoleLogList = document.querySelector('.editor__console-logs');
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');

let codeEditor = ace.edit("editorCode",{
    mode : "ace/mode/python",
    selectionStyle: "text",
});

let defaultCode = 'print("Hello World!")';
let consoleMessages = [];

let  editorLib = {
    clearConsoleScreen(){
        consoleMessages.length = 0;

        while(consoleLogList.firstChild){
            consoleLogList.removeChild(consoleLogList.firstChild);
        }
    },
    printToConsole(){
        consoleMessages.forEach(log => {
            const newLogItem = document.createElement('li');
            const newLogText = document.createElement('pre');

            newLogText.className = log.class;
            newLogText.textContent = `> ${log.message}`;

            newLogItem.appendChild(newLogText);

            consoleLogList.appendChild(newLogItem);
        })
    },
    init(){
        codeEditor.setTheme("ace/theme/dracula");
        codeEditor.session.setMode("ace/mode/python");
        codeEditor.session.setUseWrapMode(true);


        codeEditor.setOptions({
            fontFamily: 'Inconsolata',
            fontSize: '15pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            autoScrollEditorIntoView: true,
        });

        codeEditor.setValue(defaultCode);
    }
}

executeCodeBtn.addEventListener('click', () => {
    editorLib.clearConsoleScreen();
    const userCode = codeEditor.getValue();
    var jsonfile = JSON.stringify(userCode);
    try {

        // console.log(jsonfile);
        // new Function(userCode)();
    } catch (err){
        console.log(err);
    }
    editorLib.printToConsole();
});

resetCodeBtn.addEventListener('click', ()=>{
    codeEditor.setValue(defaultCode);
    editorLib.clearConsoleScreen();
})

editorLib.init();