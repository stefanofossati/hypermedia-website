import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Area} from "~/model/Types";

export default async function eventHandler(event: any) {
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);
    const area_title: string = event.context.params.area;

    // @ts-ignore
    const {data, error}: { data: Area } = await clientDB
        .from('areas')
        .select("area_title, area_description")
        .eq('area_title', area_title)
        .limit(1)
        .single();
    if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form id-get"});
    }
    if (data) {
        return data;
    }
}