<html>
<head>
	<title>jQuery Sticky</title>

	<style>
		* { margin:0; padding:0;}

		.sticky {
			width:100%;
			height:50px;
			color:white;
			background-color:black;
		}

		.content {
			width:100%;
			height:1000px;
			color:white;
			background-color:blue;
			opacity:.5;
			transition: opacity .25s ease-in-out;
-moz-transition: opacity .25s ease-in-out;
-webkit-transition: opacity .25s ease-in-out;
		}
		.content2 {
			width:100%;
			height:1000px;
			color:white;
			background-color:green;
			opacity:.5;
			transition: opacity .25s ease-in-out;
-moz-transition: opacity .25s ease-in-out;
-webkit-transition: opacity .25s ease-in-out;
		}

		.content:hover, .content2:hover {
			opacity: 1;
		}

		#footer {
			width:100%;
			height:1500px;
			color:white;
			background-color:yellow;
		}
	</style>
</head>
<body>
<ul>
<li class="content"></li>
<li class="content2"></li>
</ul>
<div class="sticky">
	Hello World!
</div>
<div id="footer"></div>

<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script type="text/javascript" src="jquery.sticky.0.0.1.js"></script>

<script>

$(document).ready(function() {
	$('.sticky').sticky({'releaseAt':'#footer'});
});

</script>

</body>
</html>