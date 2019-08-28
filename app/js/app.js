let demo = {
  popular:[{
    id: '18347',
    url: '',
    title: 'Fabulous Japanese girl Hitomi Tanaka in Hottest JAV censored Fingering, MILFs video',
    img: 'https://vjav2.hclips.net/contents/videos_screenshots/18000/18347/240x180/26.jpg',
    hd: true,
    rating: '70%',
    duration: '30m:01s',
    date: '3 years ago',
    views: '678'
  },{
    id: '18347',
    url: '',
    title: 'Fabulous Japanese girl Hitomi Tanaka in Hottest JAV censored Fingering, MILFs video',
    img: 'https://vjav2.hclips.net/contents/videos_screenshots/18000/18347/240x180/26.jpg',
    hd: true,
    rating: '70%',
    duration: '30m:01s',
    date: '3 years ago',
    views: '678'
  },{
    id: '18347',
    url: '',
    title: 'Fabulous Japanese girl Hitomi Tanaka in Hottest JAV censored Fingering, MILFs video',
    img: 'https://vjav2.hclips.net/contents/videos_screenshots/18000/18347/240x180/26.jpg',
    hd: true,
    rating: '70%',
    duration: '30m:01s',
    date: '3 years ago',
    views: '678'
  },{
    id: '18347',
    url: '',
    title: 'Fabulous Japanese girl Hitomi Tanaka in Hottest JAV censored Fingering, MILFs video',
    img: 'https://vjav2.hclips.net/contents/videos_screenshots/18000/18347/240x180/26.jpg',
    hd: true,
    rating: '70%',
    duration: '30m:01s',
    date: '3 years ago',
    views: '678'
  },{
    id: '18347',
    url: '',
    title: 'Fabulous Japanese girl Hitomi Tanaka in Hottest JAV censored Fingering, MILFs video',
    img: 'https://vjav2.hclips.net/contents/videos_screenshots/18000/18347/240x180/26.jpg',
    hd: true,
    rating: '70%',
    duration: '30m:01s',
    date: '3 years ago',
    views: '678'
  }],
  recent:[{
    id: '274381',
    url: '',
    title: 'Delightful Asian cowgirl riding',
    img: 'https://vjav1.hclips.net/contents/videos_screenshots/274000/274381/240x180/1.jpg',
    hd: false,
    rating: '50%',
    duration: '33m:13s',
    date: '2 years ago',
    views: '688'
  },{
    id: '274381',
    url: '',
    title: 'Delightful Asian cowgirl riding',
    img: 'https://vjav1.hclips.net/contents/videos_screenshots/274000/274381/240x180/1.jpg',
    hd: false,
    rating: '50%',
    duration: '33m:13s',
    date: '2 years ago',
    views: '688'
  },{
    id: '274381',
    url: '',
    title: 'Delightful Asian cowgirl riding',
    img: 'https://vjav1.hclips.net/contents/videos_screenshots/274000/274381/240x180/1.jpg',
    hd: false,
    rating: '50%',
    duration: '33m:13s',
    date: '2 years ago',
    views: '688'
  },{
    id: '274381',
    url: '',
    title: 'Delightful Asian cowgirl riding',
    img: 'https://vjav1.hclips.net/contents/videos_screenshots/274000/274381/240x180/1.jpg',
    hd: false,
    rating: '50%',
    duration: '33m:13s',
    date: '2 years ago',
    views: '688'
  },{
    id: '274381',
    url: '',
    title: 'Delightful Asian cowgirl riding',
    img: 'https://vjav1.hclips.net/contents/videos_screenshots/274000/274381/240x180/1.jpg',
    hd: false,
    rating: '50%',
    duration: '33m:13s',
    date: '2 years ago',
    views: '688'
  }],
  models:[{
    id: '274381',
    title: 'Hanano Nono',
    img: 'https://vjav1.hclips.net/contents/models/2044/hanano_nono.jpg',
    rating: '4.55',
    count: '6 videos',
    percent: '72%'
  },{
    id: '274381',
    title: 'Hanano Nono',
    img: 'https://vjav1.hclips.net/contents/models/2044/hanano_nono.jpg',
    rating: '4.55',
    count: '6 videos',
    percent: '72%'
  },{
    id: '274381',
    title: 'Hanano Nono',
    img: 'https://vjav1.hclips.net/contents/models/2044/hanano_nono.jpg',
    rating: '4.55',
    count: '6 videos',
    percent: '72%'
  },{
    id: '274381',
    title: 'Hanano Nono',
    img: 'https://vjav1.hclips.net/contents/models/2044/hanano_nono.jpg',
    rating: '4.55',
    count: '6 videos',
    percent: '72%'
  },{
    id: '274381',
    title: 'Hanano Nono',
    img: 'https://vjav1.hclips.net/contents/models/2044/hanano_nono.jpg',
    rating: '4.55',
    count: '6 videos',
    percent: '72%'
  }]
}

_.forEach(['recent', 'popular'], function(x){

  $('.main-content').append(itemsPrevTpl({title: x}));

  _.forEach(demo[x], function(i,e){
    if(i.hd){
      i.hd = 'HD'
    } else {
      i.hd = ''
    }
    $('#'+ x +'_items').append(vidItemTpl({
      id: i.id,
      url: i.url,
      title: i.title,
      img: i.img,
      hd: i.hd,
      rating: i.rating,
      duration: i.duration,
      date: i.date,
      views: i.views
    }))
  })
})


$('.main-content').append(modelsPrevTpl());

_.forEach(demo.models, function(i,e){
  $('#models_items').append(modelItemTpl({
    id: i.id,
    title: i.title,
    img: i.img,
    rating: i.rating,
    count: i.count,
    percent: i.percent
  }))
})
