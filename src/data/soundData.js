// src/data/soundData.js
// Import your local images
import logo from '../assets/images/logo.png'; // Assuming logo.png is in src/assets/images
import profileDefault from '../assets/images/profiledefault.jpeg'; // Assuming profiledefault.png is in src/assets/images

import binauralImage from '../assets/images/binaural.png.jpeg';


// Cloudinary URLs for images
const ambientImage = "https://res.cloudinary.com/didnhjwus/image/upload/v1751959509/ambient_duz0lt.jpg";
const elementalImage = "https://res.cloudinary.com/didnhjwus/image/upload/v1751941669/elemental_c09y0r.jpg";
const healingImage = "https://res.cloudinary.com/didnhjwus/image/upload/v1751944609/healing_suuzd5.jpg";
const natureImage = "https://res.cloudinary.com/didnhjwus/image/upload/v1751947380/nature_xorr6x.jpg";
const sleepImage ="https://res.cloudinary.com/didnhjwus/image/upload/v1751950210/sleep_savzs3.jpg";
const whiteNoiseImage ="https://res.cloudinary.com/didnhjwus/image/upload/v1751952350/white_noise_r2kv3d.jpg";
const shivaImage = "https://res.cloudinary.com/didnhjwus/image/upload/v1751954085/shiv_ji_adiyogi_statue_fqyju3.jpg";
const ganeshImage ="https://res.cloudinary.com/didnhjwus/image/upload/v1751956150/55832bdb-e644-49d9-b394-4d17d3668bc1_dburmq.jpg";
const guidedImage = "https://res.cloudinary.com/didnhjwus/image/upload/v1751959264/guided_gfwz2e.jpg";
const krishnaImage = "https://res.cloudinary.com/didnhjwus/image/upload/v1751960964/-krishna_radha_wallaper_qtkgoq.jpg"

// Consolidate all image URLs into a single exported object
export const IMAGE_URLS = { // Export IMAGE_URLS
  logo: logo, // Use the locally imported logo
  profile: profileDefault, // Use the locally imported default profile picture
  ambient: ambientImage,
  guided: guidedImage,
  elemental: elementalImage,
  binaural: binauralImage,
  healing: healingImage,
  nature: natureImage,
  sleep: sleepImage,
  white_noise: whiteNoiseImage,
  shiva: shivaImage,
  ganesh: ganeshImage,
  krishna: krishnaImage,
  // Add mountain_stream if it's a Cloudinary URL and not imported locally
  mountain_stream: "https://res.cloudinary.com/didnhjwus/image/upload/v1751942337/Beloved_chosic.com_z6uctz.mp3", // Placeholder, replace with actual mountain stream image URL
};


