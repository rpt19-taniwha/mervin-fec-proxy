const puppeteer = require('puppeteer');
const pageUrl = 'http://ec2-18-144-28-164.us-west-1.compute.amazonaws.com:9999/listing/549504785'

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    ars: [`--window-size-=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll( () => {
  browser.close();
})

describe('Proxy', () => {

  beforeAll( async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'})
  })

  it('should render search bar', async done => {
    const search = await page.$eval('.search-wrapper', el => el ? true : false);
    const etsy = await page.$eval('#etsy', el => el ? true : false);
    const input = await page.$eval('.search-input', el => el ? true : false);
    const signin = await page.$eval('.search-signin-button', el => el ? true : false);
    const cart = await page.$eval('#cart', el => el ? true : false);
    expect(search).toEqual(true);
    expect(etsy).toEqual(true);
    expect(input).toEqual(true);
    expect(signin).toEqual(true);
    expect(cart).toEqual(true);
    done();
  })

  it('should render menu bar', async done => {
    var menu = await page.$$eval('#menu-item', el => el.map(each => each.textContent));
    expect(menu[0]).toEqual('Jewelry & Accessories');
    expect(menu[1]).toEqual('Clothing & Shoes');
    expect(menu[2]).toEqual('Home & Living');
    expect(menu[3]).toEqual('Wedding & Party');
    expect(menu[4]).toEqual('Toys & Entertainment');
    expect(menu[5]).toEqual('Art & Collectibles');
    expect(menu[6]).toEqual('Craft Supplies');
    expect(menu[7]).toEqual('Vintage');
    expect(menu[8]).toEqual('Gifts');
    done();
  })

});


describe('Product service', () => {
  beforeEach( async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'})
  })
  it('should render all components', async done => {
    var log = await page.$eval('.price-amount', e => e);
    console.log(log)
    done();
  })
});

// describe('Image service', () => {
//   beforeEach( async () => {
//     await page.goto(pageUrl, {waitUntil: 'networkidle2'})
//   })
//   it('should render all services', async done => {
//     var log = await page.$eval('.price-component', e => e);
//     console.log(log)
//     done();
//   })
// });

// describe('Review service', () => {
//   beforeEach( async () => {
//     await page.goto(pageUrl, {waitUntil: 'networkidle2'})
//   })
//   it('should render all services', async done => {
//     var log = await page.$eval('.price-component', e => e);
//     console.log(log)
//     done();
//   })
// });

// describe('Youmayalsolike service', () => {
//   beforeEach( async () => {
//     await page.goto(pageUrl, {waitUntil: 'networkidle2'})
//   })
//   it('should render all services', async done => {
//     var log = await page.$eval('.price-component', e => e);
//     console.log(log)
//     done();
//   })
// });


