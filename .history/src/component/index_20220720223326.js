 React from 'react';
import headerImage from  '../../src/images/piece-001.jpg'
import leftImage from  '../../src/images/piece-002.jpg'
import footerImage from  '../../src/images/piece-010.jpg'
import gif from  '../../src/images/expander-001.gif'

const Index = () => {
    return (
        <div style={{ padding: '5px 13px' }}>
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
        <table border={0} width="100%" cellSpacing={0} cellPadding={0} bgcolor="#FFFFFF">
            <tbody><tr>
                <td align="left" valign="top" width={430}>
                    <div align="center">
                        <table border={0} width="80%" cellSpacing={0} cellPadding={25}>
                            <tbody><tr>
                                <td style={{ border: '1px solid #C0C0C0' }}>
                                    <p>Welcome to Promenade Shopping Center! We are proud to be a one-stop shopping destination in the “Pocket” area of Sacramento.</p>					</td>
                            </tr>
                            </tbody></table>
                    </div>
                    <hr color="#FFFFFF" />
                    <div align="center">
                        <table border={0} width="80%" cellSpacing={0} cellPadding={0}>
                            <tbody><tr>
                                <td style={{ border: '1px solid #C0C0C0' }} bgcolor="#D2DDEC">
                                    <img border={0} src="http://promenadeshopping.com/images/piece-009.jpg" width={342} height={30} /><div align="center">
                                        <table border={0} width="80%" cellSpacing={0} cellPadding={0}>
                                            <tbody><tr>
                                                <td>
                                                    <p>Welcome to our website!&nbsp; Please browse around to learn more about our stores.</p>								</td>
                                            </tr>
                                            </tbody></table>
                                    </div>
                                </td>
                            </tr>
                            </tbody></table>
                    </div>
                    <p>&nbsp;</p></td>
                <td align="left" valign="top">
                    {/*<img border="0" src="images/piece-007.jpg" width="477" height="358">*/}
                    <div id="fadeshow1" />
                    <p align="center">
                        <a target="_self" href="http://promenadeshopping.com/users/storedirectory">
                            <img border={0} src="http://promenadeshopping.com/images/piece-008.jpg" width={145} height={26} /></a>
                    </p>
                </td>
            </tr>
            </tbody></table>
        <table border={0} width="100%" cellSpacing={0} cellPadding={0} style={{ marginLeft: '45px' }}>
            <tbody><tr>
                <td align="left" valign="top">&nbsp;<table border={0} width="100%" cellSpacing={0} cellPadding={0}>
                    <tbody><tr>
                        <td align="left" valign="top" width={384}>
                            <table border={0} width="85%" cellSpacing={0} cellPadding={0}>
                                <tbody><tr>
                                    <td className="sdssd">
                                        <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t\t\t\t.sdssd p{\n\t\t\t\t\t\t\t\tmargin-top:0;\n\t\t\t\t\t\t\t\tpadding-top:0;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t" }} />
                                        <font face="Arial" style={{ fontSize: '16pt' }} color="#0578B7">
                                            <p><strong><span style={{ color: '#453263', fontFamily: 'Arial' }}><span>Promenade Shopping Center is located west off of Interstate 5 in the well known "pocket" area of Sacramento.</span><br /></span></strong></p>
                                            <p><span style={{ fontFamily: 'Arial' }}>You can take either Pocket Road exit going west to Windbridge Drive or Florin Road west exit with a left onto Greenhaven Drive and a right onto Windbridge Drive.</span></p>
                                            <p><span style={{ fontFamily: 'Arial' }}>The center is conveniently located at the corner of Windbridge Drive and Rush River Drive.</span></p>
                                            <p><span style={{ fontFamily: 'Arial' }}>7485 Rush River Drive<br />Sacramento, CA 95831<br /></span></p>
                                        </font></td>
                                </tr>
                                </tbody></table>
                        </td>
                        <td align="left" valign="top">
                            <iframe width={477} height={350} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Promenade+Shopping+Center,+Sacramento,+CA&aq=0&oq=Promenade+Shopping+Center+&sll=37.269174,-119.306607&sspn=11.00945,23.269043&ie=UTF8&hq=Promenade+Shopping+Center,&hnear=Sacramento,+California&ll=38.485958,-121.534502&spn=0.210351,0.088225&t=m&output=embed" /><br /><small><a href="https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=Promenade+Shopping+Center,+Sacramento,+CA&aq=0&oq=Promenade+Shopping+Center+&sll=37.269174,-119.306607&sspn=11.00945,23.269043&ie=UTF8&hq=Promenade+Shopping+Center,&hnear=Sacramento,+California&ll=38.485958,-121.534502&spn=0.210351,0.088225&t=m" style={{ color: '#0000FF', textAlign: 'left' }}>View Larger Map</a></small>
                        </td>
                    </tr>
                    </tbody></table>
                    <p>&nbsp;</p></td>
            </tr>
            </tbody></table>
        {/*
<div align="center">
<table border="0" width="1080" cellspacing="0" cellpadding="0">
<tr>
<td valign="top"><img border="0" src="images/piece-009.jpg" width="62" height="316"></td>

<td><div class="slider-wrapper theme-default"><div id="slider" class="nivoSlider">
<a target="_self" href="akhil"><img src="/admin/upload_images/" alt="" width="100%" height="316" /></a>

</div></div></td>
<td valign="top">
<img border="0" src="images/piece-010.jpg" width="59" height="316"></td>
</tr>
</table>
</div>
<div align="center">
<table border="0" width="1080" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF">
<tr>
<td valign="top">
<img border="0" src="images/piece-011.jpg" width="56" height="400"></td>
<td valign="top">

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td><img border="0" src="images/piece-012.jpg" width="667" height="70"></td>
</tr>
<tr>
<td style="padding-left:20px; padding-right:25px;"> <span style="text-align:justify;">
<p>Welcome to Promenade Shopping Center! We are proud to be a one-stop shopping destination in the &ldquo;Pocket&rdquo; area of Sacramento.</p>             </span></td>
</tr>
</table>








</td>
<td valign="top">
<table border="0" width="100%" cellspacing="0" cellpadding="0">
<tr>
<td>
<img border="0" src="images/piece-013.jpg" width="309" height="70">

</td>
</tr>
<tr>
<td background="images/piece-015.jpg">
<div align="center">
<table border="0" width="80%" cellspacing="0" cellpadding="0">
<tr>
<td><br>
<p>
<font face="Arial" color="#3D5043" style="font-size: 14pt"><p>Welcome to our website!&nbsp; Please browse around to learn more about our stores.</p></font></p>

</td>
</tr>
</table>
</div>
</td>
</tr>
<tr>
<td background="images/piece-015.jpg">
<img border="0" src="images/piece-016.jpg" width="309" height="32"></td>
</tr>
</table>
<p>&nbsp;</td>
<td valign="top">
<img border="0" src="images/piece-014.jpg" width="48" height="400"></td>
</tr>
</table>
</div>
<div align="center">
<table border="0" width="1" cellspacing="0" cellpadding="0">
<tr>
<td>
<img border="0" src="images/piece-017.jpg" width="981" height="103"></td>
</tr>
</table>
</div>







*/}
    </div>
    )
}

export default Index;