var num, tentativas = 0;
do {
	num = Math.ceil(Math.random()*100000);
	document.write(num + "<br>");
	tentativas++;
} while (num != 77777);
document.write("em: " + tentativas + " tentativas");
document.title = tentativas