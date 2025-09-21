let maintenanceRequests = JSON.parse(localStorage.getItem("maintenanceRequests") || "[]");

// عرض طلبات الصيانة
function showRequests(){
  let html = "<ul>";
  maintenanceRequests.forEach((r,index)=>{
    html += `<li>رقم الطلب ${index} - المشكلة: ${r.issue} - الحالة: ${r.status} - المستأجر: ${r.tenant}</li>`;
  });
  html += "</ul>";
  document.getElementById("requestsList").innerHTML = html;
}

// تعيين فني
function assignTechnician(){
  const tech = document.getElementById("technicianSelect").value;
  const id = document.getElementById("assignRequestId").value;
  if(tech && id !== ""){
    maintenanceRequests[id].technician = tech;
    maintenanceRequests[id].status = "تم تعيين فني";
    localStorage.setItem("maintenanceRequests", JSON.stringify(maintenanceRequests));
    alert("تم تعيين الفني");
    showRequests();
  } else alert("اختر الفني ورقم الطلب");
}

// جدولة زيارة
function scheduleVisit(){
  const id = document.getElementById("visitRequestId").value;
  const date = document.getElementById("visitDate").value;
  if(id !== "" && date){
    maintenanceRequests[id].visitDate = date;
    maintenanceRequests[id].status = "تم جدولة زيارة";
    localStorage.setItem("maintenanceRequests", JSON.stringify(maintenanceRequests));
    alert("تم تحديد موعد الزيارة");
    showRequests();
  } else alert("اختر رقم الطلب والتاريخ");
}

// رفع تقرير الصيانة
function uploadReport(){
  const id = document.getElementById("reportRequestId").value;
  const report = document.getElementById("reportText").value;
  if(id !== "" && report){
    maintenanceRequests[id].report = report;
    maintenanceRequests[id].status = "تم الانتهاء من الصيانة";
    localStorage.setItem("maintenanceRequests", JSON.stringify(maintenanceRequests));
    alert("تم رفع التقرير");
    document.getElementById("reportText").value = "";
    showRequests();
  } else alert("اختر رقم الطلب واكتب التقرير");
}

// تسجيل خروج
function logout(){
  window.location.href = "index.html";
}

// عند التحميل
window.onload = function(){
  showRequests();
};
