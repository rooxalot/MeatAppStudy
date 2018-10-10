import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MessageService {

  constructor(private toastr: ToastrService) {
    toastr.toastrConfig.preventDuplicates = true;
  }

  showSuccess(successMessage: string) {
    this.toastr.success(successMessage);
  }
  showSuccessWithHeader(successMessage: string, successMessageHeader: string) {
    this.toastr.success(successMessage, successMessageHeader);
  }


  showError(errorMessage: string) {
    this.toastr.error(errorMessage);
  }
  showErrorWithHeader(errorMessage: string, errorMessageHeader: string) {
    this.toastr.error(errorMessage, errorMessage);
  }


  showWarning(warningMessage: string) {
    this.toastr.warning(warningMessage);
  }
  showWarningWithHeader(warningMessage: string, warningMessageHeader: string) {
    this.toastr.warning(warningMessage, warningMessageHeader);
  }


  showInfo(message: string) {
    this.toastr.info(message);
  }
  showInfoWithHeader(message: string, messageHeader: string) {
    this.toastr.info(message, messageHeader);
  }


  show(message: string) {
    this.toastr.show(message);
  }
  showWithHeader(message: string, messageHeader: string) {
    this.toastr.show(message, messageHeader);
  }
}
