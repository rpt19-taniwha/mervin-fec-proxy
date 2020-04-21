import React from 'react';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: null
    }
  }

  mouseEnter (e) {
    this.setState({
      hover: e.target.innerText
    })
  }
  mouseLeave () {
    this.setState({
      hover: null
    })
  }

  render() {
    if (this.state.hover) {
      return (
        <div className="menu">
          <div id="menu-wrapper">
            <ul className="menu-list">
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Jewelry & Accessories</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Clothing & Shoes</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Home & Living</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Wedding & Party</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Toys & Entertainment</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Art & Collectibles</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Craft Supplies</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Vintage</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Gifts</li>
            </ul>
          </div>
          <hr className="divider"></hr>
          <div className="menu-popup-wrapper">
            <div className="menu-popup-list">
              <div>test</div>
              <div>test</div>
              <div>test</div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="menu">
          <div id="menu-wrapper">
            <ul className="menu-list">
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Jewelry & Accessories</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Clothing & Shoes</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Home & Living</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Wedding & Party</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Toys & Entertainment</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Art & Collectibles</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Craft Supplies</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Vintage</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Gifts</li>
            </ul>
          </div>
          <hr className="divider"></hr>
        </div>
      )
    }

  }
}

export default Menu;

console.shallowCloneLog = function(){
  var typeString = Function.prototype.call.bind(Object.prototype.toString)
  console.log.apply(console, Array.prototype.map.call(arguments, function(x){
    switch (typeString(x).slice(8, -1)) {
      case 'Number': case 'String': case 'Undefined': case 'Null': case 'Boolean': return x;
      case 'Array': return x.slice();
      default:
        var out = Object.create(Object.getPrototypeOf(x));
        out.constructor = x.constructor;
        for (var key in x) {
          out[key] = x[key];
        }
        Object.defineProperty(out, 'constructor', {value: x.constructor});
        return out;
    }
  }));
}