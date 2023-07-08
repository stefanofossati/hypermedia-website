import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Project} from "~/model/Types";

export default async function eventHandler(event: any) {
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    // @ts-ignore
    const {data, error}: { data: AboutUs[] } = await clientDB
        .from('about_us')
        .select("id, title, subtitle, paragraph, image_url, color, icon, alternative_text")
        .order('id', {ascending: true});
    if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form get"});
    }
    if (data) {
        return data;
    }
}