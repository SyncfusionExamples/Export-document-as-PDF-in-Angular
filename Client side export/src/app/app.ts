import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
  ImageFormat,
} from '@syncfusion/ej2-angular-documenteditor';
import {
  PdfBitmap,
  PdfDocument,
  PdfPageOrientation,
  PdfPageSettings,
  PdfSection,
  SizeF,
} from '@syncfusion/ej2-pdf-export';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
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
})
export class App implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void { }
  onClick(): void {
    let pdfdocument: PdfDocument = new PdfDocument();
    let count: number = (this.container as DocumentEditorContainerComponent)
      .documentEditor.pageCount;
    let documentName: string = (
      this.container as DocumentEditorContainerComponent
    ).documentEditor.documentName;
    (
      this.container as DocumentEditorContainerComponent
    ).documentEditor.documentEditorSettings.printDevicePixelRatio = 2;
    let loadedPage = 0;
    for (let i = 1; i <= count; i++) {
      setTimeout(() => {
        let format: ImageFormat = 'image/jpeg' as ImageFormat;
        let image = this.container?.documentEditor.exportAsImage(i, format);
        (image as HTMLImageElement).onload = function () {
          let imageHeight = parseInt(
            (image as HTMLImageElement).style.height
              .toString()
              .replace('px', '')
          );
          let imageWidth = parseInt(
            (image as HTMLImageElement).style.width.toString().replace('px', '')
          );
          let section: PdfSection = pdfdocument.sections.add() as PdfSection;
          let settings: PdfPageSettings = new PdfPageSettings(0);
          if (imageWidth > imageHeight) {
            settings.orientation = PdfPageOrientation.Landscape;
          }
          settings.size = new SizeF(imageWidth, imageHeight);
          (section as PdfSection).setPageSettings(settings);
          let page = section.pages.add();
          let graphics = page.graphics;
          let imageStr = (image as HTMLImageElement).src.replace(
            'data:image/jpeg;base64,',
            ''
          );
          let pdfImage = new PdfBitmap(imageStr);
          graphics.drawImage(pdfImage, 0, 0, imageWidth, imageHeight);
          loadedPage++;
          if (loadedPage == count) {
            pdfdocument.save(
              (documentName === '' ? 'sample' : documentName) + '.pdf'
            );
          }
        };
      }, 500);
    }
  }
}