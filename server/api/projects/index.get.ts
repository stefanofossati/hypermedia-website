import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Project} from "~/model/Types";

export default async function eventHandler(event: any) {
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    // @ts-ignore
    const {data, error}: { data: Project[] } = await clientDB
        .from('projects')
        .select("project_title, short_description, main_image, most_relevant, areas(area, area_title, area_color)");

    if (data) {
        return data;
    } else if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form all projects get"});
    } else {
        throw createError({statusCode: 404, statusMessage: "Not found"});
    }

}
