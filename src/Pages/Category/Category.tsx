import { SimpleCard } from "@/Components/Molecules";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

type MovieT = {
  id: string;
  name: string;
  sinopsis: string;
  trailer: string;
  preview: string;
  categoryId: string;
  duration: string;
  rating: number;
};

const MOCK: MovieT[] = [
  {
    id: "92e7aef2-f0f1-4ab5-ba25-2f4b1d70a2e1",
    name: "En el Camino",
    sinopsis:
      "Un viaje documentado que sigue a un grupo de excursionistas mientras recorren uno de los senderos más largos y desafiantes del mundo.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "863073d1-edc6-4ab8-beb4-0b83eb2ad925",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "fcf4b1e4-63cc-47cb-bd21-67a1d5e34280",
    name: "Planeta Tierra",
    sinopsis:
      "Una exploración visualmente impresionante de los diversos ecosistemas y las criaturas que habitan en nuestro planeta.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "863073d1-edc6-4ab8-beb4-0b83eb2ad925",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "c6478196-0490-4d3a-991f-dff82543f848",
    name: "Inside Job",
    sinopsis:
      "Un análisis exhaustivo de la crisis financiera de 2008, explorando las causas y consecuencias de uno de los colapsos económicos más importantes de la historia moderna.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "863073d1-edc6-4ab8-beb4-0b83eb2ad925",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "beeaeb60-441b-4d3c-ba5c-4606f7ec735b",
    name: "Blackfish",
    sinopsis:
      "Un documental que examina la cautividad de las orcas y las implicaciones éticas y medioambientales de su mantenimiento en parques acuáticos.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "863073d1-edc6-4ab8-beb4-0b83eb2ad925",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "a6f2d0ab-ef36-4135-b880-1612da4f011b",
    name: "Fahrenheit 9/11",
    sinopsis:
      "Un análisis crítico de los eventos que rodearon los ataques del 11 de septiembre y las políticas gubernamentales posteriores, dirigido por Michael Moore.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "863073d1-edc6-4ab8-beb4-0b83eb2ad925",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "8ed52b9d-1c3b-45fb-8378-b1036e9aae6f",
    name: "The Cove",
    sinopsis:
      "Un documental que sigue a un grupo de activistas mientras investigan y exponen la caza de delfines en Taiji, Japón.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "863073d1-edc6-4ab8-beb4-0b83eb2ad925",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "a2c05a22-d019-4e69-8556-2be37b3cf7d2",
    name: "Man on Wire",
    sinopsis:
      "Una recreación de la hazaña de Philippe Petit de caminar sobre un cable entre las Torres Gemelas en 1974.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "863073d1-edc6-4ab8-beb4-0b83eb2ad925",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "abb0cbfd-cbcb-4cc1-ae51-063e3ed446f5",
    name: "Won't You Be My Neighbor?",
    sinopsis:
      "Un retrato íntimo del famoso presentador de televisión infantil Fred Rogers y su impacto duradero en la cultura popular.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "863073d1-edc6-4ab8-beb4-0b83eb2ad925",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "5ddba9f8-b2b5-45b5-ba0c-49f74a72a03f",
    name: "The Act of Killing",
    sinopsis:
      "Un documental que sigue a antiguos miembros del escuadrón de la muerte indonesio mientras recrean sus crímenes de guerra en forma de películas de Hollywood.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "863073d1-edc6-4ab8-beb4-0b83eb2ad925",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "1274a4e7-faef-47a1-8a6d-ef438f9d2980",
    name: "Searching for Sugar Man",
    sinopsis:
      "Una búsqueda para descubrir el destino del misterioso cantante de folk Rodríguez, quien alcanzó un estrellato inesperado en Sudáfrica.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "863073d1-edc6-4ab8-beb4-0b83eb2ad925",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "e31287c2-7f1f-4b8c-9d8a-748a8cb3b7bf",
    name: "El Exorcista",
    sinopsis:
      "Una joven es poseída por una entidad demoníaca, y dos sacerdotes luchan para salvar su alma mientras enfrentan el mal en su forma más pura.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "deec90a3-0aa0-4464-8b65-303aa0d29db3",
    name: "El Resplandor",
    sinopsis:
      "Un escritor y su familia se mudan a un aislado hotel durante el invierno, donde los oscuros secretos del lugar comienzan a manifestarse, desencadenando sucesos aterradores.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "58b4f7d5-5450-456f-a6ab-62bf85ec91f5",
    name: "El Silencio de los Corderos",
    sinopsis:
      "Una agente del FBI se enfrenta a un brillante pero perturbado asesino en serie mientras busca pistas para capturarlo, sumergiéndose en su mente retorcida.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "6d01434c-ec47-4528-b41b-b48baf85414e",
    name: "Pesadilla en Elm Street",
    sinopsis:
      "Un grupo de adolescentes es perseguido en sus sueños por un siniestro hombre con cuchillas en lugar de dedos, quien busca venganza desde el más allá.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "d9c3fc31-bb4b-4780-b79b-0173d3c00738",
    name: "El Proyecto de la Bruja de Blair",
    sinopsis:
      "Un grupo de cineastas documenta su investigación sobre una leyenda local sobre una bruja en Maryland, pero pronto se encuentran presos de fuerzas siniestras en el bosque.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "2bc3b876-b97c-44f5-af7c-cd3808c3b1c3",
    name: "El Exorcismo de Emily Rose",
    sinopsis:
      "Un abogado defensor intenta demostrar que una joven estudiante universitaria no estaba mentalmente enferma sino poseída por fuerzas demoníacas, mientras enfrenta su propio escepticismo.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "36f85871-f597-4d27-b2b0-ebd5b16b7f46",
    name: "El Conjuro",
    sinopsis:
      "Basada en casos reales de los demonólogos Ed y Lorraine Warren, una familia es aterrorizada por una presencia maligna en su hogar, y los Warren son llamados para ayudar.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "223c776a-472b-478a-aa5e-efc6b657f1aa",
    name: "El Orfanato",
    sinopsis:
      "Una mujer y su familia se mudan a un orfanato abandonado, pero pronto descubren que hay algo más que recuerdos oscuros escondidos en las paredes del edificio.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "0d8afca1-19dc-4628-b217-8d9147fa2d2e",
    name: "El Aro",
    sinopsis:
      "Después de ver una misteriosa cinta de video, una periodista descubre una maldición que causa la muerte de quien la vea siete días después, y se embarca en una carrera contra el tiempo para descubrir la verdad detrás del horror.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "6a0913cb-9794-4a61-877a-3069cf7a56a9",
    name: "Scream",
    sinopsis:
      "Una ola de asesinatos sacude a una pequeña ciudad, y un grupo de jóvenes se ve envuelto en una pesadilla mortal inspirada en las películas de terror.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "54d35fd1-66d0-453b-ae78-907cc4fd29c6",
    name: "El Laberinto del Fauno",
    sinopsis:
      "En la posguerra española, una niña escapa a un mundo fantástico lleno de criaturas míticas mientras enfrenta la brutalidad del régimen de su padrastro.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "75db5cb1-9a80-49e5-8508-6e053a8b2aae",
    name: "La Masacre de Texas",
    sinopsis:
      "Un grupo de amigos se encuentra en una pesadilla mortal cuando se topan con una familia de caníbales en el desierto de Texas.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "ca6bf7e0-089d-4f18-9021-46ef13ef61c2",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "0321a06b-1838-4a5b-a18e-7ebfbfe0e2f9",
    name: "John Wick",
    sinopsis:
      "Un ex asesino a sueldo busca venganza contra aquellos que le arrebataron todo lo que amaba, desatando una ola de violencia implacable en el submundo criminal.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "20b183e6-9a6a-48de-8b08-10519376146c",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "5c8ab774-e5de-4df8-8e2a-5e6324210c3e",
    name: "Duro de Matar",
    sinopsis:
      "Un policía de Nueva York se ve envuelto en una toma de rehenes en un rascacielos en Los Ángeles durante la víspera de Navidad, y lucha contra un grupo de terroristas para salvar a su esposa y a los demás rehenes.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "20b183e6-9a6a-48de-8b08-10519376146c",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "f7d49b95-b9e1-4597-9d5e-e637e2998c18",
    name: "Mad Max: Furia en el Camino",
    sinopsis:
      "En un mundo post-apocalíptico, Max se une a un grupo de rebeldes liderados por Furiosa en una frenética persecución a través del desierto en busca de libertad y redención.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "20b183e6-9a6a-48de-8b08-10519376146c",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "22216fd3-9e2c-4022-b79e-67fc1cd6f7f3",
    name: "Matrix",
    sinopsis:
      "Un programador de software descubre la verdad sobre su realidad simulada y se une a la lucha contra las máquinas que controlan a la humanidad.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "20b183e6-9a6a-48de-8b08-10519376146c",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "978c77d8-3ef2-4a56-8ec5-6b15004f6510",
    name: "Gladiator",
    sinopsis:
      "Un ex general romano se convierte en gladiador y desafía al emperador corrupto que asesinó a su familia y lo envió al exilio.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "20b183e6-9a6a-48de-8b08-10519376146c",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "b0237b4c-abe5-4d95-85cb-f346208ca5db",
    name: "Misión Imposible",
    sinopsis:
      "Un agente secreto se embarca en misiones peligrosas y aparentemente imposibles para proteger al mundo de amenazas terroristas y criminales.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "20b183e6-9a6a-48de-8b08-10519376146c",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "c2e73d7e-2f52-420f-8e3e-12e7435a3a02",
    name: "Kill Bill",
    sinopsis:
      "Una ex asesina a sueldo busca venganza contra su antiguo jefe y compañeros de equipo, desencadenando una serie de violentos enfrentamientos.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "20b183e6-9a6a-48de-8b08-10519376146c",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "53363b0f-2712-40f0-9b1c-9963a7c33f10",
    name: "Terminator 2: El Juicio Final",
    sinopsis:
      "Un androide enviado desde el futuro para proteger a un niño destinado a liderar la resistencia humana contra las máquinas asesinas, mientras enfrentan a un avanzado modelo de Terminator enviado para matarlo.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "20b183e6-9a6a-48de-8b08-10519376146c",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "64e9e5a3-4c77-4866-8b8f-c472d9bc03b5",
    name: "Rápido y Furioso",
    sinopsis:
      "Un grupo de corredores callejeros y ladrones de autos se unen para llevar a cabo robos de alto riesgo mientras enfrentan a rivales y la ley.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "20b183e6-9a6a-48de-8b08-10519376146c",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "05b93b1f-3984-40f3-9a6c-3e38cd91bc30",
    name: "Armageddon",
    sinopsis:
      "Un equipo de perforadores de petróleo es reclutado por la NASA para detener un asteroide que se dirige hacia la Tierra, enfrentándose a desafíos casi imposibles en el espacio.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "20b183e6-9a6a-48de-8b08-10519376146c",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "b9a42bf1-62e5-4ff6-a08b-63436406e848",
    name: "Forrest Gump",
    sinopsis:
      "La vida de Forrest Gump, un hombre con un coeficiente intelectual por debajo de la media, quien a través de su ingenuidad y bondad deja una huella indeleble en la sociedad estadounidense durante varias décadas.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "668e94d5-f4c5-4e18-a17d-4b6ccc3eaa85",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "e35d6d2d-43e5-4eb3-b7f4-3f2b31771e0c",
    name: "Titanic",
    sinopsis:
      "El épico romance entre Jack y Rose, dos pasajeros a bordo del Titanic, quien enfrenta su destino trágico mientras el majestuoso barco se hunde en el océano Atlántico.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "668e94d5-f4c5-4e18-a17d-4b6ccc3eaa85",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "4f9b804f-0f3c-4227-bd7b-59b75fd8a9ac",
    name: "La Lista de Schindler",
    sinopsis:
      "La historia real de Oskar Schindler, un empresario alemán que salva a más de mil judíos durante el Holocausto al emplearlos en sus fábricas y protegerlos de los nazis.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "668e94d5-f4c5-4e18-a17d-4b6ccc3eaa85",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "b70b0382-c5ef-4037-a5b3-7f96f166a6a3",
    name: "El Padrino",
    sinopsis:
      "La saga épica de la familia Corleone, una poderosa dinastía criminal que lucha por mantener su imperio mientras enfrenta la traición y la violencia en el mundo del crimen organizado.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "668e94d5-f4c5-4e18-a17d-4b6ccc3eaa85",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "3ad7688e-b1ec-49f0-b8c8-5d8ba2432263",
    name: "El Club de los Poetas Muertos",
    sinopsis:
      "Un carismático profesor de literatura inspira a sus estudiantes a desafiar las normas y seguir sus sueños, a pesar de la oposición de la estricta administración de la escuela.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "668e94d5-f4c5-4e18-a17d-4b6ccc3eaa85",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "5dd336a2-14c1-4cc7-a4d3-f292a1052b3f",
    name: "La Vida es Bella",
    sinopsis:
      "Un padre y su hijo son enviados a un campo de concentración nazi durante la Segunda Guerra Mundial, y el padre utiliza su ingenio y amor para proteger a su hijo de los horrores del Holocausto.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "668e94d5-f4c5-4e18-a17d-4b6ccc3eaa85",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "d3706e5d-32ff-4990-8b6d-07a37ed39ef7",
    name: "Náufrago",
    sinopsis:
      "Un ejecutivo de FedEx queda varado en una isla desierta después de un accidente de avión, y lucha por sobrevivir física y emocionalmente durante varios años hasta ser rescatado.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "668e94d5-f4c5-4e18-a17d-4b6ccc3eaa85",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "a249bfae-0c7b-4a90-b116-f8622e786a71",
    name: "Manchester junto al Mar",
    sinopsis:
      "Un hombre solitario regresa a su ciudad natal para cuidar de su sobrino adolescente después de la muerte repentina de su hermano, enfrentándose a su dolor y culpa mientras intenta reconstruir su vida.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "668e94d5-f4c5-4e18-a17d-4b6ccc3eaa85",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "1e4b3996-d70b-4d56-8465-7ef0d5014f9a",
    name: "Brokeback Mountain",
    sinopsis:
      "La historia de amor prohibido entre dos vaqueros en la década de 1960, quienes luchan contra los prejuicios sociales y las expectativas para estar juntos.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "668e94d5-f4c5-4e18-a17d-4b6ccc3eaa85",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "9975babc-1d6b-41aa-9df3-6e72f10b103f",
    name: "Una Mente Brillante",
    sinopsis:
      "La vida del brillante matemático John Nash, quien lucha contra la esquizofrenia mientras intenta ganar el premio Nobel y encontrar la paz en su vida personal.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "668e94d5-f4c5-4e18-a17d-4b6ccc3eaa85",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "19d586f1-6c7e-48f1-9f7b-7925797a240e",
    name: "Indiana Jones: En busca del arca perdida",
    sinopsis:
      "El intrépido arqueólogo Indiana Jones se embarca en una peligrosa búsqueda para encontrar el Arca de la Alianza antes que los nazis, enfrentándose a trampas mortales y enemigos implacables.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "9b1f5296-1fd8-43db-ba41-5d81adb44a04",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "95a9ef31-cdf1-49f0-bfe7-2cfb93b1e854",
    name: "Piratas del Caribe: La Maldición del Perla Negra",
    sinopsis:
      "El capitán Jack Sparrow se une a una joven aristócrata y a un audaz herrero en una búsqueda para rescatar a la hija del gobernador secuestrada por un capitán pirata condenado a vagar en forma de esqueleto.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "9b1f5296-1fd8-43db-ba41-5d81adb44a04",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "9b5b158b-5da7-45f5-a4ab-57f7d272ebc1",
    name: "Jurassic Park",
    sinopsis:
      "Un multimillonario excéntrico crea un parque temático habitado por dinosaurios clonados, pero cuando las criaturas escapan de control, un grupo de visitantes lucha por sobrevivir en la isla.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "9b1f5296-1fd8-43db-ba41-5d81adb44a04",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "38a8e097-41d4-4b2a-92c4-e2cbb8b4a761",
    name: "El Señor de los Anillos: La Comunidad del Anillo",
    sinopsis:
      "Frodo Bolsón emprende un viaje épico para destruir un anillo mágico antes de que caiga en manos del malvado Señor Oscuro Sauron, enfrentándose a peligrosos enemigos y criaturas en su camino.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "9b1f5296-1fd8-43db-ba41-5d81adb44a04",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "07e3c7cf-f52f-4c0e-a51e-e83f97cc87a3",
    name: "Harry Potter y la Piedra Filosofal",
    sinopsis:
      "Un joven mago llamado Harry Potter descubre su verdadera identidad y se une a la escuela de magia Hogwarts, donde enfrenta desafíos mágicos y descubre secretos sobre su pasado.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "9b1f5296-1fd8-43db-ba41-5d81adb44a04",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "daeb07c7-31fd-488f-9066-6f39b80d1719",
    name: "Avatar",
    sinopsis:
      "En el planeta alienígena Pandora, un ex marine se une a la lucha de los nativos Na'vi contra una empresa minera que amenaza su hogar, y se enamora de una de las indígenas mientras se sumerge en su cultura.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "9b1f5296-1fd8-43db-ba41-5d81adb44a04",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "d8f5a8d9-bb8d-4d58-bb2d-203ec14c9b6d",
    name: "Los Vengadores",
    sinopsis:
      "Un grupo de superhéroes se une para defender la Tierra de una invasión alienígena dirigida por un poderoso villano, enfrentándose a desafíos épicos y conflictos internos en el proceso.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "9b1f5296-1fd8-43db-ba41-5d81adb44a04",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "7d3fcd0c-7de5-490b-b9a7-6b99708744a7",
    name: "Jumanji: Bienvenidos a la Jungla",
    sinopsis:
      "Cuatro adolescentes son absorbidos por un videojuego mágico y se encuentran atrapados en el mundo de Jumanji, donde deben completar una peligrosa aventura para regresar a casa.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "9b1f5296-1fd8-43db-ba41-5d81adb44a04",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "fa2b9474-4b8e-4eb9-8f19-8047d097ca0f",
    name: "Enredados",
    sinopsis:
      "Una joven princesa con un largo cabello mágico escapa de su torre para explorar el mundo exterior, donde se encuentra con un ladrón encantador y se embarca en una aventura llena de acción y romance.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "9b1f5296-1fd8-43db-ba41-5d81adb44a04",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "7a41327d-e259-414d-a7b6-818b717a0db9",
    name: "Pocahontas",
    sinopsis:
      "Una joven nativa americana se encuentra con un explorador inglés y juntos desafían las diferencias culturales y las expectativas sociales para encontrar la paz entre sus pueblos en medio de la colonización de América.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "9b1f5296-1fd8-43db-ba41-5d81adb44a04",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "8a4379fd-5e21-4d02-a9c8-7f657a827a9e",
    name: "Titanic",
    sinopsis:
      "El épico romance entre Jack y Rose, dos pasajeros a bordo del Titanic, quien enfrenta su destino trágico mientras el majestuoso barco se hunde en el océano Atlántico.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "c7c2fd7f-4802-400a-9036-dbf6bd45a2ad",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "b2938d90-b3ab-498d-80d6-2a0a75da4e3e",
    name: "Orgullo y Prejuicio",
    sinopsis:
      "La historia de amor entre Elizabeth Bennet y Mr. Darcy en la Inglaterra del siglo XIX, donde las barreras sociales y los malentendidos amenazan con separarlos para siempre.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "c7c2fd7f-4802-400a-9036-dbf6bd45a2ad",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "23a6da7b-1502-4854-a1c7-d5e3d36db982",
    name: "Bajo el Sol de la Toscana",
    sinopsis:
      "Una escritora recién divorciada compra una villa en la Toscana, donde encuentra amor y redescubre su pasión por la vida mientras se adapta a su nuevo entorno.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "c7c2fd7f-4802-400a-9036-dbf6bd45a2ad",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "b89fb226-1c7a-42f1-85d2-356b7643cc96",
    name: "Diario de una Pasión",
    sinopsis:
      "La historia de amor entre un joven pobre y una joven rica en la década de 1940, cuyas vidas están marcadas por la guerra, la clase social y la demencia.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "c7c2fd7f-4802-400a-9036-dbf6bd45a2ad",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "d0e75d85-417d-4a3b-b450-2a1df9b246ff",
    name: "La La Land",
    sinopsis:
      "Un pianista de jazz y una aspirante a actriz se enamoran en Los Ángeles mientras persiguen sus sueños, pero el sacrificio y la realidad amenazan con separarlos.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "c7c2fd7f-4802-400a-9036-dbf6bd45a2ad",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "d0c48ef8-5ae7-44f2-ae3d-6e7ef4cd199d",
    name: "Amanda",
    sinopsis:
      "Una joven francesa se encarga del cuidado de su sobrino después de la muerte de su hermana en un ataque terrorista, y su vínculo crece mientras intentan superar la tragedia juntos.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "c7c2fd7f-4802-400a-9036-dbf6bd45a2ad",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "9ae1269a-7a4e-49b8-b9b8-0a6f670f5c1b",
    name: "A Todos los Chicos de los que Me Enamoré",
    sinopsis:
      "Una adolescente encuentra sus cartas de amor secretas enviadas accidentalmente a sus enamoramientos, desencadenando una serie de eventos que la llevan a enfrentar sus sentimientos y relaciones.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "c7c2fd7f-4802-400a-9036-dbf6bd45a2ad",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "e4e1612e-e60b-4ab4-96b7-c82124e195c5",
    name: "Cuestión de Tiempo",
    sinopsis:
      "Un joven descubre que puede viajar en el tiempo y decide usar este poder para mejorar su vida amorosa, pero pronto aprende que cambiar el pasado puede tener consecuencias inesperadas.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "c7c2fd7f-4802-400a-9036-dbf6bd45a2ad",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "352d33d6-0f67-4cb4-85fb-44d5f924ca9a",
    name: "Antes del Amanecer",
    sinopsis:
      "Dos jóvenes se conocen en un tren en Europa y deciden pasar una noche juntos en Viena, donde exploran la ciudad y profundizan en sus vidas, sabiendo que su tiempo juntos es limitado.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "c7c2fd7f-4802-400a-9036-dbf6bd45a2ad",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "4f9438bb-7a52-4604-9753-1da96e11690c",
    name: "Amor y Amistad",
    sinopsis:
      "Una viuda inteligente y manipuladora intenta encontrar maridos ricos para ella y su hija mientras navega por las complejidades del amor y la sociedad en la Inglaterra del siglo XVIII.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "c7c2fd7f-4802-400a-9036-dbf6bd45a2ad",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "d6ad5873-05f8-45b3-87b7-d7c767e7f1bf",
    name: "Superbad",
    sinopsis:
      "Dos amigos de la escuela secundaria intentan impresionar a las chicas antes de su graduación, desencadenando una serie de eventos cómicos y desastrosos durante una noche salvaje.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "188a1a26-3ead-4394-b058-326a35c30dd7",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "7f560a6e-45a0-4918-a5c6-5aa1d1ab7327",
    name: "Mi Pobre Angelito",
    sinopsis:
      "Un niño de 8 años es dejado accidentalmente en casa durante las vacaciones familiares y se enfrenta a ladrones torpes mientras intenta defender su hogar.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "188a1a26-3ead-4394-b058-326a35c30dd7",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "19e84e3e-9b4d-4fa8-b3fc-69815843303d",
    name: "The Hangover",
    sinopsis:
      "Un grupo de amigos despierta en Las Vegas con una resaca masiva y sin recordar lo que sucedió durante su noche de despedida de soltero, desencadenando una búsqueda hilarante para encontrar al novio desaparecido.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "188a1a26-3ead-4394-b058-326a35c30dd7",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "57d9921b-5a71-4731-ae05-c328207f678a",
    name: "La Máscara",
    sinopsis:
      "Un empleado de banco tímido descubre una máscara antigua que le otorga poderes sobrenaturales, pero también lo convierte en un héroe y un imán para problemas.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "188a1a26-3ead-4394-b058-326a35c30dd7",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "8a07f9e4-dc3b-4eb8-b356-254d2f8c0e48",
    name: "Loco por Mary",
    sinopsis:
      "Un hombre se embarca en un viaje para encontrar a su amor de la infancia, Mary, pero enfrenta competencia y una serie de desastres cómicos en el camino.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "188a1a26-3ead-4394-b058-326a35c30dd7",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "2e09f03e-38a6-4f4c-9f9b-f869d747e64f",
    name: "Scary Movie",
    sinopsis:
      "Una parodia de las películas de terror populares, donde un grupo de adolescentes enfrenta una serie de eventos sobrenaturales y asesinatos mientras intentan descubrir la verdad detrás de un oscuro secreto.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "188a1a26-3ead-4394-b058-326a35c30dd7",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "c1df08e3-58fc-41e6-9e4e-f59df91ecfd7",
    name: "Zoolander",
    sinopsis:
      "Un modelo masculino narcisista es reclutado por una agencia secreta para detener a un dictador malvado, enfrentándose a situaciones ridículas y desafíos de moda en el proceso.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "188a1a26-3ead-4394-b058-326a35c30dd7",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "5f470d9a-0f8e-4e48-a45f-0bf90065ee97",
    name: "Vecinos",
    sinopsis:
      "Una pareja joven con un recién nacido se enfrenta a una fraternidad ruidosa que se muda a la casa de al lado, desencadenando una guerra de bromas y travesuras.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "188a1a26-3ead-4394-b058-326a35c30dd7",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "4dcab876-fc62-41fb-a702-600f9e38e413",
    name: "Ted",
    sinopsis:
      "Un hombre adulto con un amigo de infancia, un oso de peluche viviente y vulgar, enfrenta los desafíos de la edad adulta mientras intenta mantener su amistad poco convencional.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "188a1a26-3ead-4394-b058-326a35c30dd7",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "189e0382-9516-40c2-8f1c-1b597dcb16e0",
    name: "Tonto y Retonto",
    sinopsis:
      "Dos amigos incompetentes emprenden un viaje por carretera para devolver una maleta perdida a su legítimo propietario, enfrentándose a una serie de desventuras cómicas en el camino.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "188a1a26-3ead-4394-b058-326a35c30dd7",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "1b7eb689-43c4-4438-a304-8c6098d10c46",
    name: "Mi Gran Boda Griega",
    sinopsis:
      "Una mujer griega-americana enfrenta la presión de su familia para casarse con un griego mientras lucha por encontrar su propia identidad y amor verdadero.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "8c778e92-74ed-48de-8b58-fce62c92af03",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "f64a5401-23c6-4c67-9d9b-180798f3d94c",
    name: "Crazy Rich Asians",
    sinopsis:
      "Una mujer americana de origen chino viaja a Singapur para conocer a la familia de su novio rico, enfrentándose a la riqueza, la cultura y las excentricidades mientras lucha por ser aceptada.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "8c778e92-74ed-48de-8b58-fce62c92af03",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "b44e1a7d-f1ff-4762-bb8e-1a85e45a26f6",
    name: "Juno",
    sinopsis:
      "Una adolescente embarazada decide dar en adopción a su bebé y busca a la pareja perfecta, enfrentando el embarazo, la amistad y el amor en el proceso.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "8c778e92-74ed-48de-8b58-fce62c92af03",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "22b03b3b-1b4c-4f3d-9bdf-3f44d6e68d2a",
    name: "Chicas Pesadas",
    sinopsis:
      "Una adolescente ingenua se une a un grupo de chicas populares en la escuela secundaria, pero pronto se da cuenta de las trampas de la popularidad y la crueldad femenina.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "8c778e92-74ed-48de-8b58-fce62c92af03",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "35a3a376-6d3f-41a5-b1b8-bb9cb028bda2",
    name: "Annie Hall",
    sinopsis:
      "La historia de amor entre un cómico neoyorquino y una mujer excéntrica, explorando los altibajos de una relación mientras reflexiona sobre el amor, la vida y la creatividad.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "8c778e92-74ed-48de-8b58-fce62c92af03",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "201d5c8b-512d-4b92-9738-e87481e32065",
    name: "Shrek",
    sinopsis:
      "Un ogro solitario se embarca en una misión para rescatar a una princesa encantada y devolverla a su reino, enfrentándose a una serie de desafíos y haciendo amigos en el camino.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "8c778e92-74ed-48de-8b58-fce62c92af03",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "6b373ea6-fb9d-48e2-ae2a-8dbb224d3b3b",
    name: "Una Noche en el Roxbury",
    sinopsis:
      "Dos hermanos tontos sueñan con abrir su propio club nocturno mientras luchan por ganarse el respeto de su estricto padre y encuentran el amor en lugares inesperados.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "8c778e92-74ed-48de-8b58-fce62c92af03",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "6ef8e36c-44c0-41e1-a5c3-ae5b34ac5768",
    name: "Luz de Luna",
    sinopsis:
      "Tres períodos en la vida de un joven afroamericano, desde su infancia hasta la adultez, mientras lucha con su identidad y sexualidad en un barrio difícil de Miami.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "8c778e92-74ed-48de-8b58-fce62c92af03",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "b3f2ae33-0ad7-42ec-bd4e-75c7f9862f68",
    name: "El Gran Lebowski",
    sinopsis:
      "Un holgazán llamado The Dude se encuentra atrapado en una red de engaños y eventos absurdos después de que confunden su identidad, enfrentándose a gánsteres, nihilistas y bolos en su búsqueda de la paz.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "8c778e92-74ed-48de-8b58-fce62c92af03",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
  {
    id: "2d4787b5-6780-4e30-bd6c-83d38351841b",
    name: "La Princesa Prometida",
    sinopsis:
      "Una historia de amor y aventura que sigue a una princesa comprometida y su amor verdadero mientras luchan contra villanos y obstáculos para reunirse en un reino mágico.",
    trailer: "enlace al trailer",
    preview: "enlace al avance",
    categoryId: "8c778e92-74ed-48de-8b58-fce62c92af03",
    duration: "1 hora y 30 minutos",
    rating: 4,
  },
];

export const Category = () => {
  const { id } = useParams();

  return (
    <Flex wrap="wrap" justifyContent="center" gap={20}>
      {MOCK.filter((movie) => movie.categoryId === id).map((movie: MovieT) => (
        <SimpleCard
          image={movie.preview.includes("https") ? movie.preview : ""}
          title={movie.name}
        />
      ))}
    </Flex>
  );
};
