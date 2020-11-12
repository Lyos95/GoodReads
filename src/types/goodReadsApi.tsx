export type searchBookApiBooks = {
    average_rating:number,
    best_book:searchBookApiBooks_Book,
    books_count:number,
    id:number,
    original_publication_day:number,
    original_publication_month:number,
    original_publication_year:number,
    rating_count:number,
    text_reviews_count:number
}


export type searchBookApiBooks_Book = {
    author:searchBookApi_Books_Author,
    id:number,
    image_url:string,
    small_image_url:string,
    title:string
}

export type searchBookApi_Books_Author = {
    id:number,
    name:string
}



export type authorShowApi_Author = {
    about:string,
    author_followers_count:number,
    books: {book:authorShowApi_Book[]|authorShowApi_Book},
    born_at: string,
    died_at: string,
    fans_count: number,
    gender: string,
    goodreads_author: string,
    hometown: string,
    id:number,
    image_url:string,
    influences:string,
    large_image_url:string,
    link: string,
    name: string,
    small_image_url:string,
    works_count:number
}

export type authorShowApi_Book = {
    authors: any,
    average_rating:number,
    description:string,
    edition_information:string,
    format:string,
    id:number,
    image_url:string,
    isbn:number,
    isbn13:number,
    large_image_url:string,
    link:string,
    num_pages:number,
    publication_day:number,
    publication_month:number,
    publication_year:number,
    published:number,
    publisher:string,
    ratings_count:number,
    small_image_url:string,
    text_reviews_count:number,
    title:string,
    title_without_series:string,
    uri:string,
    work:any
}