function esports_bar_basket() {
   var htmlBar = document.getElementById('basket_bar_esports');
   var writeHTML;
   var counter = 0;
   var idCompetition = document
     .getElementById('basket_bar_esports')
     .getAttribute('data-competition');
   var idTeam = document.getElementById('basket_bar_esports').getAttribute('data-idTeam');
   var googleSearch = document
     .getElementById('basket_bar_esports')
     .getAttribute('data-googleSearch');
   var boolET = false;
   var boolPO = false;
   var pomocnaCesta = 'https://vesna.esports.cz/weby_data/top_bar';
   if (idCompetition != '2liga') {
     writeHTML = '<div id="top_bar_icons">';
     writeHTML += '    <div class="top_bar_icons_logo">';
   }
   function addNumberBar() {
     counter += 1;
     return counter;
   }
   if (idCompetition == '1liga') {
     writeHTML +=
       '    <a href="https://www.nbl.basketball/" class="top_bar_icons_logo--no_grayscale" target=_blank><img src="' +
       pomocnaCesta +
       '/image/basket/logo_knbl_new_horizontal.png"></a>';
     writeHTML += '      <span class="top_bar_icons_logo__divider"></span>';
 
     writeHTML +=
       '				<a href="https://basketbrno.cz/" target="_blank" title="Basket Brno (' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/BBR.png" alt=""></a>';
 
     writeHTML +=
       '		<a href="https://www.bkdecin.cz/" target="_blank" title="BK Armex Děčín (' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/DEC.png" alt=""></a>';
 
     writeHTML +=
       '		<a href="https://www.bkopava.cz/" target=_blank title="BK Opava(' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/bkOpava_new.png"></a>';
 
     writeHTML +=
       '		<a href="https://bkpardubice.cz/" target=_blank title="BK KVIS Pardubice (' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/prdb.png"></a>';
 
     writeHTML +=
       '		<a href="https://www.bkredstone.cz/" target=_blank title="BK Redstone Olomoucko (' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/263824MDB.png"></a>';
 
     writeHTML +=
       '		<a href="https://www.nymburk.basketball/" target=_blank title="Basketball Nymburk (' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/logo_nymburk_128.png"></a>';
 
     writeHTML +=
       '		<a href="http://www.bckolin.cz/" target=_blank title="BC GEOSAN Kolín (' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/KOL.png"></a>';
 
     writeHTML +=
       '		<a href="https://bkhk.cz/" target=_blank title="Královští sokoli (' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/HKR.png"></a>';
 
     writeHTML +=
       '		<a href="https://www.nhbasket.cz/" target=_blank title="NH Ostrava(' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/NHO.png"></a>';
 
     writeHTML +=
       '		<a href="https://www.slaviabasket.cz/" target=_blank title="SK Slavia Praha (' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/slavia-logo-basket-2.png"></a>';
 
     writeHTML +=
       '		<a href="https://www.bkusti.cz/" target=_blank title="SLUNETA Ústí nad Labem (' +
       addNumberBar() +
       '."><img src="' +
       pomocnaCesta +
       '/image/basket/UNL.png"></a>';
 
     writeHTML +=
       '		<a href="http://www.uskpraha.cz/" target=_blank title="USK Praha (' +
       addNumberBar() +
       '.)"><img src="' +
       pomocnaCesta +
       '/image/basket/USK.png"></a>';
   }
 
   htmlBar.innerHTML = writeHTML;
 }
 
 esports_bar_basket();
 