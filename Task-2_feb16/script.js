document.addEventListener("DOMContentLoaded",function(){
  var searchInput=document.querySelector("#search");
  var btnsearch=document.querySelector("#btn-search");

  //hide search Input initially
  searchInput.style.display="none";
  
  //Event listener for search button
  btnsearch.addEventListener("click",function(){
    if(searchInput.style.display==="none"){
      searchInput.style.display="inline-block";
      searchInput.focus();
    }
    else{
      searchInput.style.display="none";
    }
  });

  //Hide search Input when user clicks outside the box.
  document.addEventListener("click",function(env){
    if(env.target!=searchInput && env.target!=btnsearch){
      searchInput.style.display="none";
    }
  });
  
});

