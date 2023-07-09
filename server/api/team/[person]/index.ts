import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import {createError} from "nuxt/app";
import {Person} from "~/model/Types";

export default async function eventHandler(event: any) {
    // get the supabase client
    const clientDB: SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    // get the person's name and surname from the context
    const nameSurname: string[] = (event.context.params.person as string).split('_');

    // get the person's data from the database
    // @ts-ignore
    const {data, error}: { data: Person } = await clientDB
        .from('team')
        .select('id, name, surname, role, age, address, phone, img, email, pitch')
        .eq('name', nameSurname[0])
        .eq('surname', nameSurname[1])
        .limit(1)
        .single();

    if (data) {
        return data;
    } else if (error) {
        throw createError({statusCode: 500, statusMessage: "Error from person get"});
    } else {
        throw createError({statusCode: 404, statusMessage: "Not found"});
    }
}