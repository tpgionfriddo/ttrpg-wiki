import { Outlet, useLoaderData } from "react-router-dom";
import './wiki/wiki.css';

export async function loader() {
    const contacts = {'title':"title", "content":"eeee"};
    return { contacts };
  }

export default function Boot() {
    return (
        <>
        <div class="wrapAll clearfix">
            <div class="sidebar">
                <div class="logo">
                    <a href="/"><img src="" alt="logo" /></a>
                </div>
                <div class="navigation">
                    <ul>
                        <li><a href="#">Main page</a></li>
                        <li><a href="#">Contents</a></li>
                        <li><a href="#">Featured content</a></li>
                    </ul>
                    <h3>Interaction</h3>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portal</a></li>
                    </ul>
                    <h3>Interaction</h3>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portal</a></li>
                    </ul>
                </div>
                <div class="article">
                </div>
            </div>
            <div class="mainsection">
                <div class="headerLinks">
                    <span class="user">Not logged in</span> <a href="#">Talk</a> <a href="#">Contributions</a> <a href="#">Create account</a> <a href="#">Log in</a>
                </div>
                <div class="tabs clearfix">
                    <div class="tabsLeft">
                        <ul>
                            <li><a href="#" class="active">Article</a></li>
                            <li><a href="#">Talk</a></li>						
                        </ul>
                    </div>
                    <div id="simpleSearch">
                        <input type="text" name="searchInput" id="searchInput" placeholder="Search Wikipedia" size="12" />
                        <div id="submitSearch"></div>
                    </div>
                    <div class="tabsRight">
                        <ul>
                            <li><a href="#" class="active">Read</a></li>
                            <li><a href="#">View source</a></li>						
                            <li><a href="#">View history</a></li>						
                        </ul>
                    </div>
                
                </div>
                <Outlet />
                <div class="pagefooter">
                    This page was last edited on 29.07.2017 | Template by <a href="http://html5-templates.com/" target="_blank" rel="nofollow">HTML5 Templates</a>
                    <div class="footerlinks">
                        <a href="#">Privacy policy</a> <a href="#">About</a> <a href="#">Terms and conditions</a> <a href="#">Cookie statement</a> <a href="#">Developers</a>
                    </div>
                </div>
            
            
            </div>		
        </div>
        </>
    );
  }