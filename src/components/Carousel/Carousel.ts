import { Options, Vue } from 'vue-class-component';
// @ is an alias to /src
// import Header from '@/components/Header/Header.vue'    //IMPORTING COMPONENTS
// import Footer from '@/components/Footer/Footer.vue'    //IMPORTING COMPONENTS

// @Options({
//   components: {     //REGISTER COMPONENTS HERE
//     Header,
//     Footer, 
//   },
// })
export default class Carousel extends Vue {
  private readonly ourWorldList = [
    {
      pic: "p1.jpg",
      title: "NORTH SHORE PRESERVE",
      location: `Kaua'i, Hawaii`,
    },
    {
      pic: "p2.jpg",
      title: "JAMES ISLAND",
      location: `Southern Gulf Islands, British Columbia, Canada`,
    },
    {
      pic: "p3.jpg",
      title: "COSTATERRA",
      location: `Comporta, Portugal`,
    },
    {
      pic: "p4.jpg",
      title: "BARBUDA OCEAN CLUB",
      location: `Barbuda, West Indies`,
    },
    {
      pic: "p5.jpg",
      title: "DRIFTWOOD",
      location: `Austin, Texas`,
    },
    {
      pic: "p6.jpg",
      title: "TROUBADOUR",
      location: `Nashville, Tennessee`,
    },
    {
      pic: "p7.jpg",
      title: "PLAYA GRANDE",
      location: `Rio San Juan, Dominican Republic`,
    },
    {
      pic: "p8.jpg",
      title: "CHILENO BAY",
      location: `Cabo San Lucas, Mexico`,
    },
    {
      pic: "p9.jpg",
      title: "THE SUMMIT",
      location: `Las Vegas, Nevada`,
    },
    {
      pic: "p10.jpg",
      title: "DUNE DECK",
      location: `Westhamton Beach, NY`,
    },
    {
      pic: "p11.jpg",
      title: "SILO RIDGE",
      location: `Amenia, New York`,
    },
    {
      pic: "p12.jpg",
      title: "MAKENA",
      location: `Maui, Hawaii`,
    },
    {
      pic: "p13.jpg",
      title: "YELLOWSTONE CLUB",
      location: `Big Sky, Montana`,
    },
    {
      pic: "p14.jpg",
      title: "GOZZER RANCH",
      location: `Coeur d'Alene, Idaho`,
    },
    {
      pic: "p15.jpg",
      title: "EL DORADO",
      location: `Los Gabos, Mexico`,
    },
    {
      pic: "p16.jpg",
      title: "MADISON",
      location: `La Quinta, California`,
    },
    {
      pic: "p17.jpg",
      title: `BAKER'S BAY`,
      location: `Great Guana Cay, Behamas`,
    },
    {
      pic: "p18.jpg",
      title: "HIDEAWAY",
      location: `La Quinta California`,
    },
    {
      pic: "p19.jpg",
      title: "MOUNTAINTOP",
      location: `Cashiers North Carolina`,
    },
    {
      pic: "p20.jpeg",
      title: "MIRABEL",
      location: `Scottsdale, Azizona`,
    },
    {
      pic: "p21.jpg",
      title: "KUKIO",
      location: `Kohala, Hawaii`,
    },
    {
      pic: "p22.jpg",
      title: "VAQUERO",
      location: `Westlake, Texas`,
    },
    {
      pic: "p23.jpg",
      title: "IRON HORSE",
      location: `Whitefish, Montana`,
    },
    {
      pic: "p24.jpg",
      title: "CORDEVALLE",
      location: `Silicon Valley, California`,
    },
    {
      pic: "p25.jpg",
      title: "ESTANICIA",
      location: `Scottsdale, Arizona`,
    },
  ];
  private readonly AboutCarouselList = [
    {
      pic: "p1.jpg",
      title: "Focus on family",
      location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
    },
    {
      pic: "p2.jpg",
      title: "Incomparable experiences",
      location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
    },
    {
      pic: "p3.jpg",
      title: "Inspired by land",
      location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
    },
    {
      pic: "p4.jpg",
      title: "Sustainable future",
      location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
    },
    {
      pic: "p5.jpg",
      title: "Luxury bespoke homes",
      location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
    },
    {
      pic: "p1.jpg",
      title: "Focus on family",
      location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
    },
    {
      pic: "p2.jpg",
      title: "Incomparable experiences",
      location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
    },
    {
      pic: "p3.jpg",
      title: "Inspired by land",
      location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
    },
    {
      pic: "p4.jpg",
      title: "Sustainable future",
      location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
    },
    {
      pic: "p5.jpg",
      title: "Luxury bespoke homes",
      location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
    }
  ];
  private getImgURL(pic: string): string {
    return require("@/assets/OurWorlds/" + pic);
  }
}