function loadnews(){
var charset='UTF-8';
var t=document.getElementsByTagName('meta');
for(var i=0; i<t.length; i++)
{
var rg=/charset=["']?([^"']*)/g;
if(t[i].content.indexOf('charset')!=-1)
{
charset=rg.exec(t[i].content)[1];
break;
}}document.write('<script type="text/javascript" src="http://www.rss-script.ru/rss-script.php?charset='+charset+'&rss[]=http%3A%2F%2Fbash.im%2Frss%2F&rss[]=http%3A%2F%2Fsharij.net%2Ffeed&media=1&html=1&notitle=1&count=50"><\/script>');
}