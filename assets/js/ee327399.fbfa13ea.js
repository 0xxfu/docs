(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[7451],{7033:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={},l=void 0,c={unversionedId:"reference/core/libraries/BitMath",id:"version-V3/reference/core/libraries/BitMath",isDocsHomePage:!1,title:"BitMath",description:"This library provides functionality for computing bit properties of an unsigned integer",source:"@site/versioned_docs/version-V3/reference/core/libraries/BitMath.md",sourceDirName:"reference/core/libraries",slug:"/reference/core/libraries/BitMath",permalink:"/protocol/reference/core/libraries/BitMath",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/core/libraries/BitMath.md",version:"V3",frontMatter:{},sidebar:"version-V3/mySidebar",previous:{title:"IUniswapV3PoolState",permalink:"/protocol/reference/core/interfaces/pool/IUniswapV3PoolState"},next:{title:"FixedPoint128",permalink:"/protocol/reference/core/libraries/FixedPoint128"}},p=[{value:"Functions",id:"functions",children:[{value:"mostSignificantBit",id:"mostsignificantbit",children:[]},{value:"leastSignificantBit",id:"leastsignificantbit",children:[]}]}],s={toc:p};function u(t){var e=t.components,n=(0,i.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This library provides functionality for computing bit properties of an unsigned integer"),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"mostsignificantbit"},"mostSignificantBit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function mostSignificantBit(\n    uint256 x\n  ) internal pure returns (uint8 r)\n")),(0,a.kt)("p",null,"Returns the index of the most significant bit of the number,\nwhere the least significant bit is at index 0 and the most significant bit is at index 255"),(0,a.kt)("p",null,"The function satisfies the property:\nx >= 2",(0,a.kt)("strong",{parentName:"p"},"mostSignificantBit(x) and x < 2"),"(mostSignificantBit(x)+1)"),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"x")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"the value for which to compute the most significant bit, must be greater than 0")))),(0,a.kt)("h4",{id:"return-values"},"Return Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"r")),(0,a.kt)("td",{parentName:"tr",align:"left"},"unit8"),(0,a.kt)("td",{parentName:"tr",align:"left"},"the index of the most significant bit")))),(0,a.kt)("h3",{id:"leastsignificantbit"},"leastSignificantBit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function leastSignificantBit(\n    uint256 x\n  ) internal pure returns (uint8 r)\n")),(0,a.kt)("p",null,"Returns the index of the least significant bit of the number,\nwhere the least significant bit is at index 0 and the most significant bit is at index 255"),(0,a.kt)("p",null,"The function satisfies the property:\n(x & 2",(0,a.kt)("strong",{parentName:"p"},"leastSignificantBit(x)) != 0 and (x & (2"),"(leastSignificantBit(x)) - 1)) == 0)"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"x")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"the value for which to compute the least significant bit, must be greater than 0")))),(0,a.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"r")),(0,a.kt)("td",{parentName:"tr",align:"left"},"unit8"),(0,a.kt)("td",{parentName:"tr",align:"left"},"the index of the least significant bit")))))}u.isMDXComponent=!0},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=p(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,o(o({ref:e},s),{},{components:n})):r.createElement(d,o({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);