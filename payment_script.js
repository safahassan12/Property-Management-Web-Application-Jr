let payments = JSON.parse(localStorage.getItem("payments") || "[]");
let fines = JSON.parse(localStorage.getItem("fines") || "[]");
let contracts = JSON.parse(localStorage.getItem("contracts") || "[]");

// عرض المدفوعات
function showPayments(){
  let html = "<ul>";
  payments.forEach((p,index)=>{
    html += `<li>المستأجر: ${p.tenant} - المبلغ: ${p.amount} - الحالة: ${p.status}</li>`;
  });
  html += "</ul>";
  document.getElementById("paymentsList").innerHTML = html;
}

// إضافة غرامة
function addFine(){
  const tenant = document.getElementById("fineTenant").value;
  const amount = document.getElementById("fineAmount").value;
  if(tenant && amount){
    fines.push({tenant, amount});
    localStorage.setItem("fines", JSON.stringify(fines));
    alert("تم إضافة الغرامة");
    document.getElementById("fineTenant").value = "";
    document.getElementById("fineAmount").value = "";
  } else alert("املأ الحقول أولاً");
}

// إنشاء كشوفات الحساب
function generateInvoices(){
  let html = "<ul>";
  contracts.forEach((c,index)=>{
    html += `<li>المستأجر: ${c.tenant} - المبلغ: ${c.amount}</li>`;
  });
  html += "</ul>";
  document.getElementById("invoiceList").innerHTML = html;
}

// المدفوعات المتأخرة
function showOverduePayments(){
  let html = "<ul>";
  payments.forEach((p,index)=>{
    if(p.status === "متأخر") html += `<li>المستأجر: ${p.tenant} - المبلغ: ${p.amount}</li>`;
  });
  html += "</ul>";
  document.getElementById("overdueList").innerHTML = html;
}

// تسجيل خروج
function logout(){
  window.location.href = "index.html";
}