// Cloudinary URLs for audio (as per your existing file, with shiva5 URL corrected)
export const DUMMY_AUDIO_URLS = { // Added export
  meditation: "https://res.cloudinary.com/didnhjwus/video/upload/v1751942337/Beloved_chosic.com_z6uctz.mp3",
  ambient2 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751942395/Birds-Of-Passage-Between-The-Hours-Spheria-Rework-chosic.com__aasdlx.mp3",
  ambient3 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751943796/Sunset-Landscape_chosic.com_sudrtr.mp3",
  ambient4: "https://res.cloudinary.com/didnhjwus/video/upload/v1751944039/Evening-Improvisation-with-Ethera_chosic.com_ovguht.mp3",
  ambient5: "https://res.cloudinary.com/didnhjwus/video/upload/v1751944049/Spring-Flowers_chosic.com_cgx7hl.mp3",
  ambient6:"https://res.cloudinary.com/didnhjwus/video/upload/v1751944057/tokyo-music-walker-sunset-drive-chosic.com__v2paaf.mp3",
  healing1 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751945983/spiritual-healing-and-emotional-release-225402_zyq8ut.mp3",
  healing2: "https://res.cloudinary.com/didnhjwus/video/upload/v1751945992/healing-music-tissue-healing-and-self-expression-225394_t31s0r.mp3",
  healing3: "https://res.cloudinary.com/didnhjwus/video/upload/v1751945996/333-hz-healing-frequencies-221873_cnazzq.mp3",
  healing4 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751945999/calm-healing-music-236395_chu6lo.mp3",
  healing5 :"https://res.cloudinary.com/didnhjwus/video/upload/v1751946009/healing-glow-352242_vnfbqn.mp3",
  heaing6 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751946017/healing-relaxing-music-320258_vrlel2.mp3",
  healing7 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751946031/healing-light-352243_utsblh.mp3",
  healing8: "https://res.cloudinary.com/didnhjwus/video/upload/v1751946034/inner-peace-339640_he7usp.mp3",
  nature1 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751947509/voice-of-nature-116217_h9p6jd.mp3",
  nature2: "https://res.cloudinary.com/didnhjwus/video/upload/v1751947552/nature-272403_azi12c.mp3",
  nature3 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751947553/nature-documentary-309042_hajfh2.mp3",
  nature4: "https://res.cloudinary.com/didnhjwus/video/upload/v1751947556/nature-beauty-318381_jrn1qf.mp3",
  nature5 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751947590/nature-walk-124997_fajbpw.mp3",
  nature6 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751947596/mixkit-walking-dead-893_b3p5tg.mp3",
  nature7: "https://res.cloudinary.com/didnhjwus/video/upload/v1751947607/melody-of-nature-main-6672_wsatkx.mp3",
  nature8 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751947607/mixkit-a-peaceful-world-1051_raoumd.mp3",
  nature9 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751947608/mixkit-games-worldbeat-466_ihkhxe.mp3",
  nature10: "https://res.cloudinary.com/didnhjwus/video/upload/v1751947613/nature-calming-310735_hdg495.mp3",
  sleep1: "https://res.cloudinary.com/didnhjwus/video/upload/v1751950290/soothing-deep-sleep-music-432-hz-191708_xarwki.mp3",
  sleep2: "https://res.cloudinary.com/didnhjwus/video/upload/v1751950569/peaceful-dreamland-music-for-peaceful-sleep-353770_jcoynv.mp3",
  sleep3:"https://res.cloudinary.com/didnhjwus/video/upload/v1751950602/rainspace-soothing-sleepscape-with-gentle-storm-369766_yyyftn.mp3",
  sleep4:"https://res.cloudinary.com/didnhjwus/video/upload/v1751950660/calming-ambient-sound-for-sleep-332232_qnngks.mp3",
  sleep5:"https://res.cloudinary.com/didnhjwus/video/upload/v1751950735/peaceful-sleep-188311_f8cjxv.mp3",
  sleep6:"https://res.cloudinary.com/didnhjwus/video/upload/v1751950783/the-old-water-mill-meditation-8005_qkssr2.mp3",
  sleep7 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751950803/sleep-141321_v1an3u.mp3",
  sleep8 :"https://res.cloudinary.com/didnhjwus/video/upload/v1751950827/chakra-sleep-291222_lzqfac.mp3",
  sleep9 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751950863/sleep-music-vol1-168122_jtlzgj.mp3",
  sleep10 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751950871/frequency-of-sleep-meditation-113050_tbzazd.mp3",
  sleep11: "https://res.cloudinary.com/didnhjwus/video/upload/v1751950874/sleep-music-vol16-195422_lo0opf.mp3",
  whitenoise1 :"https://res.cloudinary.com/didnhjwus/video/upload/v1751952385/pink-noise-by-digitalspa-170340_t1oiyh.mp3",
  whitenose2 :"https://res.cloudinary.com/didnhjwus/video/upload/v1751952389/wind__artic__cold-6195_po1eu7.mp3",
  whitenoise3 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751952409/sleep-well-rainy-toasted-white-noise-mix-229397_ihqwsq.mp3",
  whitenoise4: "https://res.cloudinary.com/didnhjwus/video/upload/v1751952422/relaxing-smoothed-brown-noise-294838_hslyvm.mp3",
  whitenoise5: "https://res.cloudinary.com/didnhjwus/video/upload/v1751952431/soothing-deep-noise-293777_otmgwv.mp3",
  whitenoise6 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751952441/heavy-rain-white-noise-159772_q43db8.mp3",
  whitenoise7 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751952445/ambient-noise-236388_ht5bns.mp3",
  shiva1 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751954666/Shiva-Shiva-Shivaya_mx0puy.mp3",
  shiva2 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751954695/shivashtakam_jl6dim.mp3",
  shiva3 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751954730/Shiva-Stotram_ki9swl.mp3",
  shiva4 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751954744/Aum-Namah-Shivaya_bhvdnf.mp3",
  shiva5 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751954748/Nirvana-Shatakam_o5bt4p.mp3", 
  shiva6 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751954833/Maha-Mrutyunjaya-Mantra-108-cycles_zwibbd.mp3",
  ganesh1 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751956498/iSongs.info_01_-_Ekadantaya_Vakratundaya_eql3z4.mp3",
  guided1 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751959361/om-namah-shivaya-meditative-music-234720_liivoq.mp3",
  guided2 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751959378/ancient-spirit-echoes-om-chanting-234045_jfbmmf.mp3",
  guided3 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751959399/meditation-music-368634_rmijsg.mp3",
  guided4 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751959413/deep-meditation-192828_umtvof.mp3",
  guided5 :"https://res.cloudinary.com/didnhjwus/video/upload/v1751959413/sacred-vibrations-om-chanting-268327_ka2swp.mp3",
  guided6 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751959450/timeless-mantra-om-chanting-268330_nnmdpo.mp3",
  guided7 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751959456/morning-in-the-forest-347089_gh0qmd.mp3",
  krishna1 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751961047/Hare_Rama_Hare_Krishna_Mantra_PenduJatt.Com.Se_dxawnq.mp3",
  krishna2: "https://res.cloudinary.com/didnhjwus/video/upload/v1751961063/hare-krishna-relaxing-music-5-117834_a5k9ll.mp3",
  krishna3 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751961065/hare-krishna-relaxing-theme-4-114482_minkwq.mp3",
  krishna4 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751961211/relaxing-krishna-flute-music-deep-sleep-relaxing-music-292793_cv93bl.mp3",
  krishna5 : "https://res.cloudinary.com/didnhjwus/video/upload/v1751961244/Krishnaya_Vasudevaya_-_Shri_Krishna_Mantra_108_Chants_PenduJatt.Com.Se_lpwyrl.mp3",
};

