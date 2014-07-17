var url;

function embed() {
	url = $('#url').val();
  $("#embedcode").html("&lt;script type='text/javascript' src='https://assets.sbnation.com.s3.amazonaws.com/features/timelinejs/js/jquery.min.js'>&lt;/script>&lt;div id='timeline-embed'>&lt;/div>&lt;script type='text/javascript'>var timeline_config = { width: '100%', height: '800', source: '" + url + "', css: 'https://assets.sbnation.com.s3.amazonaws.com/features/timelinejs/css/timeline.css' }&lt;/script>&lt;script type='text/javascript' src='https://assets.sbnation.com.s3.amazonaws.com/features/timelinejs/js/storyjs-embed.js'>&lt;/script>");

  /*<script type="text/javascript" src="https://assets.sbnation.com.s3.amazonaws.com/features/timelinejs/js/jquery.min.js"></script>

	    <!-- HTML5 shim, for IE6-8 support of HTML elements--><!--[if lt IE 9]>
	    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	    <!-- BEGIN Timeline Embed -->
	    <div id="timeline-embed"></div>
	    <script type="text/javascript">
	        var timeline_config = {
	        width: "100%",
	        height: "800",
	        source: 'https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadHdKcHlHcTB5bzhvbF9iTWwyMmJHdkE&amp;output=html',
	        css: 'https://assets.sbnation.com.s3.amazonaws.com/features/timelinejs/css/timeline.css'
	    }
	    </script>

	    <script type="text/javascript" src="https://assets.sbnation.com.s3.amazonaws.com/features/timelinejs/js/storyjs-embed.js"></script>*/
}

$(document).ready(function() {
	console.log("HELLO");
});