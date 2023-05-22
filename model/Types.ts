export interface Person {
    name: string;
    age: number;
    address: string;
    phone: string;
    email: string;
    img: string;
}

export interface Project {
    id: number;
    project_title: string;
    project_description: string;
    start_date?: Date;
    end_date?: Date;
    supervisor?: string;
    budget?: number;
    tags: string[];
}