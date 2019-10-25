import * as vscode from 'vscode';
import * as cleanCodeTips from '../../cleancodecheatsheet2.4.json';

type categories = { [key: string]: { [key: string]: { [key: string]: string } } };

const recurseThroughTree = (categories: categories, outputString: string = '', i: number = 0): string => {
  if (i < 2) {
    const categoryKeys: Array<string> = Object.keys(categories);
    const randomCategoryIndex: number = categoryKeys.indexOf(categoryKeys[Math.floor(categoryKeys.length * Math.random())]);
    const randomCategoryName: string = categoryKeys[randomCategoryIndex];
    const randomCategories: any = categories[randomCategoryName];

    outputString += `${randomCategoryName} > `;

    i = i + 1;

    return recurseThroughTree(randomCategories, outputString, i);
  } else {
    outputString += categories.text;
    // console.log(outputString)
    return outputString;
  }
};

const rootDataObj: categories = cleanCodeTips["Clean Code Cheat Sheet"];

export function activate({ subscriptions }: vscode.ExtensionContext) {
  let outputString: string = '';

  subscriptions.push(vscode.commands.registerCommand("onCommand:extension.displayTip", () => {
    outputString = recurseThroughTree(rootDataObj);

    console.log(outputString);
  
    // Display a message box to the user
    vscode.window.showInformationMessage(
      outputString
      // 'Principles 🗽 > High Cohesion: Cohesion is the degree to which elements of a whole belong together. \nMethods and fields in a single class and classes of a component should have \nhigh cohesion. High cohesion in classes and components results in simpler, \nmore easily understandable code structure and design. \n'
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

  outputString = recurseThroughTree(rootDataObj);

  // Display a message box to the user
  vscode.window.showInformationMessage(
    outputString
    // 'Principles 🗽 > High Cohesion: Cohesion is the degree to which elements of a whole belong together. \nMethods and fields in a single class and classes of a component should have \nhigh cohesion. High cohesion in classes and components results in simpler, \nmore easily understandable code structure and design. \n'
  );

	subscriptions.push(myStatusBarItem);
	myStatusBarItem.show();
}
