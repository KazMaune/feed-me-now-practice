import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    array1: string[] = [""];
    randomItem: string = "";

    ngOnInit(): void {
      // get the string from localStorage
      const str = localStorage.getItem("array1");
      if(str) {
        // convert string to valid object
        this.array1 = JSON.parse(str);
      }
    }

    addNewInput() {
      this.array1.push("");
      this.saveToLocalStorage();
    }

    removeInput(index: number) {
      this.array1.splice(index, 1);
      this.saveToLocalStorage();
    }

    // This prevents the app from re-rendering the list of input fields when they are typed in
    trackByFn(index: number, obj: any) {
      return index;
    }
 
    saveToLocalStorage() { 
      // convert array to JSON string using JSON.stringify() 
      const jsonArr = JSON.stringify(this.array1);

      // save to localStorage
      localStorage.setItem("array1", jsonArr);
    }

    randomize() {
      // checks to make sure it contains atleast one item
      if(this.array1.length <= 0) {
        alert("Please add one or more items to your list!");
      }
      // checks to make there are no empty fields
      else {
        // loops through the array of items to look for any empty values
        for(let i = 0; i < this.array1.length; i++) {
          if(this.array1[i] === "") {
            alert("Please ensure you have no empty fields!");
            return;
          }
        }
        // assign a random item using math.random
        this.randomItem = this.array1[Math.floor(Math.random()*this.array1.length)];
      }
    }
}
