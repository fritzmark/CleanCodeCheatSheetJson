import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.displayTip', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Principles 🗽 > Loose Coupling: Two classes, components or modules are coupled when at least one of \nthem uses the other. The less these items know about each other, the \nlooser they are coupled. \n\nA component that is only loosely coupled to its environment can be more \neasily changed or replaced than a strongly coupled component. \n');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
