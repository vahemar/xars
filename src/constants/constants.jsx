import kartofil from '../assets/png/kartoshka_xorovac.png';
import havitev from '../assets/png/havi_tev.jfif';
import chalaxaj from '../assets/png/խոզի-չալազաջ.png'
import lahmajo from '../assets/png/lahmacun.webp';
import lahmajoPanir from '../assets/png/lahmacun_cheese.webp';
import mat from '../assets/png/mat.png';
import dzuk from '../assets/png/dzuk.png';
import sheyka from '../assets/png/sheyka.png'
import havibud from '../assets/png/havibud.png'
import { Image  } from '@chakra-ui/react';
import shaurma from '../assets/png/shaurma.png'
import shaurmaxoz from '../assets/png/shaurmaxoz.png'
import loshikShaurma from '../assets/png/loshikshaurma.png'
import kupati from '../assets/png/kupati.png'
import iqibir from '../assets/png/iqibir.png'
import qyabab from '../assets/png/qyabab.png'
import gril from '../assets/png/gril.png'
import parazit from '../assets/png/parazit.png'
import perashki from '../assets/png/perashki.png'
import qarakusi from '../assets/png/qarakusi.png'
import erankyun from '../assets/png/erankyun_xachapuri.png'
import poqrpica from '../assets/png/pizzamini.png'
import minihotdog from '../assets/png/minihotdog.png'
import hotdog from '../assets/png/hotdog.png'
import pigkebab from '../assets/png/pigkebab.ppg.png'
import germanakan from '../assets/png/germanakan.png'
import sardelka from '../assets/png/sardelka.png'
import papuk from '../assets/png/papuk.png'
import kola025 from '../assets/png/kola025.png'
import kola05 from '../assets/png/kola05.png'
import kola1 from '../assets/png/kola1.png'
import fanta025 from '../assets/png/fant025.png'
import fant05 from '../assets/png/fant05.png'
import fanta1 from '../assets/png/FANTAORANGE1.5L_62653044-0432-4133-bc39-babd3abe6233 (1).png'
import sprite025 from '../assets/png/sprite025.png'
import sprite05 from '../assets/png/sprite05.png'
import sprite1 from '../assets/png/sprite1.png'
import tan05 from '../assets/png/Ապարան Թան    0,5լ՝4850004310027.png'
import tan05gaz from '../assets/png/tan05gaz.png'
import akroshka from '../assets/png/akroshka.png'
import tomat from '../assets/png/tomat.png'
import yan03 from '../assets/png/yan03.png'
import yan1 from '../assets/png/yan1.png'
import baykal from '../assets/png/baykal.png'
import dobri from '../assets/png/dobri.png'
import bonaqua from '../assets/png/bonaqua.png'
import jermuk from '../assets/png/jermuk.png'
import peperoni from '../assets/png/peperoni.png'
import margarita from '../assets/png/margarita.png'
import asorti from '../assets/png/asorti.png'
import imeritakan from '../assets/png/imeritakan.png'
import megrelakan from '../assets/png/megrelakan.png'
import ajarakan1 from '../assets/png/ajarakan1.png'
import ajarakan2 from '../assets/png/ajarakan2.png'
import ajarakanvichina from '../assets/png/ajarakanvichina.png'
import ajarakanmsov from '../assets/png/ajarakanmsov.png'
import samsa from '../assets/png/samsa.png'
import havgazar from '../assets/png/havgazar.png'
import havsunk from '../assets/png/havsunk.png'
import tavarimsov from '../assets/png/tavarimsov.png'
import panir from '../assets/png/panir.png'

