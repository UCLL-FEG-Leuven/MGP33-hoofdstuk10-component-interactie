import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlokComponent } from '../klok/klok.component';
import { FormsModule } from '@angular/forms';
import { VoegKlokToeFormComponent } from '../voeg-klok-toe-form/voeg-klok-toe-form.component';
import { Klok } from '../klok';

@Component({
    selector: 'app-klokken',
    imports: [CommonModule, FormsModule, KlokComponent, VoegKlokToeFormComponent],
    templateUrl: './klokken.component.html',
    styleUrl: './klokken.component.css'
})
export class KlokkenComponent implements OnInit {
  klokken: Klok[] = [];

  @ViewChild("nieuweKlokDialog")
  nieuweKlokDialog: ElementRef<HTMLDialogElement> | undefined;

  async ngOnInit(): Promise<void> {
    let response = await fetch('http://localhost:3010/my-clocks');
    if (response.ok) {
      let klokkenLiteralsArray = await response.json();
      this.klokken = klokkenLiteralsArray.map((o: any) => new Klok(o.name, o.timeZone, o.locale));
    }
  }

  toonNieuweKlokDialog() {
    this.nieuweKlokDialog?.nativeElement.showModal();
  }

  voegNieuweKlokToe(nieuweKlok: Klok) {
    this.klokken.push(nieuweKlok);
    this.nieuweKlokDialog?.nativeElement.close();
  }

  removeChild(klok: Klok) {
    this.klokken = this.klokken.filter(kl => klok.timeZone != kl.timeZone);
  }
}