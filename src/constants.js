/* eslint-disable no-undef */
export const API_ROOT = ENV_API_ROOT || 'https://api.alpha.linode.com/v4';
export const LOGIN_ROOT = ENV_LOGIN_ROOT || 'https://login.alpha.linode.com';
export const APP_ROOT = ENV_APP_ROOT || 'http://localhost:3000';
export const GA_ID = ENV_GA_ID || '000000';

export const DEVTOOLS_DISABLED = ENV_DEVTOOLS_DISABLED || process.env.NODE_ENV === 'production';

/* eslint-enable no-undef */
export const EVENT_POLLING_DELAY = (15 * 1000); // milliseconds

export const LinodeStates = {
  pending: [
    'booting',
    'rebooting',
    'shutting_down',
    'migrating',
    'provisioning',
    'deleting',
  ],
};

export const regionMap = {
  'North America': ['newark', 'dallas', 'fremont', 'atlanta'],
  Europe: ['frankfurt', 'london'],
  Asia: ['tokyo', 'singapore', 'tokyo 2'],
};

export const LinodeStatesReadable = {
  shutting_down: 'Powering off',
  offline: 'Offline',
  running: 'Running',
  booting: 'Booting',
  provisioning: 'Provisioning',
  rebooting: 'Rebooting',
};

export const NodebalancerStatusReadable = {
  active: 'Active',
  suspended: 'Suspended',
  canceled: 'Canceled',
  new_active: 'Active',
  new_suspended: 'Suspended',
};

export const ipv4ns = {
  dallas: [
    '173.255.199.5',
    '66.228.53.5',
    '96.126.122.5',
    '96.126.124.5',
    '96.126.127.5',
    '198.58.107.5',
    '198.58.111.5',
    '23.239.24.5',
    '72.14.179.5',
    '72.14.188.5'],
  fremont: [
    '173.230.145.5',
    '173.230.147.5',
    '173.230.155.5',
    '173.255.212.5',
    '173.255.219.5',
    '173.255.241.5',
    '173.255.243.5',
    '173.255.244.5',
    '74.207.241.5',
    '74.207.242.5'],
  atlanta: [
    '173.230.129.5',
    '173.230.136.5',
    '173.230.140.5',
    '66.228.59.5',
    '66.228.62.5',
    '50.116.35.5',
    '50.116.41.5',
    '23.239.18.5',
    '75.127.97.6',
    '75.127.97.7'],
  newark: [
    '66.228.42.5',
    '96.126.106.5',
    '50.116.53.5',
    '50.116.58.5',
    '50.116.61.5',
    '50.116.62.5',
    '66.175.211.5',
    '97.107.133.4',
    '207.192.69.4',
    '207.192.69.5'],
  london: [
    '178.79.182.5',
    '176.58.107.5',
    '176.58.116.5',
    '176.58.121.5',
    '151.236.220.5',
    '212.71.252.5',
    '212.71.253.5',
    '109.74.192.20',
    '109.74.193.20',
    '109.74.194.20'],
  tokyo: [
    '106.187.90.5',
    '106.187.93.5',
    '106.187.94.5',
    '106.187.95.5',
    '106.186.116.5',
    '106.186.123.5',
    '106.186.124.5',
    '106.187.34.20',
    '106.187.35.20',
    '106.187.36.20'],
  singapore: [
    '139.162.11.5',
    '139.162.13.5',
    '139.162.14.5',
    '139.162.15.5',
    '139.162.16.5',
    '139.162.21.5',
    '139.162.27.5',
    '103.3.60.18',
    '103.3.60.19',
    '103.3.60.20'],
  frankfurt: [
    '139.162.130.5',
    '139.162.131.5',
    '139.162.132.5',
    '139.162.133.5',
    '139.162.134.5',
    '139.162.135.5',
    '139.162.136.5',
    '139.162.137.5',
    '139.162.138.5',
    '139.162.139.5'],
  'tokyo 2': [
    '139.162.66.5',
    '139.162.67.5',
    '139.162.68.5',
    '139.162.69.5',
    '139.162.70.5',
    '139.162.71.5',
    '139.162.72.5',
    '139.162.73.5',
    '139.162.74.5',
    '139.162.75.5'],
};
export const ipv6ns = {
  dallas: '2600:3c00::',
  fremont: '2600:3c01::',
  atlanta: '2600:3c02::',
  newark: '2600:3c03::',
  london: '2a01:7e00::',
  tokyo: '2400:8900::',
  singapore: '2400:8901::',
  frankfurt: '2a01:7e01::',
  'tokyo 2': '2400:8902::',
};
export const ipv6nsSuffix = ['5', '6', '7', '8', '9', 'b', 'c'];

