import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TypeDocument } from '../../models/typeDocument';
import { UpdateDocumentService } from '../services/update-document.service';

@Component({
  selector: 'app-create-files',
  templateUrl: './create-files.component.html',
  styleUrls: ['./create-files.component.css']
})
export class CreateFilesComponent implements OnInit {

  filesForm: FormGroup;
  public editMode: boolean;
  typesDocuments!: TypeDocument[];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateFilesComponent>,//Referencia al dialog usado
    @Inject(MAT_DIALOG_DATA) public data: { edit: boolean, file: File }, //Datos del dialog
    private serviceUpdateDocument: UpdateDocumentService
  ) {
    this.loadTypeDocument();
    this.editMode = data.edit;
    //Crea el formulario de la carpeta
    this.filesForm = fb.group({
      idFile: ['', Validators.required],
      //Id de la carpeta raiz en base de datos por default
      //todo: hacer que no sea dato quemado
      idLocationFolder: ['', Validators.required],
      name: ['', Validators.required],
      alphabet: ['', Validators.required],
      years: ['', Validators.required]
    });
    //Setea los valores que se pasen por data  al form
    this.filesForm.patchValue(data.file)
    if (!this.editMode){
      //si no esta en edición no es requerido
      this.filesForm.removeControl('idFile');
    }
  }

  ngOnInit(): void {
  }

  create(): void {
    //Obtiene los datos del formulario
    const file: File = this.filesForm.value;
    this.dialogRef.close(file);
  }

  loadTypeDocument() {
    this.serviceUpdateDocument.getTypesDocument().subscribe(data => {
      this.typesDocuments = data.data;
      console.log(data.data);
    });
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.dialogRef.close();
  }
}
