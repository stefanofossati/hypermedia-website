import {useFetch} from "nuxt/app";

function testSurnameBox(form_id_str: string) {
    const surname_elem = (<HTMLInputElement>document.getElementById('sname_' + form_id_str));
    const surname_err_msg_elem = (<HTMLInputElement>document.getElementById('sname_' + form_id_str + '_err_msg'));
    const surname = surname_elem.value;

    if (checkName(surname)) {
        surname_elem.className = "contact_us_form_input_green";
        surname_err_msg_elem.className = "hidden";
        return true;
    } else {
        surname_elem.className = "contact_us_form_input_red"
        surname_err_msg_elem.className = "contact_us_form_error_message";
        return false;
    }
}

function testNameBox(form_id_str: string) {
    const name_elem = (<HTMLInputElement>document.getElementById('fname_' + form_id_str));
    const name_err_msg_elem = (<HTMLInputElement>document.getElementById('fname_' + form_id_str + '_err_msg'));
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

function checkName(name: string) {
    if (name == null || name == "") {
        return false;
    }
    return name.match("^[a-zA-Z]+$");
}

function checkEmail(email: string) {
    if (email == null || email == "") {
        return false;
    }
    return email.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
}

function checkPhone(phone: string) {
    if (phone == null) {
        return true;
    }
    return phone.match(/^[+]?[\\s./0-9]*[(]?[0-9]{1,4}[)]?[-\\s./0-9]*$/g);
}

async function checkAndSendForm(form_id_str: string) {
    if (testSurnameBox(form_id_str) && testNameBox(form_id_str) && testEmailBox(form_id_str) && testPhoneBox(form_id_str)) {
        if ((form_id_str == "pp" && testProjNameBox(form_id_str)) || form_id_str == "wwu") {
            // @ts-ignore
            const {data: response, error}: { data: boolean } = await useFetch(
                "api/about_us/form",
                {
                    method: "GET",
                }
            );
            console.log(response);
            //alert("Ваша заявка успешно отправлена!");
        }
    }
}

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

// export functions
export {
    testSurnameBox,
    testNameBox,
    testEmailBox,
    testPhoneBox,
    testProjNameBox,
    checkAndSendForm,
    clearForm
};