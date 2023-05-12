import {SupabaseClient } from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import { createError } from "nuxt/app";
export default async function defineEventHandler(event: any){
    const id: number = event.context.params.id
    const clientDB : SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    let data: any;
    try{
        data  = await clientDB.from('projects').select("id, project_title, short_description").eq('id', id).limit(1).single();
    }catch (error){
        throw createError({statusCode:500, statusMessage:"Error form id-get"});
    }

    return data
}