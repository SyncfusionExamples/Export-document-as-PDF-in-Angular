# Client-Side PDF Export Using Syncfusion DOCX Editor in Angular

This Angular sample demonstrates how to export Word documents as PDF on the client side using the `Syncfusion DOCX Editor`. It utilizes the `exportAsImage()` API from the `@syncfusion/ej2-angular-documenteditor` package to convert each page into an image and draw it on a PDF canvas using the `@syncfusion/ej2-pdf-export` package. The export logic includes handling image dimensions, page orientation, and PDF generation. Note that the exported PDF does not support text search since the content is rendered as images.

- PDF Export Package: [@syncfusion/ej2-pdf-export](https://www.npmjs.com/package/@syncfusion/ej2-pdf-export)
- DOCX Editor Package: [@syncfusion/ej2-angular-documenteditor](https://www.npmjs.com/package/@syncfusion/ej2-angular-documenteditor)

