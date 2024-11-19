// Initialize CodeMirror for HTML, CSS, and JavaScript editors
let htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlCode'), {
    mode: 'xml',
    theme: 'default',
    lineNumbers: true,
    htmlMode: true
});

let cssEditor = CodeMirror.fromTextArea(document.getElementById('cssCode'), {
    mode: 'css',
    theme: 'default',
    lineNumbers: true
});

let jsEditor = CodeMirror.fromTextArea(document.getElementById('jsCode'), {
    mode: 'javascript',
    theme: 'default',
    lineNumbers: true
});

// Show the appropriate editor based on tab click
function showEditor(editor) {
    document.querySelector('.tab.active').classList.remove('active');
    if (editor === 'html') {
        document.querySelector('.tab:nth-child(1)').classList.add('active');
        htmlEditor.getWrapperElement().style.display = 'block';
        cssEditor.getWrapperElement().style.display = 'none';
        jsEditor.getWrapperElement().style.display = 'none';
    } else if (editor === 'css') {
        document.querySelector('.tab:nth-child(2)').classList.add('active');
        htmlEditor.getWrapperElement().style.display = 'none';
        cssEditor.getWrapperElement().style.display = 'block';
        jsEditor.getWrapperElement().style.display = 'none';
    } else if (editor === 'js') {
        document.querySelector('.tab:nth-child(3)').classList.add('active');
        htmlEditor.getWrapperElement().style.display = 'none';
        cssEditor.getWrapperElement().style.display = 'none';
        jsEditor.getWrapperElement().style.display = 'block';
    }
}

// Run the code and display in iframe
function runCode() {
    let htmlCode = htmlEditor.getValue();
    let cssCode = "<style>" + cssEditor.getValue() + "</style>";
    let jsCode = "<script>" + jsEditor.getValue() + "</" + "script>";

    let output = document.getElementById('output').contentWindow.document;
    output.open();
    output.write(htmlCode + cssCode + jsCode);
    output.close();
}
