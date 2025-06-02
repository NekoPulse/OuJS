const express = require('express');
const app = express();

// Helper para generar IDs cortos (puedes mejorarlo si necesitas IDs más robustos)
const generateId = () => Math.random().toString(36).slice(2, 9);

// ¡IMPORTANTE! Actualiza width y height con los valores correctos para cada imagen.
const imagesData = [
  { id: generateId(), url: "https://i.redd.it/b45dxk0xvq8d1.png", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818345_b3c7daa776a443eda8d67aa8f0354763_meme_otros_soy_un_incomprendido_1.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818247_018715dc48554c3d83424844503b4513_otros_la_esperanza_es_lo_ultimo_que_se_pierde_1.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2817852_a56bd848b5164818ad555ed0785ef363_meme_otros_bien_de_camuflaje.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2817863_e3c98f0b227a4431aa6de2164a05e65c_meme_otros_adorable_accidente.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818186_760531510625435ba85b7ca4db09da3c_otros_animales_yendo_al_zoo.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818310_ced991691ada4717a3619a55ddefe4c5_meme_otros_dia_de_pierna_y_nuca.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2817924_2bd5eb0ec3024b9491a6ccbf516be173_meme_otros_todo_negocio_tiene_sus_comienzos.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818136_3c2ecee0a833496d9822d3d9e6602819_otros_se_han_ido_ya.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818060_b85cda456f17428292f5d449c48e144b_meme_otros_a_esa_gente_que_le_pasa.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818118_c38d37d1f0ab4371b53f6f58bd3f96f8_otros_no_hombre_no_43.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818323_8f8f6376e0634531a45d4b85e0825f48_meme_otros_hasta_aqui_llegue.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818284_fc18f9df5e544efe8beb4951c9e9a783_meme_otros_no_valieron_para_nada.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818264_bcda15b088fb4b40b47cb2808595fb31_meme_otros_princesos_disney.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818253_323f3ab0580f424c92b411058e971f70_meme_otros_mario_jugaba_con_nuestras_mentes.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818236_18a41b7b5f56476fbf62b1bf9a57c2a8_otros_no_voy_a_ser_yo_quien_le_refresque_la_memoria.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818277_d6a82d2b54d4454fba3e9460468ebfde_meme_otros_hay_quien_esclaviza_a_chatgpt.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818043_97ec2e6f89a0457ba8348992b00ed339_meme_otros_jugando_a_imaginar.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818043_97ec2e6f89a0457ba8348992b00ed339_meme_otros_jugando_a_imaginar.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818182_b48d404824e94035b41e22c0e8ce71b4_otros_la_sorpresa_se_la_llevaron_sus_amigos.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/October2022/IMG-20221019-WA0002.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/October2022/IMG-20221028-WA0003.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/October2022/IMG-20220919-WA0005~2.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/October2022/IMG-20221012-WA0003.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/June2022/electricista.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/June2022/FB_IMG_1656087685297.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/June2022/perro-hombre.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/May2022/IMG-20220512-WA0012.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/May2022/IMG-20220512-WA0012.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/February2022/republica-checa-ucrania.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/February2022/rusia-vs-ucrania.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/February2022/lotr-ucrania.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/January2022/Screenshot_20220122-141321.png", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/January2022/IMG-20220101-WA0006.jpg", width: null, height: null },
  { id: generateId(), url: "https://www.elbutanero.com/content/uploads/images/January2022/IMG-20220103-WA0015.jpg", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818056_e15e064cfab346d2aa9967387c84ab1e_meme_otros_spiderman_en_las_americas.jpg?cb=8676898", width: null, height: null }, // Limpiar ?cb= si no es necesario
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818190_0fb5644e3d7040dabe3851d5adb9f85d_otros_jamas_se_lo_perdonare.jpg?cb=2039822", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818138_d5914da2fb7c4dc5bbf08dd7d50f6389_meme_otros_tiempo_extra.jpg?cb=3964388", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818064_b3bbff9b7b1943fdae8be1ecdc29bf0f_meme_otros_algo_hay_ahi.jpg?cb=5437622", width: null, height: null },
  { id: generateId(), url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818189_2ac9fde160174a2f8950427d67ba74ef_otros_no_me_va_a_hacer_ningun_bien.jpg?cb=7734277", width: null, height: null },
  { id: generateId(), url: "https://preview.redd.it/when-you-didnt-read-the-fine-print-v0-8rp4vewida4f1.png?width=1080&crop=smart&auto=webp&s=570721e7d86cd3be5b7996fda7f9aaac51b30419", width: null, height: null }, // Limpiar parámetros de URL si es posible/necesario
  { id: generateId(), url: "https://preview.redd.it/no-i-wont-buy-your-stuff-v0-mss63s9xta4f1.jpeg?width=1080&crop=smart&auto=webp&s=c71ff61c782b9245bda25faba246dc02b8fb3606", width: null, height: null },
  { id: generateId(), url: "https://preview.redd.it/1e32x0oyhi2f1.png?width=320&crop=smart&auto=webp&s=0bda11bc08937c7f431cdb1d4e0adbf461eb0c57", width: null, height: null },
  { id: generateId(), url: "https://preview.redd.it/because-i-dont-like-it-v0-obo2umfgp84f1.jpeg?width=1080&crop=smart&auto=webp&s=58f28247e94b1ea19a973503d2e1ab2c13575efe", width: null, height: null },
  { id: generateId(), url: "https://preview.redd.it/checkpoint-found-v0-xz7fetb02e4f1.jpeg?width=640&crop=smart&auto=webp&s=10f49d8cc989865cb39e5c6f0fdd844a2667a62b", width: null, height: null },
  { id: generateId(), url: "https://preview.redd.it/byit66drsa4f1.gif?width=360&format=mp4&s=9ece3435caba7da0c20d5ec0e34664f1d0066cf2", width: null, height: null }, // Esta es un GIF/MP4, asegúrate que el cliente lo maneje
  { id: generateId(), url: "https://images3.memedroid.com/images/UPLOADED266/683c9ebe8cc2b.webp", width: null, height: null },
  { id: generateId(), url: "https://images7.memedroid.com/images/UPLOADED817/683c2a56183b5.webp", width: null, height: null },
  { id: generateId(), url: "https://images3.memedroid.com/images/UPLOADED266/683c9ebe8cc2b.webp", width: null, height: null },
  { id: generateId(), url: "https://images7.memedroid.com/images/UPLOADED530/683c89d598b85.webp", width: null, height: null },
  { id: generateId(), url: "https://images7.memedroid.com/images/UPLOADED408/683c0f7012fc7.webp", width: null, height: null },
  { id: generateId(), url: "https://images7.memedroid.com/images/UPLOADED414/683cb02fb4bcf.webp", width: null, height: null },
];

app.get('/api/imagen-aleatoria', (req, res) => {
  if (!imagesData || imagesData.length === 0) {
    return res.status(500).json({ error: "No hay imágenes configuradas en el servidor." });
  }

  const randomIndex = Math.floor(Math.random() * imagesData.length);
  const randomImageObject = imagesData[randomIndex];

  // Devolver el objeto de la imagen dentro de un array, como solicitaste
  res.json([randomImageObject]);
});

// Ruta raíz para verificar que la API funciona (opcional)
app.get('/', (req, res) => {
  res.send('¡API de imágenes funcionando! Prueba el endpoint /api/imagen-aleatoria');
});

// Vercel maneja el servidor, así que no necesitas app.listen() aquí para producción.
// Solo exporta la app.
module.exports = app;