import React from 'react';
import headerImage from  '../../src/images/piece-001.jpg'
import leftImage from  '../../src/images/piece-002.jpg'
import footerImage from  '../../src/images/piece-010.jpg'
import gif from  '../../src/images/expander-001.gif'
import {Link} from "react-router-dom"

const Layout = (props) => {
    return (
        <div>
            <div align="center">
                <table border={0} width={1150} cellSpacing={0} cellPadding={0}>
                    <tbody><tr>
                        <td style={{ border: '2px solid #453263' }} align="left" valign="top">
                            <table border={0} width="100%" cellSpacing={0} cellPadding={0}>
                                <tbody><tr>
                                    <td>
                                        <map name="FPMap1">
                                            <area target="_self" href="users/facebook.html" shape="rect" coords="1086, 5, 1106, 26" />
                                            <area target="_self" href="users/twitter.html" shape="rect" coords="1115, 5, 1134, 26" />
                                        </map>
                                        <img border={0} src={headerImage} width={1146} height={29} useMap="#FPMap1" /></td>
                                </tr>
                                </tbody></table>
                            {/*<table border="0" width="100%" cellspacing="0" cellpadding="0" style="display:none;">
          <tr>
              <td style="border-right: 1px solid #FFFFFF"><div id="fadeshow1"></div></td>
              <td style="border-right: 1px solid #FFFFFF"><div id="fadeshow2"></div></td>
              <td style="border-right: 1px solid #FFFFFF"><div id="fadeshow3"></div></td>
              <td style="border-right: 1px solid #FFFFFF"><div id="fadeshow4"></div></td>
              <td><div id="fadeshow5"></div></td>
          </tr>
      </table>*/}
                            <table border={0} width="100%" cellSpacing={0} cellPadding={0} bgcolor="#FFFFFF">
                                <tbody><tr>
                                    <td align="left" valign="top" width={205} bgcolor="#453263" style={{ background: 'url("images/piece-003.jpg") no-repeat scroll left bottom #453263' }}>
                                        <table border={0} width={205} cellSpacing={0} cellPadding={0} height={375}>
                                            <tbody><tr>
                                                <td background={leftImage} align="left" valign="top">
                                                    <div align="center">
                                                        <table border={0} width="70%" cellSpacing={0} cellPadding={5}>
                                                            <tbody><tr>
                                                                <td>
                                                                    <img border={0} src={gif} width={55} height={79}/></td>
                                                            </tr>
                                                                <tr>
                                                                    <td><Link className="nav" target="_self" to="/">HOME</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><Link className="nav" target="_self" to="/about">ABOUT</Link></td>
                                                                </tr>
                                                                <tr style={{ display: 'none' }}>
                                                                    <td><a className="nav" target="_self" href="users/event.html">EVENTS</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a data-flexmenu="flexmenu2" data-offsets="170,-20" className="nav" target="_self" href="users/storedirectory.html">DIRECTORY</a>
                                                                        <ul id="flexmenu2" className="flexdropdownmenu">
                                                                            <li><a href="users/shop_by_store.html">Shop By Store</a>
                                                                                <ul>
                                                                                    <li><a href="users/store_site/207.html">Bank of America ATM</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/214.html">Barber Shop</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/181.html">Bel Air Supermarket</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/182.html">Brite Cleaners</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/208.html">California Sun</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/185.html">CVS Pharmacy</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/183.html">Dr. Arthur Burbridge, DDS</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/187.html">Eyelusions Optometry</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/176.html">Golden 1 Credit Union</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/190.html">Goodwill Xpress</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/191.html">H&amp;R Block</a>
                                                                                    </li>
                                                                                    <li><a href="users/store_site/192.html">Hollywood Nails</a>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/store_site/189">Ocean Sushi</a>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/store_site/194">Papa Murphys</a>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/store_site/195">Regent Chinese</a>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/store_site/213">Sai Varee Thai Restaurant</a>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/store_site/197">Select Wine &amp; Spirits</a>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/store_site/199">Tobacco City</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li><a href="http://promenadeshopping.com/users/shop_by_department">Shop by Department</a>
                                                                                <ul>
                                                                                    <li><a href="http://promenadeshopping.com/users/shopdeparment/41">Apparel &amp; Home Goods</a>
                                                                                        <ul>													<li>
                                                                                            <a href="http://promenadeshopping.com/users/store_site/182">Brite Cleaners</a></li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/shopdeparment/42">Books, Cards, Gifts</a>
                                                                                        <ul>													<li>
                                                                                            <a href="http://promenadeshopping.com/users/store_site/181">Bel Air Supermarket</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/185">CVS Pharmacy</a></li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/shopdeparment/73">Doctors</a>
                                                                                        <ul>													<li>
                                                                                            <a href="http://promenadeshopping.com/users/store_site/183">Dr. Arthur Burbridge, DDS</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/187">Eyelusions Optometry</a></li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/shopdeparment/45">Financial</a>
                                                                                        <ul>													<li>
                                                                                            <a href="http://promenadeshopping.com/users/store_site/207">Bank of America ATM</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/176">Golden 1 Credit Union</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/191">H&amp;R Block</a></li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/shopdeparment/47">Fitness, Beauty, Spa</a>
                                                                                        <ul>													<li>
                                                                                            <a href="http://promenadeshopping.com/users/store_site/214">Barber Shop</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/208">California Sun</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/192">Hollywood Nails</a></li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/shopdeparment/72">Grocery &amp; Drug</a>
                                                                                        <ul>													<li>
                                                                                            <a href="http://promenadeshopping.com/users/store_site/181">Bel Air Supermarket</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/185">CVS Pharmacy</a></li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/shopdeparment/46">Restaurants / Delis</a>
                                                                                        <ul>													<li>
                                                                                            <a href="http://promenadeshopping.com/users/store_site/181">Bel Air Supermarket</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/189">Ocean Sushi</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/194">Papa Murphys</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/195">Regent Chinese</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/213">Sai Varee Thai Restaurant</a></li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li><a href="http://promenadeshopping.com/users/shopdeparment/71">Specialty Shops</a>
                                                                                        <ul>													<li>
                                                                                            <a href="http://promenadeshopping.com/users/store_site/182">Brite Cleaners</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/190">Goodwill Xpress</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/197">Select Wine &amp; Spirits</a></li>
                                                                                            <li>
                                                                                                <a href="http://promenadeshopping.com/users/store_site/199">Tobacco City</a></li>
                                                                                        </ul>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li><a href="http://promenadeshopping.com/users/directorymap">Directory Map</a></li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><Link className="nav" target="_self" href="http://promenadeshopping.com/users/coupons">COUPONS</Link></td>
                                                                </tr>
                                                                <tr style={{ display: 'none' }}>
                                                                    <td><a className="nav" target="_self" href="http://promenadeshopping.com/users/visitng">VISITING US</a></td>
                                                                </tr>
                                                                <tr style={{ display: 'none' }}>
                                                                    <td><a className="nav" target="_self" href="http://promenadeshopping.com/users/community">COMMUNITY</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <Link className="nav" data-flexmenu="flexmenu3________" data-offsets="170,-20" target="_self" to="/contact">CONTACT US</Link>
                                                                        <ul id="flexmenu3" className="flexdropdownmenu">
                                                                            <li><a href="http://promenadeshopping.com/users/contact_address">Leasing Info</a></li>
                                                                            <li><a href="http://promenadeshopping.com/users/contact_lisning_info">Property Management</a></li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                    </div></td>
                                            </tr>
                                            </tbody></table>
                                        <div style={{ height: '210px' }} />
                                        {/*<table border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                          <td>
                          <img border="0" src="/images/piece-003.jpg" width="205" height="210"></td>
                      </tr>
                  </table>*/}
                                    </td>
                                    <td align="left" valign="top">
                                        <table border={0} width="100%" cellSpacing={0} cellPadding={0} background="http://promenadeshopping.com/images/piece-005.jpg">
                                            <tbody><tr>
                                                <td width={485}>
                                                    <a target="_self" href="http://promenadeshopping.com/users/index">
                                                        <img border={0} src="http://promenadeshopping.com/images/piece-004.jpg" width={480} height={125} /></a></td>
                                                <td>
                                                    <form action="http://promenadeshopping.com/users/search" method="post">
                                                        <input style={{ borderWidth: '1px medium 1px 1px', borderStyle: 'solid none solid solid', borderColor: 'rgb(204, 204, 204) -moz-use-text-color rgb(204, 204, 204) rgb(204, 204, 204)', MozBorderTopColors: 'none', MozBorderRightColors: 'none', MozBorderBottomColors: 'none', MozBorderLeftColors: 'none', borderImage: 'none', padding: '3px', margin: '0px', position: 'relative', top: '-8px', left: '0px', width: '215px' }} type="text" name="data[User][search]" className="search_input" /><input type="image" className="btn_search" src="http://promenadeshopping.com/images/piece-006.jpg" />
                                                    </form>
                                                </td>
                                            </tr>
                                            </tbody></table><br />
                                      {
                                        props.content
                                      }
                                    </td>
                                </tr>
                                </tbody></table>
                            <table border={0} width="100%" cellSpacing={0} cellPadding={0}>
                                <tbody><tr>
                                    <td>
                                        <img border={0} src={footerImage} width={1146} height={25} /></td>
                                </tr>
                                </tbody></table>
                        </td>
                    </tr>
                    </tbody></table>
            </div>
            <p style={{ textAlign: 'center' }}>©2018&nbsp; Promenade Sacramento.&nbsp; All Rights Reserved.</p>
        </div>
    )
}

export default Layout;