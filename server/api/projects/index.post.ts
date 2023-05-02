import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from "#supabase/server";
import {readBody} from 'h3';


export default async function defineEventHandler(event: any){
    const clientDB : SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    const body = await readBody(event);
    let data: any;
    try{
        data = await clientDB.from('projects').insert([{
            name: body.name,
        }])
        console.log(data);
    }catch (error){
        throw new Error("Error from post");
    }

    return data;
}


