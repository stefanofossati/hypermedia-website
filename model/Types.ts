// Definition of the interfaces used in the project that are reflected into the database

export interface Person {
    id: number;
    name: string;
    surname: string;
    role: string;
    age: number;
    address: string;
    phone: string;
    email: string;
    img: string;
    pitch: string[];
}

export interface Area {
    area: string,
    area_title: string;
    area_description: string[];
    area_color: string;
    area_image: string[];
    projects: ProjectAreaPreview[];
}

export interface Project {
    project_title: string;
    short_description: string;
    project_description: string[];
    start_date: Date;
    end_date: Date;
    team: ProjectSupervisor;
    areas: AreaProjectPreview[];
    budget: number;
    main_image: string;
    gallery_images: ImageGallery[];
    most_relevant: number;
}

// Definition of useful interfaces not related to the database

export interface ImageGallery {
    description: string;
    url: string;
}

export interface AreaProjectPreview {
    area: string;
    area_title: string;
    area_color: string;
}

export interface ProjectAreaPreview {
    project_title: string;
    main_image: string;
    short_description: string;
    most_relevant: number;
}

export interface ProjectSupervisor {
    id: number;
    name: string;
    surname: string;
}

export interface AboutUs {
    id: number;
    title: string;
    subtitle: string;
    paragraph: string;
    image_url: string;
    color: string;
    icon: string;
    alternative_text: string;
}

export interface PPFormData {
    name: string;
    surname: string;
    email: string;
    phone: string;
    proj_name: string;
    proj_desc: string;
}

export interface WWUFormData {
    name: string;
    surname: string;
    email: string;
    phone: string;
    brief_intro: string;
}

export interface FormResponse {
    statusCode: number;
    statusMessage: string;
}