import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [DocumentEditorContainerModule],
  standalone: true,
  selector: 'app-root',
  // specifies the template string for the DocumentEditorContainer component
  template: `
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
    <h2 style="margin: 0;">Document Editor</h2>
    <button id="export" (click)="onClick()"
      style="padding: 8px 16px; font-size: 14px; color: #333; border: 1px solid #ccc;
             border-radius: 4px; background-color: transparent; cursor: pointer;
             transition: border-color 0.3s, color 0.3s;">
      Export as PDF
    </button>
  </div>
  <ejs-documenteditorcontainer
    #documenteditor_default
    serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
    height="600px"
    style="display: block;"
    [enableToolbar]="true">
  </ejs-documenteditorcontainer>
`,
  providers: [ToolbarService],
})
export class App implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void { }

  onClick(): void {
    if (!this.container) return;
    const fileName = this.container.documentEditor?.documentName?.trim();
    const exportFileName = fileName ? `${fileName}.pdf` : 'sample.pdf';

    const sfdt = {
      content: this.container.documentEditor.serialize(),
      fileName: exportFileName
    }

    const http = new XMLHttpRequest();
    http.open('POST', 'https://localhost:7166/ExportPdf');
    http.setRequestHeader('Content-Type', 'application/json');
    http.responseType = 'blob';

    http.onload = () => {
      if (http.status === 200) {
        const blob = new Blob([http.response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = sfdt.fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download PDF:', http.statusText);
      }
    };
    http.onerror = () => {
      console.error('Request failed');
    };

    http.send(JSON.stringify(sfdt));
  }
}
