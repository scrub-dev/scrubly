import { Link, Route } from 'react-router-dom'
//import { Col, Row } from 'react-materialize'

import HomePage from './pages/homepage'
import RedirectsPage from './pages/redirectspage'
import ErrorPage from './pages/errorpage'
/**
 * @author: Scott Donaldson 19019810
 */
const pageconfig = {
  //Pages Array that degines their paths, component to render and if they should be displayed in nav bar or if you need to be authenticated to access them
  pages: (authenticated, authFunc) => {
    return [
      { name: 'home', paths: ['/', 'home'], component: <HomePage/>, showOnNavbar: true},
      { name: 'redirects', paths: ['redirects'], component: <RedirectsPage/>, showOnNavbar: true},
      { name: 'error', paths: ['*'], component: <ErrorPage/>, showOnNavbar: false},
    ]
  },
  //Changers First Character to upperstring
  uppercaseFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  },
  //Generates Routes for react-router-dom
  generateRoutes (authenticated, authFunc) {
    const output = []
    this.pages(authenticated, authFunc).forEach((page, i) => {
      page.paths.forEach(path => {
        output.push(<Route path={path} element={page.component} key={i + page.name} />)
      })
    })
    return output
  },
  //Generates Links for Navbar
  generateLinks (authenticated) {
    const output = []
    this.pages(authenticated).forEach((page, i) => {
      const x = (
        <li key={i + page.name}><Link to={"/" + page.name.replace(/\s/g, '')} className='white-text'>{this.uppercaseFirstLetter(page.name)}</Link></li>
      )
      if (page.showOnNavbar) output.push(x)
    })
    return output
  }
}

export default pageconfig
