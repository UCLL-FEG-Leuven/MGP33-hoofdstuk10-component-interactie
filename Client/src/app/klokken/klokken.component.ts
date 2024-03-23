import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KlokComponent } from '../klok/klok.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-klokken',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, KlokComponent],
  templateUrl: './klokken.component.html',
  styleUrl: './klokken.component.css'
})
export class KlokkenComponent implements OnInit {
  newTimeZone: string = 'Europe/Brussels';
  timeZones: Array<string> = [];

  async ngOnInit(): Promise<void> {
    // TODO: via proxy.
    let response = await fetch('http://localhost:3010/my-clocks');
    if (response.ok) {
      this.timeZones = await response.json();
    }
  }

  addNewTimeZone() {
    this.timeZones.push(this.newTimeZone);
    this.newTimeZone = "";
  }

  removeChild(timeZone: string) {
    this.timeZones = this.timeZones.filter(tz => tz != timeZone);
  }
}


  // 'America/New_York', 'Europe/Brussels', 'Japan'