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
        .select("id, project_title, project_description, start_date, end_date, supervisor, budget")
        .eq('project_title', project_title)
        .limit(1)
        .single();
    if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form id-get"});
    }
    if (data) {
        return data;
    }
}