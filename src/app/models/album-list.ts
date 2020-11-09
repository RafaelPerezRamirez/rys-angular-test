export class AlbumList{
    strAlbum: string;
    intYearReleased: string;
    strAlbumThumb: string;
    strDescriptionEN: string;

    constructor(data: any){
        this.init(data)
    }

    init(data: any){
        if(data){
            this.strAlbum = data['strAlbum']
            this.intYearReleased = data['intYearReleased']
            this.strAlbumThumb = data['strAlbumThumb']
            this.strDescriptionEN = data['strDescriptionEN']

        }
    }
}