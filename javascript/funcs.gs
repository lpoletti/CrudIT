function saveEquip(equipInfo){ 
  
    const ws = ss.getSheetByName('equipamentos');
    const lr = ws.getRange('M1').getValue();
    
    
    ws.appendRow([lr,equipInfo.modelEquip,equipInfo.statusEquip,equipInfo.servicoEquip,equipInfo.bioEquip,equipInfo.barrasEquip,equipInfo.abaEquip,equipInfo.mifareEquip,equipInfo.sintomaEquip,equipInfo.solucaoEquip,new Date(),]);
    ws.getRange('M1').activate();
    ws.getCurrentCell().setValue(lr+1);
  }
  
  function getEquipamentos(){
    var listEquip = ss.getSheetByName("equipamentos").getRange(2,1,ss.getSheetByName("equipamentos").getLastRow()-1,11).getValues();
    //return JSON.stringify(listPac);
    var htmlListArrayEquip = listEquip.map(function(row){
      return '<option data-customvalue="'+row[1] +'" value="'+row[0]+'">'+row[1]+'</option>';
    }).join('');
    //Logger.log(htmlListArrayEquip);
    
    return htmlListArrayEquip;
  }
  
  function getEquipamentosById(id){
    
    const lista = ss.getSheetByName("equipamentos").getRange(2,1,ss.getSheetByName("equipamentos").getLastRow()-1,15).getValues();
    var filtered = lista.filter(function(r){
        var idFilter = r[0];
        if(idFilter==id){
          return r;
        }
      })
      //Logger.log(filtered);
      return JSON.stringify(filtered);
  }//retorna um array(string) com o paciente para a leitura em javascript
  
  function getSolucoesPesquisa(search){
    
    var listSolucoes = ss.getSheetByName("equipamentos").getRange(2,1,ss.getSheetByName("equipamentos").getLastRow()-1,11).getValues();
    
    var filte = listSolucoes.filter(function(r){
        var modelFilter = r[1];
        var sintomFilter = r[8];
        var solFilter = r[9];
        
        if(modelFilter.includes(search) || sintomFilter.includes(search) || solFilter.includes(search)){
          return r;
        }
      });
      //Logger.log(filte);
      return JSON.stringify(filte);
  }
  
  function deleteSolucaoById(id){
    
    const ws = ss.getSheetByName("equipamentos");
    const pacIds = ws.getRange(2,1, ws.getLastRow()-1,1).getValues().map(r=>r[0].toString().toLowerCase());
    //Logger.log(pacIds);
  
  }
  