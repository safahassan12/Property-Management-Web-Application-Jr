let properties = JSON.parse(localStorage.getItem("properties") || "[]");
let viewRequests = JSON.parse(localStorage.getItem("maintenanceRequests") || "[]");
let contracts = JSON.parse(localStorage.getItem("contracts") || "[]");
let renewRequests = JSON.parse(localStorage.getItem("renewRequests") || "[]");

// نشر عقار جديد
function addProperty() {
  const name = document.getElementById("propertyName").value;
  const location = document.getElementById("propertyLocation").value;
  const rooms = document.getElementById("propertyRooms").value;
  if(name && location && rooms){
    properties.push({name, location, rooms});
    localStorage.setItem("properties", JSON.stringify(properties));
    alert("تم نشر العقار");
    document.getElementById("propertyName").value = "";
    document.getElementById("propertyLocation").value = "";
    document.getElementById("propertyRooms").value = "";
    showPropertyList();
  } else alert("املأ جميع الحقول");
}

// عرض قائمة العقارات
function showPropertyList(){
  let html = "<ul>";
  properties.forEach((p,index) => {
    html += `<li>${p.name} - ${p.location} - غرف: ${p.rooms}</li>`;
  });
  html += "</ul>";
  document.getElementById("propertyList").innerHTML = html;
}

// عرض طلبات المعاينة
function viewRequestsFunc() {
  let html = "<ul>";
  properties.forEach((p,index)=>{
    html += `<li>${p.name}</li>`;
  });
  html += "</ul>";
  document.getElementById("requestsList").innerHTML = html;
}

// عرض العقود
function viewContracts() {
  let html = "<ul>";
  contracts.forEach((c,index)=>{
    html += `<li>عقد رقم ${index} - المبلغ: ${c.amount} - المستأجر: ${c.tenant}</li>`;
  });
  html += "</ul>";
  document.getElementById("ownerContractsList").innerHTML = html;
}

// عرض طلبات تجديد العقد
function viewRenewRequests(){
  let html = "<ul>";
  renewRequests.forEach((r,index)=>{
    html += `<li>طلب رقم ${index} - المستأجر: ${r.tenant} - الحالة: ${r.status}</li>`;
  });
  html += "</ul>";
  document.getElementById("renewRequestsList").innerHTML = html;
}

// تقييم الصيانة
function submitFeedback(){
  const feedback = document.getElementById("maintenanceFeedback").value;
  if(feedback){
    alert("تم إرسال التقييم");
    document.getElementById("maintenanceFeedback").value = "";
  } else alert("أدخل التقييم أولاً");
}

// تسجيل خروج
function logout(){
  window.location.href = "index.html";
}

// عند التحميل
window.onload = function(){
  showPropertyList();
  viewRequestsFunc();
  viewContracts();
  viewRenewRequests();
};
