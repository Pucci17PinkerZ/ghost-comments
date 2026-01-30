// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// C'est ici qu'on définit le style "Invisible"
// On utilise une astuce CSS pour réduire la taille à 0 et cacher le texte
const invisibleDecorationType = vscode.window.createTextEditorDecorationType({
    opacity: '0',                // Rend le texte transparent
    textDecoration: 'none; font-size: 0.1px; letter-spacing: -1em; display: inline-block; width: 0; max-width: 0;' // Le hack pour écraser le texte
});

let isHidden = false; // Par défaut, les commentaires sont visibles
let activeEditor = vscode.window.activeTextEditor;

export function activate(context: vscode.ExtensionContext) {

    // 1. La commande déclenchée par Shift+F5
    let disposable = vscode.commands.registerCommand('ghost-comments.toggle', () => {
        isHidden = !isHidden;
        triggerUpdate();
    });

    context.subscriptions.push(disposable);

    // 2. Mettre à jour quand on change d'onglet ou qu'on tape du texte
    vscode.window.onDidChangeActiveTextEditor(editor => {
        activeEditor = editor;
        if (editor) {
            triggerUpdate();
        }
    }, null, context.subscriptions);

    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeEditor && event.document === activeEditor.document) {
            triggerUpdate();
        }
    }, null, context.subscriptions);

    // Lance une première fois au démarrage si besoin
    if (activeEditor) {
        triggerUpdate();
    }
}

function triggerUpdate() {
    if (!activeEditor) {
        return;
    }
    // Si on a activé le mode caché, on lance la fonction, sinon on nettoie
    if (isHidden) {
        updateDecorations(activeEditor);
    } else {
        activeEditor.setDecorations(invisibleDecorationType, []);
    }
}

function updateDecorations(editor: vscode.TextEditor) {
    if (!editor) { return; }

    const text = editor.document.getText();
    const comments: vscode.DecorationOptions[] = [];

    // Regex puissante pour trouver les commentaires (Block /* */ et Ligne //)
    // Elle gère le C, C++, Java, JS, TS, etc.
    const regex = /(\/\*[\s\S]*?\*\/|\/\/.*)/g;

    let match;
    while ((match = regex.exec(text))) {
        const startPos = editor.document.positionAt(match.index);
        const endPos = editor.document.positionAt(match.index + match[0].length);
        
        const decoration = { range: new vscode.Range(startPos, endPos) };
        comments.push(decoration);
    }

    editor.setDecorations(invisibleDecorationType, comments);
}

export function deactivate() {}
