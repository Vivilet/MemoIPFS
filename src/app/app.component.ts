import { Component, OnInit } from '@angular/core';
const ipfs = require('ipfs-core');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MemoIPFS';
  hash:string;
  content:string;
  constructor(){
    this.hash = 'aaa';
    this.Init();
  }
  
  async Init(): Promise<void> {
    console.log("results.cid");
    var node = await ipfs.create();
    var results = await node.add({content:"Hello world"});
    this.hash = results.cid;
  }

  async ngOnInit(): Promise<void> {
    console.log("results.cid");
    var node = await ipfs.create();
    var results = await node.add({content:"Hello world"});
    this.hash = results.cid;
  }
}
