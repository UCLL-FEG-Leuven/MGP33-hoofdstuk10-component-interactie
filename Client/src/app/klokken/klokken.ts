import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Klok as KlokModel } from '../klok';
import { Klok } from '../klok/klok';

import { VoegKlokToeForm } from '../voeg-klok-toe-form/voeg-klok-toe-form';

@Component({
    selector: 'app-klokken',
    imports: [FormsModule, Klok, VoegKlokToeForm],
    templateUrl: './klokken.html',
    styleUrl: './klokken.css'
})
export class Klokken implements OnInit {
  klokken: KlokModel[] = [];

  @ViewChild("nieuweKlokDialog")
  nieuweKlokDialog: ElementRef<HTMLDialogElement> | undefined;

  async ngOnInit(): Promise<void> {
    let response = await fetch('http://localhost:3010/my-clocks');
    if (response.ok) {
      let klokkenLiteralsArray = await response.json();
      this.klokken = klokkenLiteralsArray.map((o: any) => new KlokModel(o.name, o.timeZone, o.locale));
    }
  }

  toonNieuweKlokDialog() {
    this.nieuweKlokDialog?.nativeElement.showModal();
  }

  voegNieuweKlokToe(nieuweKlok: KlokModel) {
    this.klokken.push(nieuweKlok);
    this.nieuweKlokDialog?.nativeElement.close();
  }

  removeChild(klok: KlokModel) {
    this.klokken = this.klokken.filter(kl => klok.name != kl.name);
  }
}