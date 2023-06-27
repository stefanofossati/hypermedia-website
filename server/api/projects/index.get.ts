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
        .select("project_title, short_description, main_image, areas(area_title, area_color)");
    if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form get"});
    }
    if (data) {
        return data;
    }
}
