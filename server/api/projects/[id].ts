import {SupabaseClient } from "@supabase/supabase-js";
// @ts-ignore
import {serverSupabaseClient} from '#supabase/server';
export default async function defineEventHandler(event: any){
    const id: number = event.context.params.id
    const clientDB : SupabaseClient<any, "public", any> = serverSupabaseClient(event);

    let data: any;
    try{
        data  = await clientDB.from('projects').select("id, project_title, short_description").eq('id', id).limit(1).single();
    }catch (error){
        throw new Error("Error form get");
    }

    return data
}