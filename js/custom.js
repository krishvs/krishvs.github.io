$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var anim = false;
    function typed(finish_typing) {
        return function(term, message, delay, finish) {
            anim = true;
            var prompt = term.get_prompt();
            var c = 0;
            if (message.length > 0) {
                term.set_prompt('');
                var interval = setInterval(function() {
                    term.insert(message[c++]);
                    if (c == message.length) {
                        clearInterval(interval);
                        setTimeout(function() {
                            finish_typing(term, message, prompt);
                            anim = false
                            finish && finish();
                        }, delay);
                    }
                }, delay);
            }
        };
    }
    var typed_prompt = typed(function(term, message) {
        term.set_command('');
    });
    var typed_message = typed(function(term, message) {
        term.set_command('');
        term.echo(message);
    });


        

    $('#term_demo').terminal(function(command, term) {
      // if (command !== '') {
      //     try {
      //         var result = window.eval(command);
      //         if (result !== undefined) {
      //             term.echo(new String(result));
      //         }
      //     } catch(e) {
      //         term.error(new String(e));
      //     }
      // }
        var color= "#aaa"

        if(command == "help"){
            term.echo("[[;"+color+";]"+"Please enter the following commands:]");
            term.echo("[[;"+color+";]"+"skills  : My skill sets]");
            term.echo("[[;"+color+";]"+"work  : A list of the companies I worked for]");
            term.echo("[[;"+color+";]"+"interests : A few lines about my interests]");
            term.echo("[[;"+color+";]"+"education : My educational qualifications]");
            term.echo("[[;"+color+";]"+"honours : Awards and fellowships]");
        // term.echo("Education",options);
        }else if(command == "skills"){
            term.echo("[[;"+color+";]"+"Computer Languages: Javascript, Java, Ruby, Python(basic) ");
            term.echo("[[;"+color+";]"+"Frameworks: Ruby on Rails, Chef, Backbone.js, Node.js  ");
            term.echo("[[;"+color+";]"+"Datastore and Messaging: Redis, Rabbitmq, mysql ");
        }
        else if(command == "work"){
            term.echo("[[;"+color+";]"+'Freshdesk   May 2013 - May 2015');
            term.echo("[[;"+color+";]"+'Zoho        April 2013 - May 2013');
            term.echo("[[;"+color+";]"+'Dell Force10 Networks R&D   April 2013 - May 2013');
            term.echo("[[;"+color+";]"+'Seventh Sense Technologies  June 2010 - August 2010');
        }
        else if(command == "interests"){
            term.echo("[[;"+color+";]"+"Backpacked across Asia for 6 months before Graduate School");
            term.echo("[[;"+color+";]"+"I enjoy diving and am a PADI Certified Scuba Diver");
            term.echo("[[;"+color+";]"+"I also play an indian classical instrument called the Mridangam");
        }
        else if(command == "education"){
            term.echo("[[;"+color+";]"+"Master of Engineering Management                          Dartmouth College");
            term.echo("[[;"+color+";]"+"Bachelors in Engineering, Computer Science and Engineering  Anna University");
        }
        else if(command == "honours"){
            term.echo("[[;"+color+";]"+"Conrades ‘90 Fellow, Dartmouth - Awarded for demonstrating high leadership potential");
            term.echo("[[;"+color+";]"+"Winner of Best Dartmouth hack at HackDartmouth 2015 hackathon");
            term.echo("[[;"+color+";]"+"Awarded Best Undergraduate thesis ( “Backend as a service” ) among 120     undergraduates at College");
        }
        else{
            term.echo("[[;"+color+";]"+"Please enter a vaild command: type 'help'");
        }
    }, {
        greetings: null,
        name: 'intro',
        height: 300,
        onInit: function(term){
        var msg = 'Hi! I am Krishnan - A software engineer currently studying at Dartmouth    College. '
        var help_msg = 'Please type "help" in this command prompt to know more about me'
        typed_message(term, msg, 20, function() {
            typed_message(term,help_msg,20,function(){
              term.set_prompt('Command:>');
            });
        });
        },
        prompt: 'Command:>'
    });


});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



function initMap() {
    var mapOptions = {
        
        zoom: 15,
        center: new google.maps.LatLng(43.7047927, -72.2925909),
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(43.7047927, -72.2925909);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
