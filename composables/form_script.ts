function tab_selection(clicked: any) {
    const info_box: HTMLElement | null = document.getElementById("info_box");
    const work_with_us: HTMLElement | null = document.getElementById("work_with_us");
    const propose_project: HTMLElement | null = document.getElementById("propose_project");

    const info_tab: HTMLElement | null = document.getElementById("info");
    const work_tab: HTMLElement | null = document.getElementById("work");
    const propose_tab: HTMLElement | null = document.getElementById("propose");

    if (clicked.currentTarget.id == "info") {
        info_box!.style.display = "block";
        work_with_us!.style.display = "none";
        propose_project!.style.display = "none";
        //console.log("info clicked");
    } else if (clicked.currentTarget.id == "work") {
        info_box!.style.display = "none";
        work_with_us!.style.display = "block";
        propose_project!.style.display = "none";
        //console.log("work_with_us clicked");
    } else if (clicked.currentTarget.id == "propose") {
        info_box!.style.display = "none";
        work_with_us!.style.display = "none";
        propose_project!.style.display = "block";
        //console.log("propose_project clicked");
    }

    //console.log("A: " + info_tab!.className)
    info_tab!.className = info_tab!.className.replace("_active", "");
    work_tab!.className = work_tab!.className.replace("_active", "");
    propose_tab!.className = propose_tab!.className.replace("_active", "");

    clicked.currentTarget.className += "_active";
    //console.log("B: " + clicked.currentTarget.className);
}
function sendForm() {
    alert("Your form has been sent!");
    console.log("Form sent!");
}
function checkProposeFormValues() {
    const surname: HTMLElement | null = document.getElementById("sname");
    const firstname: HTMLElement | null = document.getElementById("fname");
    const email: HTMLElement | null = document.getElementById("email");
    const phone: HTMLElement | null = document.getElementById("phone");
    const proj_name: HTMLElement | null = document.getElementById("proj_name");
    const proj_desc: HTMLElement | null = document.getElementById("proj_desc");

    if (surname!.nodeValue === "" || firstname!.nodeName === "" || email!.nodeValue === "" ||
        proj_name!.nodeValue === "" || proj_desc!.nodeValue === "") {
        alert("Please fill in all the required fields!");
        console.log("Form not sent!");
        return false;
    }
    return true;
}

export { tab_selection, sendForm, checkProposeFormValues };