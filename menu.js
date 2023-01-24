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
    { href: "training-request.html", text: " طلب تدريب" },
    { href: "My-TrainingRequests.html", text: "قائمة طلبات التدريب (متدرب)" },
    { href: "Coordinator-TrainingRequests.html", text: "ادارة طلبات التدريب (منسق المركز ثم مدير المركز ثم المدير العام)" },
    { href: "CreditHours-Request.html", text: "طلب اعتماد ساعات تعليمية لبرنامج تدريبي " },
    { href: "CreditHours-List.html", text: "الساعات التعليمية المعتمدة" },
]

window.onload = function () {
    menu.forEach(item => {
        let node = document.createElement("li");
        node.innerHTML = `<a href="${item.href}">${item.text}</a>`;
        document.getElementById("menu").appendChild(node);
    });
};