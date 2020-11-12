const consoleLogList = document.querySelector('.editor__console-logs');
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');
const dark_theme = document.querySelector('#theme__dark');
const light_theme = document.querySelector('#theme__light');

var lang = window.location.href.substr(window.location.href.lastIndexOf('=') + 1);

let defaultCode = '';
let mode = ''
let compiler_mode = ''
let theme = sessionStorage.getItem("theme");;

switch(lang){
    case 'python3':
        defaultCode = 'print("Hello World!")';
        mode = 'python';
        compiler_mode = 'python'
        break;
    case 'c':
        defaultCode = '#include <stdio.h>\n\nint main(){\n\tprintf("Hello World!\\n");\n\treturn 0;\n}';
        mode = 'c_cpp';
        compiler_mode = 'c'
        break;
    case 'cpp':
        defaultCode = '#include <iostream>\n\nusing namespace std;\n\nint main(){\n\tcout << "Hello World!" << endl;\n\treturn 0;\n}';
        mode = 'c_cpp';
        compiler_mode = 'cpp'
        break;
    default:
        defaultCode = 'print("Hello World!")';
        mode = 'python';
        compiler_mode = 'python'
        break;
}

let codeEditor = ace.edit("editorCode",{
    mode : "ace/mode/"+mode,
    selectionStyle: "text",
});

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
        switch(theme){
            case "dark":
                dark_set();
                break;
            case "light":
                light_set();
                break;
            default:
                dark_set();
                break;
        }

        // codeEditor.session.setUseWrapMode(true);

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

function dark_set(){
    sessionStorage.removeItem("theme");
    sessionStorage.setItem("theme", "dark");
    codeEditor.setTheme("ace/theme/dracula");
    document.getElementById('theme__dark').setAttribute('checked',true);
    document.documentElement.style.setProperty('--main-bg', '#2e3440');
    document.documentElement.style.setProperty('--text-col', '#d8dee9');
    document.documentElement.style.setProperty('--dist', '#232831');
    document.documentElement.style.setProperty('--editor-gutter-border', '#7aecb3');
    document.documentElement.style.setProperty('--scroll-thumb', '#404655');
}

function light_set(){
    sessionStorage.removeItem("theme");
    sessionStorage.setItem("theme", "light");
    codeEditor.setTheme("ace/theme/crimson_editor");
    document.getElementById('theme__light').setAttribute('checked',true);
    document.documentElement.style.setProperty('--main-bg', '#dddddd');
    document.documentElement.style.setProperty('--text-col', '#3d3d3d');
    document.documentElement.style.setProperty('--dist', '#bbbbbb');
    document.documentElement.style.setProperty('--editor-gutter-border', '#aaff83');
    document.documentElement.style.setProperty('--scroll-thumb', '#ffffff');
}

dark_theme.addEventListener('click', () => {
    dark_set();
})


light_theme.addEventListener('click', () => {
    sessionStorage.setItem("theme", "light");
    light_set();
})

executeCodeBtn.addEventListener('click', () => {
    editorLib.clearConsoleScreen();
    const userCode = codeEditor.getValue();
    const userdata = {
        lang: compiler_mode,
        code: userCode
    }
    const jsonfile = JSON.stringify(userdata);
    // console.log(jsonfile);
    try {
        fetch('http://choiwonjune.iptime.org:3001/', {
            method: 'POST',
            body: JSON.stringify({data: `${ jsonfile }`}),
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
                console.log("Memory: " + memory);
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