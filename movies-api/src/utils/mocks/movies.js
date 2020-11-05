const moviesMock = [
    {
        "id": "8308fb92-eff0-4893-9a73-a68d70d12520",
        "title": "American Haunting, An",
        "year": 2005,
        "cover": "http://dummyimage.com/177x232.jpg/cc0000/ffffff",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "duration": 20,
        "contentRating": "NC-17",
        "source": "https://drupal.org/tempor/turpis.json?justo=volutpat&aliquam=sapien&quis=arcu&turpis=sed&eget=augue&elit=aliquam&sodales=erat&scelerisque=volutpat&mauris=in&sit=congue&amet=etiam&eros=justo&suspendisse=etiam&accumsan=pretium&tortor=iaculis&quis=justo&turpis=in&sed=hac&ante=habitasse&vivamus=platea&tortor=dictumst&duis=etiam&mattis=faucibus&egestas=cursus&metus=urna&aenean=ut&fermentum=tellus&donec=nulla&ut=ut&mauris=erat&eget=id&massa=mauris&tempor=vulputate",
        "tags": [
            "Drama|Romance",
            "Comedy",
            "Drama|Horror"
        ]
    },
    {
        "id": "e6f08988-c728-4c12-9976-1fbe582c2391",
        "title": "Molly Maxwell",
        "year": 2008,
        "cover": "http://dummyimage.com/195x157.png/cc0000/ffffff",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "duration": 12,
        "contentRating": "PG-13",
        "source": "https://ehow.com/vestibulum/aliquet/ultrices/erat/tortor/sollicitudin.js?lectus=quis&pellentesque=lectus&eget=suspendisse&nunc=potenti&donec=in&quis=eleifend",
        "tags": [
            "Documentary",
            "Action|Drama|Fantasy|Horror|Mystery|Sci-Fi|Thriller",
            "Action|Comedy|Crime|Western"
        ]
    },
    {
        "id": "385add2d-82b1-4339-a7cd-eb2617ca063b",
        "title": "Blood and Bones (Chi to hone)",
        "year": 2001,
        "cover": "http://dummyimage.com/122x180.jpg/dddddd/000000",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "duration": 44,
        "contentRating": "R",
        "source": "https://comcast.net/sit/amet/cursus.png?consequat=pede&nulla=malesuada&nisl=in&nunc=imperdiet&nisl=et&duis=commodo&bibendum=vulputate&felis=justo&sed=in",
        "tags": [
            "Comedy|Drama"
        ]
    },
    {
        "id": "ca737535-733c-4dc1-8a85-f60600a0ceed",
        "title": "Adios Carmen",
        "year": 1991,
        "cover": "http://dummyimage.com/116x109.bmp/5fa2dd/ffffff",
        "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "duration": 51,
        "contentRating": "G",
        "source": "http://123-reg.co.uk/eget/eleifend.xml?purus=et&aliquet=magnis&at=dis&feugiat=parturient&non=montes&pretium=nascetur&quis=ridiculus&lectus=mus&suspendisse=etiam&potenti=vel&in=augue&eleifend=vestibulum&quam=rutrum&a=rutrum&odio=neque&in=aenean&hac=auctor&habitasse=gravida&platea=sem&dictumst=praesent&maecenas=id&ut=massa&massa=id&quis=nisl&augue=venenatis&luctus=lacinia&tincidunt=aenean&nulla=sit&mollis=amet&molestie=justo&lorem=morbi&quisque=ut&ut=odio&erat=cras&curabitur=mi&gravida=pede&nisi=malesuada&at=in&nibh=imperdiet&in=et&hac=commodo&habitasse=vulputate&platea=justo&dictumst=in&aliquam=blandit&augue=ultrices",
        "tags": [
            "Documentary|War",
            "Action|Drama|Romance|War",
            "Action|Adventure|Thriller",
            "Children|Comedy",
            "Crime|Drama"
        ]
    },
    {
        "id": "15863e76-7191-449e-a1ff-3e167c1c3257",
        "title": "The Gift of Love",
        "year": 2007,
        "cover": "http://dummyimage.com/174x164.jpg/5fa2dd/ffffff",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "duration": 15,
        "contentRating": "NC-17",
        "source": "https://virginia.edu/est/lacinia/nisi.xml?justo=dui&maecenas=vel&rhoncus=nisl&aliquam=duis&lacus=ac&morbi=nibh&quis=fusce&tortor=lacus&id=purus&nulla=aliquet&ultrices=at&aliquet=feugiat&maecenas=non&leo=pretium&odio=quis&condimentum=lectus&id=suspendisse",
        "tags": [
            "Drama|War",
            "Drama|Fantasy",
            "Animation|Children",
            "Comedy"
        ]
    },
    {
        "id": "5631acef-bda8-45af-a2dd-cefa7b2f0f51",
        "title": "Grand Canyon",
        "year": 1987,
        "cover": "http://dummyimage.com/104x166.jpg/5fa2dd/ffffff",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "duration": 2,
        "contentRating": "NC-17",
        "source": "http://alibaba.com/et.xml?laoreet=eu&ut=tincidunt&rhoncus=in&aliquet=leo&pulvinar=maecenas&sed=pulvinar&nisl=lobortis&nunc=est&rhoncus=phasellus&dui=sit&vel=amet&sem=erat&sed=nulla&sagittis=tempus&nam=vivamus&congue=in&risus=felis&semper=eu&porta=sapien&volutpat=cursus&quam=vestibulum&pede=proin&lobortis=eu&ligula=mi&sit=nulla&amet=ac&eleifend=enim&pede=in&libero=tempor&quis=turpis&orci=nec&nullam=euismod&molestie=scelerisque&nibh=quam&in=turpis&lectus=adipiscing&pellentesque=lorem&at=vitae&nulla=mattis&suspendisse=nibh&potenti=ligula&cras=nec&in=sem&purus=duis&eu=aliquam&magna=convallis&vulputate=nunc&luctus=proin&cum=at&sociis=turpis&natoque=a&penatibus=pede&et=posuere&magnis=nonummy&dis=integer&parturient=non&montes=velit&nascetur=donec&ridiculus=diam&mus=neque&vivamus=vestibulum&vestibulum=eget&sagittis=vulputate&sapien=ut&cum=ultrices&sociis=vel&natoque=augue&penatibus=vestibulum&et=ante&magnis=ipsum&dis=primis&parturient=in&montes=faucibus",
        "tags": [
            "Drama|Romance",
            "Drama",
            "Documentary",
            "Comedy|Romance"
        ]
    },
    {
        "id": "819287b8-c580-4c0c-8bcc-9e06092521c7",
        "title": "Into Eternity",
        "year": 2005,
        "cover": "http://dummyimage.com/116x166.jpg/cc0000/ffffff",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "duration": 27,
        "contentRating": "G",
        "source": "https://abc.net.au/lorem/ipsum/dolor/sit/amet/consectetuer/adipiscing.js?potenti=elementum&cras=nullam&in=varius&purus=nulla&eu=facilisi&magna=cras&vulputate=non&luctus=velit&cum=nec&sociis=nisi&natoque=vulputate&penatibus=nonummy&et=maecenas&magnis=tincidunt&dis=lacus&parturient=at&montes=velit&nascetur=vivamus&ridiculus=vel&mus=nulla&vivamus=eget&vestibulum=eros&sagittis=elementum&sapien=pellentesque&cum=quisque&sociis=porta&natoque=volutpat&penatibus=erat&et=quisque&magnis=erat&dis=eros&parturient=viverra&montes=eget&nascetur=congue&ridiculus=eget&mus=semper&etiam=rutrum&vel=nulla&augue=nunc&vestibulum=purus&rutrum=phasellus&rutrum=in&neque=felis&aenean=donec&auctor=semper&gravida=sapien&sem=a&praesent=libero",
        "tags": [
            "Action|Crime|Thriller",
            "Action|Western"
        ]
    },
    {
        "id": "6e0a4a02-fcc2-4e47-a7d3-1437e6a61191",
        "title": "Waterloo",
        "year": 2002,
        "cover": "http://dummyimage.com/240x200.png/dddddd/000000",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "duration": 77,
        "contentRating": "PG-13",
        "source": "https://utexas.edu/morbi/vestibulum/velit/id/pretium.aspx?vel=aenean&augue=lectus&vestibulum=pellentesque&rutrum=eget&rutrum=nunc&neque=donec&aenean=quis&auctor=orci&gravida=eget&sem=orci&praesent=vehicula&id=condimentum&massa=curabitur&id=in&nisl=libero&venenatis=ut&lacinia=massa&aenean=volutpat&sit=convallis&amet=morbi&justo=odio&morbi=odio&ut=elementum&odio=eu&cras=interdum&mi=eu&pede=tincidunt&malesuada=in&in=leo&imperdiet=maecenas&et=pulvinar&commodo=lobortis&vulputate=est&justo=phasellus&in=sit&blandit=amet&ultrices=erat&enim=nulla&lorem=tempus&ipsum=vivamus&dolor=in&sit=felis&amet=eu&consectetuer=sapien&adipiscing=cursus&elit=vestibulum",
        "tags": [
            "Drama",
            "Drama",
            "Adventure|Children",
            "Horror",
            "Comedy|Drama"
        ]
    },
    {
        "id": "a97d42de-c95b-4a02-b0c7-c2d7cea2a5ac",
        "title": "Jamie and Jessie Are Not Together",
        "year": 2004,
        "cover": "http://dummyimage.com/128x157.jpg/5fa2dd/ffffff",
        "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "duration": 78,
        "contentRating": "R",
        "source": "http://slideshare.net/vestibulum/vestibulum/ante.jpg?porttitor=consequat&lacus=nulla&at=nisl&turpis=nunc&donec=nisl&posuere=duis&metus=bibendum&vitae=felis&ipsum=sed&aliquam=interdum&non=venenatis&mauris=turpis&morbi=enim&non=blandit&lectus=mi&aliquam=in&sit=porttitor&amet=pede&diam=justo&in=eu&magna=massa&bibendum=donec&imperdiet=dapibus&nullam=duis&orci=at&pede=velit&venenatis=eu&non=est&sodales=congue&sed=elementum",
        "tags": [
            "(no genres listed)",
            "Drama|Thriller"
        ]
    },
    {
        "id": "51e8eee6-7ddb-47ae-8292-def561194ecb",
        "title": "Prairie Fever",
        "year": 2010,
        "cover": "http://dummyimage.com/129x186.bmp/ff4444/ffffff",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "duration": 17,
        "contentRating": "PG",
        "source": "https://buzzfeed.com/quam/suspendisse/potenti/nullam/porttitor.json?vitae=nunc&mattis=purus&nibh=phasellus&ligula=in&nec=felis&sem=donec",
        "tags": [
            "Comedy|Drama|Romance",
            "Documentary",
            "Mystery|Thriller"
        ]
    },
    {
        "id": "20668c52-dc89-4613-b8b0-deafdd26277a",
        "title": "House on Carroll Street, The",
        "year": 2006,
        "cover": "http://dummyimage.com/106x139.png/cc0000/ffffff",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "duration": 25,
        "contentRating": "R",
        "source": "https://myspace.com/non/mattis/pulvinar/nulla.js?posuere=morbi&cubilia=sem&curae=mauris&duis=laoreet&faucibus=ut&accumsan=rhoncus&odio=aliquet&curabitur=pulvinar&convallis=sed&duis=nisl&consequat=nunc&dui=rhoncus&nec=dui&nisi=vel&volutpat=sem&eleifend=sed&donec=sagittis&ut=nam&dolor=congue&morbi=risus&vel=semper&lectus=porta&in=volutpat&quam=quam&fringilla=pede&rhoncus=lobortis&mauris=ligula&enim=sit&leo=amet&rhoncus=eleifend&sed=pede&vestibulum=libero&sit=quis&amet=orci&cursus=nullam&id=molestie&turpis=nibh&integer=in&aliquet=lectus&massa=pellentesque&id=at&lobortis=nulla&convallis=suspendisse&tortor=potenti&risus=cras&dapibus=in&augue=purus&vel=eu&accumsan=magna&tellus=vulputate&nisi=luctus&eu=cum&orci=sociis&mauris=natoque&lacinia=penatibus&sapien=et&quis=magnis&libero=dis&nullam=parturient&sit=montes&amet=nascetur&turpis=ridiculus&elementum=mus&ligula=vivamus&vehicula=vestibulum&consequat=sagittis&morbi=sapien&a=cum&ipsum=sociis",
        "tags": [
            "Animation|Drama|Mystery|Sci-Fi|Thriller"
        ]
    },
    {
        "id": "bcbf6324-ca3e-40db-95d6-1310b77e20be",
        "title": "Tae Guk Gi: The Brotherhood of War (Taegukgi hwinalrimyeo)",
        "year": 2009,
        "cover": "http://dummyimage.com/205x107.bmp/cc0000/ffffff",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "duration": 79,
        "contentRating": "PG-13",
        "source": "https://eventbrite.com/quam/nec/dui/luctus/rutrum/nulla.aspx?eget=ipsum&elit=praesent&sodales=blandit&scelerisque=lacinia&mauris=erat&sit=vestibulum&amet=sed&eros=magna&suspendisse=at&accumsan=nunc&tortor=commodo&quis=placerat&turpis=praesent&sed=blandit&ante=nam&vivamus=nulla&tortor=integer&duis=pede&mattis=justo&egestas=lacinia&metus=eget&aenean=tincidunt&fermentum=eget&donec=tempus&ut=vel&mauris=pede&eget=morbi&massa=porttitor&tempor=lorem&convallis=id&nulla=ligula&neque=suspendisse&libero=ornare&convallis=consequat&eget=lectus&eleifend=in&luctus=est&ultricies=risus&eu=auctor&nibh=sed&quisque=tristique&id=in&justo=tempus&sit=sit&amet=amet&sapien=sem&dignissim=fusce&vestibulum=consequat&vestibulum=nulla&ante=nisl&ipsum=nunc&primis=nisl&in=duis&faucibus=bibendum&orci=felis&luctus=sed&et=interdum&ultrices=venenatis&posuere=turpis&cubilia=enim&curae=blandit&nulla=mi&dapibus=in&dolor=porttitor&vel=pede&est=justo&donec=eu&odio=massa&justo=donec&sollicitudin=dapibus&ut=duis&suscipit=at&a=velit&feugiat=eu&et=est&eros=congue&vestibulum=elementum&ac=in&est=hac&lacinia=habitasse&nisi=platea&venenatis=dictumst&tristique=morbi&fusce=vestibulum&congue=velit&diam=id",
        "tags": [
            "Documentary",
            "Action|War"
        ]
    },
    {
        "id": "e3148857-e3ea-4e4e-9778-ae9d4f178532",
        "title": "Gasland Part II",
        "year": 1993,
        "cover": "http://dummyimage.com/187x151.bmp/5fa2dd/ffffff",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "duration": 40,
        "contentRating": "PG-13",
        "source": "https://mapquest.com/turpis/sed/ante/vivamus/tortor.png?nibh=ac&in=est&hac=lacinia&habitasse=nisi&platea=venenatis&dictumst=tristique&aliquam=fusce&augue=congue&quam=diam&sollicitudin=id&vitae=ornare&consectetuer=imperdiet&eget=sapien&rutrum=urna&at=pretium&lorem=nisl&integer=ut&tincidunt=volutpat&ante=sapien&vel=arcu&ipsum=sed&praesent=augue&blandit=aliquam&lacinia=erat&erat=volutpat&vestibulum=in&sed=congue&magna=etiam&at=justo&nunc=etiam&commodo=pretium&placerat=iaculis&praesent=justo&blandit=in&nam=hac&nulla=habitasse&integer=platea&pede=dictumst&justo=etiam&lacinia=faucibus&eget=cursus&tincidunt=urna&eget=ut&tempus=tellus&vel=nulla&pede=ut&morbi=erat&porttitor=id&lorem=mauris&id=vulputate&ligula=elementum&suspendisse=nullam&ornare=varius&consequat=nulla&lectus=facilisi&in=cras&est=non&risus=velit&auctor=nec&sed=nisi&tristique=vulputate&in=nonummy&tempus=maecenas&sit=tincidunt&amet=lacus",
        "tags": [
            "Drama",
            "Drama|Mystery|Romance|Thriller",
            "Romance|Western",
            "Thriller"
        ]
    },
    {
        "id": "dddf5bf2-f299-4c68-99d1-8ffe45a85954",
        "title": "Sex, Lies, and Videotape",
        "year": 1991,
        "cover": "http://dummyimage.com/115x188.jpg/5fa2dd/ffffff",
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "duration": 66,
        "contentRating": "NC-17",
        "source": "https://privacy.gov.au/consequat/ut.jpg?etiam=dis&justo=parturient&etiam=montes&pretium=nascetur&iaculis=ridiculus&justo=mus&in=etiam&hac=vel&habitasse=augue&platea=vestibulum&dictumst=rutrum&etiam=rutrum&faucibus=neque&cursus=aenean&urna=auctor&ut=gravida&tellus=sem&nulla=praesent&ut=id&erat=massa&id=id&mauris=nisl&vulputate=venenatis&elementum=lacinia&nullam=aenean&varius=sit&nulla=amet&facilisi=justo&cras=morbi&non=ut&velit=odio&nec=cras&nisi=mi&vulputate=pede&nonummy=malesuada&maecenas=in&tincidunt=imperdiet&lacus=et&at=commodo&velit=vulputate&vivamus=justo&vel=in&nulla=blandit&eget=ultrices&eros=enim&elementum=lorem&pellentesque=ipsum&quisque=dolor&porta=sit&volutpat=amet&erat=consectetuer&quisque=adipiscing&erat=elit&eros=proin&viverra=interdum&eget=mauris&congue=non&eget=ligula&semper=pellentesque&rutrum=ultrices&nulla=phasellus&nunc=id&purus=sapien&phasellus=in&in=sapien&felis=iaculis&donec=congue&semper=vivamus&sapien=metus&a=arcu&libero=adipiscing&nam=molestie&dui=hendrerit&proin=at&leo=vulputate&odio=vitae&porttitor=nisl&id=aenean&consequat=lectus&in=pellentesque&consequat=eget&ut=nunc&nulla=donec&sed=quis&accumsan=orci&felis=eget&ut=orci&at=vehicula&dolor=condimentum&quis=curabitur&odio=in&consequat=libero&varius=ut&integer=massa&ac=volutpat&leo=convallis&pellentesque=morbi&ultrices=odio&mattis=odio",
        "tags": [
            "Crime|Drama|Thriller",
            "Drama|Romance",
            "Comedy"
        ]
    }
];

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0]);
    }
}

module.exports = {
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock,
};
