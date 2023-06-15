export interface Person {
    id: number;
    name: string;
    age: number;
    address: string;
    phone: string;
    email: string;
    img: string;
    pitch: string;
}

export interface Project {
    id: number;
    project_title: string;
    short_description: string;
    project_description: string;
    start_date: Date;
    end_date: Date;
    supervisor: string;
    budget: number;
    tags: string[];
    main_image: string;
}