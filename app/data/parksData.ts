import type { ParkData } from '~/types/park'

/**
 * Central repository for all parks data with both tourism and volunteer URLs
 * This ensures DRY principle by maintaining a single source of truth
 */
export const PARKS_DATA: ParkData[] = [
  {
    id: 1,
    name: 'Полистовский заповедник',
    image: '/images/gallery/gallery-01.png',
    tourismUrl: 'http://polistovsky.ru/tourism',
    volunteerUrl: 'http://polistovsky.ru/com-virtuemart-menu-categories/volontjoram1'
  },
  {
    id: 2,
    name: 'Кандалакшский заповедник',
    image: '/images/gallery/gallery-02.png',
    tourismUrl: 'http://www.kandalaksha-reserve.ru/prosveshenie/turistam-i-mestnym-zhitelyam/kandalaksha-i-okrestnosti/',
    volunteerUrl: 'http://www.kandalaksha-reserve.ru/studentam-yunnatam-volonteram-storonnim-specialistam/predlozheniya-volonteram/'
  },
  {
    id: 3,
    name: 'Ненецкий заповедник',
    image: '/images/gallery/gallery-03.png',
    tourismUrl: 'http://www.nenetz.ru/index.php/info',
    volunteerUrl: 'http://www.nenetz.ru/index.php/about/fr'
  },
  {
    id: 4,
    name: 'Дарвинский заповедник',
    image: '/images/gallery/gallery-04.png',
    tourismUrl: 'http://дарвинский.рф/ekoturizm/route/',
    volunteerUrl: 'http://дарвинский.рф/volontyerstvo/'
  },
  {
    id: 5,
    name: 'Нижне-Свирский заповедник',
    image: '/images/gallery/gallery-05.png',
    tourismUrl: 'http://www.n-svirsky.ru/ecotourism/',
    volunteerUrl: 'http://www.n-svirsky.ru/'
  },
  {
    id: 6,
    name: 'Костомукшский заповедник',
    image: '/images/gallery/gallery-06.png',
    tourismUrl: 'https://www.kostzap.com/turizm-1',
    volunteerUrl: 'https://www.kostzap.com/'
  },
  {
    id: 7,
    name: 'Костомукшский заповедник (карта)',
    image: '/images/gallery/gallery-07.png',
    tourismUrl: 'https://www.kostzap.com/turizm-1',
    volunteerUrl: 'https://www.kostzap.com/'
  },
  {
    id: 8,
    name: 'Заповедник Кивач',
    image: '/images/gallery/gallery-08.png',
    tourismUrl: 'http://www.zapkivach.ru/posewenie/obwaya_informaciya/',
    volunteerUrl: 'http://www.zapkivach.ru/'
  },
  {
    id: 9,
    name: 'Заповедник Пасвик',
    image: '/images/gallery/gallery-09.png',
    tourismUrl: 'http://www.pasvik51.ru/index.php/ru/posetitelyam/territoriya-zapovednika',
    volunteerUrl: 'http://www.pasvik51.ru/index.php/ru/novosti/59-volontery-v-pasvike'
  },
  {
    id: 10,
    name: 'Пинежский заповедник',
    image: '/images/gallery/gallery-10.png',
    tourismUrl: 'http://www.zapovednik-pinega.ru/visitor/page.php',
    volunteerUrl: 'http://www.zapovednik-pinega.ru/index.php'
  },
  {
    id: 11,
    name: 'Рдейский заповедник',
    image: '/images/gallery/gallery-11.png',
    tourismUrl: 'http://rdeysky.org/prosveshhenie/deti-i-pticy/',
    volunteerUrl: 'http://rdeysky.org/'
  },
  {
    id: 12,
    name: 'Печоро-Илычский заповедник',
    image: '/images/gallery/gallery-12.png',
    tourismUrl: 'https://www.pechora-reserve.ru/ecoturizm',
    volunteerUrl: 'https://www.pechora-reserve.ru/volonteram'
  },
  {
    id: 13,
    name: 'Национальный парк Куршская коса',
    image: '/images/gallery/gallery-13.png',
    tourismUrl: 'http://park-kosa.ru/cn_posetitelyam/karta-skhema-turisticheskoy-infrastruktury/',
    volunteerUrl: 'http://park-kosa.ru/cn_volontery/'
  },
  {
    id: 14,
    name: 'Кенозерский национальный парк',
    image: '/images/gallery/gallery-14.png',
    tourismUrl: 'http://www.kenozero.ru/gostyam/',
    volunteerUrl: 'http://www.kenozero.ru/o-parke/materialy/volonterstvo'
  },
  {
    id: 15,
    name: 'Онежское Поморье',
    image: '/images/gallery/gallery-15.jpg',
    tourismUrl: 'http://onpomor.ru/visit/posetitelyam.php',
    volunteerUrl: 'http://www.kenozero.ru/o-parke/materialy/volonterstvo'
  },
  {
    id: 16,
    name: 'Национальный парк Паанаярви',
    image: '/images/gallery/gallery-16.png',
    tourismUrl: 'http://paanajarvi-park.com/pamyatka-posetitelyu/',
    volunteerUrl: 'http://paanajarvi-park.com/'
  },
  {
    id: 17,
    name: 'Национальный парк Мещера',
    image: '/images/gallery/gallery-17.png',
    tourismUrl: 'http://www.park-meshera.ru/services/ekologicheskie-tropy-/',
    volunteerUrl: 'http://www.park-meshera.ru/'
  },
  {
    id: 18,
    name: 'Национальный парк Орловское Полесье',
    image: '/images/gallery/gallery-18.png',
    tourismUrl: 'http://orlpolesie.ru/poseshchenie/ekologicheskie-tropy-i-marshruty',
    volunteerUrl: 'http://orlpolesie.ru/'
  },
  {
    id: 19,
    name: 'Центрально-Лесной заповедник',
    image: '/images/gallery/gallery-19.png',
    tourismUrl: 'http://clgz.ru/?page_id=3107',
    volunteerUrl: 'http://clgz.ru/?page_id=3493'
  },
  {
    id: 20,
    name: 'Национальный парк Русский Север',
    image: '/images/gallery/gallery-20.png',
    tourismUrl: 'http://russever.region35.ru/tourism/tours',
    volunteerUrl: 'http://russever.region35.ru/volunteers/about-volunteers'
  },
  {
    id: 21,
    name: 'Национальный парк Себежский',
    image: '/images/gallery/gallery-21.png',
    tourismUrl: 'http://www.poozerie.ru/turizm/',
    volunteerUrl: 'http://www.poozerie.ru/about/volonterstvo/'
  },
  {
    id: 22,
    name: 'Национальный парк Югыд Ва',
    image: '/images/gallery/gallery-22.png',
    tourismUrl: 'https://yugyd-va.ru/Turizm-i-otdih/Turisticheskie-marshruti',
    volunteerUrl: 'https://yugyd-va.ru/Napravleniya-deyatelnosti/Volonterskaya-kampaniya'
  },
  {
    id: 23,
    name: 'Водлозерский национальный парк',
    image: '/images/gallery/gallery-23.png',
    tourismUrl: 'http://vodlozero.ru/tourizm/',
    volunteerUrl: 'http://vodlozero.ru/about/volonterstvo/'
  },
  {
    id: 24,
    name: 'Русская Арктика',
    image: '/images/gallery/gallery-24.png',
    tourismUrl: 'http://www.rus-arc.ru/ru/Tourism/ForVisitors',
    volunteerUrl: 'http://www.rus-arc.ru/ru/Volunteer'
  },
  {
    id: 25,
    name: 'Себежский национальный парк',
    image: '/images/gallery/gallery-25.png',
    tourismUrl: 'http://seb-park.ru/blogs/?page_id=59',
    volunteerUrl: 'http://seb-park.ru/blogs/'
  },
  {
    id: 26,
    name: 'Национальный парк Угра',
    image: '/images/gallery/gallery-26.png',
    tourismUrl: 'https://parkugra.ru/otdih/places/',
    volunteerUrl: 'https://parkugra.ru/index.php?id=104'
  },
  {
    id: 27,
    name: 'Валдайский национальный парк',
    image: '/images/gallery/gallery-27.png',
    tourismUrl: 'http://valdaypark.ru/информация-для-туристов/',
    volunteerUrl: 'http://valdaypark.ru/предложение-для-волонтеров-спонсоро/'
  },
  {
    id: 28,
    name: 'Приокско-Террасный заповедник',
    image: '/images/gallery/gallery-28.png',
    tourismUrl: 'https://pt-zapovednik.ru/uslugi/',
    volunteerUrl: 'https://pt-zapovednik.ru/volonteram/'
  }
]

