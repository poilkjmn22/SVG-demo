import CoffeeMaker from '../vue/CoffeeMaker.vue';
import SVGDemo from '../vue/SVGDemo.vue';
import Flight from '../vue/Flight.vue';
import Crocodile from '../vue/Crocodile.vue';
import RadioButtonsTest from '../vue/RadioButtonsTest.vue';
import BubbleMap from '../vue/BubbleMap.vue';

const routes = [{
  name: 'index',
  path: '/',
  component: SVGDemo
},{
  name: 'coffeeMaker',
  path: '/coffee-maker',
  component: CoffeeMaker
},{
  name: 'flight',
  path: '/flight',
  component: Flight
},{
  name: 'crocodile',
  path: '/crocodile',
  component: Crocodile
},{
  name: 'ARB',
  path: '/ARB',
  component: RadioButtonsTest
},{
  name: 'bubbleMap',
  path: '/bubble-map',
  component: BubbleMap
}];

export default routes;