export const NAME_SERVERS = [
  'ns1.linode.com', 'ns2.linode.com', 'ns3.linode.com', 'ns4.linode.com', 'ns5.linode.com',
];

export const TIME_ZONES = [
  'Africa/Abidjan',
  'Africa/Accra',
  'Africa/Addis_Ababa',
  'Africa/Algiers',
  'Africa/Asmara',
  'Africa/Asmera',
  'Africa/Bamako',
  'Africa/Bangui',
  'Africa/Banjul',
  'Africa/Bissau',
  'Africa/Blantyre',
  'Africa/Brazzaville',
  'Africa/Bujumbura',
  'Africa/Cairo',
  'Africa/Casablanca',
  'Africa/Ceuta',
  'Africa/Conakry',
  'Africa/Dakar',
  'Africa/Dar_es_Salaam',
  'Africa/Djibouti',
  'Africa/Douala',
  'Africa/El_Aaiun',
  'Africa/Freetown',
  'Africa/Gaborone',
  'Africa/Harare',
  'Africa/Johannesburg',
  'Africa/Juba',
  'Africa/Kampala',
  'Africa/Khartoum',
  'Africa/Kigali',
  'Africa/Kinshasa',
  'Africa/Lagos',
  'Africa/Libreville',
  'Africa/Lome',
  'Africa/Luanda',
  'Africa/Lubumbashi',
  'Africa/Lusaka',
  'Africa/Malabo',
  'Africa/Maputo',
  'Africa/Maseru',
  'Africa/Mbabane',
  'Africa/Mogadishu',
  'Africa/Monrovia',
  'Africa/Nairobi',
  'Africa/Ndjamena',
  'Africa/Niamey',
  'Africa/Nouakchott',
  'Africa/Ouagadougou',
  'Africa/Porto-Novo',
  'Africa/Sao_Tome',
  'Africa/Timbuktu',
  'Africa/Tripoli',
  'Africa/Tunis',
  'Africa/Windhoek',
  'America/Adak',
  'America/Anchorage',
  'America/Anguilla',
  'America/Antigua',
  'America/Araguaina',
  'America/Argentina/Buenos_Aires',
  'America/Argentina/Catamarca',
  'America/Argentina/ComodRivadavia',
  'America/Argentina/Cordoba',
  'America/Argentina/Jujuy',
  'America/Argentina/La_Rioja',
  'America/Argentina/Mendoza',
  'America/Argentina/Rio_Gallegos',
  'America/Argentina/Salta',
  'America/Argentina/San_Juan',
  'America/Argentina/San_Luis',
  'America/Argentina/Tucuman',
  'America/Argentina/Ushuaia',
  'America/Aruba',
  'America/Asuncion',
  'America/Atikokan',
  'America/Atka',
  'America/Bahia',
  'America/Bahia_Banderas',
  'America/Barbados',
  'America/Belem',
  'America/Belize',
  'America/Blanc-Sablon',
  'America/Boa_Vista',
  'America/Bogota',
  'America/Boise',
  'America/Buenos_Aires',
  'America/Cambridge_Bay',
  'America/Campo_Grande',
  'America/Cancun',
  'America/Caracas',
  'America/Catamarca',
  'America/Cayenne',
  'America/Cayman',
  'America/Chicago',
  'America/Chihuahua',
  'America/Coral_Harbour',
  'America/Cordoba',
  'America/Costa_Rica',
  'America/Creston',
  'America/Cuiaba',
  'America/Curacao',
  'America/Danmarkshavn',
  'America/Dawson',
  'America/Dawson_Creek',
  'America/Denver',
  'America/Detroit',
  'America/Dominica',
  'America/Edmonton',
  'America/Eirunepe',
  'America/El_Salvador',
  'America/Ensenada',
  'America/Fort_Nelson',
  'America/Fort_Wayne',
  'America/Fortaleza',
  'America/Glace_Bay',
  'America/Godthab',
  'America/Goose_Bay',
  'America/Grand_Turk',
  'America/Grenada',
  'America/Guadeloupe',
  'America/Guatemala',
  'America/Guayaquil',
  'America/Guyana',
  'America/Halifax',
  'America/Havana',
  'America/Hermosillo',
  'America/Indiana/Indianapolis',
  'America/Indiana/Knox',
  'America/Indiana/Marengo',
  'America/Indiana/Petersburg',
  'America/Indiana/Tell_City',
  'America/Indiana/Vevay',
  'America/Indiana/Vincennes',
  'America/Indiana/Winamac',
  'America/Indianapolis',
  'America/Inuvik',
  'America/Iqaluit',
  'America/Jamaica',
  'America/Jujuy',
  'America/Juneau',
  'America/Kentucky/Louisville',
  'America/Kentucky/Monticello',
  'America/Knox_IN',
  'America/Kralendijk',
  'America/La_Paz',
  'America/Lima',
  'America/Los_Angeles',
  'America/Louisville',
  'America/Lower_Princes',
  'America/Maceio',
  'America/Managua',
  'America/Manaus',
  'America/Marigot',
  'America/Martinique',
  'America/Matamoros',
  'America/Mazatlan',
  'America/Mendoza',
  'America/Menominee',
  'America/Merida',
  'America/Metlakatla',
  'America/Mexico_City',
  'America/Miquelon',
  'America/Moncton',
  'America/Monterrey',
  'America/Montevideo',
  'America/Montreal',
  'America/Montserrat',
  'America/Nassau',
  'America/New_York',
  'America/Nipigon',
  'America/Nome',
  'America/Noronha',
  'America/North_Dakota/Beulah',
  'America/North_Dakota/Center',
  'America/North_Dakota/New_Salem',
  'America/Ojinaga',
  'America/Panama',
  'America/Pangnirtung',
  'America/Paramaribo',
  'America/Phoenix',
  'America/Port-au-Prince',
  'America/Port_of_Spain',
  'America/Porto_Acre',
  'America/Porto_Velho',
  'America/Puerto_Rico',
  'America/Rainy_River',
  'America/Rankin_Inlet',
  'America/Recife',
  'America/Regina',
  'America/Resolute',
  'America/Rio_Branco',
  'America/Rosario',
  'America/Santa_Isabel',
  'America/Santarem',
  'America/Santiago',
  'America/Santo_Domingo',
  'America/Sao_Paulo',
  'America/Scoresbysund',
  'America/Shiprock',
  'America/Sitka',
  'America/St_Barthelemy',
  'America/St_Johns',
  'America/St_Kitts',
  'America/St_Lucia',
  'America/St_Thomas',
  'America/St_Vincent',
  'America/Swift_Current',
  'America/Tegucigalpa',
  'America/Thule',
  'America/Thunder_Bay',
  'America/Tijuana',
  'America/Toronto',
  'America/Tortola',
  'America/Vancouver',
  'America/Virgin',
  'America/Whitehorse',
  'America/Winnipeg',
  'America/Yakutat',
  'America/Yellowknife',
  'Antarctica/Casey',
  'Antarctica/Davis',
  'Antarctica/DumontDUrville',
  'Antarctica/Macquarie',
  'Antarctica/Mawson',
  'Antarctica/McMurdo',
  'Antarctica/Palmer',
  'Antarctica/Rothera',
  'Antarctica/South_Pole',
  'Antarctica/Syowa',
  'Antarctica/Troll',
  'Antarctica/Vostok',
  'Arctic/Longyearbyen',
  'Asia/Aden',
  'Asia/Almaty',
  'Asia/Amman',
  'Asia/Anadyr',
  'Asia/Aqtau',
  'Asia/Aqtobe',
  'Asia/Ashgabat',
  'Asia/Ashkhabad',
  'Asia/Baghdad',
  'Asia/Bahrain',
  'Asia/Baku',
  'Asia/Bangkok',
  'Asia/Barnaul',
  'Asia/Beirut',
  'Asia/Bishkek',
  'Asia/Brunei',
  'Asia/Calcutta',
  'Asia/Chita',
  'Asia/Choibalsan',
  'Asia/Chongqing',
  'Asia/Chungking',
  'Asia/Colombo',
  'Asia/Dacca',
  'Asia/Damascus',
  'Asia/Dhaka',
  'Asia/Dili',
  'Asia/Dubai',
  'Asia/Dushanbe',
  'Asia/Famagusta',
  'Asia/Gaza',
  'Asia/Harbin',
  'Asia/Hebron',
  'Asia/Ho_Chi_Minh',
  'Asia/Hong_Kong',
  'Asia/Hovd',
  'Asia/Irkutsk',
  'Asia/Istanbul',
  'Asia/Jakarta',
  'Asia/Jayapura',
  'Asia/Jerusalem',
  'Asia/Kabul',
  'Asia/Kamchatka',
  'Asia/Karachi',
  'Asia/Kashgar',
  'Asia/Kathmandu',
  'Asia/Katmandu',
  'Asia/Khandyga',
  'Asia/Kolkata',
  'Asia/Krasnoyarsk',
  'Asia/Kuala_Lumpur',
  'Asia/Kuching',
  'Asia/Kuwait',
  'Asia/Macao',
  'Asia/Macau',
  'Asia/Magadan',
  'Asia/Makassar',
  'Asia/Manila',
  'Asia/Muscat',
  'Asia/Nicosia',
  'Asia/Novokuznetsk',
  'Asia/Novosibirsk',
  'Asia/Omsk',
  'Asia/Oral',
  'Asia/Phnom_Penh',
  'Asia/Pontianak',
  'Asia/Pyongyang',
  'Asia/Qatar',
  'Asia/Qyzylorda',
  'Asia/Rangoon',
  'Asia/Riyadh',
  'Asia/Saigon',
  'Asia/Sakhalin',
  'Asia/Samarkand',
  'Asia/Seoul',
  'Asia/Shanghai',
  'Asia/Singapore',
  'Asia/Srednekolymsk',
  'Asia/Taipei',
  'Asia/Tashkent',
  'Asia/Tbilisi',
  'Asia/Tehran',
  'Asia/Tel_Aviv',
  'Asia/Thimbu',
  'Asia/Thimphu',
  'Asia/Tokyo',
  'Asia/Tomsk',
  'Asia/Ujung_Pandang',
  'Asia/Ulaanbaatar',
  'Asia/Ulan_Bator',
  'Asia/Urumqi',
  'Asia/Ust-Nera',
  'Asia/Vientiane',
  'Asia/Vladivostok',
  'Asia/Yakutsk',
  'Asia/Yangon',
  'Asia/Yekaterinburg',
  'Asia/Yerevan',
  'Atlantic/Azores',
  'Atlantic/Bermuda',
  'Atlantic/Canary',
  'Atlantic/Cape_Verde',
  'Atlantic/Faeroe',
  'Atlantic/Faroe',
  'Atlantic/Jan_Mayen',
  'Atlantic/Madeira',
  'Atlantic/Reykjavik',
  'Atlantic/South_Georgia',
  'Atlantic/St_Helena',
  'Atlantic/Stanley',
  'Australia/ACT',
  'Australia/Adelaide',
  'Australia/Brisbane',
  'Australia/Broken_Hill',
  'Australia/Canberra',
  'Australia/Currie',
  'Australia/Darwin',
  'Australia/Eucla',
  'Australia/Hobart',
  'Australia/LHI',
  'Australia/Lindeman',
  'Australia/Lord_Howe',
  'Australia/Melbourne',
  'Australia/NSW',
  'Australia/North',
  'Australia/Perth',
  'Australia/Queensland',
  'Australia/South',
  'Australia/Sydney',
  'Australia/Tasmania',
  'Australia/Victoria',
  'Australia/West',
  'Australia/Yancowinna',
  'Brazil/Acre',
  'Brazil/DeNoronha',
  'Brazil/East',
  'Brazil/West',
  'CET',
  'CST6CDT',
  'Canada/Atlantic',
  'Canada/Central',
  'Canada/East-Saskatchewan',
  'Canada/Eastern',
  'Canada/Mountain',
  'Canada/Newfoundland',
  'Canada/Pacific',
  'Canada/Saskatchewan',
  'Canada/Yukon',
  'Chile/Continental',
  'Chile/EasterIsland',
  'Cuba',
  'EET',
  'EST5EDT',
  'Egypt',
  'Eire',
  'Etc/GMT',
  'Etc/GMT+0',
  'Etc/GMT+1',
  'Etc/GMT+10',
  'Etc/GMT+11',
  'Etc/GMT+12',
  'Etc/GMT+2',
  'Etc/GMT+3',
  'Etc/GMT+4',
  'Etc/GMT+5',
  'Etc/GMT+6',
  'Etc/GMT+7',
  'Etc/GMT+8',
  'Etc/GMT+9',
  'Etc/GMT-0',
  'Etc/GMT-1',
  'Etc/GMT-10',
  'Etc/GMT-11',
  'Etc/GMT-12',
  'Etc/GMT-13',
  'Etc/GMT-14',
  'Etc/GMT-2',
  'Etc/GMT-3',
  'Etc/GMT-4',
  'Etc/GMT-5',
  'Etc/GMT-6',
  'Etc/GMT-7',
  'Etc/GMT-8',
  'Etc/GMT-9',
  'Etc/GMT0',
  'Etc/Greenwich',
  'Etc/UCT',
  'Etc/UTC',
  'Etc/Universal',
  'Etc/Zulu',
  'Europe/Amsterdam',
  'Europe/Andorra',
  'Europe/Astrakhan',
  'Europe/Athens',
  'Europe/Belfast',
  'Europe/Belgrade',
  'Europe/Berlin',
  'Europe/Bratislava',
  'Europe/Brussels',
  'Europe/Bucharest',
  'Europe/Budapest',
  'Europe/Busingen',
  'Europe/Chisinau',
  'Europe/Copenhagen',
  'Europe/Dublin',
  'Europe/Gibraltar',
  'Europe/Guernsey',
  'Europe/Helsinki',
  'Europe/Isle_of_Man',
  'Europe/Istanbul',
  'Europe/Jersey',
  'Europe/Kaliningrad',
  'Europe/Kiev',
  'Europe/Kirov',
  'Europe/Lisbon',
  'Europe/Ljubljana',
  'Europe/London',
  'Europe/Luxembourg',
  'Europe/Madrid',
  'Europe/Malta',
  'Europe/Mariehamn',
  'Europe/Minsk',
  'Europe/Monaco',
  'Europe/Moscow',
  'Europe/Nicosia',
  'Europe/Oslo',
  'Europe/Paris',
  'Europe/Podgorica',
  'Europe/Prague',
  'Europe/Riga',
  'Europe/Rome',
  'Europe/Samara',
  'Europe/San_Marino',
  'Europe/Sarajevo',
  'Europe/Simferopol',
  'Europe/Skopje',
  'Europe/Sofia',
  'Europe/Stockholm',
  'Europe/Tallinn',
  'Europe/Tirane',
  'Europe/Tiraspol',
  'Europe/Ulyanovsk',
  'Europe/Uzhgorod',
  'Europe/Vaduz',
  'Europe/Vatican',
  'Europe/Vienna',
  'Europe/Vilnius',
  'Europe/Volgograd',
  'Europe/Warsaw',
  'Europe/Zagreb',
  'Europe/Zaporozhye',
  'Europe/Zurich',
  'GB',
  'GB-Eire',
  'GMT',
  'GMT0',
  'Greenwich',
  'Hongkong',
  'Iceland',
  'Indian/Antananarivo',
  'Indian/Chagos',
  'Indian/Christmas',
  'Indian/Cocos',
  'Indian/Comoro',
  'Indian/Kerguelen',
  'Indian/Mahe',
  'Indian/Maldives',
  'Indian/Mauritius',
  'Indian/Mayotte',
  'Indian/Reunion',
  'Iran',
  'Israel',
  'Jamaica',
  'Japan',
  'Kwajalein',
  'Libya',
  'MET',
  'MST7MDT',
  'Mexico/BajaNorte',
  'Mexico/BajaSur',
  'Mexico/General',
  'NZ',
  'NZ-CHAT',
  'Navajo',
  'PRC',
  'PST8PDT',
  'Pacific/Apia',
  'Pacific/Auckland',
  'Pacific/Bougainville',
  'Pacific/Chatham',
  'Pacific/Chuuk',
  'Pacific/Easter',
  'Pacific/Efate',
  'Pacific/Enderbury',
  'Pacific/Fakaofo',
  'Pacific/Fiji',
  'Pacific/Funafuti',
  'Pacific/Galapagos',
  'Pacific/Gambier',
  'Pacific/Guadalcanal',
  'Pacific/Guam',
  'Pacific/Honolulu',
  'Pacific/Johnston',
  'Pacific/Kiritimati',
  'Pacific/Kosrae',
  'Pacific/Kwajalein',
  'Pacific/Majuro',
  'Pacific/Marquesas',
  'Pacific/Midway',
  'Pacific/Nauru',
  'Pacific/Niue',
  'Pacific/Norfolk',
  'Pacific/Noumea',
  'Pacific/Pago_Pago',
  'Pacific/Palau',
  'Pacific/Pitcairn',
  'Pacific/Pohnpei',
  'Pacific/Ponape',
  'Pacific/Port_Moresby',
  'Pacific/Rarotonga',
  'Pacific/Saipan',
  'Pacific/Samoa',
  'Pacific/Tahiti',
  'Pacific/Tarawa',
  'Pacific/Tongatapu',
  'Pacific/Truk',
  'Pacific/Wake',
  'Pacific/Wallis',
  'Pacific/Yap',
  'Poland',
  'Portugal',
  'ROK',
  'Singapore',
  'SystemV/AST4',
  'SystemV/AST4ADT',
  'SystemV/CST6',
  'SystemV/CST6CDT',
  'SystemV/EST5',
  'SystemV/EST5EDT',
  'SystemV/HST10',
  'SystemV/MST7',
  'SystemV/MST7MDT',
  'SystemV/PST8',
  'SystemV/PST8PDT',
  'SystemV/YST9',
  'SystemV/YST9YDT',
  'Turkey',
  'UCT',
  'US/Alaska',
  'US/Aleutian',
  'US/Arizona',
  'US/Central',
  'US/East-Indiana',
  'US/Eastern',
  'US/Hawaii',
  'US/Indiana-Starke',
  'US/Michigan',
  'US/Mountain',
  'US/Pacific',
  'US/Pacific-New',
  'US/Samoa',
  'UTC',
  'Universal',
  'W-SU',
  'WET',
  'Zulu',
  'EST',
  'HST',
  'MST',
  'ACT',
  'AET',
  'AGT',
  'ART',
  'AST',
  'BET',
  'BST',
  'CAT',
  'CNT',
  'CST',
  'CTT',
  'EAT',
  'ECT',
  'IET',
  'IST',
  'JST',
  'MIT',
  'NET',
  'NST',
  'PLT',
  'PNT',
  'PRT',
  'PST',
  'SST',
  'VST',
];

export const OAUTH_SUBSCOPES = ['view', 'modify', 'create', 'delete'];

export const OAUTH_SCOPES = [
  'linodes', 'dnszones', 'nodebalancers', 'images', 'stackscripts', 'longview', 'events', 'tokens',
  'clients', 'account', 'users',
];

export const MAX_UPLOAD_SIZE_MB = 1;
