import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
// @ts-ignore
import {CompatibilityEvent} from 'h3';
import {Project} from "~/model/Types";

export default async function eventHandler(event: CompatibilityEvent) {
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    const {data, error} = await clientDB
        .from('projects')
        .select("id, project_title, project_description, tags");
    if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form get"});
    }
    if (data) {
        return data.map((project: Project) => {
            return {
                id: project.id,
                project_title: project.project_title,
                project_description: project.project_description,
                tags: project.tags
            }
        }, []);
    }
}



