import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Area} from "~/model/Types";

export default async function eventHandler(event: any) {
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);
    const area: string = event.context.params.area;

    // @ts-ignore
    const {data, error}: { data: Area } = await clientDB
        .from('areas')
        .select("area, area_title, area_description, area_color, area_image, projects(project_title, main_image, short_description, most_relevant)")
        .eq('area', area)
        .limit(1)
        .single();

    if (data) {
        return data;
    }else if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form area_id get"});
    }else {
        throw createError({statusCode: 404, statusMessage: "Not found"});
    }

}