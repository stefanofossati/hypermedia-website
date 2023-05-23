import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Person} from "~/model/Types";

export default async function eventHandler(event: any) {
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    // @ts-ignore
    const {data, error}: { data: Person[] } = await clientDB
        .from('team')
        .select('id, name, img');
    if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form get"});
    }
    if (data) {
        return data;
    }
}