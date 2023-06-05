import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayText = '';
  currentText = '';
  title = 'mycalc';

  displayInputText(value: string) {
    this.currentText = this.currentText + value;
    this.displayText = this.currentText;
  }

  equals(value: string) {
    try {
      const invalidChars = /[^0-9+\-*/.()\s]/g;
      if (invalidChars.test(value)) {
        throw new Error('Invalid characters in the expression');
      }

      // Check for division by zero
      if (value.includes('/0')) {
        throw new Error('Division by zero is not allowed');
      }
    } catch (error) {
      alert('Error: ' + error + '\nclearing and setting to zero');
      value = '0'
    }
    //to remove the leading zeroes from each value before evaluating the
    value = value.replace(/(^|\D)0+(\d)/g, '$1$2');
    this.currentText = eval(value);
    this.displayText = this.currentText;
  }

  clear() {
    this.currentText = '0';
    this.displayText = '0';
  }

  clearLast() {
    this.currentText = this.currentText.slice(0, -1)
    this.displayText = this.currentText;
  }
}
