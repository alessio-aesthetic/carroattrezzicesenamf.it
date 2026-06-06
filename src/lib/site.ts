export const site = {
  name: "Carroattrezzi Cesena MF",
  domain: "carroattrezzicesenamf.it",
  url: "https://carroattrezzicesenamf.it",
  phone: "0547 040096",
  tel: "+390547040096",
  email: "assistenza@carroattrezzicesenamf.it",
  address: "Via Cerchia di Sant'Egidio, 95 - 47521 Cesena FC",
  city: "Cesena",
};

export const services = [
  ["soccorso-stradale-24h", "Soccorso stradale 24H a Cesena", "Assistenza rapida per auto ferme, guasti improvvisi e situazioni urgenti su strada.", "/images/recovery/road-emergency.jpg"],
  ["carroattrezzi-auto", "Carroattrezzi auto a Cesena", "Recupero e traino di auto non marcianti verso officina, deposito o destinazione concordata.", "/images/recovery/tow-service.jpg"],
  ["traino-veicoli", "Traino veicoli a Cesena", "Trasporto sicuro di vetture, furgoni leggeri e mezzi bloccati dopo guasto o incidente.", "/images/recovery/hero-recovery.jpg"],
  ["recupero-auto-incidentate", "Recupero auto incidentate a Cesena", "Intervento dopo sinistri, uscite di strada o veicoli danneggiati che non possono ripartire.", "/images/recovery/night-road.jpg"],
  ["trasporto-auto", "Trasporto auto a Cesena", "Servizio programmato per spostare auto nuove, usate, ferme o da consegnare in officina.", "/images/recovery/workshop-car.jpg"],
  ["assistenza-batteria", "Assistenza batteria a Cesena", "Supporto quando l auto non parte, con prima valutazione e soluzione piu adatta.", "/images/recovery/car-detail.jpg"],
  ["cambio-gomma", "Cambio gomma a Cesena", "Aiuto in caso di foratura, pneumatico danneggiato o veicolo fermo in posizione scomoda.", "/images/recovery/road-emergency.jpg"],
  ["recupero-moto", "Recupero moto a Cesena", "Trasporto di moto e scooter con attenzione al fissaggio e alla protezione del mezzo.", "/images/recovery/tow-service.jpg"],
  ["assistenza-autostrada", "Assistenza autostrada a Cesena", "Supporto per guasti lungo collegamenti principali e tratte ad alta percorrenza.", "/images/recovery/night-road.jpg"],
  ["rimozione-veicoli", "Rimozione veicoli a Cesena", "Spostamento mezzi da aree private, cortili, parcheggi, aziende e spazi condominiali.", "/images/recovery/hero-recovery.jpg"],
  ["recupero-fuoristrada", "Recupero fuoristrada a Cesena", "Interventi per veicoli bloccati in strade bianche, fondi difficili o aree non asfaltate.", "/images/recovery/car-detail.jpg"],
  ["deposito-veicoli", "Deposito veicoli a Cesena", "Gestione del mezzo dopo recupero, traino o trasporto concordato con il proprietario.", "/images/recovery/workshop-car.jpg"],
].map(([slug, title, short, image]) => ({ slug, title, short, image }));

export const zones = [
  "Cesena",
  "Cesenatico",
  "Forli",
  "Savignano sul Rubicone",
  "Gambettola",
  "Longiano",
  "Bertinoro",
  "Forlimpopoli",
  "San Mauro Pascoli",
  "Gatteo",
  "Mercato Saraceno",
  "Sarsina",
].map((name) => ({
  name,
  slug: name.toLowerCase().replaceAll(" ", "-").replaceAll("ì", "i").replaceAll("ò", "o"),
  title: `Carroattrezzi a ${name}`,
}));

export function serviceText(title: string) {
  return [
    `${title} e pensato per chi ha bisogno di una soluzione concreta quando il veicolo non puo proseguire. Prima di muovere il mezzo raccogliamo posizione, tipo di problema, modello del veicolo, accessi disponibili e destinazione desiderata.`,
    "La priorita e sempre la sicurezza. Se l auto si trova in una zona trafficata, in un parcheggio stretto o su una strada poco illuminata, organizziamo il recupero in modo da ridurre rischi e tempi di attesa.",
    "Il servizio non si limita al traino. Ti aiutiamo a capire se conviene portare il mezzo in officina, in deposito o presso un indirizzo concordato. La comunicazione resta semplice, diretta e orientata alla soluzione.",
    "L intervento viene gestito con attenzione al veicolo: caricamento ordinato, fissaggio corretto e indicazioni chiare prima della partenza. Questo approccio e importante sia nelle emergenze sia nei trasporti programmati.",
  ];
}

export function zoneText(city: string) {
  return [
    `Il servizio di carroattrezzi a ${city} offre assistenza per auto ferme, guasti improvvisi, incidenti, batterie scariche, pneumatici danneggiati e veicoli da trasportare verso officina o deposito.`,
    `A ${city} e nelle aree vicine lavoriamo con un metodo semplice: ascoltiamo la richiesta, capiamo dove si trova il mezzo e valutiamo quale intervento serve davvero. In questo modo si evitano perdite di tempo e informazioni confuse.`,
    "Quando chiami, e utile indicare via, incrocio, parcheggio, distributore o punto visibile nelle vicinanze. Una posizione precisa consente di organizzare meglio il recupero e di dare indicazioni piu realistiche.",
    `Il carroattrezzi a ${city} puo essere richiesto per emergenze su strada, trasporti programmati, recupero dopo incidente o spostamento di mezzi non marcianti. Ogni intervento viene gestito con attenzione al veicolo e alla sicurezza.`,
  ];
}
