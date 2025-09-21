// بيانات مشتركة
let properties = JSON.parse(localStorage.getItem("properties") || "[]");
let maintenanceRequests = JSON.parse(localStorage.getItem("maintenanceRequests") || "[]");
let contracts = JSON.parse(localStorage.getItem("contracts") || "[]");
let renewRequests = JSON.parse(localStorage.getItem("renewRequests") || "[]");

// عرض الشقق
function showProperties() {
  let html = "<ul>";
  properties.forEach((p, index) => {
    html += `<li>${p.name} - ${p.location} - غرف: ${p.rooms} 
             <button onclick="requestVisit(${index})">طلب معاينة</button></li>`;
  });
  html += "</ul>";
  document.getElementById("propertiesList").innerHTML = html;
}

// طلب زيارة
function requestVisit(index){
  alert(`تم إرسال طلب معاينة للشقة: ${properties[index].name}`);
}

// جدولة معاينة
function scheduleVisit() {
  const date = document.getElementById("visitDate").value;
  const time = document.getElementById("visitTime").value;
  if(date && time){
    alert(`تم تحديد موعد المعاينة: ${date} - ${time}`);
  } else {
    alert("اختر التاريخ والوقت");
  }
}

// رفع مستند
function uploadDocument() {
  const fileInput = document.getElementById("uploadDocs");
  if(fileInput.files.length > 0){
    alert("تم رفع المستند بنجاح: " + fileInput.files[0].name);
    fileInput.value = "";
  } else {
    alert("اختر ملف للرفع");
  }
}

// طلب صيانة
function sendMaintenanceRequest() {
  const issue = document.getElementById("issue").value;
  const fileInput = document.getElementById("issueFile");
  if(issue){
    let request = {
      tenant: "المستأجر الحالي",
      issue,
      fileName: fileInput.files[0] ? fileInput.files[0].name : "",
      status: "معلق"
    };
    maintenanceRequests.push(request);
    localStorage.setItem("maintenanceRequests", JSON.stringify(maintenanceRequests));
    alert("تم إرسال طلب الصيانة");
    document.getElementById("issue").value = "";
    document.getElementById("issueFile").value = "";
    showMaintenanceRequests();
  } else {
    alert("صف المشكلة أولاً");
  }
}

// عرض طلبات الصيانة الخاصة بالمستأجر
function showMaintenanceRequests(){
  let html = "<ul>";
  maintenanceRequests.forEach((r, index) => {
    html += `<li>رقم الطلب ${index} - المشكلة: ${r.issue} - الحالة: ${r.status}</li>`;
  });
  html += "</ul>";
  document.getElementById("maintenanceList").innerHTML = html;
}

// عرض العقود والفواتير
function showContracts() {
  let html = "<ul>";
  contracts.forEach((c, index) => {
    html += `<li>عقد رقم ${index} - المالك: ${c.owner} - المبلغ: ${c.amount}</li>`;
  });
  html += "</ul>";
  document.getElementById("contractsList").innerHTML = html;
}

// تجديد العقد
function renewContract() {
  renewRequests.push({tenant: "المستأجر الحالي", status: "معلق"});
  localStorage.setItem("renewRequests", JSON.stringify(renewRequests));
  alert("تم إرسال طلب تجديد العقد");
}

// تسجيل خروج
function logout() {
  window.location.href = "index.html";
}

// عند التحميل
window.onload = function() {
  showMaintenanceRequests();
};
