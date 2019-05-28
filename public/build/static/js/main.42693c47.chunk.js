(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,a,t){e.exports=t(74)},42:function(e,a,t){},43:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(33),s=t.n(r),c=(t(42),t(16)),i=(t(43),t(26),t(6)),m=t(7),o=t(10),u=t(12),d=t(11),p=t(13),h=t(4),f=t.n(h),g=function e(){var a=this;Object(m.a)(this,e),this.service=f.a.create({baseURL:"".concat("http://http://165.22.194.16:5000/api"),withCredentials:!0}),this.signup=function(e,t){return a.service.post("/signup",{username:e,password:t}).then(function(e){return e.data})},this.login=function(e,t){return a.service.post("/login",{username:e,password:t}).then(function(e){return e.data})},this.logout=function(){return a.service.post("/logout").then(function(e){return e.data})},this.updateUser=function(e){return a.service.put("/user/".concat(e.id),{user:e}).then(function(e){return e.data})},this.groceryItems=function(){return a.service.get("/groceryitems").then(function(e){return e.data})},this.foodRequest=function(e){return a.service.post("/foodrequest",e).then(function(e){return e.data})}},E=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={username:"",password:"",error:""},t.service=new g,t.handleChange=function(e){return t.setState(Object(i.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.service.signup(t.state.username,t.state.password).then(function(e){t.setState({username:"",password:""}),t.props.logIn({loggedIn:!0,user:e}),t.props.history.push("/profile")}).catch(function(e){var a=e.response?e.response.data.message:"";t.setState({username:"",password:"",error:a||"invalid credentials"}),console.log(e)})},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit,style:{width:"50%",margin:"auto auto"}},l.a.createElement("h2",null,this.state.error),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input is-success",type:"email",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleChange}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-user"})),l.a.createElement("span",{className:"icon is-small is-right"},l.a.createElement("i",{className:"fas fa-check"})))),l.a.createElement("div",{className:"field"},l.a.createElement("input",{className:"input",type:"password",name:"password",minLength:8,value:this.state.password,onChange:this.handleChange,placeholder:"Password:"})),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"button is-link",type:"submit",value:"Sign Up!"}))),l.a.createElement("br",null))}}]),a}(n.Component),v=function(e){return l.a.createElement("div",{style:{margin:"0 auto",display:"flex",width:"100%",justifyContent:"",alignItems:"center"},id:"home-container"},l.a.createElement("div",{className:"container home-item"},l.a.createElement("img",{src:"/fridgehome.png",alt:"",style:{width:"65%"}})),l.a.createElement("div",{style:{width:"100%"}},e.loggedIn?l.a.createElement("div",{className:"home-item"},l.a.createElement("h1",{className:"is-size-1",style:{marginBottom:"20px"}},"Open fridge"),l.a.createElement("h2",null,"Keep it cool!")):l.a.createElement("div",{className:"home-item",style:{width:"100%"}},l.a.createElement("h1",{className:"is-size-1",style:{marginBottom:"20px"}},"Open fridge"),l.a.createElement(E,e))))},N=t(2),b=function(e){var a=new g,t=l.a.createRef(),n=l.a.createRef(),r=function(){return a.logout().then(function(a){e.logOut({loggedIn:!1,user:{}}),e.history.push("/")})},s=function(){t.current.classList.toggle("is-active"),n.current.classList.toggle("is-active")};return l.a.createElement("div",{className:"hero-head"},e.loggedIn?l.a.createElement(function(e){return l.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(N.a,{className:"navbar-item",to:"/about"},l.a.createElement("h1",{style:{fontFamily:"Orbitron, sans-serif"}},"Open Fridge")),l.a.createElement("div",{ref:t,id:"hamburgericon",role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:s},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{ref:n,id:"navbarBasicExample",className:"navbar-menu"},l.a.createElement("div",{className:"navbar-start"},l.a.createElement(N.b,{className:"navbar-item",to:"/",activeClassName:"selected"},"Home"),l.a.createElement(N.a,{className:"navbar-item",to:"/profile"},"Profile"),e.user&&e.user.foodConsumer?l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{className:"navbar-item",to:"/foodoffers"},"Food offers"),l.a.createElement(N.a,{className:"navbar-item",to:"/requestfood"},"Request food")):l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{className:"navbar-item",to:"/foodrequests"},"Food requests"),l.a.createElement(N.a,{className:"navbar-item",to:"/offerfood"},"Offer food"))),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("div",{className:"buttons"},l.a.createElement("div",{onClick:function(){return r()},className:"button is-light"},"Log out"))))))},e):l.a.createElement(function(e){return l.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(N.a,{className:"navbar-item",to:"/about"},l.a.createElement("h1",{style:{fontFamily:"Orbitron, sans-serif"}},"Open Fridge")),l.a.createElement("div",{ref:t,id:"hamburgericon",role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:s},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{ref:n,id:"navbarBasicExample",className:"navbar-menu"},l.a.createElement("div",{className:"navbar-start"},l.a.createElement(N.b,{className:"navbar-item",to:"/",activeClassName:"selected"},"Home")),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("div",{className:"buttons"},l.a.createElement(N.a,{className:"button is-primary",to:"/signup"},"SignUp"),l.a.createElement(N.a,{className:"button is-light",to:"/login"},"SignIn"))))))},e))},y=t(14),w=t(18),C=t(15),O=t.n(C),S=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).form=l.a.createRef(),t.state=Object(w.a)({userType:""},t.props.user,{foodRequests:[],foodOffers:[]}),t.service=new g,t.componentDidMount=function(){f()({method:"get",withCredentials:"true",url:"".concat("http://http://165.22.194.16:5000/api","/foodrequests/")}).then(function(e){var a=e.data.filter(function(e){return e.foodConsumer._id===t.props.user._id});t.setState({foodRequests:a})}),f()({method:"get",withCredentials:"true",url:"".concat("http://http://165.22.194.16:5000/api","/foodoffers/")}).then(function(e){var a=e.data.filter(function(e){return e.foodSupplier._id===t.props.user._id});t.setState({foodOffers:a})})},t.handleChange=function(e){return t.setState(Object(i.a)({},e.target.name,e.target.value))},t.picPreview=function(e){document.getElementById("output").src=URL.createObjectURL(e.target.files[0])},t.handleSubmit=function(e){e.preventDefault();var a=new FormData(t.form.current);f()({method:"put",url:"".concat("http://http://165.22.194.16:5000/api","/user/").concat(t.props.user._id),config:{headers:{"Content-Type":"multipart/form-data"}},data:a,withCredentials:!0}).then(function(e){t.props.logIn({loggedIn:!0,user:e.data.response}),e.data.response.foodSupplier?t.props.history.push("/offerfood/".concat(t.props.user._id)):t.props.history.push("/requestfood/".concat(t.props.user._id))}).catch(function(e){t.setState({err:e.message,success:""})})},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.user&&this.props.user.foodConsumer?this.state.foodRequests:this.state.foodOffers;return l.a.createElement("div",{className:"columns",style:{margin:"0"}},l.a.createElement("form",{ref:this.form,className:"column is-one-third",style:{padding:"5%",textAlign:"center"},onSubmit:this.handleSubmit},this.state.img&&l.a.createElement("div",{className:"container",style:{maxWidth:"100%",padding:"20px"}},l.a.createElement("figure",{className:"image is-128x128",style:{margin:"auto auto",overflow:"hidden"}},l.a.createElement("img",{id:"output",src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(this.state.img),alt:"profile pic"}))),l.a.createElement("h2",null,this.state.error),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Username"),l.a.createElement("div",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input is-success",type:"email",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleChange}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-user"})),l.a.createElement("span",{className:"icon is-small is-right"},l.a.createElement("i",{className:"fas fa-check"})))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"First name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",name:"firstName",value:this.state.firstName,onChange:this.handleChange,placeholder:"First name"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Last name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",name:"lastName",value:this.state.lastName,onChange:this.handleChange,placeholder:"last name"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Address"),l.a.createElement("input",{className:"input",type:"text",name:"address",value:this.state.address,onChange:this.handleChange,placeholder:"address"})),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"file",style:{display:"flex",flexDirection:"column"}},l.a.createElement("label",{className:"label",htmlFor:"profile-picture"},"Profile picture"),l.a.createElement("input",{className:"file-input",type:"file",name:"profile-picture",id:"profile-picture",onChange:this.picPreview}),l.a.createElement("span",{className:"file-cta"},l.a.createElement("span",{className:"file-icon"},l.a.createElement("i",{className:"fas fa-upload"})),l.a.createElement("span",{className:"file-label"},"Choose a file\u2026")))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{id:"foodsupplier",type:"radio",name:"userType",value:"foodSupplier",required:!0,checked:"foodSupplier"===this.state.userType||!0===this.state.foodSupplier,onChange:this.handleChange}),"Foodsupplier"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{id:"foodconsumer",type:"radio",name:"userType",value:"foodConsumer",checked:"foodConsumer"===this.state.userType||!0===this.state.foodConsumer,onChange:this.handleChange}),"Foodconsumer"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"button is-link",type:"submit",value:"Submit"})))),l.a.createElement("div",{className:"column is-two-third is-8",style:{padding:"5%",textAlign:"center"}},l.a.createElement("h1",{className:"is-size-2",style:{width:"60%"}},"The food I ",this.state.foodConsumer?"requested":"offered"),l.a.createElement("br",null),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Item"),l.a.createElement("th",null,"Desciption"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Food hero"),l.a.createElement("th",null,this.state.foodConsumer?"Offered":"Accepted"))),l.a.createElement("tbody",null,this.state.foodRequests&&e.length>0&&e.map(function(e,a){return l.a.createElement("tr",{key:"tr-".concat(a)},l.a.createElement("td",null,e.groceryItem.name),l.a.createElement("td",null," ",e.description),l.a.createElement("td",null,e.amount),e.acceptedBy&&l.a.createElement("td",null,e.acceptedBy.firstName),e.acceptedAt&&l.a.createElement("td",null,O()(e.acceptedAt).toNow(!0)," ago"))})))))}}]),a}(n.Component),x=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={username:"",password:"",error:""},t.service=new g,t.handleChange=function(e){return t.setState(Object(i.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.service.login(t.state.username,t.state.password).then(function(e){t.setState({username:"",password:""}),t.props.logIn({loggedIn:!0,user:e}),t.props.history.push("/profile")}).catch(function(e){t.setState({username:"",password:""}),console.log(e)})},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit,style:{width:"50%",margin:"auto auto"}},l.a.createElement("h2",null,this.state.error),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input is-success",type:"email",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleChange}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-user"})),l.a.createElement("span",{className:"icon is-small is-right"},l.a.createElement("i",{className:"fas fa-check"})))),l.a.createElement("div",{className:"field"},l.a.createElement("input",{className:"input",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password:"})),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"button is-link",type:"submit",value:"Sign in!"}))),l.a.createElement("br",null))}}]),a}(n.Component),I=t(36),j=function(e){var a=e.component,t=e.user,n=e.loggedIn,r=e.logIn,s=Object(I.a)(e,["component","user","loggedIn","logIn"]);return l.a.createElement(y.b,Object.assign({},s,{render:function(e){return n?l.a.createElement(a,Object.assign({},e,{user:t,loggedIn:n,logIn:r})):l.a.createElement(y.a,{to:"/login"})}}))},k=t(3),D=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).form=l.a.createRef(),t.state={description:"",expiryDate:(new Date).toLocaleDateString("fr-CA"),amount:""},t.service=new g,t.handleChange=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.componentDidMount=function(){t.service.groceryItems().then(function(e){t.setState({groceryOptions:e,groceryItem:e[0]._id})})},t.handleSubmit=function(e){e.preventDefault();var a=new FormData(t.form.current);f()({method:"post",url:"".concat("http://http://165.22.194.16:5000/api","/foodoffer"),config:{headers:{"Content-Type":"multipart/form-data"}},data:a,withCredentials:!0}).then(function(e){t.setState({success:e.data.message,img:e.data.img,err:""}),t.props.history.push("/foodoffers/".concat(t.props.user._id))}).catch(function(e){t.setState({err:e.message})})},t.imageDivStyle={width:"70%",margin:"auto auto"},t.imageStyle={width:"30%"},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.groceryOptions&&this.state.groceryOptions.map(function(e){return l.a.createElement("option",{key:e._id,value:e._id,id:e._id},e.name)}),a={};if(this.state.groceryOptions){var t=!0,n=!1,r=void 0;try{for(var s,c=this.state.groceryOptions[Symbol.iterator]();!(t=(s=c.next()).done);t=!0){var i=s.value;a[i._id]=i.defaultImg}}catch(m){n=!0,r=m}finally{try{t||null==c.return||c.return()}finally{if(n)throw r}}}return l.a.createElement("div",{className:"columns",style:{margin:"0"}},l.a.createElement("form",{className:"column is-one-third",style:{padding:"5%",textAlign:"left"},ref:this.form,onSubmit:this.handleSubmit},l.a.createElement("h1",{className:"is-size-4"},"What do you have to offer!?"),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Description:"),l.a.createElement("input",{className:"input",type:"text",name:"description",value:this.state.description,onChange:this.handleChange})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"groceryitem"},"Grocery item"),l.a.createElement("div",{className:"select"},l.a.createElement("select",{name:"groceryItem",onChange:this.handleChange},e))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Amount"),l.a.createElement("input",{className:"input",type:"number",name:"amount",onChange:this.handleChange,value:this.state.amount})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"expiryDate"},"Expiry Date"),l.a.createElement("input",{className:"input",type:"date",name:"expiryDate",required:!0,onChange:this.handleChange,value:this.state.expiryDate})),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"file",style:{display:"flex",flexDirection:"column"}},l.a.createElement("label",{className:"label",htmlFor:"groceryitem-picture"},"Grocery image"),l.a.createElement("input",{className:"file-input",type:"file",name:"groceryitem-picture",id:"groceryitem-picture"}),l.a.createElement("span",{className:"file-cta"},l.a.createElement("span",{className:"file-icon"},l.a.createElement("i",{className:"fas fa-upload"})),l.a.createElement("span",{className:"file-label"},"Choose a file\u2026")))),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"button is-link",type:"submit",value:"Offer The food"})))),l.a.createElement("div",{style:this.imageDivStyle,className:"column is-one-third"},this.state.groceryOptions&&l.a.createElement("img",{style:this.imageStyle,src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(this.state.img?this.state.img:a[this.state.groceryItem]),alt:"selectedgroceryitem"})))}}]),a}(n.Component),q=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={form:{amount:"",description:""}},t.service=new g,t.handleChange=function(e){t.setState({form:Object(w.a)({},t.state.form,Object(i.a)({},e.target.name,e.target.value))})},t.componentDidMount=function(){t.service.groceryItems().then(function(e){t.setState({groceryOptions:e,form:Object(w.a)({},t.state.form,{groceryItem:e[0]._id})})})},t.handleSubmit=function(e){e.preventDefault(),t.service.foodRequest(t.state.form).then(function(e){t.setState({err:""}),t.props.history.push("/foodrequests/".concat(t.props.user._id))}).catch(function(e){t.setState({err:e.message})})},t.imageDivStyle={width:"70%",margin:"auto auto"},t.imageStyle={width:"30%"},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.groceryOptions&&this.state.groceryOptions.map(function(e){return l.a.createElement("option",{key:e._id,value:e._id,id:e._id},e.name)}),a={};if(this.state.groceryOptions){var t=!0,n=!1,r=void 0;try{for(var s,c=this.state.groceryOptions[Symbol.iterator]();!(t=(s=c.next()).done);t=!0){var i=s.value;a[i._id]=i.defaultImg}}catch(m){n=!0,r=m}finally{try{t||null==c.return||c.return()}finally{if(n)throw r}}}return l.a.createElement("div",{className:"columns",style:{margin:"0"}},l.a.createElement("form",{className:"column is-one-third",style:{padding:"5%",textAlign:"left"},onSubmit:this.handleSubmit},l.a.createElement("h2",null,this.state.err),l.a.createElement("h1",{className:"is-size-4"},"Request Food you hungry human!"),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Description:"),l.a.createElement("input",{className:"input",type:"text",name:"description",value:this.state.description,onChange:this.handleChange})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"groceryitem"},"Grocery item"),l.a.createElement("div",{className:"select"},l.a.createElement("select",{name:"groceryItem",onChange:this.handleChange},e))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Amount"),l.a.createElement("input",{className:"input",type:"number",name:"amount",onChange:this.handleChange,value:this.state.amount})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"button is-link",type:"submit",value:"Request the food"})))),l.a.createElement("div",{style:this.imageDivStyle,className:"column is-one-third"},this.state.groceryOptions&&l.a.createElement("img",{style:this.imageStyle,src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(a[this.state.form.groceryItem]),alt:"selectedgroceryitem"})))}}]),a}(n.Component),A=function(e){var a=Object(n.useState)([]),t=Object(c.a)(a,2),r=t[0],s=t[1];Object(n.useEffect)(function(){f()({method:"get",withCredentials:"true",url:"".concat("http://http://165.22.194.16:5000/api","/foodoffers")}).then(function(e){s(e.data)})},[]);var i=function(e,a){document.getElementById("modal-card-".concat(a)).classList.toggle("is-active")},m={height:"100%"};return l.a.createElement("div",null,l.a.createElement("section",{className:"section cards"},l.a.createElement("div",{className:"columns is-multiline"},r&&r.map(function(a,t){return l.a.createElement("div",{className:"column is-one-quarter",key:a._id},l.a.createElement("div",{className:"card has-background-light",style:m},l.a.createElement("div",{className:"card-image",style:{width:"80%",margin:"25px",padding:"25px"}},l.a.createElement("figure",{className:"image is-square"},l.a.createElement("img",{src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(a.img?a.img:a.groceryItem.defaultImg),alt:"foodoffer"}))),l.a.createElement("div",{className:"card-content has-text-grey-dark"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-48x48"},l.a.createElement("img",{src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(a.foodSupplier.img&&a.foodSupplier.img),alt:"foodsupplier"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("p",{className:"title is-4 has-text-black-ter"},a.foodSupplier.firstName),l.a.createElement("p",{className:"subtitle is-6 has-text-black-ter"},a.foodSupplier.lastName))),l.a.createElement("div",{className:"content"},l.a.createElement("div",null,a.description),l.a.createElement("br",null),l.a.createElement("div",null,"Offered:"," ",O()(a.createdAt).format("DD-MM-YY")),l.a.createElement("div",null,a.expiryDate&&"Will expire in: "+O()(a.expiryDate).toNow(!0)))),l.a.createElement("footer",{className:"card-footer"},l.a.createElement("p",{className:"card-footer-item"},l.a.createElement("span",{id:"modal-button-".concat(t),onClick:function(e){return i(0,t)}},"Yeah, gimme!")))),l.a.createElement("div",{className:"modal",id:"modal-card-".concat(t)},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{className:"modal-card"},l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title"},"You will get ".concat(a.groceryItem.name," from ").concat(a.foodSupplier.firstName," ")),l.a.createElement("button",{className:"delete","aria-label":"close",onClick:function(e){return i(0,t)}})),l.a.createElement("section",{className:"modal-card-body"},l.a.createElement("figure",{className:"image is-squared"},l.a.createElement("img",{src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(a.img?a.img:a.groceryItem.defaultImg),alt:"foodoffer",style:{width:"200px",margin:"auto"}})),l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-48x48"},l.a.createElement("img",{src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(a.foodSupplier.img&&a.foodSupplier.img),alt:"foodsupplier"}))),l.a.createElement("div",{className:"media-content has-text-black-ter"},l.a.createElement("p",{className:"title is-4 has-text-black-ter"},a.foodSupplier.firstName),l.a.createElement("p",{className:"subtitle is-6 has-text-black-ter"},a.foodSupplier.lasttName)))),l.a.createElement("footer",{className:"modal-card-foot"},l.a.createElement("button",{className:"button is-success",onClick:function(t){return n=a._id,void f()({method:"post",withCredentials:"true",url:"".concat("http://http://165.22.194.16:5000/api","/acceptoffer/").concat(n)}).then(function(a){e.history.push("/profile")});var n}},"Cool!"),l.a.createElement("button",{className:"button",id:"modal-close-".concat(t),onClick:function(e){return i(0,t)}},"Naaaaaaaah...")))))}))))},_=function(e){var a=Object(n.useState)([]),t=Object(c.a)(a,2),r=t[0],s=t[1];Object(n.useEffect)(function(){f()({method:"get",withCredentials:"true",url:"".concat("http://http://165.22.194.16:5000/api","/foodrequests")}).then(function(e){s(e.data)})},[]);var i=function(e,a){document.getElementById("modal-card-".concat(a)).classList.toggle("is-active")},m={height:"100%"};return l.a.createElement("div",null,l.a.createElement("section",{className:"section cards"},l.a.createElement("div",{className:"columns is-multiline"},r&&r.map(function(a,t){return l.a.createElement("div",{className:"column is-one-quarter",key:a._id},l.a.createElement("div",{className:"card",style:m},l.a.createElement("div",{className:"card-image",style:{width:"80%",margin:"25px",padding:"25px"}},l.a.createElement("figure",{className:"image is-square"},l.a.createElement("img",{src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(a.img?a.img:a.groceryItem.defaultImg),alt:"foodRequest"}))),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-48x48"},l.a.createElement("img",{src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(a.foodConsumer.img&&a.foodConsumer.img),alt:"foodsupplier"}))),l.a.createElement("div",{className:"media-content has-text-black-ter"},l.a.createElement("p",{className:"title is-4 has-text-black-ter "},a.foodConsumer.firstName),l.a.createElement("p",{className:"subtitle is-6 has-text-black-ter"},a.foodConsumer.lastName))),l.a.createElement("div",{className:"content"},l.a.createElement("div",null,a.description),l.a.createElement("div",null,"Requested:"," ",O()(a.createdAt).format("DD-MM-YY")))),l.a.createElement("footer",{className:"card-footer"},l.a.createElement("p",{className:"card-footer-item"},l.a.createElement("span",{id:"modal-button-".concat(t),onClick:function(e){return i(0,t)}},"Yes, I have it for you!")))),l.a.createElement("div",{className:"modal",id:"modal-card-".concat(t)},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{className:"modal-card"},l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title"},"You will give ".concat(a.groceryItem.name," to ").concat(a.foodConsumer.firstName," ")),l.a.createElement("button",{className:"delete","aria-label":"close",onClick:function(e){return i(0,t)}})),l.a.createElement("section",{className:"modal-card-body"},l.a.createElement("figure",{className:"image is-squared"},l.a.createElement("img",{src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(a.img?a.img:a.groceryItem.defaultImg),alt:"foodoffer",style:{width:"200px",margin:"auto"}})),l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-48x48"},l.a.createElement("img",{src:"".concat("http://http://165.22.194.16:5000/","/images/").concat(a.foodConsumer.img&&a.foodConsumer.img),alt:"foodsupplier"}))),l.a.createElement("div",{className:"media-content has-text-black-ter"},l.a.createElement("p",{className:"title is-4 has-text-black-ter"},a.foodConsumer.firstName),l.a.createElement("p",{className:"subtitle is-6 has-text-black-ter"},a.foodConsumer.lasttName)))),l.a.createElement("footer",{className:"modal-card-foot"},l.a.createElement("button",{className:"button is-success",onClick:function(t){return n=a._id,void f()({method:"post",withCredentials:"true",url:"".concat("http://http://165.22.194.16:5000/api","/acceptrequest/").concat(n)}).then(function(a){e.history.push("/profile")});var n}},"Cool!"),l.a.createElement("button",{className:"button",id:"modal-close-".concat(t),onClick:function(e){return i(0,t)}},"Naaaaaaaah...")))))}))))},F=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},"About us"),l.a.createElement("h2",{className:"subtitle"},"Save the environment or share food trying"),l.a.createElement("div",{className:"container container-about",style:{display:"flex",justifyContent:"space-between",padding:"40px"}},l.a.createElement("div",{className:"img",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"40px"}},l.a.createElement("img",{src:"/green-removebg.png",alt:"green"}),l.a.createElement("span",null,"Save environment")),l.a.createElement("div",{className:"img",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"40px"}},l.a.createElement("img",{src:"/money.png",alt:"moneypic"}),l.a.createElement("span",null,"Save money")),l.a.createElement("div",{className:"img",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"40px"}},l.a.createElement("img",{src:"/Social-removebg.png",alt:"socialpic"}),l.a.createElement("span",{style:{marginTop:"30px"}},"Make social connections"))))),l.a.createElement("section",{className:"section"},l.a.createElement("h1",null,"Comments"),l.a.createElement("article",{className:"media"},l.a.createElement("figure",{className:"media-left"},l.a.createElement("p",{className:"image is-64x64"},l.a.createElement("img",{src:"/profilepics/Dessy.jpg",alt:"comment-starter-pic"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,"Dessy Lidyasari"),l.a.createElement("br",null),"I love this app. There is so much good and healthy food that otherwise would be thrown away. I already was able to pick up many vegetables from farmers nearby. I go together with my husband and my babydaughter Stella. She always likes to go to the farm and sometimes see the animals there. The vegetables we get I use to prepare the babyfood.",l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"/#"},"Like")," \xb7 ",l.a.createElement("a",{href:"/#"},"Reply")," \xb7 3 hrs"))),l.a.createElement("article",{className:"media"},l.a.createElement("figure",{className:"media-left"},l.a.createElement("p",{className:"image is-48x48"},l.a.createElement("img",{src:"/profilepics/Stella.jpg",alt:"comment-reply-pic"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,"Stella Putri Homminga "),l.a.createElement("br",null),"Thanks mummy! The food is so yummy! Especially the tomatoes were so good. Hopefully we can get them I can and daddy can make the delicious spaghetti!",l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"/#"},"Like")," \xb7 ",l.a.createElement("a",{href:"/#"},"Reply")," \xb7 2 hrs"))))),l.a.createElement("article",{className:"media"},l.a.createElement("figure",{className:"media-left"},l.a.createElement("p",{className:"image is-48x48"},l.a.createElement("img",{src:"/profilepics/Oma.jpg",alt:"comment-reply-pic1"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,"Oma"),l.a.createElement("br",null),"OW this is so nice. I love to cook with all the ingredients we get from this app. And next time I will join to the farm. Or I can watch Stella when you need to go pick up the groceries.",l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"/#"},"Like")," \xb7 ",l.a.createElement("a",{href:"/#"},"Reply")," \xb7 2 hrs"))))))),l.a.createElement("article",{className:"media"},l.a.createElement("figure",{className:"media-left"},l.a.createElement("p",{className:"image is-64x64"},l.a.createElement("img",{src:e.user&&e.user.img?"".concat("http://http://165.22.194.16:5000/","/images/").concat(e.user.img):"https://bulma.io/images/placeholders/128x128.png",alt:"user-image3"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"field"},l.a.createElement("p",{className:"control"},l.a.createElement("textarea",{className:"textarea",placeholder:"Add a comment..."}))),l.a.createElement("div",{className:"field"},l.a.createElement("p",{className:"control"},l.a.createElement("button",{className:"button"},"Post comment")))))))},R=Object(k.a)(),L=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),r=t[0],s=t[1],i=Object(n.useState)({}),m=Object(c.a)(i,2),o=m[0],u=m[1],d=function(e){var a=e.user,t=e.loggedIn;s(t),u(a),localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("loggedIn",JSON.stringify(t))};return Object(n.useEffect)(function(){u(JSON.parse(localStorage.getItem("user"))),s(JSON.parse(localStorage.getItem("loggedIn")))},[]),l.a.createElement("div",{className:"App"},l.a.createElement("section",{className:"hero is-primary is-medium is-bold is-fullheight"},l.a.createElement(b,Object.assign({},e,{loggedIn:r,user:o,logOut:function(e){var a=e.user,t=e.loggedIn;s(t),u(a),localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("loggedIn",JSON.stringify(t))},history:R})),l.a.createElement("div",{className:"hero-body is-bold is-paddingless is-fullheight"},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement(y.d,null,l.a.createElement(y.b,{exact:!0,path:"/",render:function(e){return l.a.createElement(v,Object.assign({},e,{loggedIn:r,logIn:d}))}}),l.a.createElement(y.b,{exact:!0,path:"/about",render:function(e){return l.a.createElement(F,Object.assign({},e,{loggedIn:r,user:o}))}}),l.a.createElement(y.b,{path:"/signup",render:function(e){return l.a.createElement(E,Object.assign({},e,{logIn:d}))}}),l.a.createElement(y.b,{path:"/login",render:function(e){return l.a.createElement(x,Object.assign({},e,{logIn:d}))}}),l.a.createElement(j,{path:"/profile",user:o,component:S,loggedIn:r,logIn:d}),l.a.createElement(j,{path:"/offerfood",user:o,component:D,loggedIn:r,logIn:d}),l.a.createElement(j,{path:"/requestfood",user:o,component:q,loggedIn:r,logIn:d}),l.a.createElement(j,{path:"/foodoffers",user:o,component:A,loggedIn:r,logIn:d}),l.a.createElement(j,{path:"/foodrequests",user:o,component:_,loggedIn:r,logIn:d}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=Object(k.a)();t(71).config(),s.a.render(l.a.createElement(y.c,{history:T},l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.42693c47.chunk.js.map