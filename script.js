// توليد رقم الاضبارة بسرعة
function generateCaseNumber() {
    const randomPart = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const timestampPart = Date.now().toString().slice(-6);
    return `A${randomPart}-${timestampPart}`;
}

// تعيين رقم الاضبارة فور تحميل الصفحة
let caseNumber = generateCaseNumber();
document.getElementById('caseNumber').innerText = caseNumber;

// إظهار/إخفاء حقل "طبيعة عمل الزوجة"
function toggleWifeJob() {
    const wifeWorksSelect = document.querySelector("select[name='wife_works']");
    const wifeJobField = document.getElementById("wifeJobField");
    wifeJobField.style.display = wifeWorksSelect.value === "نعم" ? "block" : "none";
}

// إظهار/إخفاء حقل "عدد الأفراد ذوي الاحتياجات الخاصة"
function toggleSpecialNeeds() {
    const specialNeedsSelect = document.querySelector("select[name='special_needs']");
    const specialNeedsField = document.getElementById("specialNeedsField");
    specialNeedsField.style.display = specialNeedsSelect.value === "نعم" ? "block" : "none";
}

// إرسال النموذج
document.getElementById("surveyForm").onsubmit = function(event) {
    event.preventDefault();

    document.getElementById("surveyForm").style.display = "none";
    document.getElementById("finalCaseNumber").innerText = caseNumber;
    document.getElementById("caseNumberBox").style.display = "block";
};