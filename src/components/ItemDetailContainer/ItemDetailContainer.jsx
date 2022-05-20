import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom'
import db from '../../services/firebase';
import {doc, getDoc} from 'firebase/firestore';

const getItem = (id) => {

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef);
    // const myPromise = new Promise((resolve,reject) => {
    //     const productList = [
    //         {id:1, title: 'Siete Vacas Torrontes', price: 900, bodega: 'Bodega Las Arcas de Tolombon - Valle Calchaquí', description: 'De color amarillo claro con tonalidades verdosas, límpido y brillante. En nariz es muy frutado, típico de la región, con sutiles notas de durazno blanco y cítricos. En boca es amable, fresco, con final largo y equilibrado', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-torrontes1-99271abbb27498181f16032285125101-640-0.jpg', category: 'blancos', stock: 10},
    //         {id:2, title: 'Siete Vacas Malbec Origen', price: 900, bodega: 'Bodega Las Arcas de Tolombon - Valle Calchaquí', description: 'De color rojo rubí intenso con bordes violáceos. En nariz es muy frutado típico de la región, con notas de ciruelas, pasas de uva y pimienta. En boca es voluminoso, de estructura intensa, con taninos suaves y amables, final equilibrado y armónico.', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-malbec1-a373d43bd398896c8516032280594428-640-0.jpg', category: 'tintos', stock: 10},
    //         {id:3, title: 'Siete Vacas Cabernet Sauvignon Origen', price: 900, bodega: 'Bodega Las Arcas de Tolombon - Valle Calchaquí', description: 'De color rojo rubí intenso con bordes violáceos. En nariz es frutado y típico con notas de pimiento, pimienta y especies. En boca es de buen volumen y estructura armónica, con buen final de taninos suaves y maduros', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-cabernet-sauvignon1-01a1671e17067e49ed16032278974733-640-0.jpg', category: 'tintos', stock: 10},
    //         {id:4, title: 'Siete Vacas Cabernet Sauvignon Reserva', price: 1550, bodega: 'Bodega Las Arcas de Tolombon - Valle Calchaquí', description: 'De color rojo rubí intenso con borde violáceos. En nariz es frutado y típico con notas de pimiento,  pimienta y especies. En boca tiene buen volumen y estructura armónica, con buen final de taninos suaves y maduros.', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-reserva-cabernet-sauvignon1-4c110db567cf9dbb6716032275610969-640-0.jpg', category: 'tintos', stock: 10},
    //         {id:5, title: 'Siete Vacas Tannat Reserva', price: 1550, bodega: 'Bodega Las Arcas de Tolombon - Valle Calchaquí', description: 'De color rojo morado rubí, tirando a granate. En nariz es frutado y típico con notas de pimientos asado, pimienta, especies y delicado sabor a frutos negros maduros. En boca es de buen volumen y estructura, armónica con buen final de taninos intensos y maduros.', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-reserva-tannat1-72b783d84f338815e116032270632961-640-0.jpg', category: 'tintos', stock: 10},
    //         {id:6, title: 'Siete Vacas Espumante Rosado', price: 1300, bodega: 'Bodega Enrique Foster – Luján de Cuyo', description: 'Espumante Blanc de Noir, elaborado con uvas Malbec con el método Charmat lungo. En la copa, las burbujas son pequeñas y firmes. En la nariz encontramos aromas frutados típicos de la variedad, como guinda y cereza; junto como leves notas a panificados. En la boca es suave, con una excelente acidez y buen cuerpo. La burbuja destaca la frescura por su persistencia.', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/siete-vacas-espumante1-d84dfd95608371867016032268477868-640-0.jpg', category: 'espumantes', stock: 10},
    //         {id:7, title: 'Aristides Confidencial Extra Brut', price: 2415, bodega: 'Bodega Aristides ', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/b70f29_8e4dad2d25ce4bd095bec3526c879622_mv21-894e6a192cca6be4a916140947136105-640-0.jpg', category: 'espumantes', stock: 10},
    //         {id:8, title: 'Aristides Bonarda', price: 770, bodega: 'Bodega Aristides ', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/aristides_bonarda1-c41bf24591115a66a115131748388183-640-0.gif', category: 'tintos', stock: 10},
    //         {id:9, title: 'Aristides Merlot', price: 770, bodega: 'Bodega Aristides ', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/aristides-merlot1-6156359b2e4b06d28015814351831121-640-0.jpg', category: 'tintos', stock: 10},
    //         {id:10, title: 'Aristides Malbec', price: 770, bodega: 'Bodega Aristides ', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/aristides_malbec1-2df63744d2b6f0e3d815131748530477-640-0.gif', category: 'tintos', stock: 10},
    //         {id:11, title: 'Aristides Cabernet Sauvignon', price: 770, bodega: 'Bodega Aristides ', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/aristides_cabernet1-9bfeefd99e1bfc153d15131748461602-640-0.gif', category: 'tintos', stock: 10},
    //         {id:12, title: 'Mythic Mountain Cabernet Franc', price: 990, bodega: 'Mythic Wine - Mendoza', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/mythic-cabernet-franc1-3b27f9d76d4a0eac9716020753480970-640-0.jpg', category: 'tintos', stock: 10},
    //         {id:13, title: 'Mythic Mountain Petit Verdot', price: 990, bodega: 'Mythic Wine - Mendoza', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/mythic-petit1-30efff58dec427067d16020749360771-640-0.jpg', category: 'tintos', stock: 10},
    //         {id:14, title: 'Mythic Vineyard Blanc de Blanc', price: 1390, bodega: 'Mythic Wine - Mendoza', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/mythic-blanc-de-blancs1-26bc333f3ee0cef08c15985024394047-1024-10241-ca095d7760423d68b716020717181137-640-0.png', category: 'blancos', stock: 10},
    //         {id:15, title: 'Jaque Mate Sauvignon Blanc', price: 740, bodega: 'Bodegas y Viñedos Sánchez', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/jaque-mate-sauvignon-blanc1-d93bb26d687b00643515986539494118-640-0.jpg', category: 'blancos', stock: 10},
    //         {id:16, title: 'Jaque Mate Cabernet Franc Reserva', price: 1115, bodega: 'Bodegas y Viñedos Sánchez', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/jaque-mate-reserva-cabernet-franc1-d18095e7ea9904ec1215986530742040-640-0.jpg', category: 'tintos', stock: 10},
    //         {id:17, title: 'Las Perdices Exploracion Casablanca', price: 2150, bodega: 'Viña Las Perdices', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/vino-las-perdices-exploracion-casa-blanca-sauvignon-blanc-d_nq_np_693115-mla29480640575_022019-f1-632ae12afe7abda88f15902635029767-640-0.jpg', category: 'blancos', stock: 10},
    //         {id:18, title: 'Taymente Cabernet Sauvignon', price: 770, bodega: 'Huarpe Wines - Agrelo, Lujan de Cuyo', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/taymente-cabernet1-0d1d54ddb79bc65c1a15901965389939-640-0.jpg', category: 'tintos', stock: 10},
    //         {id:19, title: 'Taymente Malbec', price: 770, bodega: 'Huarpe Wines - Agrelo, Lujan de Cuyo', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/taymentes-malbec1-c3ed51ba8509bf29bf15901956387642-640-0.jpg', category: 'tintos', stock: 10},
    //         {id:20, title: 'Taymente Sauvignon Blanc', price: 665, bodega: 'Huarpe Wines - Agrelo, Lujan de Cuyo', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/taymentesauvblanc1-ff236c04418e11694e15901960555090-640-0.jpg', category: 'blancos', stock: 10},
    //         {id:21, title: 'Taymente Chardonnay', price: 665, bodega: 'Huarpe Wines - Agrelo, Lujan de Cuyo', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/taymentechardonnay1-a0f7fe3c51b863255e15901959124134-640-0.jpg', category: 'blancos', stock: 10},
    //         {id:22, title: 'Diamandes de Uco Viognier', price: 2000, bodega: 'Bodega DiamAndes', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/viognier1-c63a2fac85643a734315900676282614-640-0.jpg', category: 'blancos', stock: 10},
    //         {id:23, title: 'Cruzat Naranjo', price: 1750, bodega: 'Bodega Cruzat - Mendoza', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/cruzat-naranjo11-f532b1fbe21b2b64a016297282096161-640-0.png', category: 'espumantes', stock: 10},
    //         {id:24, title: 'Kaiken Brut', price: 1350, bodega: 'Bodega Kaiken', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/kaiken_espumante_brut-42ca00f9a8cdc9577315131761151759-480-0.gif', category: 'espumantes', stock: 10},
    //         {id:25, title: 'Me Echo la Burra Triple IPA', price: 365, bodega: '', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/me-echo-la-burra-ipa1-c963108c6257c3614f15837725038212-640-0.jpg', category: 'cervezas', stock: 10},
    //         {id:26, title: 'Me Echo la Burra Roja', price: 365, bodega: '', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/burra-ro1-5bd69db5748a6ce73014628316097455-640-0.gif', category: 'cervezas', stock: 10},
    //         {id:27, title: 'Me Echo la Burra Rubia', price: 365, bodega: '', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/me-echo-la-burra-rubia1-7f168d0616faa55c8516022861298126-640-0.jpg', category: 'cervezas', stock: 10},
    //         {id:28, title: 'Me Echo la Burra Negra', price: 365, bodega: '', description: '', pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/220/578/products/burra-n11-682ba221630852f18614628309249835-640-0.gif', category: 'cervezas', stock: 10},
    //     ];

    //     const item = productList.filter(item => item.id === parseInt(id));
        
    //     setTimeout(() => {
    //         resolve(item[0]);
    //     }, 2000);
    // });
    // return myPromise;
  }
  
const ItemDetailContainer = () => {
    const [item,setItem] = useState({});
    const {id} = useParams();

    const getSelectedItem = async(itemId) =>{
        try {
            const document = doc(db, 'items', itemId)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setItem(result)

        }catch(err){
            console.error(err);
        }
    } 

    useEffect(() => {
        getSelectedItem(id)
    },[id])

    // useEffect(() => {
    //     getItem(id)
    //         .then(snapshot => {
    //             setItem({...snapshot.data(), id: snapshot.id});
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // },[id]);

    // getItem(id)
    //         .then(res => {
    //             setItem(res);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // },[id]);
    
    return (
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )
  }
  
  export default ItemDetailContainer