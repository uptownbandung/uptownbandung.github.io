jQuery(document).ready(function($){

	var side_h = $(window).height() - 80;
	$('.side-content').height(side_h);
/*
	for(var i=0;i<20;i++){
		html =  $('<section id="intro-'+i+'" data-title="Intro '+i+'" >').html( $('#intro').html() );
		$('#main-content').append( html );
	}
*/
	$('section').each(function(i,o){
		var id    = $(this).attr('id'),
			title = $(this).data('title'),
			sub   = '';

		if($('h3',$(this)).length){
			sub   = $('<ul>');

			$('h3', $(this)).each(function(j,p){

			    $(this).attr( 'id' , 'sub-'+id+'-'+j );

				var sub_id     = $(this).attr('id'),
				    sub_title  = $(this).text();

				$(sub).append('<li><span class="leaf" ><a href="#'+sub_id+'" >'+sub_title+'</a></span></li>');

			})

			var li = $('<li>').addClass("node ").append('<span class="node-toggle"/>').append('<span class="leaf"><a href="#'+id+'" >'+title+'</a></span>').append($(sub).wrap('<ul>'));

			$(li).appendTo('#main-sidebar>ul');

		} else {

			$('<li><a href="#'+id+'" >'+title+'</a></li>').appendTo('#main-sidebar>ul');

		}

	})


	$('a[href^=#]').on('click',function(e){
		if( this.hash != ''){
			e.preventDefault();
			var hash = this.hash;
			$('html,body').animate({
				scrollTop: $(hash).offset().top
				}, 800, function() {
					window.location.hash = hash
				}
			);
		}

	})


	$('ul[role="icon"]').each(function(i){
		var icon  = $(this).data('icon') || 'fa fa-circle' ;
		var color = $(this).data('color') || 'text-info';
		$(this).addClass('fa-ul');
		$(this).find('li').each(function(j){
			if(!($(this).data('icon'))){
				var html = '<i class="fa-li '+ icon + ' ' + color + '" ></i>';
			}else{
				var html = '<i class="fa-li '+ $(this).data('icon') + '" ></i>';
			}
			$(this).prepend(html);
		})
	})


	$('.nano').nanoScroller();


	$('code.pretty').each(function(i,o){
		var that = $(this);
		$(this).wrap('<pre class="prettyprint " ></pre>').parent('pre').wrap('<p>');
		$(this).parents('p').prepend('<span class="text-small text-italic label label-warning" >Code snipet #'+(i+1)+' </span>');
	})


	$('#change_style').on('change',function(){
		var url = '../../plugins/bootswatch/'+ $(this).val() +'/css/bootstrap.min.css';
		$('#the_themes').attr('href', url );
	})

    if($.fn.fancybox){

        $('img[role="fancybox"]').each(function(i){

        	var url   = $(this).attr('src');
        	var title = $(this).attr('title');

        	$(this).addClass('img-fancy');

        	$(this).wrap('<a href="' + url + '" ></a>');
        	var par   = $(this).parent('a');

        	$(par).attr('title', $(this).attr('title') );
        	$(par).append('<span>' + title + '</span>');

            $(par).fancybox({
                closeClick  : true,
                openEffect  : 'elastic',
                closeEffect : 'elastic',

                helpers : {
                    title : {
                        type : 'inside'
                    },
                    overlay : {
                        css : {
                            'background' : 'rgba(0,0,0,0.75)'
                        }
                    }
                }
            });
        })

    }






})
