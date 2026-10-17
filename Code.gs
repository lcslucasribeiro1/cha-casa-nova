/**
 * Backend de reservas do Chá de Casa Nova.
 * 1. Crie uma planilha Google.
 * 2. Na planilha, abra Extensões > Apps Script e substitua o conteúdo por este código.
 * 3. Publique como Aplicativo da Web (executar como você; acesso: qualquer pessoa).
 */
const SHEET_NAME = "Reservas";

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    let result;
    if (body.action === "list") result = {ok:true, reservations:getReservations_()};
    else if (body.action === "reserve") result = reserve_(body);
    else result = {ok:false,error:"Ação inválida."};
    return json_(result);
  } catch (err) {
    return json_({ok:false,error:err.message || "Erro interno."});
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["productId","name","contact","createdAt"]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getReservations_() {
  const sheet = getSheet_();
  const values = sheet.getDataRange().getValues();
  const result = {};
  for (let i=1; i<values.length; i++) {
    const [productId,name,contact,createdAt] = values[i];
    if (productId) result[String(productId)] = {
      name:String(name || "Convidado"),
      contact:String(contact || ""),
      createdAt:createdAt instanceof Date ? createdAt.toISOString() : String(createdAt || "")
    };
  }
  return result;
}

function reserve_(body) {
  const productId = String(body.productId || "").trim();
  const name = String(body.name || "").trim().slice(0,80);
  const contact = String(body.contact || "").trim().slice(0,100);
  if (!/^[a-zA-Z0-9_-]{1,50}$/.test(productId)) throw new Error("Produto inválido.");
  if (!name) throw new Error("Informe seu nome.");
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet_();
    const values = sheet.getDataRange().getValues();
    for (let i=1; i<values.length; i++) {
      if (String(values[i][0]) === productId) throw new Error("Esse presente acabou de ser reservado por outra pessoa. Atualize a página.");
    }
    sheet.appendRow([productId,name,contact,new Date()]);
    return {ok:true};
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ok:true,message:"API de reservas do Chá de Casa Nova"});
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
