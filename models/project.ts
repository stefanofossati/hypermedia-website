export interface project{
    id: number,
    project_title: string,
    project_description: string,
    start_date: Date
    end_date: Date,
    supervisor: string,
    budget: number,
    tags: string[]

}