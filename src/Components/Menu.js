import {Link, withRouter} from 'react-router-dom';
import React from 'react'; 
import OffcanvasMenu from 'react-offcanvas-menu-component';


function Menu({location}) {
 
    return(
        <OffcanvasMenu
            Link={Link} // react-router-dom Link
            location={location} // location parameter passed from Router
            config={{
                width: 100, 
                push: true 
            }}
            // this is menu items
            menu={[
                // basic menu item
                {text: 'Home', link: '/', }, 
                {text: 'All task', link: '/', },
                {text: 'Calander', link: '/', },
                {text: 'Notification', link: '/', },
                {text: 'Archieve', link: '/', },
                {text: 'Labels', link: '/', submenu: [ 
                    {text: 'Projects', link: '/projects'},
                    {text: 'Tasks', link: '/tasks'}
                ]},
                {text: 'Settings', link: '/', },
                {text: 'Log out', link: '/', },

            ]}
            header={
                <h3>CheckMate</h3>
            }
        />
    )
}
 
export default withRouter(Menu);