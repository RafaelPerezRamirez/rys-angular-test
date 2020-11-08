export class ArtistInformation{
    idArtist: number;
    strArtist: string;
    strArtistFanart: string;
    strBiographyEN: string;
    strGender: string;

    constructor(data: any){
        this.init(data.artists[0])
    }

    init(data: any){
        if(data){
            this.idArtist = data['idArtist']
            this.strArtist = data['strArtist']
            this.strArtistFanart = data['strArtistFanart']
            this.strBiographyEN = data['strBiographyEN']
            this.strGender = data['strGender']
        }
    }
}