(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[3893],{9580:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),u={id:"trade-tokens",title:"Trade Tokens"},i=void 0,s={unversionedId:"guides/trade-tokens",id:"version-V1/guides/trade-tokens",isDocsHomePage:!1,title:"Trade Tokens",description:"In Uniswap, there is a separate exchange contract for each ERC20 token. These exchanges hold reserves of both ETH and their associated ERC20. Instead of waiting to be matched in an order-book, users can make trades against the reserves at any time. Reserves are pooled between a decentralized network of liquidity providers who collect fees on every trade.",source:"@site/versioned_docs/version-V1/guides/03-trade-tokens.md",sourceDirName:"guides",slug:"/guides/trade-tokens",permalink:"/protocol/V1/guides/trade-tokens",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V1/guides/03-trade-tokens.md",version:"V1",sidebarPosition:3,frontMatter:{id:"trade-tokens",title:"Trade Tokens"},sidebar:"version-V1/mySidebar",previous:{title:"Pool Liquidity",permalink:"/protocol/V1/guides/pool-liquidity"},next:{title:"Custom Linking",permalink:"/protocol/V1/guides/custom-linking"}},l=[{value:"ETH \u21c4 ERC20 Calculations",id:"eth-\u21c4-erc20-calculations",children:[{value:"Amount Bought (sell order)",id:"amount-bought-sell-order",children:[]},{value:"Amount Sold (buy order)",id:"amount-sold-buy-order",children:[]},{value:"Liquidity Provider Fee",id:"liquidity-provider-fee",children:[]},{value:"Exchange Rate",id:"exchange-rate",children:[]}]},{value:"ERC20 \u21c4 ERC20 Calculations",id:"erc20-\u21c4-erc20-calculations",children:[{value:"Amount Bought (sell order)",id:"amount-bought-sell-order-1",children:[]},{value:"Amount Sold (buy order)",id:"amount-sold-buy-order-1",children:[]},{value:"Liquidity Provider Fee",id:"liquidity-provider-fee-1",children:[]},{value:"Exchange Rate",id:"exchange-rate-1",children:[]}]},{value:"Deadlines",id:"deadlines",children:[]},{value:"Recipients",id:"recipients",children:[]},{value:"ETH \u21c4 ERC20 Trades",id:"eth-\u21c4-erc20-trades",children:[]},{value:"ERC20 \u21c4 ERC20 Trades",id:"erc20-\u21c4-erc20-trades",children:[]},{value:"Custom Pools",id:"custom-pools",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Uniswap, there is a separate exchange contract for each ERC20 token. These exchanges hold reserves of both ETH and their associated ERC20. Instead of waiting to be matched in an order-book, users can make trades against the reserves at any time. Reserves are pooled between a decentralized network of liquidity providers who collect fees on every trade."),(0,a.kt)("p",null,"Pricing is automatic, based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"x * y = k")," market making formula which automatically adjusts prices based off the relative sizes of the two reserves and the size of the incoming trade. Since all tokens share ETH as a common pair, it is used as an intermediary asset for direct trading between any ERC20 \u21c4 ERC20 pair."),(0,a.kt)("h2",{id:"eth-\u21c4-erc20-calculations"},"ETH \u21c4 ERC20 Calculations"),(0,a.kt)("p",null,"The variables needed to determine price when trading between ETH and ERC20 tokens is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ETH reserve size of the ERC20 exchange"),(0,a.kt)("li",{parentName:"ul"},"ERC20 reserve size of the ERC20 exchange"),(0,a.kt)("li",{parentName:"ul"},"Amount sold ","(","input",")"," or amount bought ","(","output",")")),(0,a.kt)("h3",{id:"amount-bought-sell-order"},"Amount Bought ","(","sell order",")"),(0,a.kt)("p",null,"For sell orders ","(","exact input",")",", the amount bought ","(","output",")"," is calculated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Sell ETH for ERC20\nconst inputAmount = userInputEthValue;\nconst inputReserve = web3.eth.getBalance(exchangeAddress);\nconst outputReserve = tokenContract.methods.balanceOf(exchangeAddress).call();\n\n// Sell ERC20 for ETH\nconst inputAmount = userInputTokenValue;\nconst inputReserve = tokenContract.methods.balanceOf(exchangeAddress).call();\nconst outputReserve = web3.eth.getBalance(exchangeAddress);\n\n// Output amount bought\nconst numerator = inputAmount * outputReserve * 997;\nconst denominator = inputReserve * 1000 + inputAmount * 997;\nconst outputAmount = numerator / denominator;\n")),(0,a.kt)("h3",{id:"amount-sold-buy-order"},"Amount Sold ","(","buy order",")"),(0,a.kt)("p",null,"For buy orders ","(","exact output",")",", the cost ","(","input",")"," is calculated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Buy ERC20 with ETH\nconst outputAmount = userInputTokenValue;\nconst inputReserve = web3.eth.getBalance(exchangeAddress);\nconst outputReserve = tokenContract.methods.balanceOf(exchangeAddress).call();\n\n// Buy ETH with ERC20\nconst outputAmount = userInputEthValue;\nconst inputReserve = tokenContract.methods.balanceOf(exchangeAddress).call();\nconst outputReserve = web3.eth.getBalance(exchangeAddress);\n\n// Cost\nconst numerator = outputAmount * inputReserve * 1000;\nconst denominator = (outputReserve - outputAmount) * 997;\nconst inputAmount = numerator / denominator + 1;\n")),(0,a.kt)("h3",{id:"liquidity-provider-fee"},"Liquidity Provider Fee"),(0,a.kt)("p",null,"There is a 0.3% liquidity provider fee built into the price formula. This can be calculated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"fee = inputAmount * 0.003;\n")),(0,a.kt)("h3",{id:"exchange-rate"},"Exchange Rate"),(0,a.kt)("p",null,"The exchange rate is simply the output amount divided by the input amount."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const rate = outputAmount / inputAmount;\n")),(0,a.kt)("h2",{id:"erc20-\u21c4-erc20-calculations"},"ERC20 \u21c4 ERC20 Calculations"),(0,a.kt)("p",null,"The variables needed to determine price when trading between two ERC20 tokens is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ETH reserve size of the input ERC20 exchange"),(0,a.kt)("li",{parentName:"ul"},"ERC20 reserve size of the input ERC20 exchange"),(0,a.kt)("li",{parentName:"ul"},"ETH reserve size of the output ERC20 exchange"),(0,a.kt)("li",{parentName:"ul"},"ERC20 reserve size of the output ERC20 exchange"),(0,a.kt)("li",{parentName:"ul"},"Amount sold ","(","input",")"," or amount bought ","(","output",")")),(0,a.kt)("h3",{id:"amount-bought-sell-order-1"},"Amount Bought ","(","sell order",")"),(0,a.kt)("p",null,"For sell orders ","(","exact input",")",", the amount bought ","(","output",")"," is calculated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// TokenA (ERC20) to ETH conversion\nconst inputAmountA = userInputTokenAValue;\nconst inputReserveA = tokenContractA.methods.balanceOf(exchangeAddressA).call();\nconst outputReserveA = web3.eth.getBalance(exchangeAddressA);\n\nconst numeratorA = inputAmountA * outputReserveA * 997;\nconst denominatorA = inputReserveA * 1000 + inputAmountA * 997;\nconst outputAmountA = numeratorA / denominatorA;\n\n// ETH to TokenB conversion\nconst inputAmountB = outputAmountA;\nconst inputReserveB = web3.eth.getBalance(exchangeAddressB);\nconst outputReserveB = tokenContract.methods.balanceOf(exchangeAddressB).call();\n\nconst numeratorB = inputAmountB * outputReserveB * 997;\nconst denominatorB = inputReserveB * 1000 + inputAmountB * 997;\nconst outputAmountB = numeratorB / denominatorB;\n")),(0,a.kt)("h3",{id:"amount-sold-buy-order-1"},"Amount Sold ","(","buy order",")"),(0,a.kt)("p",null,"For buy orders ","(","exact output",")",", the cost ","(","input",")"," is calculated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Buy TokenB with ETH\nconst outputAmountB = userInputEthValue;\nconst inputReserveB = web3.eth.getBalance(exchangeAddressB);\nconst outputReserveB = tokenContractB.methods\n  .balanceOf(exchangeAddressB)\n  .call();\n\n// Cost\nconst numeratorB = outputAmountB * inputReserveB * 1000;\nconst denominatorB = (outputReserveB - outputAmountB) * 997;\nconst inputAmountB = numeratorB / denominatorB + 1;\n\n// Buy ETH with TokenA\nconst outputAmountA = userInputEthValue;\nconst inputReserveA = tokenContractA.methods.balanceOf(exchangeAddressA).call();\nconst outputReserveA = web3.eth.getBalance(exchangeAddressA);\n\n// Cost\nconst numeratorA = outputAmountA * inputReserveA * 1000;\nconst denominatorA = (outputReserveA - outputAmountA) * 997;\nconst inputAmountA = numeratorA / denominatorA + 1;\n")),(0,a.kt)("h3",{id:"liquidity-provider-fee-1"},"Liquidity Provider Fee"),(0,a.kt)("p",null,"There is a 0.30% liquidity provider fee to swap from TokenA to ETH on the input exchange. There is another 0.3% liquidity provider fee to swap the remaining ETH to TokenB."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const exchangeAFee = inputAmountA * 0.003;\nconst exchangeBFee = inputAmountB * 0.003;\n")),(0,a.kt)("p",null,"Since users only inputs Token A, it can be represented to them as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const combinedFee = inputAmountA * 0.00591;\n")),(0,a.kt)("h3",{id:"exchange-rate-1"},"Exchange Rate"),(0,a.kt)("p",null,"The exchange rate is simply the output amount divided by the input amount."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const rate = outputAmountB / inputAmountA;\n")),(0,a.kt)("h2",{id:"deadlines"},"Deadlines"),(0,a.kt)("p",null,"Many Uniswap functions include a transaction ",(0,a.kt)("inlineCode",{parentName:"p"},"deadline")," that sets a time after which a transaction can no longer be executed. This limits miners holding signed transactions for extended durations and executing them based off market movements. It also reduces uncertainty around transactions that take a long time to execute due to issues with gas price."),(0,a.kt)("p",null,"Deadlines are calculated by adding the desired amount of time ","(","in seconds",")"," to the latest Ethereum block timestamp."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'web3.eth.getBlock("latest", (error, block) => {\n  deadline = block.timestamp + 300; // transaction expires in 300 seconds (5 minutes)\n});\n')),(0,a.kt)("h2",{id:"recipients"},"Recipients"),(0,a.kt)("p",null,"Uniswap allows traders to swap tokens and transfer the output to a new ",(0,a.kt)("inlineCode",{parentName:"p"},"recipient")," address. This allows for a type of payment where the payer sends one token and the payee receives another."),(0,a.kt)("h2",{id:"eth-\u21c4-erc20-trades"},"ETH \u21c4 ERC20 Trades"),(0,a.kt)("p",null,"Coming soon..."),(0,a.kt)("h2",{id:"erc20-\u21c4-erc20-trades"},"ERC20 \u21c4 ERC20 Trades"),(0,a.kt)("p",null,"Coming soon..."),(0,a.kt)("h2",{id:"custom-pools"},"Custom Pools"),(0,a.kt)("p",null,"Coming soon..."))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,u(u({ref:t},c),{},{components:n})):o.createElement(h,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var l=2;l<a;l++)u[l]=n[l];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);