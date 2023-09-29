export const internalCollections = [
  'Parapety syntetyczne',
  'Parapety marmurowe',
  'Parapety PCV',
  'Parapety MDF',
  'Parapety kwarcowe',
  'Parapety granitowe',
] as const

export const externalCollections = [
  'Parapety aluminiowe',
  'Parapety stalowe',
  'Parapety syntetyczne',
] as const

export type Windowsill = {
  img: string
  desc: string
  color: string
} & (InternalWindowsill | ExternalWindowsill)

type InternalWindowsill = {
  category: 'Parapety wewnętrzne'
  collection: (typeof internalCollections)[number]
}

type ExternalWindowsill = {
  category: 'Parapety zewnętrzne'
  collection: (typeof externalCollections)[number]
}

const windowsills: Windowsill[] = [
  // Parapety wewnętrzne - Parapety MDF
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/antracyt.png',
    color: 'Antracyt',
    desc: 'Parapet w kolorze antracytu',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/beton.png',
    color: 'Beton',
    desc: 'Parapet w kolorze betonu',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/biale-drewno.png',
    color: 'Białe drewno',
    desc: 'Parapet w kolorze białego drewna',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/bialy.png',
    color: 'Biały',
    desc: 'Parapet w kolorze białym',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/dab-bielony.png',
    color: 'Dąb bielony',
    desc: 'Parapet w kolorze dębu bielonego',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/dab-naturalny.png',
    color: 'Dąb naturalny',
    desc: 'Parapet w kolorze naturalnego dębu',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/dab-sonoma.png',
    color: 'Dąb sonoma',
    desc: 'Parapet w kolorze dębu sonoma',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/granit.png',
    color: 'Granit',
    desc: 'Parapet w kolorze granitu',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/jablon.png',
    color: 'Jabłoń',
    desc: 'Parapet w kolorze jabłoni',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/dab-jasny.png',
    color: 'Dąb jasny',
    desc: 'Parapet w kolorze jasnego dębu',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/mahon.png',
    color: 'Mahoń',
    desc: 'Parapet w kolorze mahoni',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/marmur-jasny.png',
    color: 'Marmur jasny',
    desc: 'Parapet w kolorze jasnego marmuru',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/marmurek-bialy.png',
    color: 'Marmurek biały',
    desc: 'Parapet w kolorze białego marmurku',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/orzech.png',
    color: 'Orzech',
    desc: 'Parapet w kolorze orzecha',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/perla-luska.png',
    color: 'Perła łuska',
    desc: 'Parapet w kolorze perły łuskowej',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/ral7016.png',
    color: 'RAL 7016',
    desc: 'Parapet w kolorze RAL 7016',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/dab-winchester.png',
    color: 'Dąb winchester',
    desc: 'Parapet w kolorze dębu winchester',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/dab-wotan.png',
    color: 'Dąb wotan',
    desc: 'Parapet w kolorze dębu wotan',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety MDF',
    img: '/img/parapety-wewnetrzne/parapety-mdf/dab-zloty.png',
    color: 'Złoty dąb',
    desc: 'Parapet w kolorze złotego dębu',
  },

  // Parapety wewnętrzne - Parapety PCV
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety PCV',
    img: '/img/parapety-wewnetrzne/parapety-pcv/antracyt.png',
    color: 'Antracyt',
    desc: 'Parapet w kolorze antracytu',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety PCV',
    img: '/img/parapety-wewnetrzne/parapety-pcv/bialy.png',
    color: 'Biały',
    desc: 'Parapet w kolorze białym',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety PCV',
    img: '/img/parapety-wewnetrzne/parapety-pcv/dab-jasny.png',
    color: 'Dąb jasny',
    desc: 'Parapet w kolorze jasnego dębu',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety PCV',
    img: '/img/parapety-wewnetrzne/parapety-pcv/mahon.png',
    color: 'Mahoń',
    desc: 'Parapet w kolorze mahoni',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety PCV',
    img: '/img/parapety-wewnetrzne/parapety-pcv/marmurek.png',
    color: 'Marmurek',
    desc: 'Parapet w kolorze marmurku',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety PCV',
    img: '/img/parapety-wewnetrzne/parapety-pcv/olcha.png',
    color: 'Olcha',
    desc: 'Parapet w kolorze olchy',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety PCV',
    img: '/img/parapety-wewnetrzne/parapety-pcv/orzech.png',
    color: 'Orzech',
    desc: 'Parapet w kolorze orzecha',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety PCV',
    img: '/img/parapety-wewnetrzne/parapety-pcv/dab-winchester.png',
    color: 'Dąb winchester',
    desc: 'Parapet w kolorze dębu winchester',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety PCV',
    img: '/img/parapety-wewnetrzne/parapety-pcv/dab-zloty.png',
    color: 'Złoty dąb',
    desc: 'Parapet w kolorze złotego dębu',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety PCV',
    img: '/img/parapety-wewnetrzne/parapety-pcv/dab-bagienny.png',
    color: 'Dąb bagienny',
    desc: 'Parapet w kolorze bagiennego dębu',
  },

  // Parapety wewnętrzne - Parapety syntetyczne
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/b0.png',
    color: 'B0',
    desc: 'Parapet w kolorze B0',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/g1.png',
    color: 'G1',
    desc: 'Parapet w kolorze G1',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/g5.png',
    color: 'G5',
    desc: 'Parapet w kolorze G5',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/g7.png',
    color: 'G7',
    desc: 'Parapet w kolorze G7',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/g9.png',
    color: 'G9',
    desc: 'Parapet w kolorze G9',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/g11.png',
    color: 'G11',
    desc: 'Parapet w kolorze G11',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/g12.png',
    color: 'G12',
    desc: 'Parapet w kolorze G12',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/g13.png',
    color: 'G13',
    desc: 'Parapet w kolorze G13',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/g17.png',
    color: 'G17',
    desc: 'Parapet w kolorze G17',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/nb1.png',
    color: 'NB1',
    desc: 'Parapet w kolorze NB1',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/nb2.png',
    color: 'NB2',
    desc: 'Parapet w kolorze NB2',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/nb3.png',
    color: 'NB3',
    desc: 'Parapet w kolorze NB3',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/b0-proste.png',
    color: 'B0, zakończenie proste',
    desc: 'Parapet w kolorze B0 z prostym zakończeniem',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/nb1-proste.png',
    color: 'NB1, zakończenie proste',
    desc: 'Parapet w kolorze NB1 z prostym zakończeniem',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/nb2-proste.png',
    color: 'NB2, zakończenie proste',
    desc: 'Parapet w kolorze NB2 z prostym zakończeniem',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-wewnetrzne/parapety-syntetyczne/nb3-proste.png',
    color: 'NB3, zakończenie proste',
    desc: 'Parapet w kolorze NB3 z prostym zakończeniem',
  },

  // Parapety wewnętrzne - Parapety granitowe
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety granitowe',
    img: '/img/parapety-wewnetrzne/parapety-granitowe/solarius.png',
    color: 'Solarius',
    desc: 'Parapet w kolorze solarius',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety granitowe',
    img: '/img/parapety-wewnetrzne/parapety-granitowe/star-galaxy.png',
    color: 'Star galaxy',
    desc: 'Parapet w kolorze star galaxy',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety granitowe',
    img: '/img/parapety-wewnetrzne/parapety-granitowe/ubatuba-green.png',
    color: 'Ubatuba green',
    desc: 'Parapet w kolorze ubatuba green',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety granitowe',
    img: '/img/parapety-wewnetrzne/parapety-granitowe/viscount-white.png',
    color: 'Viscount white',
    desc: 'Parapet w kolorze viscount white',
  },

  // Parapety wewnętrzne - Parapety kwarcowe
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety kwarcowe',
    img: '/img/parapety-wewnetrzne/parapety-kwarcowe/carrara.png',
    color: 'Carrara',
    desc: 'Parapet w kolorze carrara',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety kwarcowe',
    img: '/img/parapety-wewnetrzne/parapety-kwarcowe/cristal-white.png',
    color: 'Cristal white',
    desc: 'Parapet w kolorze cristal white',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety kwarcowe',
    img: '/img/parapety-wewnetrzne/parapety-kwarcowe/pure-black.png',
    color: 'Pure black',
    desc: 'Parapet w kolorze pure black',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety kwarcowe',
    img: '/img/parapety-wewnetrzne/parapety-kwarcowe/urban-grey.png',
    color: 'Urban grey',
    desc: 'Parapet w kolorze urban grey',
  },

  // Parapety wewnętrzne - Parapety marmurowe
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/arabescato-bianco.png',
    color: 'Arabescato bianco (Calacatta)',
    desc: 'Parapet w kolorze arabescato bianco (calacatta)',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/baltic-grey.png',
    color: 'Baltic grey',
    desc: 'Parapet w kolorze baltic grey',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/bianco-ambra.png',
    color: 'Bianco ambra',
    desc: 'Parapet w kolorze bianco ambra',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/bianco-carrara.png',
    color: 'Bianco carrara',
    desc: 'Parapet w kolorze bianco carrara',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/bianco-ghiacio.png',
    color: 'Bianco ghiacio',
    desc: 'Parapet w kolorze bianco ghiacio',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/bianco-neve.png',
    color: 'Bianco neve (Crystal white)',
    desc: 'Parapet w kolorze bianco neve (crystal white)',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/botticino.png',
    color: 'Botticino',
    desc: 'Parapet w kolorze botticino',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/breccia-aurora.png',
    color: 'Breccia aurora',
    desc: 'Parapet w kolorze breccia aurora',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/breccia-sarda.png',
    color: 'Breccia sarda',
    desc: 'Parapet w kolorze breccia sarda',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/carrara-micro.png',
    color: 'Carrara micro',
    desc: 'Parapet w kolorze carrara micro',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/fillo-brown.png',
    color: 'Fillo brown',
    desc: 'Parapet w kolorze fillo brown',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/fior-di-pesco.png',
    color: 'Fior di pesco',
    desc: 'Parapet w kolorze fior di pesco',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/fiorito.png',
    color: 'Fiorito (Venus)',
    desc: 'Parapet w kolorze fiorito (venus)',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/grigio-carnico.png',
    color: 'Grigio carnico',
    desc: 'Parapet w kolorze grigio carnico',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/madreperla.png',
    color: 'Madreperla',
    desc: 'Parapet w kolorze madreperla',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/misty-white.png',
    color: 'Misty white',
    desc: 'Parapet w kolorze misty white',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/napoleon.png',
    color: 'Napoleon',
    desc: 'Parapet w kolorze napoleon',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/nero-portoro.png',
    color: 'Nero portoro',
    desc: 'Parapet w kolorze nero portoro',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/ninfea.png',
    color: 'Ninfea (New marfil)',
    desc: 'Parapet w kolorze ninfea (new marfil)',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/perlato-royal.png',
    color: 'Perlato royal',
    desc: 'Parapet w kolorze perlato royal',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/arctic-white.png',
    color: 'Arctic white',
    desc: 'Parapet w kolorze arctic white',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/rosa-del-garda.png',
    color: 'Rosa del garda',
    desc: 'Parapet w kolorze rosa del garda',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/rosso-assiago.png',
    color: 'Rosso assiago',
    desc: 'Parapet w kolorze rosso assiago',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/sanna.png',
    color: 'Sanna',
    desc: 'Parapet w kolorze sanna',
  },
  {
    category: 'Parapety wewnętrzne',
    collection: 'Parapety marmurowe',
    img: '/img/parapety-wewnetrzne/parapety-marmurowe/silk-grey.png',
    color: 'Silk grey',
    desc: 'Parapet w kolorze silk grey',
  },

  // Parapety zewnętrzne - Parapety aluminiowe
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety aluminiowe',
    img: '/img/parapety-zewnetrzne/parapety-aluminiowe/antracyt-antyczny.png',
    color: 'Antracyt antyczny',
    desc: 'Parapet w kolorze antycznego antracytu',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety aluminiowe',
    img: '/img/parapety-zewnetrzne/parapety-aluminiowe/bialy.png',
    color: 'Biały',
    desc: 'Parapet w kolorze białym',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety aluminiowe',
    img: '/img/parapety-zewnetrzne/parapety-aluminiowe/miedz-antyczna.png',
    color: 'Miedź antyczna',
    desc: 'Parapet w kolorze antycznej miedzi',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety aluminiowe',
    img: '/img/parapety-zewnetrzne/parapety-aluminiowe/ral7016.png',
    color: 'RAL 7016',
    desc: 'Parapet w kolorze RAL 7016',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety aluminiowe',
    img: '/img/parapety-zewnetrzne/parapety-aluminiowe/ral8019.png',
    color: 'RAL 8019',
    desc: 'Parapet w kolorze RAL 8019',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety aluminiowe',
    img: '/img/parapety-zewnetrzne/parapety-aluminiowe/ral9016.png',
    color: 'RAL 9016',
    desc: 'Parapet w kolorze RAL 9016',
  },

  // Parapety zewnętrzne - Parapety stalowe
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/antracyt-piaskowy.png',
    color: 'Antracyt piaskowy',
    desc: 'Parapet w kolorze piaskowego antracytu',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/bialy.png',
    color: 'Biały',
    desc: 'Parapet w kolorze białym',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/mahon.png',
    color: 'Mahoń',
    desc: 'Parapet w kolorze mahoni',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/orzech.png',
    color: 'Orzech',
    desc: 'Parapet w kolorze orzecha',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/ral7016.png',
    color: 'RAL 7016',
    desc: 'Parapet w kolorze RAL 7016',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/ral7024.png',
    color: 'RAL 7024',
    desc: 'Parapet w kolorze RAL 7024',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/ral8004.png',
    color: 'RAL 8004',
    desc: 'Parapet w kolorze RAL 8004',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/ral8017.png',
    color: 'RAL 8017',
    desc: 'Parapet w kolorze RAL 8017',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/ral8019.png',
    color: 'RAL 8019',
    desc: 'Parapet w kolorze RAL 8019',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/ral9005.png',
    color: 'RAL 9005',
    desc: 'Parapet w kolorze RAL 9005',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/ral9006.png',
    color: 'RAL 9006',
    desc: 'Parapet w kolorze RAL 9006',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/ral9007.png',
    color: 'RAL 9007',
    desc: 'Parapet w kolorze RAL 9007',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/ral9010.png',
    color: 'RAL 9010',
    desc: 'Parapet w kolorze RAL 9010',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/wenge.png',
    color: 'Wenge',
    desc: 'Parapet w kolorze wenge',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/winchester.png',
    color: 'Winchester',
    desc: 'Parapet w kolorze winchester',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety stalowe',
    img: '/img/parapety-zewnetrzne/parapety-stalowe/dab-zloty.png',
    color: 'Złoty dąb',
    desc: 'Parapet w kolorze złotego dębu',
  },

  // Parapety zewnętrzne - Parapety syntetyczne
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-zewnetrzne/parapety-syntetyczne/braz.png',
    color: 'Brąz',
    desc: 'Parapet w kolorze brązu',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-zewnetrzne/parapety-syntetyczne/cegla.png',
    color: 'Cegła',
    desc: 'Parapet w kolorze cegły',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-zewnetrzne/parapety-syntetyczne/czarny.png',
    color: 'Czarny',
    desc: 'Parapet w kolorze czarnym',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-zewnetrzne/parapety-syntetyczne/grafit.png',
    color: 'Grafit',
    desc: 'Parapet w kolorze grafitu',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-zewnetrzne/parapety-syntetyczne/stal.png',
    color: 'Stal',
    desc: 'Parapet w kolorze stalowym',
  },
  {
    category: 'Parapety zewnętrzne',
    collection: 'Parapety syntetyczne',
    img: '/img/parapety-zewnetrzne/parapety-syntetyczne/wisnia.png',
    color: 'Wiśnia',
    desc: 'Parapet w kolorze wiśniowym',
  },
]

export default windowsills
