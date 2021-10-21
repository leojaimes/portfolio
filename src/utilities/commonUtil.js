import Home from 'PortfolioContainer/Home/Home'
import AboutMe from 'PortfolioContainer/AboutMe/AboutMe'
import Resume from 'PortfolioContainer/Resume/Resume'

export const TOTAL_SCREENS =  [
  {
    screen_name: "Home",
    component : Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },

  
]

export const GET_SCREEN_INDEX =  (screen_name)=>{
  let screen_index = -1
  if(!screen_name){
    return -1
  }
  screen_index =  TOTAL_SCREENS.findIndex(screen =>  {return screen.screen_name === screen_name} )

  return screen_index
}