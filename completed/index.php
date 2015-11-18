<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Form overlay on submit</title>
	<meta name="description" content="Form overlay on submit" />
	<meta name="keywords" content="Form overlay on submit" />
	<link href="/css/core.css" rel="stylesheet" type="text/css" />
	<!--[if lt IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>

<div id="wrapper">

	<form method="post" class="formOverlay">
		<table class="tblOverlay">
			<tr>
				<th>
					<label for="email">Email:</label>
				</th>
				<td>
					<input type="email" name="email" id="email"
						class="field" value="" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="password">Password:</label>
				</th>
				<td>
					<input type="password" name="password" 
						id="password" class="field" value="" />
				</td>
			</tr>
			<tr>
				<th>&nbsp;</th>
				<td>
					<a href="#" class="button button-blue">Login</a>
				</td>
			</tr>
		</table>
	</form>

</div>



<script src="/js/jquery-1.7.1.min.js" type="text/javascript"></script>
<script src="/js/core.js" type="text/javascript"></script>
</body>
</html>





