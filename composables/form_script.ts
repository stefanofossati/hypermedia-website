import {useFetch} from "nuxt/app";
import {PPFormData, WWUFormData, FormResponse} from "~/model/Types";

// unified test for First Name and Surname fields
function testSurnameOrFirstNameBox(s_or_f: string, form_id_str: string) {
    const name_elem = (<HTMLInputElement>document.getElementById(s_or_f + 'name_' + form_id_str));
    const name_err_msg_elem = (<HTMLInputElement>document.getElementById(s_or_f + 'name_' + form_id_str + '_err_msg'));
    const name = name_elem.value;

    if (checkName(name)) {
        name_elem.className = "contact_us_form_input_green";
        name_err_msg_elem.className = "hidden";
        return true;
    } else {
        name_elem.className = "contact_us_form_input_red"
        name_err_msg_elem.className = "contact_us_form_error_message";
        return false;
    }
}

/// @param form_id_str - id of the form, "pp" or "wwu"
/// @returns true if Surname field is valid, false otherwise
/// Function changes the style of the field and the error message
function testSurnameBox(form_id_str: string) {
    return testSurnameOrFirstNameBox('s', form_id_str);
}

/// @param form_id_str - id of the form, "pp" or "wwu"
/// @returns true if First Name field is valid, false otherwise
/// Function changes the style of the field and the error message
function testNameBox(form_id_str: string) {
    return testSurnameOrFirstNameBox('f', form_id_str);
}

/// @param form_id_str - id of the form, "pp" or "wwu"
/// @returns true if Email field is valid, false otherwise
/// Function changes the style of the field and the error message
function testEmailBox(form_id_str: string) {
    const email_elem = (<HTMLInputElement>document.getElementById('email_' + form_id_str));
    const email_err_msg_elem = (<HTMLInputElement>document.getElementById('email_' + form_id_str + '_err_msg'));
    const email = email_elem.value;

    if (checkEmail(email)) {
        email_elem.className = "contact_us_form_input_green";
        email_err_msg_elem.className = "hidden";
        return true;
    } else {
        email_elem.className = "contact_us_form_input_red"
        email_err_msg_elem.className = "contact_us_form_error_message";
        return false;
    }
}

/// @param form_id_str - id of the form, "pp" or "wwu"
/// @returns true if Phone field is valid, false otherwise
/// Function changes the style of the field and the error message
function testPhoneBox(form_id_str: string) {
    const phone_elem = (<HTMLInputElement>document.getElementById('phone_' + form_id_str));
    const phone_err_msg_elem = (<HTMLInputElement>document.getElementById('phone_' + form_id_str + '_err_msg'));
    const phone = phone_elem.value;

    if (checkPhone(phone)) {
        phone_elem.className = "contact_us_form_input_green";
        phone_err_msg_elem.className = "hidden";
        return true;
    }
    if (phone == "") {
        phone_elem.className = "contact_us_form_input";
        phone_err_msg_elem.className = "hidden";
        return true;
    } else {
        phone_elem.className = "contact_us_form_input_red"
        phone_err_msg_elem.className = "contact_us_form_error_message";
        return false;
    }
}

/// @param form_id_str - id of the form, "pp" or "wwu"
/// @returns true if Project Name field is valid, false otherwise
/// Function changes the style of the field and the error message
function testProjNameBox(form_id_str: string) {
    const proj_name_elem = (<HTMLInputElement>document.getElementById('proj_name_' + form_id_str));
    const proj_name_err_msg_elem = (<HTMLInputElement>document.getElementById('proj_name_' + form_id_str + '_err_msg'));
    const proj_name = proj_name_elem.value;

    if (proj_name != "") {
        proj_name_elem.className = "contact_us_form_input_green";
        proj_name_err_msg_elem.className = "hidden";
        return true;
    } else {
        proj_name_elem.className = "contact_us_form_input_red"
        proj_name_err_msg_elem.className = "contact_us_form_error_message";
        return false;
    }
}

