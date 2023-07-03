import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Person} from "~/model/Types";

export default async function eventHandler(event: any) {
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    const nameSurname: string[] = (event.context.params.person as string).split('_');

    // @ts-ignore
    const {data, error}: { data: Person } = await clientDB
        .from('team')
        .select('name, surname, role, age, address, phone, img, email, pitch')
        .eq('name', nameSurname[0])
        .eq('surname', nameSurname[1])
        .limit(1)
        .single();

    if (data) {
        return data;
    } else if (error) {
        throw createError({statusCode: 500, statusMessage: "Error form id-get"});
    } else {
        throw createError({statusCode: 404, statusMessage: "Not found"});
    }
}