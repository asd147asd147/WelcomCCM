const consoleLogList = document.querySelector('.editor__console-logs');
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');
const dark_theme = document.querySelector('#theme__dark');
const light_theme = document.querySelector('#theme__light');

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
        // console.log("print");
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

        codeEditor.setTheme("ace/theme/nord_dark");
        codeEditor.session.setMode("ace/mode/python");
        codeEditor.session.setUseWrapMode(true);


        codeEditor.setOptions({
            fontFamily: 'Inconsolata',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            autoScrollEditorIntoView: true,
        });

        codeEditor.setValue(defaultCode);
    }
}

dark_theme.addEventListener('click', () => {
    codeEditor.setTheme("ace/theme/dracula");
    document.documentElement.style.setProperty('--main-bg', '#2e3440');
    document.documentElement.style.setProperty('--text-col', '#d8dee9');
    document.documentElement.style.setProperty('--dist', '#232831');
    document.documentElement.style.setProperty('--editor-gutter-border', '#7aecb3');
    document.documentElement.style.setProperty('--scroll-thumb', '#404655');
})

light_theme.addEventListener('click', () => {
    codeEditor.setTheme("ace/theme/crimson_editor");
    document.documentElement.style.setProperty('--main-bg', '#dddddd');
    document.documentElement.style.setProperty('--text-col', '#3d3d3d');
    document.documentElement.style.setProperty('--dist', '#bbbbbb');
    document.documentElement.style.setProperty('--editor-gutter-border', '#aaff83');
    document.documentElement.style.setProperty('--scroll-thumb', '#ffffff');
})
executeCodeBtn.addEventListener('click', () => {
    editorLib.clearConsoleScreen();
    const userCode = codeEditor.getValue();
    const jsonfile = JSON.stringify(userCode);
    try {
        fetch('http://choiwonjune.iptime.org:3001/', {
            method: 'POST',
            body: JSON.stringify({code: `${ jsonfile }`}),
            headers:{
                'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then(res => {
                const json_data = JSON.parse(res);
                const output = json_data.output.split('\n');
                const time = json_data.time;
                const memory = json_data.memory;
                output.pop();
                // console.log(output);
                output.forEach(res_log =>{
                    console.log(res_log);
                })
                console.log("Time: " + time);
                console.log("Memory: " + memory/1024 + "KB");
                // console.log(JSON.parse(res.result));
                editorLib.printToConsole();
            }).catch (function(){
                console.log("Disconnected Compile Server");
                editorLib.printToConsole();
            });
    } catch (err){
        console.log(err);
        editorLib.printToConsole();
    }
});

resetCodeBtn.addEventListener('click', ()=>{
    codeEditor.setValue(defaultCode);
    editorLib.clearConsoleScreen();
})

editorLib.init();