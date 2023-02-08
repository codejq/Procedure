const menu = [
    { href: "Tranning-needs.html", text: "الاحتياج التدريبي (الادارةالمختصة)" },
    { href: "MyRequests.html", text: "طلباتي المرفوعة (الادارة المختصة)" },
    { href: "AdminTrainingRequests.html", text: "ادارة طلبات البرامج (الادمن ومنسق التدريب المركز الرئيسي)" },
    { href: "addNominee.html", text: "اضافة مرشحين" },
    { href: "add-advert.html", text: "اضافة اعلان عن دورة" },
    { href: "My-adv.html", text: "اعلاناتي المرسلة" },
    { href: "Approve-Adv.html", text: "اعتماد ونشر الاعلانات" },
    { href: "adv-details.html", text: "تفاصيل الاعلان والاعتماد" },
    { href: "userlist.html", text: " ادارة التسجيل" },
    { href: "adv.html", text: " الاعلان " },
    { href: "register.html", text: " التسجيل في دورة " },
    { href: "training-request.html", text: "طلب تدريب (منسوب للوزارة)" },
    { href: "My-TrainingRequests.html", text: "قائمة طلبات التدريب (متدرب)" },
    { href: "Coordinator-TrainingRequests.html", text: "ادارة طلبات التدريب (منسق/ مدير المركز  ثم المدير العام)" },
    { href: "CreditHours-Request.html", text: "طلب اعتماد ساعات تعليمية لبرنامج تدريبي " },
    { href: "CreditHours-List.html", text: "الساعات التعليمية المعتمدة" },
    { href: "Co-operative-Training.html", text: "التدريب التعاوني" },
    { href: "Coordinator-Co-operative-Training.html", text: "ادارة طلبات التدريب التعاوني (منسق/ مدير المركز)" },
    { href: "Administration-Co-operative-Training.html", text: "ادارة طلبات التدريب التعاوني (منسق الادارة المختصة)" },
    { href: "Co-operative-Training-List.html", text: "طلبات التدريب التعاوني (متدرب)" },
    { href: "HealthPractitioner-new-practitioner.html", text: "برنامج تدريب الممارسين الصحيين" },
    { href: "HealthPractitioner-addExist-coordinator.html", text: "إضافة الممارسين الصحيين (منسق المركز)" },
    { href: "HealthPractitioner-training-center-coordinator.html", text: "الممارسين الصحيين (منسق المركز)" },
    { href: "HealthPractitioner-admin.html", text: "الممارسين الصحيين (المدير)" },
    { href: "Conference-PreliminaryApproval-Request.html", text: "طلب موافقة مبدئية لإقامة مؤتمر" },
    { href: "Conference-PreliminaryApproval-List.html", text: "متابعة طلبات الموافقة المبدئية" },
    { href: "Conference-Details.html", text: "استكمال بيانات المؤتمر" },
    { href: "Conference-Ads.html", text: "اعلان عن مؤتمر" },
    { href: "Conference-Approve.html", text: "اعتماد المؤتمرات" },
    { href: "Conference-ScientificPaper-Criteria-Category.html", text: "تصنيف معايير تقديم الأوراق العلمية المؤتمرات" },
    { href: "Conference-ScientificPaper-Criteria.html", text: "معايير  تقديم الأوراق العلمية المؤتمرات" },
    { href: "Conference-ScientificPaper.html", text: "تقديم ورقة علمية" },
    { href: "Conference-ScientificPaper-Evaluation.html", text: "تقييم الاوراق العلمية" },
]

menu.forEach(item => {
    let node = document.createElement("li");
    node.innerHTML = `<a href="${item.href}">${item.text}</a>`;
    document.getElementById("menu").appendChild(node);
});
