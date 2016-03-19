$(document).ready(function(){
  
  function drawChart() {
    var docInfo = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/11_73AEzr9i0eW8cJsxSygIhy_0BsQS_ByRuDymgwvNE/edit?usp=sharing');
    
    docInfo.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  
  //If statement to handle error if the map cannot be rendered
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    
    var data = response.getDataTable();
  
  
    
    var options = {
      backgroundColor:{fill:"#8FA3A1"},
        sizeAxis: { minValue: 0, maxValue: 100 },
         tooltip: {
			textStyle: { 
				fontSize: 30 ,
        bold:true,
        
   
			},
            isHtml: true,
		}, 
      
        //region: 'US', // US
        colorAxis: {colors: ['#C80000', '#000066','#FFFF47','#063628']} // orange to blue
       
    };
    
    var chart = new google.visualization.GeoChart(document.getElementById('geoChart_map'));
    chart.draw(data, options);
    
};
google.load('visualization', '1', {packages:['geochart'], callback: drawChart});
  
  
});