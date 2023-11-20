interface Products {
    products: Product[];
}

//---------Product---------
interface Product {
    id: number;
    attributes: Attributes;
}

interface Attributes {
    title: string;
    company: string;
    description: string;
    category: string;
    image: string;
    price: number;
    shipping: boolean;
    featured: boolean;
    colors: string[]; //Array<string>
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}


// -----------SectionTitle-------
interface SectionTitleProps {
    text: string;
}


//------ProductsLoader------------

interface ProductsLoaderResponse {
    products: Product[];
    meta: Meta; 
    companies: string[];
    categories: string; 
    params: Params;
}

interface Meta {
    pagination: Pagination;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

interface Params {
    search: string;
    category: string;
    company: string;
    order: string;
    price: string;
    shipping?: string;
}