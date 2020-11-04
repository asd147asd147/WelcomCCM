const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');

let codeEditor = ace.edit("editorCode");
let defaultCode = 'console.log("Hello World!")';
let consoleMessages = [];

let  editorLib = {
    init(){
        codeEditor.setTheme("ace/theme/nord_dark");

        codeEditor.session.setMode("ace/mode/python");

        codeEditor.setOptions({
            fontFamily: 'Inconsolata',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

        codeEditor.setValue(defaultCode);
    }
}

executeCodeBtn.addEventListener('click', () => {

    const userCode = codeEditor.getValue();

    try {
        new Function(userCode)();
    } catch (err){
        console.log(err);
    }
});

resetCodeBtn.addEventListener('click', ()=>{
    codeEditor.setValue(defaultCode);
})

editorLib.init();