import * as vscode from 'vscode';

export function activate({ subscriptions }: vscode.ExtensionContext) {
  subscriptions.push(vscode.commands.registerCommand("onCommand:extension.displayTip", () => {
    // Display a message box to the user
    vscode.window.showInformationMessage(
      'Principles 🗽 > High Cohesion: Cohesion is the degree to which elements of a whole belong together. \nMethods and fields in a single class and classes of a component should have \nhigh cohesion. High cohesion in classes and components results in simpler, \nmore easily understandable code structure and design. \n'
      );
  }));

  // Add status bar item
  const myStatusBarItem: vscode.StatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  
  myStatusBarItem.text = "Clean Code Tips";
  
  // Make a tip show when clicking on status bar item
  myStatusBarItem.command = "onCommand:extension.displayTip";

	// Display a message box to the user
	vscode.window.showInformationMessage(
	'Principles 🗽 > High Cohesion > Cohesion is the degree to which elements of a whole belong together. \nMethods and fields in a single class and classes of a component should have \nhigh cohesion. High cohesion in classes and components results in simpler, \nmore easily understandable code structure and design. \n'
	);

	subscriptions.push(myStatusBarItem);
	myStatusBarItem.show();
}
