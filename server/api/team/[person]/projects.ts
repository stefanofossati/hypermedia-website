import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Person, Project} from "~/model/Types";

export default async function eventHandler(event: any) {
    // get the supabase client
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    // get the person's name and surname from the context
    const nameSurname: string[] = (event.context.params.person as string).split('_');

    // get the person's id from the database
    // @ts-ignore
    const {data, error}: { data: Person } = await clientDB
        .from('team')
        .select('id')
        .eq('name', nameSurname[0])
        .eq('surname', nameSurname[1])
        .limit(1)
        .single();

    // get the person's related projects from the database
    //@ts-ignore
    const {data: dataProj, error: errorProj}: { data: Project[] } = await clientDB
        .from('projects')
        .select('project_title, main_image, short_description')
        .eq('supervisor', data.id);


    if (data && dataProj) {
        return dataProj;
    } else if (error || errorProj) {
        throw createError({statusCode: 500, statusMessage: "Error from person-projects get"});
    } else {
        throw createError({statusCode: 404, statusMessage: "Not found"});
    }
}