(function(){"use strict";var e={451:function(e,t,n){const o=[{id:"big-numbers-in-javascript",title:"Big numbers in javascript",category:"Web Application",img:n(879),detail:"The Javascript understanding of huge number representation and how an interpreter scans through the code.",singleBlogHeader:{singleBlogTitle:"Big numbers in javascript",singleBlogDate:"November 07, 2022",singleBlogTag:"Numbers"},blogImages:[],blogInfo:{authorHeading:"Author",authorInfos:[{id:1,title:"",details:"Kalkidan B."},{id:3,title:"Website",details:"https://kalkidanbehayilu.github.io"}],objectivesHeading:"Objective",objectivesDetails:"We will try to Understand how big numbers are represented and handled in Javascript.",blogContents:[{id:1,blogDetailsHeading:"Number",blogDetails:[{id:1,details:'Number is a primitive wrapper object used to represent and manipulate numbers. The Number constructor contains constants and methods for working with numbers. A literal number in JavaScript code is a floating-point value.\n              We don\'t have a separate integer type regularly employed (<a class="text-indigo-500 font-bold" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Source<a/>). To understand Number type check <a class="text-indigo-500 font-bold" href="https://www.henoktsegaye.com/blogs/javascript-number-types/"> Henoks post about Number types</a>'},{id:1,isCodeSnippet:!0,details:"\n              123456 // This is a number\n\n              123456.0 // Could also be represented like this\n              "},{id:2,details:'Numbers in Javascript are represented as a <a class="text-indigo-500 font-bold" href="https://en.wikipedia.org/wiki/Double-precision_floating-point_format">Double-precision floating-point format</a> occupying <span class="text-indigo-500">64</span> bits of memory and it represents a broad dynamic range of numerical values. \n              If we have a <span class="text-indigo-500">64-bit</span> storage, can we have a value of <span class="text-indigo-500">18,446,744,073,709,551,616</span> you might ask? Unfortunately <span class="font-extrabold text-rose-500 animate-pulse">NO!</span>'},{id:2,details:'<span class="font-extrabold">Here is why</span>'},{id:3,details:'\n              <ul style="list-style-type:circle">\n                <li>1 bit for the sign (positive or negative)</li>\n                <li>11 bits for the exponent (-1022 to 1023)</li>\n                <li>52 bits for the mantissa (representing a number between 0 and 1)</li>\n              </ul>',img:{caption:"From Wikipedia: https://en.wikipedia.org/wiki/Double-precision_floating-point_format",url:n(260)}},{id:4,details:'But how do we represent large numbers greater than <span class="text-indigo-500">52</span> bits? Easy, use the <span class="text-indigo-500">11</span> bits for the exponents! It can hold upto <span class="text-indigo-500">2<sup>1024 - 1</sup></span> (with the exponent being <span class="text-indigo-500">1023</span> and the mantissa being <span class="text-indigo-500">0.1111… in base 2</span>).'},{id:5,isCodeSnippet:!0,details:"\n              console.log(Number.MAX_VALUE); // 1.7976931348623157e+308\n              "},{id:5,details:"Based on the MAX_VALUE, you might think you can represent any number under <span class=\"text-indigo-500\">1.7976931348623157e+308</span> without any problem. But that's not the case. Let's see why"},{id:6,isCodeSnippet:!0,details:'\n              const x = 112233445566778898;\n              const y = 112233445566778899;\n              console.log(x === y); // true\n              // "What? Something is wrong with Javascript!"\n\n              // Let\'s try this one\n              // It should work this time\n\n              const x = 112233445566778898e+30;\n              const y = 112233445566778899e+30;\n              console.log(x === y); // true\n              // "Not again!"\n              '},{id:7,details:'The problem is that we can only store <span class="text-indigo-500">52</span> bits of data, so it can only safely represent integers between <span class="text-indigo-500">-(2<sup>53 – 1</sup>)</span> and <span class="text-indigo-500">2<sup>53 – 1</sup></span>. That means the maximum number we can store is <span class="text-indigo-500">9,007,199,254,740,991</span> or <span class="text-indigo-500">-9,007,199,254,740,991</span>'},{id:8,isCodeSnippet:!0,details:"\n              console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991\n              "},{id:9,details:'Any number respresentation over or under the specified range will be considered as <span class="text-indigo-500">Overflow</span> or <span class="text-indigo-500">Underflow</span>.\n              '}]},{id:1,blogDetailsHeading:"How to fix it",blogDetails:[{id:10,details:'This is where <span class="text-indigo-500 font-bold">BIGINT</span> comes.\n              <br><br>\n              <span class="text-indigo-500 font-bold">BIGINT</span> is a built-in object in JavaScript that provides a way to represent numbers larger than <span class="text-indigo-500 font-bold">2<sup>53-1</sup></span>.\n              As I mentioned previously, <span class="text-indigo-500 font-bold">BIGINT</span> is a built-in object and we can\'t generally determine the occupied memory size of it. Thus, implementations can choose their own limits.\n              <a class="text-indigo-500 font-bold" href="https://github.com/tc39/proposal-bigint/issues/174">Take a look at this github issue asking about BigInt size specifications</a>.\n              It is usefull when we work with timestamps and large integer Numbers (like ID\'s)'},{id:11,details:'<span class="font-bold text-xl">How to use it</span>\n              <br>\n              <br>\n              You can use the <span class="text-indigo-500 font-bold">BigInt()</span> constructor, you don\'t have to instantiate or use the <span class="text-indigo-500">new</span> keyword\n              '},{id:8,isCodeSnippet:!0,details:'\n              const x = BigInt("90071992547409919007199254740991");\n              console.log(x.toString()); // 90071992547409919007199254740991\n              '},{id:12,details:'<span class="font-bold text-xl">Alternative method</span>\n              <br>\n              <br>\n              You can also use <span class="text-indigo-500">n</span> prefix after the number.\n              '},{id:13,isCodeSnippet:!0,details:"\n              const x = 90071992547409919007199254740991n;\n              console.log(x.toString()); // 90071992547409919007199254740991\n\n              // NOTE: This won't work as expected\n              const y = 90071992547409919007199254740991;\n              console.log(y); // 9.007199254740992e+31\n              // The reason is that y has already lost precision.\n              // y is being changed on initialization.\n              "},{id:14,details:'<span class="font-bold text-xl">Operations in BigInt</span>\n              <br>\n              <br>\n              <span class="text-indigo-500">Bitwise operators </span> are supported, except <span class="text-indigo-500">>>> (zero-fill right shift)</span>, as every BigInt value is signed. \n              <br>\n              Lets try <span class="text-indigo-500 font-extrabold"> + * - % ** </span> operators as an example\n              '},{id:15,isCodeSnippet:!0,details:'\n              const originalNumber = BigInt("9007199254740998");\n              console.log(originalNumber.toString()); // 9007199254740998\n\n              const addition = originalNumber + 2n;\n              console.log(addition.toString()); // 9007199254741000\n\n              const subtraction = originalNumber - 2n;\n              console.log(subtraction.toString()); // 9007199254740996\n\n              const multiplication = originalNumber * 2n;\n              console.log(multiplication.toString()); // 18014398509481996\n\n              const division = originalNumber / 2n;\n              console.log(division.toString()); // 4503599627370499\n\n              '},{id:16,details:'<span class="text-xl"><span class="text-orange-500 font-bold">Note: </span> Multiplication won\'t return any fractional digits!</span>\n              <br>\n              <br>\n              Operations with a fractional result will be truncated when used with a BigInt value. BigInt won\'t accept fractional digits as well.\n              '},{id:17,isCodeSnippet:!0,details:"\n              const expected = 4n / 2n\n              console.log(expected.toString()); // 2n\n              \n              const truncated = 5n / 2n\n              console.log(truncated.toString()); // 2n, not 2.5n\n              "}]}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"LinkedIn",icon:"linkedin",url:"https://kalkidanbehayilu.github.io/blogs/big-numbers-in-javascript",title:"The Javascript understanding of huge number representation and how an interpreter scans through the code.",description:"Number is a primitive wrapper object used to represent and manipulate numbers. The Number constructor contains constants and methods for working with numbers. A literal number in JavaScript code is a floating-point value.",quote:"Big numbers in javascript",media:n(879)},{id:1,name:"Twitter",icon:"twitter",url:"https://kalkidanbehayilu.github.io/blogs/big-numbers-in-javascript",title:"The Javascript understanding of huge number representation and how an interpreter scans through the code.",description:"Number is a primitive wrapper object used to represent and manipulate numbers. The Number constructor contains constants and methods for working with numbers. A literal number in JavaScript code is a floating-point value.",quote:"Big numbers in javascript",media:n(879)}]}}];t["Z"]=o},115:function(e,t,n){var o=n(963),a=n(252),r=n(577);const i=(0,a._)("i",{"data-feather":"chevron-up"},null,-1);function s(e,t,n,s,l,d){const c=(0,a.up)("AppHeader"),u=(0,a.up)("router-view"),m=(0,a.up)("back-to-top"),g=(0,a.up)("AppFooter");return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)([d.theme,"pt-0.5"])},[(0,a.Wm)(c),(0,a.Wm)(u,null,{default:(0,a.w5)((({Component:e,route:t})=>[(0,a.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e),{key:t.path}))])),_:2},1024)])),_:1}),(0,a.Wm)(m,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,a.w5)((()=>[i])),_:1}),(0,a.Wm)(g)],2)}var l=n(508),d=n.n(l),c=n(158);const u={id:"nav",class:"sm:container sm:mx-auto"},m={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center"},g={class:"flex justify-between items-center px-4 sm:px-0"},p={key:0,src:c,class:"w-12 h-12 rounded",alt:"Dark Logo"},h={key:1,src:c,class:"w-12 h-12 rounded",alt:"Light Logo"},b={class:"sm:hidden"},f={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},x={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},v={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},y={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"};function w(e,t,n,o,r,i){const s=(0,a.up)("router-link"),l=(0,a.up)("theme-switcher"),d=(0,a.up)("AppHeaderLinks");return(0,a.wg)(),(0,a.iD)("nav",u,[(0,a._)("div",m,[(0,a._)("div",g,[(0,a._)("div",null,[(0,a.Wm)(s,{to:"/"},{default:(0,a.w5)((()=>["light"===i.theme?((0,a.wg)(),(0,a.iD)("img",p)):((0,a.wg)(),(0,a.iD)("img",h))])),_:1})]),(0,a.Wm)(l,{class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"}),(0,a._)("div",b,[(0,a._)("button",{onClick:t[0]||(t[0]=e=>r.isOpen=!r.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,a.wg)(),(0,a.iD)("svg",f,[r.isOpen?((0,a.wg)(),(0,a.iD)("path",x)):(0,a.kq)("",!0),r.isOpen?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("path",v))]))])])]),(0,a.Wm)(d,{isOpen:r.isOpen},null,8,["isOpen"]),(0,a._)("div",y,[(0,a.Wm)(l,{class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"})])])])}const k={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light w-5"},B={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function j(e,t,n,r,i,s){return(0,a.wg)(),(0,a.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,o.iM)(((...e)=>s.toggleTheme&&s.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===s.theme?((0,a.wg)(),(0,a.iD)("i",k)):((0,a.wg)(),(0,a.iD)("i",B))])}var A={methods:{toggleTheme(){const e="light"===this.theme?"dark":"light";this.$store.dispatch("changeTheme",e)}},computed:{theme(){return this.$store.state.theme}}},S=n(744);const T=(0,S.Z)(A,[["render",j]]);var C=T;const D=(0,a.Uk)("Blogs"),N=(0,a.Uk)("Contact");function L(e,t,n,o,i,s){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)([n.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,a.Wm)(l,{to:"/blogs",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Blogs"},{default:(0,a.w5)((()=>[D])),_:1}),(0,a.Wm)(l,{to:"/contact",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact"},{default:(0,a.w5)((()=>[N])),_:1})],2)}var _={props:["isOpen"]};const I=(0,S.Z)(_,[["render",L]]);var O=I,z={components:{ThemeSwitcher:C,AppHeaderLinks:O},data(){return{isOpen:!1,modal:!1}},computed:{theme(){return this.$store.state.theme}},mounted(){d().replace()},methods:{showModal(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated(){d().replace()}};const W=(0,S.Z)(z,[["render",w],["__scopeId","data-v-00ac8991"]]);var H=W;const Z={class:"container mx-auto"},J={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},E={class:"flex flex-col justify-center items-center mb-12 sm:mb-20"},R={class:"flex gap-4 sm:gap-8"},F=["href"],M=["data-feather"];function U(e,t,n,o,r,i){const s=(0,a.up)("FooterCopyright");return(0,a.wg)(),(0,a.iD)("div",Z,[(0,a._)("div",J,[(0,a._)("div",E,[(0,a._)("ul",R,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.socials,(e=>((0,a.wg)(),(0,a.iD)("a",{key:e.id,href:e.url,target:"__blank",class:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"},[(0,a._)("i",{"data-feather":e.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,M)],8,F)))),128))])]),(0,a.Wm)(s)])])}const P={class:"flex justify-center items-center text-center"},G={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"};function q(e,t,n,o,i,s){return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",G," © "+(0,r.zw)(e.copyrightDate)+". ",1)])}var X={data:()=>({copyrightDate:(new Date).getFullYear(),author:"Kalkidan"})};const K=(0,S.Z)(X,[["render",q]]);var V=K,Q={components:{FooterCopyright:V},data(){return{socials:[{id:1,name:"GitHub",icon:"github",url:"https://github.com/kalbehayilu"},{id:2,name:"Linkedin",icon:"linkedin",url:"https://et.linkedin.com/in/kalkidan-behayilu"}]}},mounted(){d().replace()},updated(){d().replace()}};const Y=(0,S.Z)(Q,[["render",U]]);var $=Y,ee={components:{AppHeader:H,AppFooter:$},data:()=>({}),computed:{theme(){return this.setBodyStyle(),this.$store.state.theme}},mounted(){this.setBodyStyle(),d().replace()},updated(){d().replace()},methods:{setBodyStyle(){"dark"===this.$store.state.theme?document.querySelector("body").classList.replace("bg-secondary-light","bg-primary-dark"):document.querySelector("body").classList.replace("bg-primary-dark","bg-secondary-light")}}};const te=(0,S.Z)(ee,[["render",s]]);var ne=te,oe=n(119);const ae={class:"container mx-auto"},re={class:"mx-auto"},ie={class:"mx-auto"};function se(e,t,n,o,r,i){const s=(0,a.up)("AppBanner"),l=(0,a.up)("About"),d=(0,a.up)("BlogsGrid"),c=(0,a.up)("GitRepo"),u=(0,a.up)("AboutFrameWorks");return(0,a.wg)(),(0,a.iD)("div",ae,[(0,a.Wm)(s,{class:"mb-5 sm:mb-8"}),(0,a.Wm)(l),(0,a.Wm)(d),(0,a._)("div",re,[(0,a.Wm)(c)]),(0,a._)("div",ie,[(0,a.Wm)(u)])])}var le=n(278),de=n(724);const ce={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},ue=(0,a._)("div",{class:"w-full md:w-1/3 text-left"},[(0,a._)("h1",{class:"font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"}," Hi, I am Kalkidan B. "),(0,a._)("p",{class:"font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"}," A Software Developer "),(0,a._)("p",{class:"font-general-medium mt-2 text-sm sm:text-lg xl:text-xl text-center sm:text-left leading-none text-ternary-dark dark:text-primary-light"}," I often work in the development of mobile and web applications. I enjoy using Javascript. ")],-1),me={class:"w-full md:w-2/3 text-right float-right"},ge={key:0,src:le,alt:"Developer"},pe={key:1,src:de,alt:"Developer"};function he(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("section",ce,[ue,(0,a._)("div",me,["light"===i.theme?((0,a.wg)(),(0,a.iD)("img",ge)):((0,a.wg)(),(0,a.iD)("img",pe))])])}var be={name:"AppBanner",computed:{theme(){return this.$store.state.theme}},mounted(){d().replace()},updated(){d().replace()}};const fe=(0,S.Z)(be,[["render",he]]);var xe=fe,ve=n(55);const ye={class:"mx-auto"};function we(e,t,n,o,r,i){const s=(0,a.up)("AboutMe");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",ye,[(0,a.Wm)(s)])])}const ke={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},Be={class:"w-full sm:w-4/4 text-left"};function je(e,t,n,o,i,s){return(0,a.wg)(),(0,a.iD)("div",ke,[(0,a._)("div",Be,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.bios,(e=>((0,a.wg)(),(0,a.iD)("p",{key:e.id,class:"font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"},(0,r.zw)(e.bio),1)))),128))])])}var Ae={setup(){return{bios:[{id:1,bio:"A software developer with a never give-up attitude and always trying to learn new things. I have received comments from customers for quality work and on time delivery. Always takes part in innovative subjects. Have suggested a technical solution in the past to the customer and the company."},{id:2,bio:"My experience includes integrating new features into ongoing projects as well as maintaining and supporting these components. I'm a creative individual that aspires to develop my abilities.I make a good teammate since I can follow directions precisely while also being self- reliant and organized."}]}}};const Se=(0,S.Z)(Ae,[["render",je]]);var Te=Se,Ce={name:"About",components:{AboutMe:Te},data:()=>({}),mounted(){d().replace()},updated(){d().replace()},methods:{}};const De=(0,S.Z)(Ce,[["render",we]]);var Ne=De;const Le={key:0,class:"mt-10 sm:mt-20"},_e={class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"},Ie={class:"flex flex-wrap mt-10 sm:mt-14 gap-6 justify-center"};function Oe(e,t,n,o,i,s){const l=(0,a.up)("FrameWorkSingle");return e.techStack?((0,a.wg)(),(0,a.iD)("div",Le,[(0,a._)("p",_e,(0,r.zw)(e.techStack.frameWorksHeading),1),(0,a._)("div",Ie,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.techStack.frameWorks,(e=>((0,a.wg)(),(0,a.j4)(l,{key:e.id,client:e},null,8,["client"])))),128))])])):(0,a.kq)("",!0)}const ze=["src","alt"],We=(0,a._)("div",{id:"tooltip-text",role:"tooltip",class:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"}," Tooltip content ",-1);function He(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("img",{src:n.client.img,alt:n.client.title,class:"w-28 h-28 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg cursor-pointer dark:bg-secondary-light","data-tooltip-target":"tooltip-text"},null,8,ze),We])}var Ze={props:["client"]};const Je=(0,S.Z)(Ze,[["render",He]]);var Ee=Je;const Re={frameWorksHeading:"Tech Stack",frameWorks:[{id:1,title:"React",img:n(304),name:"React"},{id:2,title:"Next",img:n(109),name:"NextJs"},{id:3,title:"Vue",img:n(560),name:"VueJs"},{id:4,title:"Flutter",img:n(699),name:"Flutter"},{id:5,title:"Node",img:n(17),name:"Node"},{id:6,title:".Net",img:n(467),name:"Dot Net"},{id:7,title:"Knockout",img:n(247),name:"Knockout"}]};var Fe=Re,Me={components:{FrameWorkSingle:Ee},data:()=>({techStack:null}),mounted(){this.techStack=Fe}};const Ue=(0,S.Z)(Me,[["render",Oe]]);var Pe=Ue;const Ge={class:"pt-10 sm:pt-14"},qe={class:"text-center"},Xe={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},Ke=(0,a._)("img",{class:"w-full",src:"https://ghchart.rshah.org/kalbehayilu",alt:"Kal's git repo"},null,-1);function Ve(e,t,n,o,i,s){return(0,a.wg)(),(0,a.iD)("section",Ge,[(0,a._)("div",qe,[(0,a._)("p",Xe,(0,r.zw)(e.gitHeading),1)]),Ke])}var Qe={components:{},data:()=>({gitHeading:"Github Contributions"}),mounted(){}};const Ye=(0,S.Z)(Qe,[["render",Ve]]);var $e=Ye,et={name:"Home",components:{AppBanner:xe,BlogsGrid:ve.Z,About:Ne,AboutFrameWorks:Pe,GitRepo:$e}};const tt=(0,S.Z)(et,[["render",se]]);var nt=tt;const ot=[{path:"/",name:"Home",component:nt,meta:{title:"Kalkidan - Home"}},{path:"/blogs",name:"Blogs",component:()=>n.e(861).then(n.bind(n,535)),meta:{title:"Kalkidan - blogs"}},{path:"/blogs/:id",name:"Single Blog",component:()=>n.e(861).then(n.bind(n,456)),meta:{title:"Kalkidan - Single blog"}},{path:"/contact",name:"Contact",component:()=>n.e(861).then(n.bind(n,570)),meta:{title:"Kalkidan - Contact"}}],at=(0,oe.p7)({history:(0,oe.PO)("/"),routes:ot,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var rt=at;at.beforeEach(((e,t,n)=>{const o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),r=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(o?document.title=o.meta.title:r&&(document.title=r.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!a)return n();a.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((n=>{t.setAttribute(n,e[n])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),n()}));var it=n(617),st=n(896),lt=n(59),dt=n.n(lt),ct=n(637);const ut=(0,ct.MT)({state(){return{theme:localStorage.getItem("theme")}},mutations:{toggleTheme(e,t){e.theme=t}},actions:{changeTheme({commit:e},t){localStorage.setItem("theme",t),e("toggleTheme",t)}}});var mt=ut;const gt=n(508);gt.replace(),(0,o.ri)(ne).use(mt).use(rt).use(it.Z).use(st.Z).use(dt()).mount("#app");const pt=localStorage.getItem("theme");"dark"===pt&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},55:function(e,t,n){n.d(t,{Z:function(){return T}});var o=n(252),a=n(577);const r={class:"pt-10 sm:pt-14"},i={class:"text-center"},s={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},l={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function d(e,t,n,d,c,u){const m=(0,o.up)("BlogSingle");return(0,o.wg)(),(0,o.iD)("section",r,[(0,o._)("div",i,[(0,o._)("p",s,(0,a.zw)(e.blogsHeading),1)]),(0,o._)("div",l,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.filteredBlogs,(e=>((0,o.wg)(),(0,o.j4)(m,{key:e.id,blog:e},null,8,["blog"])))),128))])])}var c=n(508),u=n.n(c);const m={class:"h-80 overflow-hidden"},g=["src","alt"],p={class:"text-center px-4 py-6"},h={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-bold mb-2"},b={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"},f={class:"my-4 sm:mt-2 flex justify-center"};function x(e,t,n,r,i,s){const l=(0,o.up)("Button"),d=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(d,{to:`/blogs/${n.blog.id}`,class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Blog"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("div",m,[(0,o._)("img",{src:n.blog.img,alt:n.blog.title,class:"rounded-t-xl border-none object-cover h-full w-full object-left"},null,8,g)]),(0,o._)("div",p,[(0,o._)("p",h,(0,a.zw)(n.blog.title),1),(0,o._)("span",b,(0,a.zw)(n.blog.detail),1)])]),(0,o._)("div",f,[(0,o.Wm)(d,{to:`/blogs/${n.blog.id}`,class:"font-general-medium flex items-center px-3 py-2 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"Read More"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{title:"Read More"})])),_:1},8,["to"])])])),_:1},8,["to"])}var v=n(241),y={props:["blog"],components:{Button:v.Z}},w=n(744);const k=(0,w.Z)(y,[["render",x]]);var B=k,j=n(451),A={components:{BlogSingle:B},data:()=>({blogs:j.Z,blogsHeading:"Blogs",selectedCategory:"",searchBlog:""}),computed:{filteredBlogs(){return this.selectedCategory?this.filterBlogsByCategory():this.searchBlog?this.filterBlogsBySearch():this.blogs}},methods:{filterBlogsByCategory(){return this.blogs.filter((e=>{let t=e.category.charAt(0).toUpperCase()+e.category.slice(1);return console.log(t),t.includes(this.selectedCategory)}))},filterBlogsBySearch(){let e=new RegExp(this.searchBlog,"i");return this.blogs.filter((t=>t.title.match(e)))}},mounted(){u().replace()}};const S=(0,w.Z)(A,[["render",d]]);var T=S},241:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(252),a=n(577);function r(e,t,n,r,i,s){return(0,o.wg)(),(0,o.iD)("button",null,(0,a.zw)(n.title),1)}var i={props:["title"],data:()=>({})},s=n(744);const l=(0,s.Z)(i,[["render",r]]);var d=l},724:function(e,t,n){e.exports=n.p+"img/developer-dark.985d5065.svg"},278:function(e,t,n){e.exports=n.p+"img/developer-light.333c0e7d.svg"},467:function(e,t,n){e.exports=n.p+"img/.net.529fb9d8.svg"},699:function(e,t,n){e.exports=n.p+"img/flutter.b0ceed85.svg"},247:function(e,t,n){e.exports=n.p+"img/knockout.9c0f17af.svg"},17:function(e,t,n){e.exports=n.p+"img/node.615259d2.svg"},304:function(e,t,n){e.exports=n.p+"img/react.925b4fbb.svg"},560:function(e,t,n){e.exports=n.p+"img/vue.c1a17b11.svg"},260:function(e){e.exports="data:image/webp;base64,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"},879:function(e,t,n){e.exports=n.p+"img/big-number.3a0cc3bc.png"},158:function(e,t,n){e.exports=n.p+"img/profile.c6cb30e6.jpg"},109:function(e,t,n){e.exports=n.p+"img/nextjs.cae0b805.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/blogs.f7510003.js"}}(),function(){n.miniCssF=function(e){return"css/blogs.d8462150.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="kalkidans-portfolio:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var s,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(g);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return a();e(o,s,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={861:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],l=o[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var c=l(n)}for(t&&t(o);d<i.length;d++)r=i[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkkalkidans_portfolio"]=self["webpackChunkkalkidans_portfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(115)}));o=n.O(o)})();
//# sourceMappingURL=app.19f7cd49.js.map