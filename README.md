# How to Export Word Documents as PDF in Angular Using the DOCX Editor

This sample demonstrates how to export a Word document as a PDF using the Syncfusion DOCX Editor component in Angular. It covers exporting the document on both the client and server sides.

# Features 

**Client Side** – Use the [PDF Export Component](https://www.npmjs.com/package/@syncfusion/ej2-pdf-export) at the application level to export the document as PDF using the `exportAsImage` API. All pages are converted to images and inserted as PDF pages (similar to print as PDF).  
- The export logic uses `PdfDocument`, `PdfBitmap`, and `PdfPageSettings` from the Syncfusion PDF Export package.  
- The exported PDF does not support text search since content is rendered as images.  
- Triggered via a button in the Angular template that loops through each page and draws the image on the PDF canvas.  
- [GitHub Repository](https://github.com/syncfusion/angular-docx-editor-export-pdf)

**Server Side** – With the help of [Syncfusion® DocIO](https://www.nuget.org/packages/Syncfusion.DocIORenderer), you can export the document as PDF on the server side.  
- The Angular frontend serializes the document content in SFDT format and sends it to an ASP.NET Core backend.  
- The backend uses `Syncfusion.EJ2.WordEditor.AspNet.Core` and `Syncfusion.DocIORenderer` to convert the SFDT to a searchable and well-formatted PDF.  
- The exported PDF does support text search since content is rendered as actual text.  
- The server returns the PDF as a binary blob which is downloaded by the client.  
- [GitHub Repository](https://github.com/syncfusion/angular-docx-editor-export-pdf)

# Resources 

- Product page: [Syncfusion® Angular Word Processor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor)    
- Documentation: [Syncfusion® Word Processor](https://help.syncfusion.com/document-processing/word/word-processor/angular/getting-started)   
- Online demo: [Syncfusion® Word Processor - Demo](https://document.syncfusion.com/demos/docx-editor/angular/#/bootstrap5/document-editor/default) 

# Support and feedback 

For any other queries, reach our [Syncfusion® support team](https://support.syncfusion.com/?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples) or post the queries through the [community forums](https://www.syncfusion.com/forums?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples).  

Request new feature through [Syncfusion® feedback portal](https://www.syncfusion.com/feedback?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples).

# License

This is a commercial product and requires a paid license for possession or use Syncfusion's licensed software, including this component, is subject to the terms and conditions of [Syncfusion's EULA](https://www.syncfusion.com/license/studio/22.2.5/syncfusion_essential_studio_eula.pdf?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples). You can purchase a license [here](https://www.syncfusion.com/sales/unlimitedlicense) or start a free 30-day trial [here](https://www.syncfusion.com/account/manage-trials/start-trials?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples).
