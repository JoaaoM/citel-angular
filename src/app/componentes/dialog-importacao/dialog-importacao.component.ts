import {Component, EventEmitter, Output} from '@angular/core';
import {HlmButtonDirective} from '@spartan-ng/ui-button-helm';
import {BrnDialogContentDirective, BrnDialogTriggerDirective} from '@spartan-ng/ui-dialog-brain';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import {HlmInputDirective} from '@spartan-ng/ui-input-helm';
import {HlmLabelDirective} from '@spartan-ng/ui-label-helm';
import {ImportacaoService} from "../../service/importacao/importacao.service";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {lucideLoader2} from "@ng-icons/lucide";
import {provideIcons} from "@ng-icons/core";
import {NgIf} from "@angular/common";
import {DialogRef} from "@angular/cdk/dialog";


@Component({
  selector: 'app-dialog-importacao',
  standalone: true,
  providers:[provideIcons({ lucideLoader2 })],
  imports: [
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    HlmIconComponent,
    NgIf,
  ],
  templateUrl: './dialog-importacao.component.html'
})
export class DialogImportacaoComponent {
  @Output() uploadSucesso = new EventEmitter<void>();
  constructor(private importacaoService: ImportacaoService) { }

  fileToUpload: File | null = null;
  loading = false;

  handleFileInput(event: any) {
    console.log(event.target.files[0])
    this.fileToUpload = event.target.files[0]
  }

  upload() {
    if (this.fileToUpload) {
      this.loading = true;
      this.importacaoService.uploadFile(this.fileToUpload).subscribe(resp => {

        this.loading = false;
        alert("Uploaded");
        this.uploadSucesso.emit();
      })
    } else {
      alert("Please select a file first")
    }
  }

}
