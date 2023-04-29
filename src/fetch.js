export default class NevsApiService{
  constructor( ){
this.searchQuery="";
this.page=1;


  }

  fetchArticles(){

    const KEY='35566012-73194189fcef75c31768f8916';
    const URL=`https://pixabay.com/api/?image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=5&key=${KEY}&q=${this.searchQuery}`;

  return fetch(URL)
  .then(r => r.json())
  .then(data=> { this.inkrementPage();
return data.hits
  });
  }

inkrementPage(){
this.page+=1
}

resetPage(){
this.page=1;
}

get query(){
return this.searchQuery
};
set query(nevQuery){
this.searchQuery=nevQuery;

}

  };
