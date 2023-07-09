import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Person} from "~/model/Types";

export default async function eventHandler(event: any): Promise<Person[]> {
    // get the supabase client
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    // get all the people's data from the database
    // @ts-ignore
    const {data, error}: { data: Person[] } = await clientDB
        .from('team')
        .select('name, surname, img, role')
        .order('id', {ascending: true});

    if (data) {
        return data;
    } else if (error) {
        throw createError({statusCode: 500, statusMessage: "Error from people get"});
    } else {
        throw createError({statusCode: 404, statusMessage: "Not found"});
    }
}