import { Component } from '@angular/core';
import { ImageGrid } from './components/image-grid/image-grid';

@Component({
  selector: 'app-root',
  imports: [ImageGrid],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
