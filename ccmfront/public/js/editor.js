const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');

let codeEditor = ace.edit("editorCode",{
    mode : "ace/mode/python",
    selectionStyle: "text",
});
let defaultCode = 'print("Hello World!")';
let consoleMessages = [];

let  editorLib = {
    init(){
        codeEditor.setTheme("ace/theme/dracula");

        codeEditor.session.setMode("ace/mode/python");

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