export const menu = [
    {
        id: 1, mainChannel: 'Մսեղեն', secondaryChannel: [
            {
                id: 1, foodListNames: 'խորոված', foodList: [
                    { id: 1, name: '1 բաժին (շիշ) կարտոֆիլ', price: '500 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={kartofil} /> },
                    { id: 2, name: '1 կգ հավի բուդ', price: '2000 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={havibud} /> },
                    { id: 3, name: '1 կգ հավի թև', price: '2200 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={havitev} />  },
                    { id: 5, name: '1 կգ կուպատի', price: '3300 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={kupati} />},
                    { id: 4, name: '1 կգ խորոված փափուկ', price: '3300 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={papuk} /> },
                    { id: 6, name: '1 կգ խորոված չալաղաջ', price: '3800 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={chalaxaj} />  },
                    { id: 7, name: '1 կգ խորոված մատ', price: '3800 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={mat} />  },
                    { id: 8, name: '1 կգ խորոված շեյկա', price: '3800 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={sheyka} /> },
                    { id: 9, name: '1 կգ ձուկ', price: '3800 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={dzuk} />  }
                ]
            },
            {
                id: 2, foodListNames: 'պիցցա', foodList: [
                    { id: 1, name: 'փոքր պիցցա ', price: '500 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={poqrpica} />},
                    { id: 2, name: 'պեպերոնի 6 կտոր ', price: '2000 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={peperoni} />},
                    { id: 3, name: 'մարգարիտա 6 կտոր ', price: '1900 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={margarita} />},
                    { id: 4, name: 'ասորտի 6 կտոր ', price: '2100 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={asorti} />},
                    { id: 5, name: 'իմերիթական 6 կտոր ', price: '1900 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={imeritakan} />},
                    { id: 6, name: 'մեգրելական 6 կտոր ', price: '2000 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={megrelakan} />},
                ]
            },
            {
                id: 3, foodListNames: 'կարկանդակ', foodList: [
                    { id: 1, name: 'պերաշկի ', price: '150 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={perashki} /> },
                    { id: 2, name: 'պարազիտ ', price: '400 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={parazit} />},
                    { id: 3, name: 'հավով և գազարով ', price: '300 AMD' , img: <Image h={'80px'} borderRadius={'15px'} w={'110px'} src={havgazar} />},
                    { id: 4, name: 'հավով և սնկով ', price: '300 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'100px'} src={havsunk} />},
                    { id: 5, name: 'տավարի մսով ', price: '350 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'100px'} src={tavarimsov} />},
                    { id: 6, name: 'պանրով ', price: '250 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'100px'} src={panir} />},
                    { id: 7, name: 'սամսա հավով ', price: '350 AMD' , img: <Image h={'80px'} borderRadius={'15px'} w={'110px'} src={samsa} />},
                ]
            },
            {
                id: 4, foodListNames: 'Քյաբաբ', foodList: [
                    { id: 1, name: 'հավի քյաբաբ', price: '800 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'110px'} src={qyabab} /> },
                    { id: 2, name: 'տավարի քյաբաբ', price: '900 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'110px'} src={pigkebab} /> },
                ]
            },
           
            {
                id: 5, foodListNames: 'շաուրմա', foodList: [
                    { id: 1, name: 'լոշիկով շաուրմա ', price: '800 AMD', img: <Image h={'70px'} borderRadius={'15px'}  w={'120px'} src={loshikShaurma} />  },
                    { id: 2, name: 'հավի շաուրմա ', price: '1000 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={shaurma} /> },
                    { id: 3, name: 'խոզի շաուրմա ', price: '1100 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={shaurmaxoz} /> },
                ]
            },
            {
                id: 6, foodListNames: 'Հոթ-դոգ', foodList: [
                    { id: 1, name: 'հոթ-դոգ', price: '200 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={minihotdog} /> },
                    { id: 2, name: 'հոթ-դոգ (ֆրիով) ', price: '300 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={iqibir} /> },
                    { id: 3, name: 'հոթ-դոգ', price: '450 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={hotdog} /> },
                ]
            },
            {
                id: 7, foodListNames: 'նրբերշիկ', foodList: [
                    { id: 1, name: 'սարդելկա ', price: '600 AMD', img: <Image h={'80px'} borderRadius={'15px'} w={'120px'} src={sardelka} /> },
                    { id: 2, name: 'գերմանական նրբերշիկ', price: '750 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={germanakan} /> },
                    { id: 3, name: 'կուպատի', price: '1000 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={kupati} /> },
                    { id: 4, name: 'իքիբիր', price: '1200 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={iqibir} /> },
                ]
            },
            {
                id: 8, foodListNames: 'աջարական', foodList: [
                    { id: 1, name: 'մսով ', price: '1200 AMD' , img: <Image h={'80px'} borderRadius={'15px'} w={'110px'} src={ajarakanmsov} />},
                    { id: 2, name: 'վիչինայով ', price: '1300 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={ajarakanvichina} />},
                    { id: 3, name: '2 ձվով ', price: '1100 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={ajarakan2} />},
                    { id: 4, name: '1 ձվով ', price: '1000 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={ajarakan1} />},
                ]
            },
            {
                id: 9, foodListNames: 'լահմաջո', foodList: [
                    { id: 1, name: 'լահմաջո ', price: '250 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={lahmajo} /> },
                    { id: 2, name: 'լահմաջո (պանրով)', price: '500 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={lahmajoPanir} />},
                ]
            },
            {
                id: 10, foodListNames: 'խաչապուրի', foodList: [
                    { id: 1, name: 'խաչապուրի ', price: '150 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={erankyun} />},
                    { id: 2, name: 'խաչապուրի (քառակուսի)', price: '300 AMD', img: <Image h={'70px'} borderRadius={'15px'} w={'120px'} src={qarakusi} /> },
                ]
            },
            {
                id: 11, foodListNames: 'գրիլ', foodList: [
                    { id: 1, name: 'գրիլ', price: '3000 AMD', img: <Image h={'90px'} borderRadius={'15px'} w={'120px'} src={gril} /> },
                ]
            },
            
           
            
        ]
    },
    {
        id: 2, mainChannel: 'Ըմպելիք', secondaryChannel: [
            {
                id: 1, foodListNames: 'Coca-Cola', foodList: [
                    { id: 1, name: 'Coca-Cola 0.25լ', price: '250 AMD' , img: <Image h={'80px'} borderRadius={'15px'} w={'60px'} src={kola025} /> },
                    { id: 2, name: 'Coca-Cola 0.5լ', price: '350 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'80px'} src={kola05} /> },
                    { id: 3, name: 'Coca-Cola 1լ', price: '600 AMD'  , img: <Image h={'90px'} borderRadius={'15px'} w={'56px'} src={kola1} />},
                ]
            },
            {
                id: 2, foodListNames: 'fanta', foodList: [
                    { id: 1, name: 'fanta 0.25լ', price: '250 AMD' , img: <Image h={'80px'} borderRadius={'15px'} w={'80px'} src={fanta025} /> },
                    { id: 2, name: 'fanta 0.5լ', price: '350 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'100px'} src={fant05} /> },
                    { id: 3, name: 'fanta 1լ', price: '600 AMD' , img: <Image h={'90px'} borderRadius={'15px'} w={'88px'} src={fanta1} /> },
                ]
            },
            {
                id: 3, foodListNames: 'sprite', foodList: [
                    { id: 1, name: 'sprite 0.25լ', price: '250 AMD' , img: <Image h={'90px'} borderRadius={'15px'} w={'90px'} src={sprite025} /> },
                    { id: 2, name: 'sprite 0.5լ', price: '350 AMD' , img: <Image h={'70px'} borderRadius={'15px'} w={'80px'} src={sprite05} />},
                    { id: 3, name: 'sprite 1լ', price: '600 AMD' , img: <Image h={'80px'} borderRadius={'15px'} w={'80px'} src={sprite1} /> },
                ]
            },
            {
                id: 4, foodListNames: 'թան', foodList: [
                    { id: 1, name: 'թան 0.25լ', price: '250 AMD' , img: <Image h={'110px'} borderRadius={'15px'} w={'90px'} src={tan05} /> },
                    { id: 2, name: 'թան 0.5լ', price: '350 AMD' , img: <Image h={'110px'} borderRadius={'15px'} w={'90px'} src={tan05} /> },
                    { id: 3, name: 'թան 0.5լ (գազավորված)', price: '350 AMD' , img: <Image h={'110px'} borderRadius={'15px'} w={'100px'} src={tan05gaz} /> },
                    { id: 4, name: 'մածնաբրդոշ', price: '450 AMD' , img: <Image h={'90px'} borderRadius={'15px'} w={'87px'} src={akroshka} />  },
                    { id: 5, name: 'տոմատի հյութ', price: '300 AMD' , img: <Image h={'80px'} borderRadius={'15px'} w={'100px'} src={tomat} />  },
                ]
            },
            {
                id: 6, foodListNames: 'Yan', foodList: [

                    { id: 1, name: 'Yan 1լ', price: '950 AMD' , img: <Image h={'100px'} borderRadius={'15px'} w={'80px'} src={yan1} />},
                    { id: 2, name: 'Yan 0.25լ', price: '450 AMD' , img: <Image h={'90px'} borderRadius={'15px'} w={'110px'} src={yan03} />},
                ]
            },
            {
                id: 7, foodListNames: 'Байкал', foodList: [
                    { id: 1, name: 'Байкал', price: '250 AMD' , img: <Image h={'100px'} borderRadius={'15px'} w={'90px'} src={baykal} />},
                ]
            },
            {
                id: 8, foodListNames: 'Добрый', foodList: [
                    { id: 1, name: 'Добрый 0.3լ', price: '350 AMD' , img: <Image h={'100px'} borderRadius={'15px'} w={'80px'} src={dobri} />},
                ]
            },
            {
                id: 9, foodListNames: 'bon Aqua', foodList: [
                    { id: 1, name: 'Bon Aqua', price: '200 AMD' , img: <Image h={'100px'} borderRadius={'15px'} w={'90px'} src={bonaqua} />},
                ]
            },
            {
                id: 10, foodListNames: 'Jermuk', foodList: [
                    { id: 1, name: 'Jermuk', price: '250 AMD' , img: <Image h={'100px'} borderRadius={'15px'} w={'100px'} src={jermuk} />},
                ]
            },
        ]
    },
]