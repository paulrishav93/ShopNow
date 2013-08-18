function hideShow1 () {
	$('#sign1').slideUp();
	$('#sign2').fadeIn();
}

function hideShow2 () {
	$('#sign1').slideUp();
	$('#sign3').fadeIn();
}

function hideShow3 () {
		$('#sign2').css('display', 'none');
		$('#sign1').fadeIn();
}

function hideShow4 () {
		$('#sign3').css('display', 'none');
		$('#sign1').fadeIn();
}

function hideShow5 () {
		$('#searchPage').css('display', 'none');
		$('#cust_loggedin').fadeIn();
}

function loginCus () {
	if($('#login_email').val() == '' || $('#login_pass').val() == '' )
		$('#blankcred').show();
	else{
		$.ajax({
		url: 'http://192.168.173.1/firefoxOs/validate.php',
		type: 'POST',
		data: {
			email:$('#login_email').val(),
			pass: $('#login_pass').val(),
			type: 'customer'
		},
		success: function (data) {
				if(data != 'wrong'){
					data2 = $.parseJSON(data);
					console.log(data2[3]);
					document.getElementById('cust_search1').value = data2[3];
					$('#cust_prof_name').text(data2[2]);
					$('#cust_prof_email').text(data2[0]);
					$('#cust_prof_city').text(data2[3]);
					$('#sign1').slideUp();
					$('#cust_loggedin').fadeIn();
				}else{
					$('#wrongcred').show();
				}
			}
	});
	}
}

function hide (id) {
	$('#'+id).css('display','none');
	$('#login_email').val('');
	$('#login_pass').val('');
}


function signup_cust () {
	if($('#cust_signup_name').val() == "" || $('#cust_signup_email').val() =="" || $('#cust_signup_city').val() =="" || $('#cust_signup_pass').val() == "" || $('#cust_signup_pass_conf').val() =="" ){
		$('#blankcred').show();
	}else{
		var pass1 = $('#cust_signup_pass').val();
		var pass2 = $('#cust_signup_pass_conf').val();
		if(pass1 != pass2){
			$('#passunmatch').show();
		}else{
			$.ajax({
				url: './newcust.php',
				type: 'POST',
				data: {
					name:$('#cust_signup_name').val(),
					email:$('#cust_signup_email').val(),
					city:$('#cust_signup_city').val(),
					pass:$('#cust_signup_pass').val()
				},
				success: function (data) {
						if(data != 'exists'){
							data2  = $.parseJSON(data);
							document.getElementById('cust_search1').value = data2[3];
							$('#cust_prof_name').text(data2[2]);
							$('#cust_prof_email').text(data2[0]);
							$('#cust_prof_city').text(data2[3]);
							$('#sign2').slideUp();
							$('#cust_loggedin').fadeIn();
							//var j = 0;
							//var str2 = '';
							//for (var i = 4; i < 13; i++) {
							//	if(data[i] == ""){
							//		break;
							//	}else{
							//		str2 += '<tr>';
							//		str2 += '<td>';
							//		str2 += data2[i];
							//		str2 += '</td>';
							//		str2 += '</tr>';
							//		++j;
							//	}
							//};
							//if(j==0){
							//	alert('sfasfa');
							//	str2 = 'No favorites added!';	
							//}else{
							//	$('#cust_fav').append(str2);
							//}



						}else{
							$('#emailexist').show();
						}
					}
			});
		}
	}
}

function signup_owner () {
		if($('#signup_owner_name').val() == "" || $('#signup_owner_email').val() =="" || $('#signup_owner_city').val() =="" || $('#signup_owner_l1').val() == "" || $('#signup_owner_pass').val() =="" || $('#signup_owner_pass_conf').val() =="" ){
		$('#blankcred').show();
	}else{
		var pass1 = $('#signup_owner_pass').val();
		var pass2 = $('#signup_owner_pass_conf').val();
		if(pass1 != pass2){
			$('#passunmatch').show();
		}else{
			$.ajax({
				url: './newowner.php',
				type: 'POST',
				data: {
					name:$('#signup_owner_name').val(),
					email:$('#signup_owner_email').val(),
					addl1:$('#signup_owner_l1').val(),
					city:$('#signup_owner_city').val(),
					pass:$('#signup_owner_pass').val()
				},
				success: function (data) {
						if(data != 'exists'){
							data2  = $.parseJSON(data);
							document.getElementById('owner_iden').value = data2[0];
							document.getElementById('owner_stat').value = data2[3];
							$('#owner_signedin_name').text('Hello! '+data2[2]);
							if(data2[8]==1){
								var img = '<img src="./Open.jpg" style = "height:18px;width:50px;">'
								$('#owner_signedin_status').html(img);
							}else{
								var img = '<img src="./Close.jpg" style = "height:18px;width:50px;">'
								$('#owner_signedin_status').html(img);
							}
							$('#sign3').slideUp();
							$('#owner_loggedin').fadeIn();
							//var j = 0;
							//var str2 = '';
							//for (var i = 4; i < 13; i++) {
							//	if(data[i] == ""){
							//		break;
							//	}else{
							//		str2 += '<tr>';
							//		str2 += '<td>';
							//		str2 += data2[i];
							//		str2 += '</td>';
							//		str2 += '</tr>';
							//		++j;
							//	}
							//};
							//if(j==0){
							//	alert('sfasfa');
							//	str2 = 'No favorites added!';	
							//}else{
							//	$('#cust_fav').append(str2);
							//}



						}else{
							$('#emailexist').show();
						}
					}
			});
		}
	}
}