/// auxiliary function
/// @param name - name/surname to be checked
/// @returns true if name/surname format is valid, false otherwise
function checkName(name: string) {
    if (name == null || name == "") {
        return false;
    }
    return name.match("^[a-zA-Z]+$");
}

/// auxiliary function
/// @param email - email to be checked
/// @returns true if email format is valid, false otherwise
function checkEmail(email: string) {
    if (email == null || email == "") {
        return false;
    }
    return email.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
}

/// auxiliary function
/// @param phone - phone number to be checked
/// @returns true if phone number format is valid, false otherwise
function checkPhone(phone: string) {
    if (phone == null) {
        return true;
    }
    return phone.match(/^[+]?[\\s./0-9]*[(]?[0-9]{1,4}[)]?[-\\s./0-9]*$/g);
}

/// @param form_id_str - id of the form, "pp" or "wwu"
/// @returns true if form sent successfully, false otherwise
/// Function generates a POST request if all fields are valid
async function checkAndSendForm(form_id_str: string) {
    if (testSurnameBox(form_id_str) && testNameBox(form_id_str) && testEmailBox(form_id_str) && testPhoneBox(form_id_str)) {
        if ((form_id_str == "pp" && testProjNameBox(form_id_str)) || form_id_str == "wwu") {
            // @ts-ignore
            let post_body: PPFormData | WWUFormData = {
                name: (<HTMLInputElement>document.getElementById('fname_' + form_id_str)).value,
                surname: (<HTMLInputElement>document.getElementById('sname_' + form_id_str)).value,
                email: (<HTMLInputElement>document.getElementById('email_' + form_id_str)).value,
                phone: (<HTMLInputElement>document.getElementById('phone_' + form_id_str)).value,
            };
            if (form_id_str == "pp") {
                (post_body as PPFormData).proj_name = (<HTMLInputElement>document.getElementById('proj_name_' + form_id_str)).value;
                (post_body as PPFormData).proj_desc = (<HTMLInputElement>document.getElementById('proj_desc_' + form_id_str)).value;
            } else {
                (post_body as WWUFormData).brief_intro = (<HTMLInputElement>document.getElementById('brief_intro_' + form_id_str)).value;
            }

            // @ts-ignore
            const {data: response, error}: {data: FormResponse} = await useFetch(
                "/api/contact_us/" + form_id_str + "_form",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(post_body),
                }
            );
            console.log(response);

            // @ts-ignore
            if (response.value.statusCode == 200) {
                clearForm(form_id_str);
                showFormSentDialogBox();
                return true;
            }
            console.log(error);
            alert("Ops, something went wrong. Please try again later.")
            return false;
        }
    }
}

/// @param form_id_str - id of the form, "pp" or "wwu"
///
/// Function clears all fields and error messages
function clearForm(form_id_str: string) {
    const surname_elem = (<HTMLInputElement>document.getElementById('sname_' + form_id_str));
    const name_elem = (<HTMLInputElement>document.getElementById('fname_' + form_id_str));
    const email_elem = (<HTMLInputElement>document.getElementById('email_' + form_id_str));
    const phone_elem = (<HTMLInputElement>document.getElementById('phone_' + form_id_str));

    surname_elem.value = "";
    name_elem.value = "";
    email_elem.value = "";
    phone_elem.value = "";

    surname_elem.className = "contact_us_form_input";
    name_elem.className = "contact_us_form_input";
    email_elem.className = "contact_us_form_input";
    phone_elem.className = "contact_us_form_input";

    const surname_err_msg_elem = (<HTMLInputElement>document.getElementById('sname_' + form_id_str + '_err_msg'));
    const name_err_msg_elem = (<HTMLInputElement>document.getElementById('fname_' + form_id_str + '_err_msg'));
    const email_err_msg_elem = (<HTMLInputElement>document.getElementById('email_' + form_id_str + '_err_msg'));
    const phone_err_msg_elem = (<HTMLInputElement>document.getElementById('phone_' + form_id_str + '_err_msg'));

    surname_err_msg_elem.className = "hidden";
    name_err_msg_elem.className = "hidden";
    email_err_msg_elem.className = "hidden";
    phone_err_msg_elem.className = "hidden";

    if (form_id_str == "pp") {
        const proj_name_elem = (<HTMLInputElement>document.getElementById('proj_name_' + form_id_str));
        const proj_desc_elem = (<HTMLInputElement>document.getElementById('proj_desc_' + form_id_str));
        proj_name_elem.value = "";
        proj_desc_elem.value = "";
        proj_name_elem.className = "contact_us_form_input";
        proj_desc_elem.className = "contact_us_form_input";
        const proj_name_err_msg_elem = (<HTMLInputElement>document.getElementById('proj_name_' + form_id_str + '_err_msg'));
        proj_name_err_msg_elem.className = "hidden";
    }

    if (form_id_str == "wwu") {
        const brief_intro_elem = (<HTMLInputElement>document.getElementById('brief_intro_' + form_id_str));
        brief_intro_elem.value = "";
        brief_intro_elem.className = "contact_us_form_input";
    }
}