export const soundCategories = [
  { id: 'nature', name: 'Nature Sounds', image: IMAGE_URLS.nature },
  { id: 'ambient', name: 'Ambient Music', image: IMAGE_URLS.ambient },
  { id: 'guided', name: 'Guided Relaxation', image: IMAGE_URLS.guided },
  { id: 'white_noise', name: 'White Noise', image: IMAGE_URLS.white_noise },
  { id: 'elemental', name: 'Elemental Sounds', image: IMAGE_URLS.elemental },
  { id: 'sleep', name: 'Sleep & Deep Rest', image: IMAGE_URLS.sleep },
  { id: 'binaural', name: 'Binaural Beats', image: IMAGE_URLS.binaural },
  { id: 'healing', name: 'Healing Frequencies', image: IMAGE_URLS.healing },
];

export const featuredSoundscapes = [
  { id: 'shiva_songs', name: 'Lord Shiva Songs', description: 'Sounds of a powerful lord shivaa.', image: IMAGE_URLS.shiva },
  { id: 'ganesh_songs', name: 'Ganesha Songs', description: 'Gentle waves of sound for peacful mind.', image: IMAGE_URLS.ganesh },
  { id: 'krishna_songs', name: 'Krishna Songs', description: 'Magical vocals of krishna.', image: IMAGE_URLS.krishna },
];

