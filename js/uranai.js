<script>
    var url="http://api.jugemkey.jp/api/horoscope/free/jsonp/";
 
    var d=new Date();
    YYYY=d.getFullYear();
    MM=d.getMonth()+1;if(MM<10)MM="0"+MM;
    DD=d.getDate();if(DD<10)DD="0"+DD;
    var dateString = YYYY + "/" + MM + "/" + DD;
    var dateStringJ = YYYY + "�N" + MM + "��" + DD + "��";

    url=url+YYYY+"/"+MM+"/"+DD;
    var script= document.createElement('script');
    script.charset = 'utf-8';
    script.type="text/javascript";
    script.src = url+"?callback=func";
    document.getElementsByTagName('script')[0].parentNode.appendChild(script);

function func(items){
  var tStr = "<p><strong>����������</strong>���܊ďC�ɂ��A<strong>" + dateStringJ + "�̐����肢</strong><br><br></p><table>";
  for(var i=0;i<12;i++){
    var item = items["horoscope"][dateString][i];
    //console.log(items["horoscope"][dateString][i]["sign"], items["horoscope"][dateString][i]["content"]);
    tStr += "<tr><td><ul>" +
            "<li><p><strong>" + items["horoscope"][dateString][i]["sign"] + "</strong></p></li>" +
            "<li><p>" + items["horoscope"][dateString][i]["content"] + "</p></li>" +
            "<li>" + "���b�L�[�A�C�e���F" + items["horoscope"][dateString][i]["item"] + "</li>" +
            "<li>" + "���b�L�[�J���[�F" + items["horoscope"][dateString][i]["color"] + "</li>" +
            "<li>" + "���^�F" + items["horoscope"][dateString][i]["money"] + "/5" + "</li>" +
            "<li>" + "�����^�F" + items["horoscope"][dateString][i]["total"] + "/5" + "</li>" +
            "<li>" + "�d���^�F" + items["horoscope"][dateString][i]["job"] + "/5" + "</li>" +
            "<li>" + "�����^�F" + items["horoscope"][dateString][i]["love"] + "/5" + "</li>" +
            "<li>" + "�����L���O�F" + items["horoscope"][dateString][i]["rank"] + "/12" + "</li>" +
            "</ul></td></tr>";
  }
  tStr += "</table>";
  var myArea = document.getElementById("myArea");
  myArea.innerHTML = tStr;
}
</script>