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
			height:1500px;
			color:white;
			background-color:blue;
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
<div class="content"></div>
<div class="sticky">
	Hello World!
</div>
<div id="footer"></div>

<script type="text/javascript" src="http://code.jquery.com/jquery-1.5.1.min.js"></script>
<script type="text/javascript" src="jquery.sticky.0.0.1.js"></script>

<script>

$(document).ready(function() {
	$('.sticky').sticky({'releaseAt':'#footer'});
});

</script>

</body>
</html>