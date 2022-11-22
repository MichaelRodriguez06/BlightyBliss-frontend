import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TypeFile } from '../../models/typeFile';
import { TypeFiles } from '../services/get-types-documents.service';
import { UploadFileServiceService } from '../services/upload-file-service.service';
import { TemplateFile } from '../../models/TemplateFile';
import { NotificationService } from '../../core/services/notification/notification.service';

@Component({
  selector: 'app-create-files',
  templateUrl: './create-files.component.html',
  styleUrls: ['./create-files.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class CreateFilesComponent implements OnInit {

  filesForm: FormGroup;
  public editMode: boolean;
  typesDocuments!: TypeFile[];
  progress?: number;
  message?: string;
  @Output() public onUploadFinished = new EventEmitter();
  file?: File;


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateFilesComponent>,//Referencia al dialog usado
    @Inject(MAT_DIALOG_DATA) public data: { edit: boolean, file: File }, //Datos del dialog
    private serviceGetTypesDocument: TypeFiles,
    private serviceUploadFile: UploadFileServiceService,
    private notificationService: NotificationService
  ) {
    this.loadTypeDocument();
    this.editMode = data.edit;
    this.filesForm = fb.group({
      IdTypeFile: ['', Validators.required],
      IdFolder: ['', Validators.required],
      Name: ['', Validators.required],
      FileContent: ['', Validators.required]
    });
    this.filesForm.patchValue(data.file);
    if (!this.editMode) {
      this.filesForm.removeControl('idFile');
    }
  }


  ngOnInit(): void {
  }

  create(): void {
    const file: File = this.filesForm.value;
    this.dialogRef.close(file);
  }

  loadTypeDocument() {
    this.serviceGetTypesDocument.getTypesDocument().subscribe(data => {
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

  setFile(files: FileList | null) {
    if (files != null)
      this.file = <File>files[0];
  }

  upload() {
    if (this.file != null) {
      const formData = new FormData();
      let formUpload: TemplateFile = this.filesForm.value;
      formUpload.IdFolder = 4;
      formUpload.IdFileType = Number(this.filesForm.get('IdTypeFile')?.value);
      formData.append('FileContent', this.file, this.file.name);
      formData.append('IdFolder', formUpload.IdFolder.toString());
      formData.append('IdFileType', formUpload.IdFileType.toString());
      formData.append('Name', formUpload.Name.toString());
      this.serviceUploadFile.uploadFile(formData).subscribe({
        next: (res) => {
          if (res) {
            this.notificationService.showsSuccess(res.message);
            console.log(res.data);
          } else {
            this.notificationService.showsInfo(res);
          }
        },
        error: err => {
          if (err.status === 401 || err.status === 403 || err.status === 400) {
            this.notificationService.showsError(err.error.message);
          }
        }
      });
    }
  }


}
