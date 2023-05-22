import {SupabaseClient} from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from "#supabase/server";
import {readBody} from 'h3';
import { createError } from "nuxt/app";


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
        throw createError({statusCode: 500, statusMessage:"Error form post"});
    }

    return data;
}