function loginOwner () {
	if($('#login_email').val() == '' || $('#login_pass').val() == '' )
		$('#blankcred').show();
	else{
		$.ajax({
		url: './validate.php',
		type: 'POST',
		data: {
			email:$('#login_email').val(),
			pass: $('#login_pass').val(),
			type: 'owner'
		},
		success: function (data) {
				if(data != 'wrong'){
					data2  = $.parseJSON(data);
					//document.getElementById('cust_search1').value = data2[3];
					document.getElementById('owner_iden').value = data2[0];
					document.getElementById('owner_stat').value = data2[3];
					$('#owner_signedin_name').text('Hello! '+data2[2]);
					if(data2[8]==1){
						var img = '<img src="./Open.jpg" style = "height:36px;width:100px;">'
						$('#owner_signedin_status').html(img);
					}else{
						var img = '<img src="./Close.jpg" style = "height:36px;width:100px;">'
						$('#owner_signedin_status').html(img);
					}
					$('#sign1').slideUp();
					$('#owner_loggedin').fadeIn();
				}else{
					$('#wrongcred').show();
				}
			}
	});
	}
}

function status_changer () {
	var iden = $('#owner_iden').val();
	var stat = $('#owner_stat').val();
	var img = '<img src="./Wait.jpeg" style = "height:36px;width:100px;">'
	$('#owner_signedin_status').html(img);
	if (stat ==1){
		var newstat = 0;
	}else{
		var newstat = 1;
	}
	$.ajax({
		url: './statupdate.php',
		type: 'POST',
		data: {
			email:iden,
			stat: newstat
		},
		success: function (data) {
				if(data != 'wrong'){
					if(data == 1){
						var img = '<img src="./Open.jpg" style = "height:36px;width:100px;">'
						$('#owner_signedin_status').html(img);
						$('#owner_stat').val('1');
					}else{
						var img = '<img src="./Close.jpg" style = "height:36px;width:100px;">'
						$('#owner_signedin_status').html(img);
						$('#owner_stat').val('0');
					}
				}else{
					
				}
			}
	});
}


function search () {
	var city = $('#cust_search1').val();		
	if ($('#cust_search2').val() == "") {
		itemName = "1";
	}else{
		itemName = $('#cust_search2').val();
	}
	if ($('#cust_search3').val() == "") {
		shopName = "1";
	}else{
		shopName = $('#cust_search2').val();
	}
	$.ajax({
		url: './search.php?city='+city+'&itemName='+itemName+'&shopName='+shopName,
		type: 'GET',
		success: function (data) {
			$('#searchGenTab').html('');
				if(data != 'nores'){
					var data2 = $.parseJSON(data);
					//console.log(data2[0]['shop_name']);
					var str = '';
					str += '<thead>';
					str += '<th>Shop Name</th>';
					str += '<th>Status</th>';
					str += '</thead>';
					for (var i = 0; i < data2.length; i++) {
						str += '<tr>';
						str += '<td>';
						str += data2[i]['shop_name'];
						str += '</td>';
						str += '<td>';

						if(data2[i]['status'] == 1){
						var img = '<img src="./Open.jpg" style = "height:18px;width:50px;">';
						str += img;
					}else{
						var img = '<img src="./Close.jpg" style = "height:18px;width:50px;">'
						str += img;
					}
						str += '</td>';
						str += '</tr>';
					};
					$('#searchGenTab').append(str);
					$('#cust_loggedin').slideUp();
					$('#searchPage').fadeIn();
				}else{
					
				}
			}
	});
}