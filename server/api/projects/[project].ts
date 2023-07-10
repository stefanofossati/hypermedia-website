import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Project} from "~/model/Types";

export default async function eventHandler(event: any) {
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);
    const project_title: string = event.context.params.project;

    // @ts-ignore
    const {data, error}: { data: Project } = await clientDB
        .from('projects')
        .select("project_title, short_description, project_description, start_date, end_date, team(id, name, surname), budget, main_image, gallery_images, areas(area, area_title, area_color)")
        .eq('project_title', project_title)
        .limit(1)
        .single();

    if (data) {
        return data;
    } else if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form project_title get"});
    }else {
        throw createError({statusCode: 404, statusMessage: "Not found"});
    }

}