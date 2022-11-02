import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  toastConf = {
    easing: 'ease-in',
    easeTime: 700
  }

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  showsSuccess(message: string = "", title: string = ""){
    this.toast.success(message, title,this.toastConf)
  }

  showsError(message: string = "", title: string = ""){
    this.toast.error(message, title, this.toastConf)
  }

  showsWarning(message: string = "", title: string = ""){
    this.toast.warning(message, title, this.toastConf)
  }

  showsInfo(message: string = "", title: string = ""){
    this.toast.show(message, title, this.toastConf)
  }
}