/// Function hides all other tabs and shows only dialog box with "Form sent" message
///
/// Function is called when form is sent successfully
function showFormSentDialogBox() {
    const dialog_box: HTMLElement | null = (<HTMLInputElement>document.getElementById('form_sent_dialog_box')) as HTMLElement;
    const info_box: HTMLElement | null = document.getElementById("info_box") as HTMLElement;
    const work_with_us: HTMLElement | null = document.getElementById("work_with_us") as HTMLElement;
    const propose_project: HTMLElement | null = document.getElementById("propose_project") as HTMLElement;

    dialog_box.style.display = "block";
    info_box.style.display = "none";
    work_with_us.style.display = "none";
    propose_project.style.display = "none";

    const info_tab: HTMLElement | null = document.getElementById("info");
    const work_tab: HTMLElement | null = document.getElementById("work");
    const propose_tab: HTMLElement | null = document.getElementById("propose");

    info_tab!.className = info_tab!.className.replace("_active", "");
    work_tab!.className = work_tab!.className.replace("_active", "");
    propose_tab!.className = propose_tab!.className.replace("_active", "");
}

/// @param body_string - stringified body of the request
/// @returns true if all fields are present, false otherwise
/// Function checks if all the shared form fields are present
function backendFormPartialCheck(body_string: string) {
    return !(!body_string.includes('name') || !body_string.includes('surname') || !body_string.includes('email') || !body_string.includes('phone'));
}

/// Tab selection function
///
/// Only used in contact_us.vue
function tab_selection(clicked: any) {
    const info_box: HTMLElement | null = document.getElementById("info_box");
    const work_with_us: HTMLElement | null = document.getElementById("work_with_us");
    const propose_project: HTMLElement | null = document.getElementById("propose_project");
    const dialog_box: HTMLElement | null = (<HTMLInputElement>document.getElementById('form_sent_dialog_box'));

    const info_tab: HTMLElement | null = document.getElementById("info");
    const work_tab: HTMLElement | null = document.getElementById("work");
    const propose_tab: HTMLElement | null = document.getElementById("propose");

    if (clicked.currentTarget.id == "info") {
        info_box!.style.display = "block";
        work_with_us!.style.display = "none";
        propose_project!.style.display = "none";
        dialog_box!.style.display = "none";
    } else if (clicked.currentTarget.id == "work") {
        info_box!.style.display = "none";
        work_with_us!.style.display = "block";
        propose_project!.style.display = "none";
        dialog_box!.style.display = "none";
    } else if (clicked.currentTarget.id == "propose") {
        info_box!.style.display = "none";
        work_with_us!.style.display = "none";
        propose_project!.style.display = "block";
        dialog_box!.style.display = "none";
    }

    info_tab!.className = info_tab!.className.replace("_active", "");
    work_tab!.className = work_tab!.className.replace("_active", "");
    propose_tab!.className = propose_tab!.className.replace("_active", "");

    clicked.currentTarget.className += "_active";
}

// export functions
export {
    testSurnameBox,
    testNameBox,
    testEmailBox,
    testPhoneBox,
    testProjNameBox,
    checkAndSendForm,
    clearForm,
    tab_selection,
    backendFormPartialCheck
};