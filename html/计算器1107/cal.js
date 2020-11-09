//createEl creates a dom element
const createEl = (type, attributes) => {
    const el = document.createElement(type);
    for (const k in attributes) {
      if (k === "textContent") el.textContent = attributes[k];
      else el.setAttribute(k, attributes[k]);
    }
    return el;
  }
  
  //getters on dom elements
  const getKeysEl = () => document.querySelector(".keys");
  const getScreenEl = () => document.querySelector(".screen");
  const getResultScreenEl = () => document.querySelector(".result-screen");
  
  //key pads used in the app
  const pads = {
      operators: ["*", "/", "-", "+"],
      numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."],
      equal: ["="],
  }
  
  //isOperator checks if a given char is an operator
  const isOperator = char => pads.operators.includes(char) 
  
  //getLastItem retrieves last itemof an array
  const getLastItem = arr => arr[arr.length - 1];
  
  
  //cloneEl clones an */
  const cloneEl = (el, deepCopy = false) => {
      const clonedEl = el.cloneNode(deepCopy);
      el.parentElement.insertBefore(clonedEl, el);
      el.remove();
      return clonedEl;
  }
  
  //addClickListener clones an element and attach new click listener to it
  const addClickListener = (el, fn) => {
      cloneEl(el, true).addEventListener("click", () => fn())
      return cloneEl;
  }
  
  //createNumberButtons  creates and return number key pads elements
  const createNumberButtons = () => createButtons(pads.numbers, "number");
  
  //createOperatorButtons creates and return operator key pads elements
  const createOperatorButtons = () => createButtons(pads.operators, "operator");
  
  //createEqualButtons creates and return equal key pad element
  const createEqualButton = () => createButtons(pads.equal, "equal")[0];
  
  //createAC buttons creates and return ac key pad element
  const createACButton = () => createButtons(["AC"], "ac")[0];
  
  /* createButtons create a dom element for each item of an array
  and returns an array of created elements */
  const createButtons = (buttonsArray, className, buttonsEl = [], i = 0) => {
      if (i >= buttonsArray.length) return buttonsEl;
      const buttonEl = createEl("button", {class: className, textContent: buttonsArray[i], value: buttonsArray[i]});
      getKeysEl().appendChild(buttonEl);
      return createButtons(buttonsArray, className, buttonsEl.concat(buttonEl), i+1)
  }
  
  /* 
  refreshButtons is called when the operation evolves (a key pad is pressed)
  removes all key pads elements by cloning the parent element
  new buttons are created to listen to the updated operation
  the new operations is then displayed on the calculator screen
  */
  const refreshButtons = operation => {
      cloneEl(getKeysEl())
      bindButtons(operation);
      displayScreen(getScreenEl(), getOperationString(operation));
  }
  
  /*
  getOperationString transform the current operation into a string to be displayed
  Ie: 
  operation = ["1", "+", "2"]
  --> "1 + 2"
  operation2 = ["1", "2", "*", "3"]
  --> "12 * 3"
  */
  const getOperationString = (operation, operationString = "", i = 0) => {
      if (i >= operation.length) return operationString;
      return getOperationString(
          operation,
          operationString.concat(isOperator(operation[i]) ? ` ${operation[i]} ` : operation[i]),
          i+1,
      )
  }
  
  /*
  displayScreen updates a screen (either result or operation screen) 
  by cloning it and attaching updated content
  */
  const displayScreen = (el, content) => {
      el.parentElement.insertBefore(createEl("input", {
          class: el.className,
          type: "text",
          value: content,
          disabled: true,
      }), el)
      el.remove();
  }
  
  /* 
  operate combines two closest element of the operation between a given operator index
  Ie:
  operation = ["1", "*", "2", "+", "3"]
  operate(operation, 2) will combine 1 & 2 with operator "*" to return 2
  */
  const operate = (operation, i) => {
      const leftNumber = +operation[i-1];
      const rightNumber = +operation[i+1];
  
      switch (operation[i]) {
          case '*':
              return leftNumber * rightNumber;
          case '/':
              return leftNumber / rightNumber;
          case '-':
              return leftNumber - rightNumber;
          case '+':
              return leftNumber + rightNumber;
      }
  } 
  
  /*
  nextOperationIndex will return the index of the first operator it finds
  prioritize operators * and /
  */
  const nextOperationIndex = operation => {
      const priorityIndex = operation.findIndex(item => ["*", "/"].includes(item));
      if (priorityIndex !== -1) return priorityIndex
      return operation.findIndex(item => ["+", "-"].includes(item))
  }
  
  /*
  calculate combine recursively an operation array until all its elements calculated
  Ie:
  operation = ["1", "*", "2", "+", "3"]
  --> ["2", "+", "3"]
  --> ["5"]
  */
  const calculate = (operation) => {
      const nextIndex = nextOperationIndex(operation)
      if (nextIndex === -1) return operation[0];
      const nextOperation = operation.map((item, i) => i === nextIndex - 1 ? operate(operation, nextIndex) : item)
      .filter((item, i) => i < nextIndex || i > nextIndex + 1);
      return calculate(nextOperation)
  }
  
  
  //bindButtons binds the current operations to new key pads elements
  const bindButtons = (operation = []) => {
      createOperatorButtons().map(operatorEl => {
          addClickListener(operatorEl, () => {
              if (!operation.length) return;
              if (isOperator(getLastItem(operation))) {
                  refreshButtons(operation.map((item, i) => i === operation.length - 1 ? operatorEl.value : item))
              } else {
                  refreshButtons(operation.concat(operatorEl.value))
              }
          })
      })
  
      createNumberButtons().map(buttonEl => {
          addClickListener(buttonEl, () => {
              refreshButtons(operation.concat(buttonEl.value));
          })
      })
  
      addClickListener(createEqualButton(), () => {
          if (!operation.length) return;
          if (isOperator(getLastItem(operation))) return;
          displayScreen(getResultScreenEl(), calculate(getOperationString(operation).split(" ")));
      })
  
      addClickListener(createACButton(), () => {
          refreshButtons([]);
          displayScreen(getResultScreenEl(), 0);
      })
  }
  
  bindButtons();