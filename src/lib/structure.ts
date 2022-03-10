interface Common {
    id: number;
    title: string;
}


export interface Blog extends Common {
    content: string;
}


export interface Movie extends Common {
    preview: string;
    description: string
}