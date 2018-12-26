

function initMap() {

    var center = {lat: 28.704059, lng: 77.102490};

     var markerdata = [{lat: 17.385044, lng: 78.486671},
            {lat: 31.147130, lng: 75.341218},
         {lat: 75.341218, lng: 76.085601},
         {lat: 19.075984, lng: 72.877656},
         {lat: 22.572646, lng: 88.363895},
         {lat: 39.2846854, lng: -76.6905261},
         {lat: 23.022505, lng: 72.571362},
         {lat: 13.082680, lng: 80.270718},
         {lat: 10.850516, lng: 76.271083}

         ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: center
    });

     for (i = 0; i < markerdata.length; i++) {

          var marker = new google.maps.Marker({
             position: markerdata[i],
             map: map
         });
     }



}

