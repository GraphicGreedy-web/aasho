// This is the Google Apps Script code that should be deployed as a web app
// Copy this code to the Google Apps Script editor and deploy it as a web app

function doGet(e) {
  return HtmlService.createHtmlOutput("Form submission handler is active");
}

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the Google Sheet by ID - replace with your actual sheet ID
    const ss = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
    const sheet = ss.getSheetByName('Form Responses') || ss.getSheets()[0];
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Subject',
        'Message',
        'Preferred Contact',
        'Tour Interest'
      ]);
    }
    
    // Append the form data to the sheet
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.subject,
      data.message,
      data.preferredContact,
      data.tourInterest
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error and return error response
    console.error('Error processing form submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}