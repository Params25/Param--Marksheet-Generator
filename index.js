function addRow() {
    // Get form input values
    var name = document.getElementById("name").value;
    var maths = document.getElementById("maths").value;
    var science = document.getElementById("science").value;
    var english = document.getElementById("english").value;
  
    // Create new table row
    var newRow = document.createElement("div");
    newRow.classList.add("row");
  
    // Add name column
    var nameCol = document.createElement("div");
    nameCol.classList.add("col");
    nameCol.innerText = name;
    newRow.appendChild(nameCol);
  
    // Add maths column
    var mathsCol = document.createElement("div");
    mathsCol.classList.add("col");
    mathsCol.innerText = maths;
    newRow.appendChild(mathsCol);
  
    // Add science column
    var scienceCol = document.createElement("div");
    scienceCol.classList.add("col");
    scienceCol.innerText = science;
    newRow.appendChild(scienceCol);
  
    // Add english column
    var englishCol = document.createElement("div");
    englishCol.classList.add("col");
    englishCol.innerText = english;
    newRow.appendChild(englishCol);
      
    // Add row to table
    var table = document.getElementById("table");
    table.appendChild(newRow);
  }