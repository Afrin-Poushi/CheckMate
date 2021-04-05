// you will need link and withRouter from react router dom
import {Link, withRouter} from 'react-router-dom';
import React from 'react'; 
// And you will need react offcanvas menu offcourse :)
import OffcanvasMenu from 'react-offcanvas-menu-component'; 
 
// name you menu component and pass the location parameter 
// that will be drilled from withRouter
function Menu({location}) {
 
    return(
        <OffcanvasMenu
            Link={Link} // react-router-dom Link
            location={location} // location parameter passed from Router
            config={{
                width: 300, // you can modify default width
                push: true // if you want to enable push feature
            }}
            // this is where you create your menu items
            menu={[
                // basic menu item
                {text: 'Home', link: '/'}, 
 
                // menu item with submenu
                {text: 'Pages', link: '/page', submenu: [ 
                    {text: 'Page 1', link: '/page/1'},
                    {text: 'Page 2', link: '/page/2'}
                ]}
            ]}
        />
    )
}
 

 
// You need to wrap export with withRouter 
// so you can access the location prop in your component
// and pass it to the react-offcanvas-menu
export default withRouter(Menu);