
                var app = angular.module('myApp', []);
         
                app.service('myService',function($http) {




            	    this.getPrestations = function(ids) {
            		  
            		   var response = $http({
            			   method: 'Get',
         	               url: '${createLink(controller:'Patient', action: 'getPrestations')}',
                     	               headers: {
                     	               'Content-Type': undefined
                     	                      },
                     	                params:{ids: JSON.parse(ids) }
            	  
            	                           });
           	              return response;
           	        
            	                        }
            	  
                        });
            
        app.controller('myctrl',function($scope,myService,$filter){
        
        
        	 $scope.mesprestations=[];
        	 $scope.domins=document.getElementById("idservice").value
             $scope.lettremat= ""
         	 $scope.load = false
         	 $scope.id = [];

             $scope.getPrestations= function () {
 	                	debugger
 	                 	$scope.load = true
 		                $scope.data =0
 		              
 		    var getData = myService.getPrestations($scope.service);
 		    getData.then(function (resp) {
 			$scope.msg = false
 			$scope.load = false
 			$scope.data = resp.data;
 			
 			$scope.prestations=$scope.data
 			$scope.sum = 0;
 			$scope.sum1 = 0;
 		
 		              });
 	                       }
             
         
            
            	<g:applyCodec encodeAs="none" >
                 $scope.institutions = ${institutions};
               </g:applyCodec>
               $scope.desactiveFinst=function(){
                
            	   $scope.finst=false;
            	 
                   }
               $scope.finst=false;
               $scope.ajoutInstitution=function(institution,lettremat,cotisant){
                 debugger;
                  $scope.institution=institution;
                  $scope.lettremat=lettremat;
                  $scope.cotisant=cotisant;
                  $scope.infosinst.push({lmat:$scope.lettremat,cotisant:$scope.cotisant,institution:$scope.institution});
                  debugger;
               }
          
            
              $scope.reg=$scope.reg
             
        	  $scope.addMe=function(checked,val,val1,libelle,service,id,reg,institution,lettremat,cotisant){
            	 $scope.reg=reg;
            	 
            	console.log($scope.reg);
            	        	            val = 1*val
        	        if (!checked){
        	        	        if($scope.reg==1)
        	                 $scope.sum = $scope.sum-(val);
        	        	        else if($scope.reg==2)
        	        		 $scope.sum1 = $scope.sum1-(val);
        	             }else{
        	             	  if($scope.reg==1)
            	              	{
        	                     $scope.sum = $scope.sum +(0+val);
        	                     $scope.tarif=val
        	        	    	 $scope.lg=0
        	        	    	 $scope.montantverse=val
        	        	    	
            	             	}
        	        	    else if($scope.reg==2)
            	        	    {
            	        	     $scope.partpat=document.getElementById("partpat").value
            	        	     $scope.partins=document.getElementById("partins").value
        	        	    	 $scope.sum1 =  $scope.sum1 +(0+val1);
        	        	    	 $scope.tarif=val1
        	        	    	 $scope.lg=val1*$scope.partpat/100
        	        	    	 $scope.montantverse=val1*$scope.partins/100
        	        	    	 $scope.idins=document.getElementById("idins").value
        	        	    	 $scope.lettremat=lettremat
        	        	    	 $scope.cotisant=cotisant
            	        	     }
                               $scope.totaltarif=$scope.totaltarif+(0+$scope.tarif);
        	                   $scope.libelle=libelle;
        	                   $scope.service=service;
        	                   $scope.id=id
        	                 //  $scope.idins=document.getElementById("idins");
        	                   $scope.mesprestations.push({libelle:$scope.libelle,tarif:$scope.tarif,lg:$scope.lg,montantverse:$scope.montantverse,service:$scope.service,idprest:$scope.id,institution:$scope.institution,lettremat:$scope.lettremat,cotisant:$scope.cotisant,idins:$scope.idins,reg:reg});
           		               $scope.numitem=$scope.mesprestations.length;
        		               effacerChamps();
        	             }  
        	    }
        	   $scope.getTotaltarif = function(){
                            var total = 0;
                        for(var i = 0; i < $scope.mesprestations.length; i++){
                              var prestation= $scope.mesprestations[i];
                               total += prestation.tarif;
                              }
                       return total;
                     }
        	   $scope.getTotallg = function(){
                var total = 0;
                for(var i = 0; i < $scope.mesprestations.length; i++){
                   var prestation= $scope.mesprestations[i];
                    total += prestation.lg;
                  }
                       return total;
                     }
                       $scope.getTotalmntverse = function(){
                      var total = 0;
                    for(var i = 0; i < $scope.mesprestations.length; i++){
                            var prestation= $scope.mesprestations[i];
                           total += prestation.montantverse;
                  }
                       return total;
                     }
        	            
        	     $scope.supPrestation = function (item) {
		              $scope.mesprestations.splice($scope.mesprestations.indexOf(item), 1);
	                  	$scope.numbitem = $scope.mesprestations.length;
	            	if($scope.mesprestations.length > 0){
		               	document.getElementById("btnvalprest").disabled = false;
		                	}else {
			             	document.getElementById("btnvalprest").disabled = true;
				                }
                     }
        		$scope.data_ids = [];
           	 $scope.clearAll = function() {
        		    angular.forEach($scope.data, function(data) {
        		        data.isSelected = false;
        		        $scope.finst=true;
        		        
        		    });
        	 };
        	
        	 function effacerChamps(){
        		 $scope.libelle="";
        		 $scope.tarif="";
                  $scope.lg="";
                  $scope.montantverse="";
                  $scope.service="";
                  
                  $scope.idprest="";
                  $scope.lettremat="";
                  $scope.cotisant="";
                 
            	 };
                 $scope.addMe1=function(checked1,val,libelle,service){
                	
        	        val = 1*val
        	        if (!checked1){
        	            $scope.sum1 = $scope.sum1-(val);
        	          }else{
        	        	 $scope.libelle=libelle
             	        $scope.service=service
             	        $scope.val=val
             	        $scope.id=id
        	            $scope.sum1 =  $scope.sum1 +(0+val);
        	            $scope.mesprestations.push({libelle:$scope.libelle,tariflg:$scope.tariflg,tarifpaf:$scope.tarifpaf,service:$scope.service})
               		    $scope.numitem=$scope.prestations.length

               		    effacerChamps();
        	            }
        	         }
        	
               });
   
            
              
      