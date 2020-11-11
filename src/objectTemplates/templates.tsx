export class Book {
    title: string = ''
    rating ? : number = undefined
    author ? : Author = undefined
    publicationDate ? : string = undefined
    image ? : string = ''
    isbn ? : string = undefined
    textReviewsCount ? : number = undefined
    linkToGoodReads ? : string = undefined
    pages ? : number = undefined
    format ? : string = undefined
    description ? : string = undefined
    ratingCounts ?: number = undefined
    constructor(title: string, rating: number,
        author ? : Author,
        publicationDate ? : string,
        image ? : string,
        isbn ? : string,
        textReviewsCount ? : number,
        linkToGoodReads ? : string,
        pages ? : number,
        format ? : string,
        description ? : string,
        ratingCounts ?: number
    ) {
        this.title = title
        this.rating = rating
        this.author = author
        this.publicationDate = publicationDate
        this.image = image
        this.isbn = isbn
        this.textReviewsCount = textReviewsCount
        this.linkToGoodReads = linkToGoodReads
        this.pages = pages
        this.format = format
        this.description = description
        this.ratingCounts = ratingCounts
    }
}

export class Author {
    id: number
    fullName: string
    fansCount ? : number
    authorFollowers ? : number
    aboutInfo ? : string
    image ? : string
    hometown ? : String
    books ? : Book[] = []
    constructor(
        id: number,
        fullName: string,
        fansCount ? : number,
        authorFollowers ? : number,
        aboutInfo ? : string,
        image ? : string,
        hometown ? : string,
        books ?: Book[]
    ) {
        this.fullName = fullName
        this.id = id
        this.fansCount = fansCount
        this.authorFollowers = authorFollowers
        this.aboutInfo = aboutInfo
        this.image = image
        this.hometown = hometown
        this.books = books
    }
}