import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Folder} from "../../modules/Folders/models/folder";

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.css']
})
export class CreateFolderComponent implements OnInit {

  folderForm:FormGroup;
  public editMode: boolean;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateFolderComponent>,//Referencia al dialog usado
    @Inject(MAT_DIALOG_DATA) public data: { edit: boolean, folder:Folder }//Datos del dialog
  ) {
    this.editMode = data.edit
    //Crea el formulario de la carpeta
    this.folderForm = fb.group({
      idFolder: ['', Validators.required],
      //Id de la carpeta raiz en base de datos por default
      //todo: hacer que no sea dato quemado
      idLocationFolder: ['1', Validators.required],
      name: ['', Validators.required],
      alphabet: ['', Validators.required],
      years: ['', Validators.required],
    })
    //Setea los valores que se pasen por data  al form
    this.folderForm.patchValue(data.folder)
    if (!this.editMode){
      //si no esta en edición no es requerido
      this.folderForm.removeControl('idFolder');
    }
  }

  ngOnInit(): void {
  }

  create(): void{
    //Obtiene los datos del formulario
    const folder: Folder = this.folderForm.value;
    this.dialogRef.close(folder)
  }

  close(){
    this.dialogRef.close();
  }
}
