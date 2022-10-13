const id = '1Apl5W629-q03E10LrfFteFTNksF4l-VZ9yXt0cmOH1o';//Planilha a ser utilizada como banco de dados
const ss = SpreadsheetApp.openById(id);
const Route = {};
Route.path = function(route,callback){
  Route[route] = callback;
}
//Inicializar a Página
function doGet(e){
  
  Route.path("index",index);
  Route.path("pesquisa",pesquisa);
  
  if(Route[e.parameters.v]){
    return Route[e.parameters.v]();
  } else{
    //return Route.path("index",index);;
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
}