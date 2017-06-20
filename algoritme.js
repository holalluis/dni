/*
	algoritme per convertir el DNI a una paraula de 4 silabes
	permet recordar-lo més fàcilment
*/
/*
	FORMAT DNI:
	8 xifres + lletra de control
	lletra de control = residu de dividir dni per 23 (wikipedia)
	resto de la división ->	0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22
	código de control ->	T	R	W	A	G	M	Y	F	P	D	X	B	N	J	Z	S	Q	V	H	L	C	K	E
	numero possible de DNIS: 99.999.999
	exemple
	control=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
	lletra=control[40364541 % 23];
	print(lletra) //resultat: R
*/

/*
	sortida: alternar consonants i vocals
	vocs='aeiou';//5
	cons='bcdfgjklmnpqrstvwxyz';//20
	nombre de consonants = 20
	nombre de vocals = 5
	combinacions de silabes = 20*5 = 100 (00-99)
	8 lletres = [cv cv cv cv]
	4 silabes (consonant-vocal)
	agafar numeros de 2 en 2, 4 vegades
*/

//silabes possibles = 100
var slbs=[
	'ba','be','bi','bo','bu',
	'ca','ce','ci','co','cu',
	'da','de','di','do','du',
	'fa','fe','fi','fo','fu',
	'ga','ge','gi','go','gu',
	'ja','je','ji','jo','ju',
	'ka','ke','ki','ko','ku',
	'la','le','li','lo','lu',
	'ma','me','mi','mo','mu',
	'na','ne','ni','no','nu',
	'pa','pe','pi','po','pu',
	'qa','qe','qi','qo','qu',
	'ra','re','ri','ro','ru',
	'sa','se','si','so','su',
	'ta','te','ti','to','tu',
	'va','ve','vi','vo','vu',
	'wa','we','wi','wo','wu',
	'xa','xe','xi','xo','xu',
	'ya','ye','yi','yo','yu',
	'za','ze','zi','zo','zu',
];

function encode(dni){
	dni=dni.toString();
	if(dni.length!=8){
		console.error('ERROR: "'+dni+'": no té 8 xifres');
		return -1;
	}
	var resultat=''; 
	for(var i=0;i<8;i+=2){
		var num=parseInt(dni.substring(i,i+2));
		resultat+=slbs[num];
	}
	console.log(dni+" -> "+resultat);
	return resultat;
}

function decode(paraula){
	paraula=paraula.toLowerCase();
	if(paraula.length!=8){
		console.error('ERROR: "'+paraula+'": no té 8 lletres');
		return -1;
	}
	var resultat='';
	for(var i=0;i<8;i+=2){
		var slb=paraula.substring(i,i+2);//silaba
		var num=slbs.indexOf(slb);
		if(num==-1){
			console.error('ERROR: "'+paraula+'": síl·laba "'+slb+'" no vàlida ');
			return -1;
		}
		num = num<10 ? '0'+num.toString() : num.toString();
		resultat+=num;
	}
	console.log(paraula+" -> "+resultat);
	return resultat;
}

//utilitats
function qs(selector){
	return document.querySelector(selector);
}

/* testos
encode('40364541')
encode('00000001')
decode('melanoma')
decode('mierdaca')
decode('putavida')
decode('putabida')
encode('54700210')
*/
