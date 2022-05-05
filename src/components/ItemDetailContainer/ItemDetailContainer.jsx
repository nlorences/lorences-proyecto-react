import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom'

const getItem = (id) => {
    const myPromise = new Promise((resolve,reject) => {
        const productList = [
          {id:1, title: 'Siete Vacas Torrontes', price: 900, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-torrontes1-99271abbb27498181f16032285125101-640-0.jpg', category: 'blancos', stock: 10},
          {id:2, title: 'Siete Vacas Malbec Origen', price: 900, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-malbec1-a373d43bd398896c8516032280594428-640-0.jpg', category: 'tintos', stock: 10},
          {id:3, title: 'Siete Vacas Cabernet Sauvignon Origen', price: 900, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-cabernet-sauvignon1-01a1671e17067e49ed16032278974733-640-0.jpg', category: 'tintos', stock: 10},
          {id:4, title: 'Siete Vacas Cabernet Sauvignon Reserva', price: 1550, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-reserva-cabernet-sauvignon1-4c110db567cf9dbb6716032275610969-640-0.jpg', category: 'tintos', stock: 10},
          {id:5, title: 'Siete Vacas Tannat Reserva', price: 1550, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-reserva-tannat1-72b783d84f338815e116032270632961-640-0.jpg', category: 'tintos', stock: 10},
          {id:6, title: 'Siete Vacas Espumante Origen', price: 925, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-espumante1-d84dfd95608371867016032268477868-640-0.jpg', category: 'espumantes', stock: 10},
          {id:7, title: 'Aristides Icono Extra Brut', price: 2415, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/b70f29_8e4dad2d25ce4bd095bec3526c879622_mv21-894e6a192cca6be4a916140947136105-640-0.jpg', category: 'espumantes', stock: 10},
          {id:8, title: 'Aristides Bonarda', price: 770, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/aristides_bonarda1-c41bf24591115a66a115131748388183-640-0.gif', category: 'tintos', stock: 10},
          {id:9, title: 'Aristides Merlot', price: 770, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/aristides-merlot1-6156359b2e4b06d28015814351831121-640-0.jpg', category: 'tintos', stock: 10},
          {id:10, title: 'Aristides Malbec', price: 770, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/aristides_malbec1-2df63744d2b6f0e3d815131748530477-640-0.gif', category: 'tintos', stock: 10},
          {id:11, title: 'Aristides Cabernet Sauvignon', price: 770, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/aristides_cabernet1-9bfeefd99e1bfc153d15131748461602-640-0.gif', category: 'tintos', stock: 10},
          {id:12, title: 'Mythic Mountain Cabernet Franc', price: 990, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/mythic-cabernet-franc1-3b27f9d76d4a0eac9716020753480970-640-0.jpg', category: 'tintos', stock: 10},
          {id:13, title: 'Mythic Mountain Petit Verdot', price: 990, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/mythic-petit1-30efff58dec427067d16020749360771-640-0.jpg', category: 'tintos', stock: 10},
          {id:14, title: 'Mythic Vineyard Blanc de Blanc', price: 1390, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/mythic-blanc-de-blancs1-26bc333f3ee0cef08c15985024394047-1024-10241-ca095d7760423d68b716020717181137-640-0.png', category: 'blancos', stock: 10},
          {id:15, title: 'Jaque Mate Sauvignon Blanc', price: 740, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/jaque-mate-sauvignon-blanc1-d93bb26d687b00643515986539494118-640-0.jpg', category: 'blancos', stock: 10},
          {id:16, title: 'Jaque Mate Cabernet Franc Reserva', price: 1115, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/jaque-mate-reserva-cabernet-franc1-d18095e7ea9904ec1215986530742040-640-0.jpg', category: 'tintos', stock: 10},
          {id:17, title: 'Dinastia Extra Brut', price: 920, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/dinastia-extra-brut1-fde1971258837dfc8615936465803748-640-0.jpg', category: 'espumantes', stock: 10},
          {id:18, title: 'Las Perdices Exploracion Casablanca', price: 2150, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/vino-las-perdices-exploracion-casa-blanca-sauvignon-blanc-d_nq_np_693115-mla29480640575_022019-f1-632ae12afe7abda88f15902635029767-640-0.jpg', category: 'blancos', stock: 10},
          {id:19, title: 'Taymente Cabernet Sauvignon', price: 770, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/taymente-cabernet1-0d1d54ddb79bc65c1a15901965389939-640-0.jpg', category: 'tintos', stock: 10},
          {id:20, title: 'Taymente Malbec', price: 770, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/taymentes-malbec1-c3ed51ba8509bf29bf15901956387642-640-0.jpg', category: 'tintos', stock: 10},
          {id:21, title: 'Taymente Sauvignon Blanc', price: 665, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/taymentesauvblanc1-ff236c04418e11694e15901960555090-640-0.jpg', category: 'blancos', stock: 10},
          {id:22, title: 'Taymente Chardonnay', price: 665, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/taymentechardonnay1-a0f7fe3c51b863255e15901959124134-640-0.jpg', category: 'blancos', stock: 10},
          {id:23, title: 'Diamandes de Uco Viognier', price: 2000, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/viognier1-c63a2fac85643a734315900676282614-640-0.jpg', category: 'blancos', stock: 10},
          {id:24, title: 'Cruzat Naranjo', price: 1750, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/cruzat-naranjo11-f532b1fbe21b2b64a016297282096161-640-0.png', category: 'espumantes', stock: 10},
          {id:25, title: 'Kaiken Brut', price: 1350, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/kaiken_espumante_brut-42ca00f9a8cdc9577315131761151759-480-0.gif', category: 'espumantes', stock: 10},
          {id:26, title: 'Me Echo la Burra Triple IPA', price: 365, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/me-echo-la-burra-ipa1-c963108c6257c3614f15837725038212-640-0.jpg', category: 'cervezas', stock: 10},
          {id:27, title: 'Me Echo la Burra Roja', price: 365, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/burra-ro1-5bd69db5748a6ce73014628316097455-640-0.gif', category: 'cervezas', stock: 10},
          {id:28, title: 'Me Echo la Burra Rubia', price: 365, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/me-echo-la-burra-rubia1-7f168d0616faa55c8516022861298126-640-0.jpg', category: 'cervezas', stock: 10},
          {id:29, title: 'Me Echo la Burra Negra', price: 365, description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/burra-n11-682ba221630852f18614628309249835-640-0.gif', category: 'cervezas', stock: 10},
        ];

        const item = productList.filter(item => item.id === parseInt(id));
        
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
  }
  
const ItemDetailContainer = () => {
    const [item,setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.error(err);
            });
    },[id]);
    
    return (
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )
  }
  
  export default ItemDetailContainer