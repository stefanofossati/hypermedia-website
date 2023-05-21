import {SupabaseClient } from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
import { createError } from "nuxt/app";

export default async function defineEventHandler(event: any){
    const clientDB : SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    let data: any;
    try{
        data  = await clientDB.from('projects').select("id, project_title, project_description");
    }catch (error){
        throw createError({statusCode: 500, statusMessage:"Error form get"});
    }
    return data.data;
};



