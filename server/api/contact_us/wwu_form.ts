import {createError} from "nuxt/app";
import {backendFormPartialCheck} from "~/composables/form_script";

export default async function eventHandler(event: any) {
    // @ts-ignore
    const body = await readBody(event);
    const body_string = JSON.stringify(body);
    //console.log(body_string);

    if (!backendFormPartialCheck(body_string) || !body_string.includes('brief_intro')) {
        throw createError({statusCode: 500, statusMessage: "Invalid form"})
    }

    return {statusCode: 200, statusMessage: "OK"}
}