export const songsData = {
  ambient: [
    { id: 'a1', name: 'Beloved Chosic', artist: 'Ambient', duration: '5:00',audio: DUMMY_AUDIO_URLS.meditation,image: IMAGE_URLS.elemental},
    {id : 'a2', name : 'Birds of passage' , artist : 'Ambient', duration: '3:43', audio: DUMMY_AUDIO_URLS.ambient2 ,image: IMAGE_URLS.elemental} ,
    {id : 'a3', name : 'Sunset Landscape' , artist : 'Ambient', duration: '2:27', audio: DUMMY_AUDIO_URLS.ambient3 ,image: IMAGE_URLS.elemental} ,
    {id : 'a4', name : 'Evening Improvesation' , artist : 'Ambient', duration: '2:29', audio: DUMMY_AUDIO_URLS.ambient4 ,image: IMAGE_URLS.elemental} ,
    {id : 'a5', name : 'Walker Sunset' , artist : 'Ambient', duration: '3:57', audio: DUMMY_AUDIO_URLS.ambient5 ,image: IMAGE_URLS.elemental} ,
    {id : 'a6', name : 'Spring Flowers' , artist : 'Ambient', duration: '3:33', audio: DUMMY_AUDIO_URLS.ambient6 ,image: IMAGE_URLS.elemental} ,
  ],
  healing : [
    { id: 'h1', name: 'Spiritual healing & emotional release', artist: 'Healing', duration: '2:00',audio: DUMMY_AUDIO_URLS.healing1,image: IMAGE_URLS.healing},
    { id: 'h2', name: 'Tissue healing', artist: 'Healing', duration: '2:00',audio: DUMMY_AUDIO_URLS.healing2,image: IMAGE_URLS.healing},
    { id: 'h3', name: 'Healing frequencies', artist: 'Healing', duration: '2:00',audio: DUMMY_AUDIO_URLS.healing3,image: IMAGE_URLS.healing},
    { id: 'h4', name: 'Calm healing', artist: 'Healing', duration: '4:00',audio: DUMMY_AUDIO_URLS.healing4,image: IMAGE_URLS.healing},
    { id: 'h5', name: 'Healing glow', artist: 'Healing', duration: '3:44',audio: DUMMY_AUDIO_URLS.healing5,image: IMAGE_URLS.healing},
    { id: 'h6', name: 'Relax Healing', artist: 'Healing', duration: '3:13',audio: DUMMY_AUDIO_URLS.heaing6,image: IMAGE_URLS.healing},
    { id: 'h7', name: 'Inner peace', artist: 'Healing', duration: '10:28',audio: DUMMY_AUDIO_URLS.healing7,image: IMAGE_URLS.healing},
    { id: 'h8', name: 'Healing light', artist: 'Healing', duration: '3:21',audio: DUMMY_AUDIO_URLS.healing8,image: IMAGE_URLS.healing},
  ],
  nature : [
    {id : 'n1', name : 'Voice of nature' , artist : 'Nature', duration: '3:14', audio: DUMMY_AUDIO_URLS.nature1 ,image: IMAGE_URLS.nature} ,
    {id : 'n2', name : 'Nature' , artist : 'Nature', duration: '2:14', audio: DUMMY_AUDIO_URLS.nature2 ,image: IMAGE_URLS.nature} ,
    {id : 'n3', name : 'Nature-Documentary' , artist : 'Nature', duration: '2:26', audio: DUMMY_AUDIO_URLS.nature3 ,image: IMAGE_URLS.nature} ,
    {id : 'n4', name : 'Nature-Beauty' , artist : 'Nature', duration: '2:18', audio: DUMMY_AUDIO_URLS.nature4 ,image: IMAGE_URLS.nature} ,
    {id : 'n5', name : 'Nature walk' , artist : 'Nature', duration: '5:24', audio: DUMMY_AUDIO_URLS.nature5 ,image: IMAGE_URLS.nature} ,
    {id : 'n6', name : 'Walking Dead' , artist : 'Nature', duration: '2:02', audio: DUMMY_AUDIO_URLS.nature6 ,image: IMAGE_URLS.nature} ,
    {id : 'n7', name : 'Melody of nature' , artist : 'Nature', duration: '3:01', audio: DUMMY_AUDIO_URLS.nature7 ,image: IMAGE_URLS.nature} ,
    {id : 'n8', name : 'Peaceful world' , artist : 'Nature', duration: '1:47', audio: DUMMY_AUDIO_URLS.nature8 ,image: IMAGE_URLS.nature} ,
    {id : 'n9', name : 'Games worldbeat' , artist : 'Nature', duration: '1:46', audio: DUMMY_AUDIO_URLS.nature9 ,image: IMAGE_URLS.nature} ,
    {id : 'n10', name : 'Nature calming' , artist : 'Nature', duration: '4:00', audio: DUMMY_AUDIO_URLS.nature10 ,image: IMAGE_URLS.nature} ,
  ],
  sleep :[
    {id : 's1', name : 'Soothing deep sleep' , artist : 'Sleep', duration: '3:26', audio: DUMMY_AUDIO_URLS.sleep1 ,image: IMAGE_URLS.sleep} ,
    {id : 's2', name : 'Peaceful Dreamland' , artist : 'Sleep', duration: '1:00', audio: DUMMY_AUDIO_URLS.sleep2 ,image: IMAGE_URLS.sleep} ,
    {id : 's3', name : 'Rainspace soothing space ' , artist : 'Sleep', duration: '4:00', audio: DUMMY_AUDIO_URLS.sleep3 ,image: IMAGE_URLS.sleep} ,
    {id : 's4', name : 'Calming ambient' , artist : 'Sleep', duration: '5:40', audio: DUMMY_AUDIO_URLS.sleep4 ,image: IMAGE_URLS.sleep} , // Corrected DMY to DUMMY
    {id : 's5', name : 'Peaceful Sleep' , artist : 'Sleep', duration: '5:00', audio: DUMMY_AUDIO_URLS.sleep5 ,image: IMAGE_URLS.sleep} ,
    {id : 's6', name : 'The Old Water Meditation' , artist : 'Sleep', duration: '15:59', audio: DUMMY_AUDIO_URLS.sleep6 ,image: IMAGE_URLS.sleep} ,
    {id : 's7', name : 'Sleep' , artist : 'Sleep', duration: '12:45', audio: DUMMY_AUDIO_URLS.sleep7 ,image: IMAGE_URLS.sleep} ,
    {id : 's8', name : 'Chakra sleep' , artist : 'Sleep', duration: '20:30', audio: DUMMY_AUDIO_URLS.sleep8 ,image: IMAGE_URLS.sleep} ,
    {id : 's9', name : 'Sleep music' , artist : 'Sleep', duration: '22:25', audio: DUMMY_AUDIO_URLS.sleep9,image: IMAGE_URLS.sleep} ,
    {id : 's10', name : 'Frequency of sleep' , artist : 'Sleep', duration: '30:00', audio: DUMMY_AUDIO_URLS.sleep10 ,image: IMAGE_URLS.sleep} ,
    {id : 's11', name : 'Sleep music loop' , artist : 'Sleep', duration: '20:07', audio: DUMMY_AUDIO_URLS.sleep11 ,image: IMAGE_URLS.sleep} ,
  ],
  white_noise :[
    {id : 'w1', name : 'Digital spa' , artist : 'White Noise', duration: '1:00', audio: DUMMY_AUDIO_URLS.whitenoise1 ,image: IMAGE_URLS.white_noise} ,
    {id : 'w2', name : 'Wind artic cold' , artist : 'White Noise', duration: '0:59', audio: DUMMY_AUDIO_URLS.whitenose2 ,image: IMAGE_URLS.white_noise} ,
    {id : 'w3', name : 'Rainy toasted' , artist : 'White Noise', duration: '2:00', audio: DUMMY_AUDIO_URLS.whitenoise3 ,image: IMAGE_URLS.white_noise} ,
    {id : 'w4', name : 'Relaxing smooted' , artist : 'White Noise', duration: '10:00', audio: DUMMY_AUDIO_URLS.whitenoise4 ,image: IMAGE_URLS.white_noise} ,
    {id : 'w5', name : 'Deep noise ' , artist : 'White Noise', duration: '10:00', audio: DUMMY_AUDIO_URLS.whitenoise5 ,image: IMAGE_URLS.white_noise} ,
    {id : 'w6', name : 'Heavy rain' , artist : 'White Noise', duration: '3:00', audio: DUMMY_AUDIO_URLS.whitenoise6,image: IMAGE_URLS.white_noise} ,
    {id : 'w7', name : 'Ambient noise' , artist : 'White Noise', duration: '1:44', audio: DUMMY_AUDIO_URLS.whitenoise7 ,image: IMAGE_URLS.white_noise} ,
  ],
  shiva_songs :[
    {id : 's1', name : 'Shiva Shiva Shivaya' , artist : 'Mahadev', duration: '3:15', audio: DUMMY_AUDIO_URLS.shiva1 ,image: IMAGE_URLS.shiva} ,
    {id : 's2', name : 'Shivashtakam' , artist : 'Mahadev', duration: '5:29', audio: DUMMY_AUDIO_URLS.shiva2 ,image: IMAGE_URLS.shiva} ,
    {id : 's3', name : 'Shiva Stotram' , artist : 'Mahadev', duration: '7:32', audio: DUMMY_AUDIO_URLS.shiva3 ,image: IMAGE_URLS.shiva} ,
    {id : 's4', name : 'Aum Namah Shivaya' , artist : 'Mahadev', duration: '20:06', audio: DUMMY_AUDIO_URLS.shiva4 ,image: IMAGE_URLS.shiva} ,
    {id : 's5', name : 'Nirvana Shatakam' , artist : 'Mahadev', duration: '9:08', audio: DUMMY_AUDIO_URLS.shiva5 ,image: IMAGE_URLS.shiva} ,
    {id : 's6', name : 'Maha Mrutyujaya mantra' , artist : 'Mahadev', duration: '36:32', audio: DUMMY_AUDIO_URLS.shiva6 ,image: IMAGE_URLS.shiva} ,
  ],
  ganesh_songs :[
    {id : 'g1', name : 'Ekadantaya' , artist : 'Ganesh maharaj', duration: '36:32', audio: DUMMY_AUDIO_URLS.ganesh1 ,image: IMAGE_URLS.ganesh} ,
  ],

  guided :[
    {id : 'gg1', name : 'Om namah shivaya meditative music' , artist : 'Guided Relaxation', duration: '4:00', audio: DUMMY_AUDIO_URLS.guided1 ,image: IMAGE_URLS.guided} ,
    {id : 'gg2', name : 'Ancient spirit echoes' , artist : 'Guided Relaxation', duration: '5:55', audio: DUMMY_AUDIO_URLS.guided2 ,image: IMAGE_URLS.guided} ,
    {id : 'gg3', name : 'Meditation music' , artist : 'Guided Relaxation', duration: '5:47', audio: DUMMY_AUDIO_URLS.guided3 ,image: IMAGE_URLS.guided} ,
    {id : 'gg4', name : 'Deep meditation' , artist : 'Guided Relaxation', duration: '10:45', audio: DUMMY_AUDIO_URLS.guided4 ,image: IMAGE_URLS.guided} ,
    {id : 'gg5', name : 'Sacred meditation' , artist : 'Guided Relaxation', duration: '12:10', audio: DUMMY_AUDIO_URLS.guided5 ,image: IMAGE_URLS.guided} ,
    {id : 'gg6', name : 'Timeless mantra ' , artist : 'Guided Relaxation', duration: '25:00', audio: DUMMY_AUDIO_URLS.guided6 ,image: IMAGE_URLS.guided} ,
    {id : 'gg7', name : 'Middle of the forest' , artist : 'Guided Relaxation', duration: '10:55', audio: DUMMY_AUDIO_URLS.guided7 ,image: IMAGE_URLS.guided} ,
  ],

  krishna_songs : [
    {id : 'k1', name : 'Hare Rama Hare Krishna' , artist : 'Radhe Krishna ', duration: '4:00', audio: DUMMY_AUDIO_URLS.krishna1 ,image: IMAGE_URLS.krishna} ,
    {id : 'k2', name : 'Hare krishna relaxing music' , artist : 'Radhe Krishna ', duration: '4:00', audio: DUMMY_AUDIO_URLS.krishna2 ,image: IMAGE_URLS.krishna} ,
    {id : 'k3', name : 'Hare krishna relaxing theme ' , artist : 'Radhe Krishna ', duration: '4:00', audio: DUMMY_AUDIO_URLS.krishna3 ,image: IMAGE_URLS.krishna} ,
    {id : 'k4', name : 'krishna flute music ' , artist : 'Radhe Krishna ', duration: '4:00', audio: DUMMY_AUDIO_URLS.krishna4 ,image: IMAGE_URLS.krishna} ,
    {id : 'k5', name : 'Krishnaya vasudevaya mantra' , artist : 'Radhe Krishna ', duration: '4:00', audio: DUMMY_AUDIO_URLS.krishna5 ,image: IMAGE_URLS.krishna} ,
  ]
};