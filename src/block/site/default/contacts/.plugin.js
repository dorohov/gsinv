function initMap() {  
  var map_container_div_id = 'map-google';
  var cont = $('#' + map_container_div_id);  
  var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
  if(cont.length) {    
    var map_data = JSON.parse(cont.attr('data-map') || '{}');
    var coordMapOfficeOne = map_data.center;
    var zoomMapOfficeOne = map_data.zoom;    
     //if(map_data.center_xs > 0) {
       if($(document).width() < 1025) {
          var coordMapOfficeOne = map_data.center_xs;
          var zoomMapOfficeOne = map_data.zoom_xs;    
       }  
     //}  
    var styleMapOfficeOne = [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#e9e5dc"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54},{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"color":"#89cada"}]}],
        optionsMapOfficeOne = {
          zoom: zoomMapOfficeOne, 
          center: new google.maps.LatLng(coordMapOfficeOne[0], coordMapOfficeOne[1]), 
          //styles: styleMapOfficeOne
        }, 
      idOfficeOne = document.getElementById(map_container_div_id),
      mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),
      iconOfficeOne = {   
        path: "M38.4764 0.0254518C18.6052 0.722567 2.09706 16.2231 0.189907 36.0089C-0.199726 39.9661 0.0258514 43.8002 0.723089 47.4703C0.723089 47.4703 0.784609 47.9009 0.989679 48.721C1.60489 51.4685 2.5277 54.1339 3.67609 56.6353C7.67495 66.1079 16.9236 81.957 37.6767 99.2004C38.9481 100.267 40.8142 100.267 42.1062 99.2004C62.8592 81.9775 72.1079 66.1284 76.1272 56.6148C77.2961 54.1134 78.1984 51.4685 78.8136 48.7005C78.9982 47.9009 79.0802 47.4498 79.0802 47.4498C79.5519 44.9894 79.798 42.4675 79.798 39.884C79.798 17.3713 61.1571 -0.774181 38.4764 0.0254518ZM39.8914 59.7313C29.1868 59.7313 20.5123 51.0584 20.5123 40.3556C20.5123 29.6529 29.1868 20.9799 39.8914 20.9799C50.5961 20.9799 59.2705 29.6529 59.2705 40.3556C59.2705 51.0584 50.5961 59.7313 39.8914 59.7313Z", 
        fillColor: '#8E4C41',
        strokeColor: '#000000',
        fillOpacity: 1,
        //anchor: new google.maps.Point(26,65),
        anchor: new google.maps.Point(40,100),
        strokeWeight: 0,
        scale: 1,
      }; 
      if(map_data.placemarks.length) {
        for(var i = 0; i < map_data.placemarks.length; i++) {
          var iconCoordOfficeOne = {lat: map_data.placemarks[i].coord[0],  lng: map_data.placemarks[i].coord[1]}, 
          OfficeOne = new google.maps.Marker({
            position: iconCoordOfficeOne,
            map: mapOfficeOne,
            icon: iconOfficeOne,
            title: map_data.placemarks[i].title,
              //animation: google.maps.Animation.DROP
          });
        }
      }

      /*if(map_data.placemarks2.length) {
        for(var i = 0; i < map_data.placemarks2.length; i++) {
          var iconCoordOfficeOne2 = {lat: map_data.placemarks2[i].coord[0],  lng: map_data.placemarks2[i].coord[1]}, 
          OfficeOne = new google.maps.Marker({
            position: iconCoordOfficeOne2,
            map: mapOfficeOne,
            icon: iconOfficeOne,
            title: map_data.placemarks2_title,
          });
        }
      }*/
      
      
      //$(window).on('resize', function() {
      //  google.maps.event.trigger(mapOfficeOne, "resize");
      //  mapOfficeOne.setCenter(OfficeOne);
      //});
      
      $(document.body).on('click.azbn7', '.azbn__office__map__set-center-btn', null, function(event){
        event.preventDefault();
        var btn = $(this);
        var coord = btn.attr('data-coord');
        var coord_arr = coord.split(',');
        console.dir(coord_arr);
        mapOfficeOne.setCenter({
          lat : parseFloat((coord_arr[0] || '').trim()),
          lng : parseFloat((coord_arr[1] || '').trim()),
        });
        
      });
      
    
  }
  
}; 
$(function () {
  $(document.body).on('shown.bs.modal', '.modal', {}, function(event){
    event.preventDefault();
    $(window).trigger('resize');    
  });  
});