import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ApiAccessService} from "../../../services/apiAccess.service";
import {MatDialog} from "@angular/material/dialog";
import {UserFormPageComponent} from "../general/user-form-page/user-form-page.component";
import {UsersServices} from "../../../services/users.services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private apiAccessService: ApiAccessService,
    private dialog: MatDialog,
    private usersService: UsersServices) {
    if (this.apiAccessService.userData) {//user logged
      this.router.navigate(['dashboard'])
    }
    this.form = fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  create() {
    const dialogRef = this.dialog.open(UserFormPageComponent, {
      width: '60%',
      height: '100%',
      data: {edit: false}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.createUser(result).subscribe((res => {
          console.log(res.msg)
          this.form.patchValue({
            usuario: result.credentialId,
            password: result.password
          })
          this.login()
        }))
      }
    });
  }

  login() {
    const email = this.form.value.usuario;
    const password = this.form.value.password;
    console.log("Email",email)
    console.log("Password",password)
    this.loading = true;
    this.apiAccessService.login(email, password).subscribe(res => {
      if (res) {
        if (res.role === 'ADMIN') {
          this.router.navigate(['admin']);
        }
      } else {
        //Mostramos un mensaje de error
        this.invalidUser()
      }
    }, (error) => {
      console.log(error)
      if (error.status === 404) {
        this.invalidUser()
      }
    });
  }

  invalidUser() {
    this.loading = false;
    this.openSnackBar("usuario o contraseña ingresado invalido")
    this.form.reset()
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      //Redireccionamos
      this.router.navigate(['admin'])
      this.loading = false;
    }, 1000)
  }
}
