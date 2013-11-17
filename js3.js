function rutgon(b, a) {return b.replace(/<.*?>/gi, "").split(/\s+/).slice(0, a - 1).join(" ")}
function nhanhome(json) {
img  = new Array();
for (var i = 0; i < 12; i++) { var entry = json.feed.entry[i]; var tieude = entry.title.$t; var linkurl; if (i == json.feed.entry.length) break; 
for (var k = 0; k < entry.link.length; k++) { if (entry.link[k].rel == 'alternate') { linkurl = entry.link[k].href; break } } 	
if ("content" in entry) { var noidung = entry.content.$t } else if ("summary" in entry) { var noidung = entry.summary.$t } 
else var noidung=""; s = noidung;  a = s.indexOf("<img"); b = s.indexOf("src=\"", a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5); 
if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))  {img[i] = d;} 
else {img[i]="http://1.bp.blogspot.com/-xJBXLR81wuI/T_QncMxumoI/AAAAAAAAAbI/QbWAhz1wgW0/s104-p/no_image.jpg";} 
B = img[i].split("/");
if(i >= 0 && i <= 5 ){var lis = '<div class="labelposts"><a href="'+linkurl+'"><img title="'+tieude+'" alt="'+tieude+'" src="'+img[i].replace(B[7],"s104-p")+'" /></a><h2><a title="'+tieude+'" alt="'+tieude+'" href="'+linkurl+'">'+tieude+'</a></h2><p>'+rutgon(noidung,22)+' ... <a class="doctiep" title="'+tieude+'" href="'+linkurl+'">Chi tiết...»</a></p><div class="clear"></div></div><div class="line-border"></div>';} 
document.write(lis); }}