(window.webpackJsonpconfusion=window.webpackJsonpconfusion||[]).push([[0],{32:function(e,t,a){e.exports=a(51)},37:function(e,t,a){},38:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(13),r=a.n(l),s=(a(37),a(5)),c=a(6),o=a(9),m=a(7),d=a(8),u=(a(38),a(2)),h=(n.Component,[{id:0,name:"Event1",image:"/assets/gallery/1.jpg",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Event12",image:"/assets/gallery/2.jpg",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Event3",image:"/assets/gallery/3.jpg",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"Event4",image:"/assets/gallery/4.jpg",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"},{id:4,name:"Event5",image:"/assets/gallery/5.jpg",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"},{id:5,name:"Event6",image:"/assets/gallery/6.jpeg",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"},{id:6,name:"Event7",image:"/assets/gallery/7.jpeg",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"},{id:7,name:"Event8",image:"/assets/gallery/8.jpg",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}]),g=a(4);function E(e){var t=e.dish;return i.a.createElement("div",{className:"col-12 col-md-5 m-1"},i.a.createElement(u.d,null,i.a.createElement(u.g,{top:!0,src:t.image,alt:t.name}),i.a.createElement(u.e,null,i.a.createElement(u.j,null,t.name),i.a.createElement(u.i,null,t.description))))}function p(e){var t=e.comments;return console.log("!!!!RenderComment!!!"),null!=t?(console.log("RenderComment!!!"),i.a.createElement("div",{className:"col-12 col-md-5 m-1"},i.a.createElement("h4",null,"Comments!!! "),i.a.createElement("ul",{className:"list-unstyled"},t.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("p",null,e.comment),i.a.createElement("p",null,"  ",e.author,"    ",e.date," "))}),";"))):(console.log("@@@@@RenderComment!!!"),i.a.createElement("div",null," "))}var f=function(e){return console.log("Render Component ....."),null!=e.dish?i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(u.a,null,i.a.createElement(u.b,null,i.a.createElement(g.b,{to:"/home"},"Home")),i.a.createElement(u.b,null,i.a.createElement(g.b,{to:"/menu"},"Menu")),i.a.createElement(u.b,{active:!0},e.dish.name)),i.a.createElement("div",{className:"col-12"},i.a.createElement("h2",null,e.dish.name))),i.a.createElement("div",{className:"row"},i.a.createElement(E,{dish:e.dish}),i.a.createElement(p,{comment:e.comments}))):i.a.createElement("div",null," ")};function v(e){var t=e.dish;e.onClick;return i.a.createElement(u.d,null,i.a.createElement(g.b,{to:"/menu/".concat(t.id)},i.a.createElement(u.g,{variant:"top",width:"100%",src:t.image,alt:t.name}),i.a.createElement(u.h,null,i.a.createElement(u.j,null,t.name))))}var b=function(e){var t=e.dishes.map(function(e){return i.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},i.a.createElement(v,{dish:e}))});return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h2",null,"Events")),i.a.createElement("div",{className:"col-12"},i.a.createElement(u.f,null,t))))},w=a(11),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isNavOpen:!1,isModalOpen:!1},a.toggleNav=a.toggleNav.bind(Object(w.a)(a)),a.toggleModal=a.toggleModal.bind(Object(w.a)(a)),a.handleLogin=a.handleLogin.bind(Object(w.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleModal",value:function(){alert("In"),this.setState({isModalOpen:!this.state.isModalOpen}),alert(this.state.isModalOpen),alert(this.innerRef)}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"handleLogin",value:function(e){alert("H"),this.toggleModal(),console.log(this.username.value),alert("Hi"),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.C,{dark:!0,expand:"md"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-4 "},i.a.createElement(u.E,{onClick:this.toggleNav}),i.a.createElement(u.D,{className:"mr-auto",href:"/"},i.a.createElement("img",{src:"/assets/images/logo.jpg",height:"30",width:"41",alt:"JMK"}),i.a.createElement("span",{className:"icon icon-bar"}," JMK "))),i.a.createElement("div",null,i.a.createElement(u.p,{isOpen:this.state.isNavOpen,navbar:!0},i.a.createElement(u.A,{className:"ml-auto",navbar:!0},i.a.createElement(u.B,null,i.a.createElement(g.c,{className:"nav-link",to:"/home"},i.a.createElement("span",{className:"fa fa-home fa-lg"},"  "),"Home")),i.a.createElement(u.B,null,i.a.createElement(g.c,{className:"nav-link",to:"/aboutus"},i.a.createElement("span",{className:"fa fa-info fa-lg"},"  "),"About us")),i.a.createElement(u.B,null,i.a.createElement(g.c,{className:"nav-link",to:"/menu"},i.a.createElement("span",{className:"fa fa-list fa-lg"},"  "),"Events")),i.a.createElement(u.B,null,i.a.createElement(g.c,{className:"nav-link",to:"/contactus"},i.a.createElement("span",{className:"fa fa-info fa-lg"},"  "),"Blog")),i.a.createElement(u.B,null,i.a.createElement(g.c,{className:"nav-link",to:"/contactus"},i.a.createElement("span",{className:"fa fa-address-card fa-lg"},"  "),"Contactus"))),i.a.createElement(u.A,{className:"ml-right",navbar:!0}))))),i.a.createElement(u.x,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},i.a.createElement(u.z,{toggle:this.toggleModal}," Login "),i.a.createElement(u.y,null,i.a.createElement(u.r,{onSubmit:this.handleLogin},i.a.createElement(u.t,null,i.a.createElement(u.v,{htmlfor:"username"}," Username "),i.a.createElement("input",{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),i.a.createElement(u.t,null,i.a.createElement(u.v,{htmlfor:"password"}," Password "),i.a.createElement("input",{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),i.a.createElement(u.t,{check:!0},i.a.createElement(u.v,{check:!0},i.a.createElement("input",{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),i.a.createElement(u.c,{type:"submit",value:"submit",className:"bg-primary"},"Login")))))}}]),t}(n.Component);var N=function(e){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},i.a.createElement("h5",null,"Links"),i.a.createElement("ul",{className:"list-unstyled"},i.a.createElement("li",null,i.a.createElement(g.b,{to:"/home"},"Home")),i.a.createElement("li",null,i.a.createElement(g.b,{to:"/aboutus"},"About")),i.a.createElement("li",null,i.a.createElement(g.b,{to:"/menu"},"Menu")),i.a.createElement("li",null,i.a.createElement("a",{href:"/contactus"},"Contact")))),i.a.createElement("div",{className:"col-7 col-sm-5"},i.a.createElement("h5",null,"Our Address"),i.a.createElement("address",null,"121, Clear Water Bay Road",i.a.createElement("br",null),"Clear Water Bay, Kowloon",i.a.createElement("br",null),"HONG KONG",i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +91 9896533683",i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +91 9896533683",i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",i.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),i.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},i.a.createElement("div",{className:"text-center"},i.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},i.a.createElement("i",{className:"fa fa-google-plus"})),i.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},i.a.createElement("i",{className:"fa fa-facebook"})),i.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},i.a.createElement("i",{className:"fa fa-linkedin"})),i.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},i.a.createElement("i",{className:"fa fa-twitter"})),i.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},i.a.createElement("i",{className:"fa fa-youtube"})),i.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},i.a.createElement("i",{className:"fa fa-envelope-o"}))))),i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"col-auto"},i.a.createElement("p",null,"\xa9 Copyright 2019 JMK")))))};function k(e){var t=e.leader;return console.log(t),i.a.createElement("div",{key:t.id,className:"col-12 mt-5"},i.a.createElement(u.d,{variant:"top",bg:"primary",color:"secondary",text:"white",style:{width:"16rem",height:"18rem"}},i.a.createElement(u.g,{variant:"top",src:t.image,alt:t.name,style:{width:"16rem",height:"10rem"}}),i.a.createElement(u.e,null,i.a.createElement(u.i,null,i.a.createElement("b",null,t.name)),i.a.createElement(u.i,null,i.a.createElement("b",null,t.designation)),i.a.createElement(u.i,null,i.a.createElement("b",null,t.mobile)))))}var I=function(e){console.log(e);var t=e.leaders.map(function(e){return i.a.createElement("div",null,i.a.createElement(k,{leader:e}))});return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"}),i.a.createElement("div",{className:"row row-content"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h3",null,"About Us"),i.a.createElement("hr",null)),i.a.createElement("div",{className:"col-12 "},i.a.createElement("h2",null,"Our History"),i.a.createElement("p",null,"JMK Sarv Jeev Kalyan Sanstha, working in the field of Health & sustainable development since April, 2016. Since its inception, JMK Sarv Jeev Kalyan, Sanstha has effectively launched & completed several development projects in Kurukshetra, Haryana  slums. In principle, we strive for sustainable development through primary health care, Adult Literacy including legal literacy, diversified agriculture, gender empowerment and community participation. Besides implementing various activities directly by the organization."),i.a.createElement("h6",null," Date of Operation: January 2016"),i.a.createElement("h6",null,"Date of Registration : 20th April 2016"),i.a.createElement("h4",null," Registration No."),i.a.createElement("p",null,"  ",i.a.createElement(u.G,{striped:!0,bordered:!0,hover:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"State Code"),i.a.createElement("th",null,"District Code"),i.a.createElement("th",null,"Year of Registration"),i.a.createElement("th",null,"Registration Number"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"H R "),i.a.createElement("td",null," 4 "),i.a.createElement("td",null,"2 0 1 6 "),i.a.createElement("td",null,"0 1 1 1 1"))))),i.a.createElement("span",null," \xa0 ")),i.a.createElement("div",{className:"col-12"},i.a.createElement(u.d,null,i.a.createElement(u.e,null,i.a.createElement("h4",null," Legal :"),i.a.createElement(u.i,null,"  ",i.a.createElement("b",null,"Society Registered under Department of Industries & Commerce, Haryana. Certificate of Registration to be issued under Section 9(1) of the Haryana Registration and Regulation of Societies Act, 2012")))),i.a.createElement("span",null," \xa0 ")),i.a.createElement("div",{className:"col-12"},i.a.createElement(u.d,null,i.a.createElement(u.e,null,i.a.createElement("h4",null," Mission :"),i.a.createElement(u.i,null,"   Enhance capacity and confidence of poor and disadvantaged people to have access on essential services, particularly women and children of weaker section of the society with comprehensive health care services and sustainable development interventions with the help of all the stakeholders in the field of health and development. Our mission is reaching un-reached people with right message, right service at the right time."))),i.a.createElement("span",null," \xa0 ")),i.a.createElement("div",{className:"col-12"},i.a.createElement(u.d,null,i.a.createElement(u.e,null,i.a.createElement("h4",null," Objectives: :"),i.a.createElement(u.i,null,"   It maintains a very high standard in its working and the projects it takes up.  Each of its staff is dedicated to serve the needy and involve with great commitment as they consider this noble cause next to loving & serving God. "),i.a.createElement(u.i,null," The registered Office and Head Quarter of JMK Sarv Jeev Kalyan Sanstha  is located in the city of Kurukshetra, Haryana and is setting an example for other NGOs to follow its remarkablestreak of devoted and uninterrupted service to humanity. "))),i.a.createElement("span",null," \xa0 "))),i.a.createElement("div",{className:"row row-content"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h2",null,"OUR LEADERS")),i.a.createElement("div",{className:"col-12"},i.a.createElement(u.f,null,t))))},C=a(18);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(C.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleBlur=function(e){return function(t){a.setState({touched:j({},a.state.touched,Object(C.a)({},e,!0))})}},a.state={firstname:"",lastname:"",telnum:"",email:" ",agree:!1,contactType:"Tel.",message:" ",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},a.handleSubmit=a.handleSubmit.bind(Object(w.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(w.a)(a)),a.handleBlur=a.handleBlur.bind(Object(w.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(C.a)({},n,a))}},{key:"handleSubmit",value:function(e){console.log("Current State is "+JSON.stringify(this.state)),alert("Current State is "+JSON.stringify(this.state)),e.preventDefault()}},{key:"validate",value:function(e,t,a,n){var i={firstname:"",lastname:"",telnum:"",email:""};this.state.touched.firstname&&e.length<3?i.firstname="First name Shoule be >=3 char":this.state.touched.firstname&&e.length>10?i.firstname="First name Shoule be <=10 char":this.state.touched.lastname&&t.length<3?i.firstname="Last name Shoule be >=3 char":this.state.touched.lastname&&t.length>10&&(i.firstname="Last name Shoule be <=10 char");return this.state.touched.telnum&&!/^\d+$/.test(a)&&(i.telnum="Tel. Number should contaion omlu number"),this.state.touched.email&&1!==n.split("").filter(function(e){return"@"===e}).length&&(i.email="Email sholud contains a @"),i}},{key:"render",value:function(){var e=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h2",null,"Contact US")),i.a.createElement("div",{className:"row row-content"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h3",null,"Location Information")),i.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},i.a.createElement("h5",null,"Our Address"),i.a.createElement("address",null,"121, Clear Water Bay Road",i.a.createElement("br",null),"Clear Water Bay, Kowloon",i.a.createElement("br",null),"HONG KONG",i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-phone"}),": +91 9896533683",i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-phone"}),": +91 8765 4321",i.a.createElement("br",null),i.a.createElement("i",{className:"fa fa-envelope"}),": ",i.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),i.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},i.a.createElement("h5",null,"Map of our Location")),i.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},i.a.createElement("div",{className:"btn-group",role:"group"},i.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},i.a.createElement("i",{className:"fa fa-phone"})," Call"),i.a.createElement("a",{role:"button",className:"btn btn-info"},i.a.createElement("i",{className:"fa fa-skype"})," Skype"),i.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},i.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),i.a.createElement("div",{className:"row row-content"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h3",null," Send Us your feedback")),i.a.createElement("div",{className:"col-12 col-md-9"},i.a.createElement(u.r,{onSubmit:this.handleSubmit},i.a.createElement(u.t,{row:!0},i.a.createElement(u.v,{htmlFor:"firstname",md:2},"First Name"),i.a.createElement(u.o,{md:10},i.a.createElement(u.u,{typr:"text",id:"firstname",name:"firstname",placeholder:"First Name",value:this.state.firstname,valid:""===e.firstname,invalid:""!==e.firstname,onBlur:this.handleBlur("firstname"),onChange:this.handleInputChange}),i.a.createElement(u.s,null,e.firstname))),i.a.createElement(u.t,{row:!0},i.a.createElement(u.v,{htmlFor:"lastname",md:2},"Last Name"),i.a.createElement(u.o,{md:10},i.a.createElement(u.u,{type:"text",id:"lastname",name:"lastname",placeholder:"Last Name",value:this.state.lastname,valid:""===e.lastname,invalid:""!==e.lastname,onBlur:this.handleBlur("lastname"),onChange:this.handleInputChange}),i.a.createElement(u.s,null,e.lastname))),i.a.createElement(u.t,{row:!0},i.a.createElement(u.v,{htmlFor:"telnum",md:2},"Contact Tel."),i.a.createElement(u.o,{md:10},i.a.createElement(u.u,{type:"tel",id:"telnum",name:"telnum",placeholder:"Telnum",value:this.state.telnum,valid:""===e.telnum,invalid:""!==e.telnum,onBlur:this.handleBlur("telnum"),onChange:this.handleInputChange}),i.a.createElement(u.s,null,e.telnum))),i.a.createElement(u.t,{row:!0},i.a.createElement(u.v,{htmlFor:"email",md:2},"Email"),i.a.createElement(u.o,{md:10},i.a.createElement(u.u,{type:"email",id:"email",name:"email",placeholder:"Email",value:this.state.email,valid:""===e.email,invalid:""!==e.email,onBlur:this.handleBlur("email"),onChange:this.handleInputChange}),i.a.createElement(u.s,null,e.email))),i.a.createElement(u.t,{row:!0},i.a.createElement(u.o,{md:{size:6,offset:2}},i.a.createElement(u.t,{check:!0},i.a.createElement(u.v,{check:!0},i.a.createElement("input",{type:"checkbox",name:"agree",checked:this.state.agree,onChange:this.handleInputChange})," ",i.a.createElement("strong",null," May we Contact You?   ")))),i.a.createElement(u.o,{md:{size:3,offset:1}},i.a.createElement(u.u,{type:"select",name:"contactType",value:this.state.contactType,onChange:this.handleInputChange},i.a.createElement("option",null,"Tel. "),i.a.createElement("option",null,"Email ")))),i.a.createElement(u.t,{row:!0},i.a.createElement(u.v,{htmlFor:"feedback",md:2},"Feedback"),i.a.createElement(u.o,{md:10},i.a.createElement(u.u,{type:"textarea",id:"message",name:"message",rows:"12",value:this.state.feedback,onChange:this.handleInputChange}))),i.a.createElement(u.t,{row:!0},i.a.createElement(u.o,{md:{size:10,offset:2}},i.a.createElement(u.c,{type:"submit",color:"primary"}," Send Feedback")))))))}}]),t}(n.Component);function x(e){var t=e.item;return i.a.createElement(u.q,null,i.a.createElement(u.F,null,i.a.createElement(u.d,{body:!0,inverse:!0,style:{backgroundColor:"#333",borderColor:"#333"}},i.a.createElement(u.g,{src:"/assets/images/index.jpg",alt:t.name}),i.a.createElement(u.h,{color:"danger"},i.a.createElement(u.j,{color:"danger",size:"100"},i.a.createElement("span",null,i.a.createElement("b",null,"JMK Sarv Jeev Kalyan Sanstha, working in the field of Health & sustainable development since April, 2016.  ")," ")),i.a.createElement(u.e,null,i.a.createElement(u.c,{color:"danger",href:"/contactus"},"JOIN US"))))))}var M=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-start"},i.a.createElement("div",{className:"col-12 col-md m-1"},i.a.createElement(x,{item:e.dish}),i.a.createElement("hr",null))),i.a.createElement("div",{className:"col-12 col-md m-1"},i.a.createElement(I,{leaders:e.leader}),i.a.createElement(b,{dishes:e.dish}),i.a.createElement(S,null)))},A=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],T=[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],z=[{id:0,name:"Sh. Dharam Pal Singh",mobile:"9896533683",image:"/ReactDemo/assets/images/1.jpg",designation:"President & Founder",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Sh. Keshav Nand",mobile:"9416840437",image:"/assets/images/1.jpg",designation:"Cashier",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Sh. Vinod Singh Rawat",mobile:"9254545400",image:"/assets/images/1.jpg",designation:"General Secretary",abbr:"CTO",featured:!0,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Sh. Jasbir Singh",mobile:"9416233012",image:"/assets/images/1.jpg",designation:"Secretary",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"},{id:4,name:"Sh. Main Pal",mobile:"9812685577",image:"/assets/images/1.jpg",designation:"Co-Secretary",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"},{id:5,name:"Sh. Vipin Sharma",mobile:"9812134743",image:"/assets/images/1.jpg",designation:"Press Secretary",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"},{id:6,name:"Sh. Parveen",mobile:"8685994400",image:"/assets/images/1.jpg",designation:"Active Member",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"},{id:7,name:"Sh. Mukesh Deswal",mobile:"9729756756",image:"/assets/images/1.jpg",designation:"Active Member",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"},{id:8,name:"Sh. Abhishek",mobile:"9541528021",image:"/assets/images/1.jpg",designation:"Active Member",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"},{id:9,name:"Sh. Surjeet Singh",mobile:"9896091610",image:"/assets/images/1.jpg",designation:"Active Member",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"},{id:10,name:"Sh. Rahul Rawat",mobile:"9802654814",image:"/assets/images/1.jpg",designation:"Active Member",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"},{id:11,name:"Sh. Ganesh Singh",mobile:"9416177662",image:"/assets/images/1.jpg",designation:"Active Member",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={dishes:h,comments:A,promotions:T,leaders:z},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(y,null),i.a.createElement(g.f,null,i.a.createElement(g.e,{path:"/home",component:function(){return i.a.createElement(M,{dish:e.state.dishes.filter(function(e){return e.featured}),promotion:e.state.promotions.filter(function(e){return e.featured})[0],leader:e.state.leaders.filter(function(e){return e.featured})})}}),i.a.createElement(g.e,{exact:!0,path:"/menu",component:function(){return i.a.createElement(b,{dishes:e.state.dishes})}}),i.a.createElement(g.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return console.log("!!!!Inside DishWithId"),i.a.createElement(f,{dish:e.state.dishes.filter(function(e){return e.id===parseInt(a.params.dishId,10)})[0],comments:e.state.comments.filter(function(e){return e.dishId===parseInt(a.params.dishId,10)})})}}),i.a.createElement(g.e,{exact:!0,path:"/contactus",component:S}),i.a.createElement(g.e,{exact:!0,path:"/aboutus",component:function(){return i.a.createElement(I,{leaders:e.state.leaders})}}),i.a.createElement(g.e,{path:"/aboutus/:leaderId",component:function(t){var a=t.match;return i.a.createElement(I,{leader:e.state.leaders.filter(function(e){return e.id===parseInt(a.params.leaderId,4)})})}}),i.a.createElement(g.d,{to:"/home"}),i.a.createElement(I,{leaders:this.state.leaders})),i.a.createElement(N,null))}}]),t}(n.Component),H=(n.Component,n.Component,[{id:0,name:"Album",image:"/assets/travelimages/1.png",category:"mains",label:"Hot",price:"4.99",featured:!0,color:"primary",description:"A unique combination of Indian Album  and Italian pics, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia , Guntur and Buffalo picture."},{id:1,name:"Collarge",image:"/assets/travelimages/2.png",category:"appetizer",label:"",price:"1.99",featured:!1,color:"danger",description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/travelimages/2.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"}]),P=(n.Component,[{src:"/assets/travelimages/1.png",altText:"Slide 1",caption:"Slide 1"},{src:"/assets/travelimages/2.png",altText:"Slide 2",caption:"Slide 2"},{src:"/assets/travelimages/2.png",altText:"Slide 3",caption:"Slide 3"}]),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(w.a)(a)),a.previous=a.previous.bind(Object(w.a)(a)),a.goToIndex=a.goToIndex.bind(Object(w.a)(a)),a.onExiting=a.onExiting.bind(Object(w.a)(a)),a.onExited=a.onExited.bind(Object(w.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===P.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?P.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=P.map(function(t){return i.a.createElement(u.n,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},i.a.createElement(u.g,{width:"10%",src:t.src,alt:t.altText,size:"2*5"}))});return i.a.createElement(u.k,{activeIndex:t,next:this.next,previous:this.previous},i.a.createElement(u.m,{items:P,activeIndex:t,onClickHandler:this.goToIndex}),a,i.a.createElement(u.l,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),i.a.createElement(u.l,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(n.Component);function B(e){var t=e.leader;return console.log(t),i.a.createElement("div",null,i.a.createElement(u.q,null,i.a.createElement(u.d,{body:!0,inverse:!0,color:t.color},i.a.createElement(g.b,{to:"/contactus"},i.a.createElement(u.F,null,i.a.createElement(u.o,{sm:"7"},i.a.createElement(u.F,null,i.a.createElement(u.e,{body:!0},i.a.createElement("h2",null,t.name),i.a.createElement(u.i,{left:!0},t.designation),i.a.createElement("p",null,t.description))),i.a.createElement(u.F,null)),i.a.createElement(u.o,{sm:"5"},i.a.createElement(u.q,null,i.a.createElement(u.e,{body:!0},i.a.createElement(F,null))))),i.a.createElement(u.q,null,i.a.createElement(u.F,null,i.a.createElement(u.o,{sm:"1"},i.a.createElement(u.c,{color:"danger",onClick:i.a.createElement(F,null)},"View")),i.a.createElement(u.o,{sm:"1"},i.a.createElement(u.c,{color:"secondary"},"watch")),i.a.createElement(u.o,{sm:"1"},i.a.createElement(u.c,{color:"danger"},"count"))))))),i.a.createElement("div",null,i.a.createElement("span",null," \xa0  "),i.a.createElement("span",null," \xa0  "),i.a.createElement("span",null," \xa0  ")))}var J=function(e){console.log(e);var t=e.dishes.map(function(e){return i.a.createElement("div",null,i.a.createElement(B,{leader:e})," ","  ")});return console.log(e.dishes[0].name),i.a.createElement("div",{className:"col-12"},i.a.createElement(u.w,{list:!0},t))},Z=(n.Component,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={dish:H,leaders:z},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(g.a,null,i.a.createElement("div",null,i.a.createElement(R,null)))}}]),t}(n.Component));a(48),a(49),a(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.f7502a7a.chunk.js.map