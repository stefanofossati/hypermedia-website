import {SupabaseClient } from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';


export default async function defineEventHandler(event: any){
    const clientDB : SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    let data: any;
    try{
        data  = await clientDB.from('projects').select("id, name");
    }catch (error){
        throw new Error("Error form get");
    }

    return data;
};



