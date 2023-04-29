    import axios from 'axios';
    import bootstrap from 'bootstrap';
import  NevsApiService  from "./fetch";
import { markupPhotos } from './marcupFoto';


const searchForm=document.querySelector('#search-form');
const divGallery=document.querySelector('.gallery');
const btnLoadMore=document.querySelector('.btn-load-more');

 const nevApiService = new NevsApiService();


searchForm.addEventListener('submit', onSearch);
btnLoadMore.addEventListener('click', onLoadMore)


function onSearch (evt) {
  evt.preventDefault();
     nevApiService.query=evt.currentTarget.elements.searchQuery.value;
     nevApiService.resetPage();
     nevApiService.fetchArticles().then(appendHits);

};


function onLoadMore (params) {
  nevApiService.fetchArticles().then(appendHits);
};

function appendHits (hits) {
divGallery.insertAdjacentHTML('beforeend', markupPhotos(hits))

}





























    // const API_KEY = '35566012-73194189fcef75c31768f8916';
    // const URL = `https://pixabay.com/api/`;



//     // searchForm.addEventListener('submit', onSearch);
//     const weatherBlock=document.querySelector('#weatherBlock');

//     const Api_Key="7d67b44f6ec45c467270b3fe0b745a80"
//     const searchForm = document.querySelector('.search-form');
//     const location=searchForm.data.value;
//     const baseURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";





//     async function loadWethers(evt){
//     weatherBlock.innerHTML=
//     `<div class="weather_loading">
//     <img src="../img/loading-gif.gif" alt="Loading...">
//     </div>
//     `;
//     const URL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&lon={lon}&appid=${Api_Key}`;
//     const response=await fetch(URL,{
//     method: "GET",
//     } )
//     const responseResult=await response.json();
//     if (response.ok){
//     getWeather(responseResult);}
//     else {weatherBlock.innerHTML= responseResult.message}
//     }

//     function getWeather(data)
//     {
//     const temp=Math.round(data.main.temp);
//     const feelsLike=Math.round(data.main.feels_like)
//     const weatherStatus=data.weather[0].main;
//     const weatherIcon=data.weather[0].icon;

// //HTML____________
// const template=`
// <div class="weather_header">
// <div class="weather_main">
// <div class="weather_city">${location}</div>
// <div class="weather_status">${weatherStatus}</div>
// </div>
// <div class="weather_icon">
// <img src="https://api.openweathermap.org/img/w/${weatherIcon}" alt="${weatherStatus}">
// </div>
// <div class="weathr_temp">${temp-273}</div>
// <div class="weather_fels_like">Fells Like : ${feelsLike}</div>
// </div>`;

// weatherBlock.innerHTML=template;


//     }

//     if (weatherBlock) {
//     loadWethers()

//     }





    // const fetchUsers = async () => {
    //   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${Api_Key}`);
    //   const users = await response.json();
    //   return users;
    // };

    // fetchUsers().then(users => console.log(users));





    // import Notiflix from 'notiflix';
    // import SimpleLightbox from 'simplelightbox';
    // import 'simplelightbox/dist/simple-lightbox.min.css';
    // import { ApiGalleryImg } from './fetchGallery.js';


    // const apiService = new ApiGalleryImg();
    // const gallery = document.querySelector('.gallery');
    // const btnFindMore = document.querySelector('.load-more');

    // const typeFailure = 'failure';
    // const typeSuccess = 'success';
    // const typeInfo = 'info';

    // btnFindMore.addEventListener('click', onFindMore);

    // function onSearch(event) {
    //   event.preventDefault();

    //   apiService.query = event.target.elements.searchQuery.value.trim();
    //   hiddBtn();
    //   apiService.resetPage();
    //   apiService
    //     .fetchGallery()
    //     .then(({ hits, totalHits }) => {
    //       if (hits.length === 0) {
    //         showError();
    //       } else {
    //         clearMarkup();
    //         appendMarkup(hits);
    //         createGallery();
    //         showMessage(typeSuccess, `Hooray! We found ${totalHits} images.`);
    //         showBtn();
    //       }
    //     })
    //     .catch(showError);
    // }

    // function onFindMore() {
    //   apiService
    //     .fetchGallery()
    //     .then(({ hits, totalHits }) => {
    //       appendMarkup(hits);
    //       createGallery();
    //       const { height: cardHeight } = document
    //         .querySelector('.gallery')
    //         .firstElementChild.getBoundingClientRect();
    //       window.scrollBy({
    //         top: cardHeight * 2,
    //         behavior: 'smooth',
    //       });
    //       if (apiService.perPage * apiService.page > totalHits) {
    //         hiddBtn();
    //         showMessage(
    //           typeInfo,
    //           "We're sorry, but you've reached the end of search results."
    //         );
    //       }
    //     })
    //     .catch(showError);
    // }
    // function appendMarkup(hits) {
    //   gallery.insertAdjacentHTML('beforeend', createDataMarkup(hits));
    // }

    // function createDataMarkup(hits) {
    //   return hits
    //     .map(
    //       ({
    //         largeImageURL,
    //         webformatURL,
    //         tags,
    //         likes,
    //         views,
    //         comments,
    //         downloads,
    //       }) => {
    //         return `

    //   <div class="gallery__item">
    //   <a class="gallery__link" href="${largeImageURL}">
    //   <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
    //   <div class="info">
    //     <p class="info-item">
    //       <b>Likes: ${likes}</b>
    //     </p>
    //     <p class="info-item">
    //       <b>Views: ${views}</b>
    //     </p>
    //     <p class="info-item">
    //       <b>Comments: ${comments}</b>
    //     </p>
    //     <p class="info-item">
    //       <b>Downloads: ${downloads}</b>
    //     </p>
    // </div>
    // </a>
    // </div>
    // `;
    //       }
    //     )
    //     .join(' ');
    // }

    // function clearMarkup() {
    //   gallery.innerHTML = '';
    // }

    // function showMessage(type, message) {
    //   Notiflix.Notify[type](message);
    // }

    // function showError() {
    //   showMessage(
    //     typeFailure,
    //     'Sorry, there are no images matching your search query. Please try again.'
    //   );
    //   clearMarkup();
    // }

    // function showBtn() {
    //   btnFindMore.hidden = false;
    // }
    // function hiddBtn() {
    //   btnFindMore.hidden = true;
    // }

    // function toggleBtn() {
    //   btnFindMore.hidden = !btnFindMore.hidden;
    // }

    // function createGallery() {
    //   let simpleLightBox = new SimpleLightbox('.gallery__item a', {
    //     captionsData: 'alt',
    //     captionDelay: 250,
    //   }).refresh();
    // }