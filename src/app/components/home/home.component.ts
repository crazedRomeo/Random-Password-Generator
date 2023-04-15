import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value:any=8;
  generatedPassword:any='';
  lower:boolean=true;
  upper:boolean=false;
  symbol:boolean=false;
  digit:boolean=false;
  iconName:any='copy_all'
  msg:any='Cannot Generate Password'

  lowerCase:any=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  symbols:any=['@','#','$','&','-'];
  allDigits:any=['0','1','2','3','4','5','6','7','8','9'];
  upperCase:any=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  onClick(){
    if(this.generatedPassword===''){
      this._snackBar.open('Nothing to copy', 'X', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration:4000,
      });
      return;
    }
    this.iconName='done_all';
    navigator.clipboard.writeText(this.generatedPassword);
    this._snackBar.open('Password Copy to Clipboard!', 'X', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration:4000,
    });
  }

  onGenerate(){
    this.iconName='copy_all';
    if(!this.lower && !this.upper && !this.symbol && !this.digit){
      this._snackBar.open(this.msg, 'X', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration:3000,
      });
      return;
    }

    let myArray=[];
    if(this.lower) myArray.push(this.lowerCase);
    if(this.upper) myArray.push(this.upperCase);
    if(this.symbol) myArray.push(this.symbols);
    if(this.digit) myArray.push(this.allDigits);
    this.generatedPassword='';
    for(let i=0;i<this.value;i++){
      let firsPos=Math.floor(Math.random()*myArray.length);
      let letter=myArray[firsPos][Math.floor(Math.random()*myArray[firsPos].length)];
      this.generatedPassword+=letter;
    }

  }
  constructor(private _snackBar: MatSnackBar){

  }
  ngOnInit(): void {
    this.lower=true;
  }
}
