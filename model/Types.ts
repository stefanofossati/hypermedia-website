export interface Person {
    id: number;
    name: string;
    surname: string;
    age: number;
    address: string;
    phone: string;
    email: string;
    img: string;
    pitch: string;
}

export interface Area {
    area_title: string;
    area_description: string;
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
    supervisor: string;
    areas: AreaProjectPreview[];
    budget: number;
    main_image: string;
    gallery_images: ImageGallery[];
    most_relevant: number;
}

export interface ImageGallery{
    description: string;
    url: string;
}

export interface AreaProjectPreview {
    area_title: string;
    area_color: string;
}

export interface ProjectAreaPreview{
    project_title: string;
    main_image: string;
}