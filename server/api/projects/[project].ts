import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
// @ts-ignore
import {CompatibilityEvent} from 'h3';
import {Project} from "~/model/Types";

export default async function eventHandler(event: CompatibilityEvent) {
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);
    const project_title: string = event.context.params.project;

    const {data, error} = await clientDB
        .from('projects')
        .select("id, project_title, project_description")
        .eq('project_title', project_title)
        .limit(1)
        .single();
    if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form id-get"});
    }
    if (data) {
        return <Project>{
            id: data.id,
            project_title: data.project_title,
            project_description: data.project_description
        }
    }
}