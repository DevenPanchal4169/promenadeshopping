import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About

var NewComponent = React.createClass({
    render: function() {
      return (
  
        <div style={{padding: '5px 13px'}}>
          {/*
  
  <body background="/images/background.jpg" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0" marginwidth="0" marginheight="0">
  <div align="center">
      <table border="0" width="1080" cellspacing="0" cellpadding="0">
          <tr>
              <td width="693" align="left" valign="top">
              <map name="FPMap0">
              <area target="_self" href="/users/index" shape="rect" coords="166, 11, 437, 89">
              </map>
              <img border="0" src="/images/piece-001.jpg" width="500" height="97" usemap="#FPMap0"></td>
              <td align="left" valign="top">
              <img border="0" src="/images/expander-01.gif" width="580" height="23"><table border="0" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                      <td width="276"><form action="/users/search" method="post">
                      <input type="text" name="data[User][search]" class="search_input" /><input type="submit" class="btn_search" value="&nbsp;" /></form>
                      </td>
                      <td>
                      <map name="FPMap1">
                      <area target="_self" href="/users/twitter" shape="rect" coords="127, 6, 167, 39">
                      <area target="_self" href="/users/facebook" shape="rect" coords="172, 8, 208, 40">
                      </map>
                      <img border="0" src="/images/piece-004.jpg" width="211" height="44" usemap="#FPMap1"></td>
                  </tr>
              </table>
              <table border="0" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                      <td>
              <img border="0" src="/images/expander-01.gif" width="212" height="24"></td>
                      <td>
                      <table border="0" width="308" cellspacing="0" cellpadding="0" background="/images/piece-005.jpg" height="30">
                          <tr>
                              <td align="center" style="text-align: center">
                              <font face="Arial" color="#FFFFFF" style="font-size: 11pt">
                              <a target="_self" href="/users/index" style="text-decoration: none">
                              <font color="#FFFFFF">HOME</font></a>&nbsp;&nbsp; ::&nbsp;&nbsp;
                              <a target="_self" href="/users/aboutus" style="text-decoration: none">
                              <font color="#FFFFFF">ABOUT</font></a>&nbsp;&nbsp; ::&nbsp;&nbsp;
                              <a target="_self" href="/users/event" style="text-decoration: none">
                              <font color="#FFFFFF">EVENTS</font></a></font></td>
                          </tr>
                      </table>
                      </td>
                      <td width="64">
                      <img border="0" src="/images/piece-006.jpg" width="35" height="30"></td>
                  </tr>
              </table>
              </td>
          </tr>
      </table>
  </div>
  */}
          {/*
  <div align="center">
      <table border="0" width="1080" cellspacing="0" cellpadding="0">
      
             <tr>
              <td><img border="0" src="images/piece-007.jpg" width="85" height="95"></td><div style="width:100%; position:relative;">
              <td style="position:relative"><a data-flexmenu="flexmenu2" target="_self" href="/users/storedirectory" class="stores"></a>
  
      <ul id="flexmenu2" class="flexdropdownmenu">
  <li><a href="/users/shop_by_store">Shop By Store</a>
  
      <ul>
          <li><a href="/users/store_site/207">Bank of America ATM</a>
     
      </li>
          <li><a href="/users/store_site/214">Barber Shop</a>
     
      </li>
          <li><a href="/users/store_site/181">Bel Air Supermarket</a>
     
      </li>
          <li><a href="/users/store_site/182">Brite Cleaners</a>
     
      </li>
          <li><a href="/users/store_site/208">California Sun</a>
     
      </li>
          <li><a href="/users/store_site/185">CVS Pharmacy</a>
     
      </li>
          <li><a href="/users/store_site/183">Dr. Arthur Burbridge, DDS</a>
     
      </li>
          <li><a href="/users/store_site/187">Eyelusions Optometry</a>
     
      </li>
          <li><a href="/users/store_site/176">Golden 1 Credit Union</a>
     
      </li>
          <li><a href="/users/store_site/190">Goodwill Xpress</a>
     
      </li>
          <li><a href="/users/store_site/191">H&R Block</a>
     
      </li>
          <li><a href="/users/store_site/192">Hollywood Nails</a>
     
      </li>
          <li><a href="/users/store_site/189">Ocean Sushi</a>
     
      </li>
          <li><a href="/users/store_site/194">Papa Murphys</a>
     
      </li>
          <li><a href="/users/store_site/195">Regent Chinese</a>
     
      </li>
          <li><a href="/users/store_site/213">Sai Varee Thai Restaurant</a>
     
      </li>
          <li><a href="/users/store_site/197">Select Wine & Spirits</a>
     
      </li>
          <li><a href="/users/store_site/199">Tobacco City</a>
     
      </li>
          </ul>
      
  </li>
  
  <li><a href="/users/shop_by_department">Shop by Department</a>
      <ul>
          <li><a href="/users/shopdeparment/41">Apparel & Home Goods</a>
      
      <ul>		<li>
  <a href="/users/store_site/182">Brite Cleaners</a></li>
          
                  </ul>
              </li>
          <li><a href="/users/shopdeparment/42">Books, Cards, Gifts</a>
      
      <ul>		<li>
  <a href="/users/store_site/181">Bel Air Supermarket</a></li>
          
                  <li>
  <a href="/users/store_site/185">CVS Pharmacy</a></li>
          
                  </ul>
              </li>
          <li><a href="/users/shopdeparment/73">Doctors</a>
      
      <ul>		<li>
  <a href="/users/store_site/183">Dr. Arthur Burbridge, DDS</a></li>
          
                  <li>
  <a href="/users/store_site/187">Eyelusions Optometry</a></li>
          
                  </ul>
              </li>
          <li><a href="/users/shopdeparment/45">Financial</a>
      
      <ul>		<li>
  <a href="/users/store_site/207">Bank of America ATM</a></li>
          
                  <li>
  <a href="/users/store_site/176">Golden 1 Credit Union</a></li>
          
                  <li>
  <a href="/users/store_site/191">H&R Block</a></li>
          
                  </ul>
              </li>
          <li><a href="/users/shopdeparment/47">Fitness, Beauty, Spa</a>
      
      <ul>		<li>
  <a href="/users/store_site/214">Barber Shop</a></li>
          
                  <li>
  <a href="/users/store_site/208">California Sun</a></li>
          
                  <li>
  <a href="/users/store_site/192">Hollywood Nails</a></li>
          
                  </ul>
              </li>
          <li><a href="/users/shopdeparment/72">Grocery & Drug</a>
      
      <ul>		<li>
  <a href="/users/store_site/181">Bel Air Supermarket</a></li>
          
                  <li>
  <a href="/users/store_site/185">CVS Pharmacy</a></li>
          
                  </ul>
              </li>
          <li><a href="/users/shopdeparment/46">Restaurants / Delis</a>
      
      <ul>		<li>
  <a href="/users/store_site/181">Bel Air Supermarket</a></li>
          
                  <li>
  <a href="/users/store_site/189">Ocean Sushi</a></li>
          
                  <li>
  <a href="/users/store_site/194">Papa Murphys</a></li>
          
                  <li>
  <a href="/users/store_site/195">Regent Chinese</a></li>
          
                  <li>
  <a href="/users/store_site/213">Sai Varee Thai Restaurant</a></li>
          
                  </ul>
              </li>
          <li><a href="/users/shopdeparment/71">Specialty Shops</a>
      
      <ul>		<li>
  <a href="/users/store_site/182">Brite Cleaners</a></li>
          
                  <li>
  <a href="/users/store_site/190">Goodwill Xpress</a></li>
          
                  <li>
  <a href="/users/store_site/197">Select Wine & Spirits</a></li>
          
                  <li>
  <a href="/users/store_site/199">Tobacco City</a></li>
          
                  </ul>
              </li>
          
      </ul>
  </li>
  
  <li><a href="/users/directorymap">Directory Map</a></li>
  </ul>
  </div>
  </td>
              <td><a  target="_self" href="/users/coupons" class="coupons"></a></td>
              
              <td><a target="_self" href="/users/visitng" class="visting"></a></td>
              
              <td><a target="_self" href="/users/community" class="community"></a></td>
              
              <td><a data-flexmenu="flexmenu3"  target="_self" href="/users/contact" class="contact"></a>
                          <ul id="flexmenu3" class="flexdropdownmenu">
              <li><a href="/users/contact_address">Leasing Info</a></li>
              <li><a href="/users/contact_lisning_info">Property Management</a></li> 
                          </ul></td>
              <td><img border="0" src="images/piece-008.jpg" width="59" height="95"></td></tr>
      </table>
  </div>
  */}
          <table align="center">
            <tbody><tr>
                <td align="center"><div className="cent">
                    <table style={{paddingLeft: '10px'}} border={0} cellSpacing={0} cellPadding={0} width="100%" align="center">
                      <tbody>
                        <tr>
                          <td valign="top">&nbsp;</td>
                          <td valign="top" bgcolor="#FFFFFF">
                            <table border={0} cellSpacing={0} cellPadding={0} width="100%">
                              <tbody>
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                            <div>
                              <table border={0} cellSpacing={0} cellPadding={0} width="100%">
                                <tbody>
                                  <tr>
                                    <td align="left" valign="top">
                                      <p><span><strong><span style={{color: '#453263', fontFamily: 'Arial'}}>Promenade Shopping Center is your "neighborhood" shopping center for all of your one-stop shopping needs!</span></strong></span></p>
                                      <p><span style={{fontFamily: 'Arial'}}>Anchor Tenants include Bel Air and CVS.&nbsp; Our National Tenants include H &amp; R Block, Papa Murphy's, Goodwill Express, and Mountain Mike's.&nbsp; Regional retailers include Golden 1 Credit Union, California Sun, and Device Brewery.</span></p>
                                      <p><span style={{fontFamily: 'Arial'}}>Promenade is located within the bus lines for Sacramento Regional Transit and is known as "Pocket Transit Center".&nbsp; <br /> <a href="http://promenadeshopping.com/img/map.png" target="_blank"><img src="http://promenadeshopping.com/img/map.png" border={1} alt="" /></a><a style={{display: 'none'}} href="http://lanitech.com/clients/promenade/website/transit-map.pdf" target="_blank">Click here to view the transit map</a>.<br /></span></p>
                                      <p>&nbsp;</p>
                                      <p>&nbsp;</p>
                                      <p>&nbsp;</p>
                                      <p>&nbsp;</p>
                                      <p>&nbsp;</p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div>
                              <table border={0} cellSpacing={0} cellPadding={0} width={1}>
                                <tbody>
                                  <tr>
                                    <td>&nbsp;</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                          <td valign="top">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div></td>
              </tr>
            </tbody></table>
        </div>
      );
    }
  });