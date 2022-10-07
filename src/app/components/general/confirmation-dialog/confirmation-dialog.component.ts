import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  public message

  /**
   * Dialog component usado para mostrar mensajes de comfirmación
   * al usuario
   * @param data: Objeto con el mensaje que se va mostrar
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string}
  ) {
    this.message = data?.message || ""
  }

  ngOnInit(): void {
  }

}
