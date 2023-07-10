import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Area} from "~/model/Types";

export default async function eventHandler(event: any) {
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    // @ts-ignore
    const {data, error}: { data: Area[] } = await clientDB
        .from('areas')
        .select("area, area_title, area_image, area_color, projects(project_title, main_image)");

    if (data) {
        return data;
    }else if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form areas get"});
    }else {
        throw createError({statusCode: 404, statusMessage: "Not found"});
    }

}
