function doGet(e) {
  var uuidParam=e.parameters.uuid;
  if(uuidParam){
    var filteredDataSet=getDataFilteredByUuid(uuidParam[0]);
    if(filteredDataSet.length>0 ){
    var filteredData=filteredDataSet[0];
    if(filteredData[2]){
    return HtmlService.createTemplateFromFile('INDEX').evaluate();
    }else{
       return HtmlService.createTemplateFromFile('ERROR').evaluate();
       }
    }
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getDataFilteredByUuid(filterByUuid) {

  var ss=SpreadsheetApp.openById('1oxJnQpwYCx_xaUJ5reyjbmAausurb5ugFnqktN82F28');
  var sheet=ss.getSheetByName("NewRegistration");
  var data=sheet.getRange(2,2,sheet.getLastRow()-1,7).getValues();
  return data.filter(function(item){return item[1] === filterByUuid;});
  
}