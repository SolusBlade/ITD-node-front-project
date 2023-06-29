"use strict";(self.webpackChunkITD_node_front_project=self.webpackChunkITD_node_front_project||[]).push([[869],{7869:function(e,a,r){r.r(a),r.d(a,{default:function(){return Ye}});var t=r(7689),n=r(2791),s=r(9434),o=r(4805),i=r(9439),l="Header_header__OKWO7",c="Header_container__TsUVY",d="Header_menu__iSxy+",m="Header_icon__a8FkJ",u=r(4942),h=r(8182),g="SelectTheme_container__r7-AJ",x="SelectTheme_select__8wmg7",p="SelectTheme_selectContainer__7WLE1",b="SelectTheme_header__ZvlpG",v="SelectTheme_icon__R1psC",j="SelectTheme_rotate__dNDwZ",y="SelectTheme_svg__Hjzi-",F="SelectTheme_list__DAEHj",B="SelectTheme_active__l-6bo",Z="SelectTheme_listItem__J0eR1",f="SelectTheme_current__DFjtF",C=r(4094),A=r(184);function S(e){var a,r=(0,n.useRef)(null),t=(e.isActive,e.setActive);return a=r,(0,n.useEffect)((function(){function e(e){a.current&&!a.current.contains(e.target)&&t(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[a]),(0,A.jsx)("div",{ref:r,children:e.children})}var N=function(e){var a,r,t,s=e.selectHandler,o=e.userTheme,l=e.setSelectedTheme,c=(0,n.useState)(!1),d=(0,i.Z)(c,2),m=d[0],N=d[1],k=function(e){var a=e.currentTarget.parentElement;a.children[1].classList.toggle("active"),a.children[0].children[1].classList.toggle("rotate"),N(!m)},P=function(){return 0===o.length?"dark":o};return(0,A.jsx)(S,{isActive:m,setActive:N,children:(0,A.jsx)("div",{className:g,children:(0,A.jsxs)("div",{className:x,children:[(0,A.jsxs)("div",{className:p,onClick:k,children:[(0,A.jsx)("p",{className:b,children:"Theme"}),(0,A.jsx)("div",{className:(0,h.Z)(v,[m&&j]),children:(0,A.jsx)("svg",{className:y,children:(0,A.jsx)("use",{href:C.Z+"#icon-arrow-down"})})})]}),(0,A.jsxs)("ul",{className:(0,h.Z)(F,[m&&B]),onClick:function(e){k(e),function(e){var a=e.target.innerText.toLowerCase();l(a),s(a)}(e)},children:[(0,A.jsx)("li",{className:(0,h.Z)((a={},(0,u.Z)(a,Z,!0),(0,u.Z)(a,f,m&&"light"===P()),a)),children:(0,A.jsx)("p",{children:"Light"})},1),(0,A.jsx)("li",{className:(0,h.Z)((r={},(0,u.Z)(r,Z,!0),(0,u.Z)(r,f,m&&"dark"===P()),r)),children:(0,A.jsx)("p",{children:"Dark"})},2),(0,A.jsx)("li",{className:(0,h.Z)((t={},(0,u.Z)(t,Z,!0),(0,u.Z)(t,f,m&&"violet"===P()),t)),children:(0,A.jsx)("p",{children:"Violet"})},3)]})]})})})},k={container:"Profile_container__OBYQH",name:"Profile_name__9EFSA",avatarContainer:"Profile_avatarContainer__VuBqv",svg:"Profile_svg__uWmy7",img:"Profile_img__WBvF+"},P=r(4289),_=function(e){var a=e.modalHandler,r=e.avatar,t=e.userAvatar,n=(0,s.v9)(P.selectName);return(0,A.jsxs)("div",{className:k.container,children:[(0,A.jsx)("div",{className:k.tooltip,children:(0,A.jsx)("p",{})}),(0,A.jsx)("p",{className:k.name,children:n}),(0,A.jsx)("div",{className:k.avatarContainer,onClick:a,children:0!==(null===t||void 0===t?void 0:t.length)||r?(0,A.jsx)("img",{className:k.img,src:"".concat(r&&(null===r||void 0===r?void 0:r.length)>0?r:t),alt:"Avatar"}):(0,A.jsx)("svg",{className:k.svg,children:(0,A.jsx)("use",{href:C.Z+"#user-avatar-icon"})})})]})},T=r(5705),I=r(4873),w=r(6727),M={modal:"ProfileModal_modal__uUk-c",header:"ProfileModal_header__p2Gkw",imageContainer:"ProfileModal_imageContainer__TkbH5",svg:"ProfileModal_svg__R5DnF",image:"ProfileModal_image__riVrJ",addImg:"ProfileModal_addImg__7yF92",label:"ProfileModal_label__anism",labelSvg:"ProfileModal_labelSvg__p6IXF",addFile:"ProfileModal_addFile__amgiz",passLabel:"ProfileModal_passLabel__ee77g",input:"ProfileModal_input__Bkn-5",iconEye:"ProfileModal_iconEye__cCPGf",errorMessage:"ProfileModal_errorMessage__EFQxM",button:"ProfileModal_button__N+D4X"},E=r(5822),H=w.Ry().shape({name:w.Z_().min(2,"Username must be at least 2 characters").max(64,"Username must be less than or equal to 64 characters").required("Username is a required field"),email:w.Z_().email("Email must be a valid email").min(3,"Email must be at least 3 characters").max(64,"Email must be less than or equal to 64 characters").required("Email is a required field"),password:w.Z_().min(8,"Password must be at least 8 characters").max(64,"Password must be less than or equal to 64 characters").required("Password is a required field")}),L=function(e){var a,r=e.modalHandler,t=e.avatar,o=e.userAvatar,l=(0,n.useState)(null),c=(0,i.Z)(l,2),d=c[0],m=c[1],g=(0,n.useState)("password"),x=(0,i.Z)(g,2),p=x[0],b=x[1],v=(0,s.I0)(),j=(0,s.v9)(P.selectUser),y={name:j.name,email:j.email,password:""};(0,n.useEffect)((function(){if(d){var e=new FormData;if(e.append("avatar",d),d.size>104e4)return alert("Maximum image size is 1MB");v((0,E.n1)(e)),m(null)}}),[d,v]);return(0,A.jsxs)("div",{className:M.modal,children:[(0,A.jsxs)("div",{className:M.imageContainer,children:[0!==o.length||t?(0,A.jsx)("div",{className:M.image,children:(0,A.jsx)("img",{className:M.img,src:t&&t.length>0?t:o,alt:"Avatar"})}):(0,A.jsx)("svg",{className:M.svg,children:(0,A.jsx)("use",{href:C.Z+"#user-avatar-icon"})}),(0,A.jsxs)("div",{className:M.addImg,children:[(0,A.jsx)("label",{className:M.label,htmlFor:"inputAddFile",children:(0,A.jsx)("svg",{className:M.labelSvg,children:(0,A.jsx)("use",{href:C.Z+"#icon-btn-plus"})})}),(0,A.jsx)("input",{className:M.addFile,id:"inputAddFile",type:"file",accept:"image/png, image/jpeg",placeholder:"",onChange:function(e){m(e.target.files[0])}})]})]}),(0,A.jsx)(T.J9,{initialValues:y,validationSchema:H,onSubmit:function(e,a){var t=a.resetForm;v((0,E.Nq)({name:e.name,email:e.email,password:e.password})),t(),r()},children:(0,A.jsxs)(T.l0,{children:[(0,A.jsx)(I.Z,{name:"name",placeholder:"Enter name"}),(0,A.jsx)(I.Z,{name:"email",placeholder:"Enter email",value:"hello"}),(0,A.jsxs)("label",{htmlFor:"updatePassInput",className:M.passLabel,children:[(0,A.jsx)(T.gN,{id:"updatePassInput",name:"password",placeholder:"Enter password",type:p,className:M.input}),(0,A.jsx)(T.Bc,{name:"password",component:"span",className:M.errorMessage}),"password"===p?(0,A.jsx)("svg",{className:M.iconEye,onClick:function(){return b("text")},children:(0,A.jsx)("use",{href:C.Z+"#icon-eye-blocked"})}):(0,A.jsx)("svg",{className:(0,h.Z)((a={},(0,u.Z)(a,M.iconEye,!0),(0,u.Z)(a,M.iconEyeOpen,"text"===p),a)),onClick:function(){return b("password")},children:(0,A.jsx)("use",{href:C.Z+"#icon-eye"})})]}),(0,A.jsx)("button",{className:M.button,type:"submit",children:"Send"})]})})]})},U=r(5488),W=r(132),q={dark:{primaryBackground:"#121212",secondaryBackground:"#1F1F1F",headerBackground:"#161616",primaryTextColor:"#FFFFFF",secondaryTextColor:"rgba(255, 255, 255, 0.5)",boardHeaders:"#FFFFFF",btnBg:"#BEDBB0",btnTextColor:"#121212",selectHeader:"rgba(255, 255, 255, 0.8)",selectOption:"rgba(255, 255, 255, 0.5)",selectListBg:"#151515",selectListBorder:"#BEDBB0",modalBackground:"#151515",btnModalIconPlus:"#FFFFFF",btnModalBg:"#161616",btnModalTextColor:"#161616",cardBg:"#121212",boardAddColumnBtn:"#FFFFFF",boardAddColumnPlus:"#121212",headerModalBtnAddFile:"#BEDBB0",sidebarBoardActiveBg:"#1F1F1F",sidebarHelpWrapperBg:"#1F1F1F",sidebarButtonCreateBg:"#BEDBB0",sidebarButtonIconPlus:"#121212",sidebarBoardItemHover:"#404040",sidebarTextColorMain:"#FFF",btnHoverMain:"#a8cf96",btnActiveMain:"#8bbf73",btnHoverSecondary:"#d9d9d9",btnActiveSecondary:"#b3b3b3",sidebarTextColorSecondary:"rgba(255, 255, 255, 0.50)",priorityWithoutPriority:"rgba(255, 255, 255, 0.3)"},light:{primaryBackground:"#FFFFFF",secondaryBackground:"#F6F6F7",headerBackground:"#FCFCFC",primaryTextColor:"#161616",secondaryTextColor:"rgba(22, 22, 22, 0.5)",boardHeaders:"#161616B2",btnBg:"#BEDBB0",btnTextColor:"#161616",selectHeader:"rgba(160, 160, 160, 0.8)",selectOption:"#161616",selectListBg:"#FCFCFC",selectListBorder:"#BEDBB0",modalBackground:"#FCFCFC",btnModalIconPlus:"#FFFFFF",btnModalBg:"#161616",cardBg:"#FFFFFF",boardAddColumnBtn:"#121212",boardAddColumnPlus:"#FFFFFF",headerModalBtnAddFile:"#BEDBB0",sidebarBoardActiveBg:"#F6F6F7",sidebarHelpWrapperBg:"#F6F6F7",sidebarButtonCreateBg:"#BEDBB0",sidebarButtonIconPlus:"#121212",sidebarBoardItemHover:"#e4e4e7",sidebarTextColorMain:"#161616",sidebarTextColorSecondary:"rgba(22, 22, 22, 0.50)",btnHoverMain:"#a8cf96",btnActiveMain:"#8bbf73",btnHoverSecondary:"#404040",btnActiveSecondary:"#737373",priorityWithoutPriority:"rgba(22, 22, 22, 0.30)"},violet:{primaryBackground:"#5255BC",secondaryBackground:"#ECEDFD",headerBackground:"#FFFFFF",primaryTextColor:"#161616",secondaryTextColor:"rgba(22, 22, 22, 0.5)",boardHeaders:"#161616",btnBg:"#5255BC",btnTextColor:"#FFFFFF",selectHeader:"rgba(160, 160, 160, 0.8)",selectOption:"#161616",selectListBg:"#FCFCFC",selectListBorder:"#ECEDFD",modalBackground:"#FCFCFC",btnModalIconPlus:"#161616",btnModalBg:"#FFFFFF",cardBg:"#FFFFFF",boardAddColumnBtn:"#5255BC",boardAddColumnPlus:"#FFFFFF",headerModalBtnAddFile:"#ECEDFD",sidebarBoardActiveBg:"rgba(255, 255, 255, 0.21)",sidebarHelpWrapperBg:"rgba(236, 237, 253, 0.40)",sidebarButtonCreateBg:"#B8BCFD",sidebarButtonIconPlus:"#FFFFFF",sidebarBoardItemHover:"rgba(217, 217, 217, 0.5)",sidebarTextColorMain:"#FFF",sidebarTextColorSecondary:"rgba(255, 255, 255, 0.50)",btnHoverMain:"#6c6fc6",btnActiveMain:"#4044a5",btnHoverSecondary:"#6c6fc6",btnActiveSecondary:"#4044a5",priorityWithoutPriority:"rgba(22, 22, 22, 0.30)"}},R=function(e){var a=document.querySelector(":root");a.style.setProperty("--primary-background",q[e].primaryBackground),a.style.setProperty("--secondary-background",q[e].secondaryBackground),a.style.setProperty("--header-background",q[e].headerBackground),a.style.setProperty("--primary-text-color",q[e].primaryTextColor),a.style.setProperty("--secondary-text-color",q[e].secondaryTextColor),a.style.setProperty("--board-headers",q[e].boardHeaders),a.style.setProperty("--btn-bg",q[e].btnBg),a.style.setProperty("--btn-text-color",q[e].btnTextColor),a.style.setProperty("--select-header",q[e].selectHeader),a.style.setProperty("--select-option",q[e].selectOption),a.style.setProperty("--select-list-bg",q[e].selectListBg),a.style.setProperty("--select-list-border",q[e].selectListBorder),a.style.setProperty("--modal-background",q[e].modalBackground),a.style.setProperty("--btn-modal-icon-plus",q[e].btnModalIconPlus),a.style.setProperty("--btn-modal-bg",q[e].btnModalBg),a.style.setProperty("--btn-modal-text-color",q[e].btnModalTextColor),a.style.setProperty("--card-bg",q[e].cardBg),a.style.setProperty("--board-add-column-btn",q[e].boardAddColumnBtn),a.style.setProperty("--board-add-column-plus",q[e].boardAddColumnPlus),a.style.setProperty("--header-modal-btn-add-file",q[e].headerModalBtnAddFile),a.style.setProperty("--sidebar-board-active-bg",q[e].sidebarBoardActiveBg),a.style.setProperty("--sidebar-help-wrapper-bg",q[e].sidebarHelpWrapperBg),a.style.setProperty("--sidebar-button-create-bg",q[e].sidebarButtonCreateBg),a.style.setProperty("--sidebar-button-icon-plus",q[e].sidebarButtonIconPlus),a.style.setProperty("--sidebar-board-item-hover",q[e].sidebarBoardItemHover),a.style.setProperty("--sidebar-text-color-main",q[e].sidebarTextColorMain),a.style.setProperty("--sidebar-text-color-secondary",q[e].sidebarTextColorSecondary),a.style.setProperty("--btn-hover-main",q[e].btnHoverMain),a.style.setProperty("--btn-active-main",q[e].btnActiveMain),a.style.setProperty("--btn-hover-secondary",q[e].btnHoverSecondary),a.style.setProperty("--btn-active-secondary",q[e].btnActiveSecondary),a.style.setProperty("--priority-without-priority",q[e].priorityWithoutPriority)},Y=function(){var e=(0,s.v9)(P.selectUserTheme),a=(0,s.v9)(P.selectUserAvatar),r=(0,s.v9)(P.selectAvatar),t=(0,n.useState)(null),o=(0,i.Z)(t,2),u=o[0],h=o[1],g=(0,n.useState)(!1),x=(0,i.Z)(g,2),p=x[0],b=x[1],v=(0,s.I0)();(0,n.useEffect)((function(){e&&R(e)}),[e]),(0,n.useEffect)((function(){u&&(R(u),v((0,E.tj)(u)))}),[u,v]);var j=function(){return b(!p)};return(0,A.jsxs)("header",{className:l,children:[(0,A.jsx)("div",{className:d,onClick:function(){return v((0,W.GB)(!0))},children:(0,A.jsx)("svg",{className:m,children:(0,A.jsx)("use",{href:C.Z+"#icon-burger-menu"})})}),(0,A.jsxs)("div",{className:c,children:[(0,A.jsx)(N,{selectHandler:R,userTheme:e,selectedTheme:u,setSelectedTheme:h}),(0,A.jsx)(_,{modalHandler:j,avatar:r,userAvatar:a})]}),p&&(0,A.jsx)(U.Z,{title:"Edit profile",closeModal:j,children:(0,A.jsx)(L,{modalHandler:j,avatar:r,userAvatar:a})})]})},D=r(3770),z=r(3145),J="LogoComponent_iconBg__upuL2",V="LogoComponent_violet__-Nw79",K="LogoComponent_icon__K3ESn",O=function(){var e=(0,s.v9)(P.selectUserTheme);return(0,A.jsx)("div",{className:(0,h.Z)(J,"violet"===e&&V),children:(0,A.jsx)(z.Z,{name:"icon-iconlogo",width:32,height:32,secondaryClassName:(0,h.Z)(K,"violet"===e&&V)})})},X=r(7497),Q=r(3981),G=r(3105),$=r(4020),ee=r(5297),ae=r(9632),re=r(3750),te=r(702),ne=r(2961),se=r(267),oe=r(3078),ie=r(9271),le=r(4407),ce=r(905),de=r(902),me=r(9200),ue=r(1969),he=r(9219),ge=r(877),xe=r(1763),pe=r(925),be=r(2660),ve=r(6191),je={title:""},ye=w.Ry().shape({title:w.Z_().required("Title is a required field")}),Fe=function(e){var a=e.closeModal,r=(0,n.useState)("colors"),t=(0,i.Z)(r,2),o=t[0],l=t[1],c=(0,n.useState)("defaultBg"),d=(0,i.Z)(c,2),m=d[0],u=d[1],g=(0,s.v9)(P.selectUserTheme),x=(0,s.I0)();return(0,A.jsx)(T.J9,{validationSchema:ye,onSubmit:function(e,r){var t=r.resetForm;x((0,W.RN)({title:e.title,icon:o,background:m})),a(),t()},initialValues:je,children:(0,A.jsxs)(T.l0,{children:[(0,A.jsx)(I.Z,{name:"title",placeholder:"Title"}),(0,A.jsxs)("div",{children:[(0,A.jsx)("p",{className:ae.Z.title,children:"Icons"}),(0,A.jsx)(G.Z,{orientation:"horizontal","aria-label":"Icons",name:"icons",variant:"outlined",value:o,onChange:function(e){return l(e.target.value)},sx:{marginBottom:"24px",border:"none",gap:"8px"},children:["colors","hexagon","project","container","lightnight","loading","puzzle","star"].map((function(e){return(0,A.jsx)(X.Z,{sx:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,A.jsx)(Q.Z,{value:e,disableIcon:!0,overlay:!0,name:"icons",label:{colors:(0,A.jsx)(z.Z,{name:"dark"===g?"colors":"colors-white",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"colors"===o&&ae.Z.activeSvgIcon)}),hexagon:(0,A.jsx)(z.Z,{name:"dark"===g?"hexagon":"hexagon-white",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"hexagon"===o&&ae.Z.activeSvgIcon)}),project:(0,A.jsx)(z.Z,{name:"dark"===g?"project":"project-white",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"project"===o&&ae.Z.activeSvgIcon)}),container:(0,A.jsx)(z.Z,{name:"dark"===g?"container":"container-white",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"container"===o&&ae.Z.activeSvgIcon)}),lightnight:(0,A.jsx)(z.Z,{name:"dark"===g?"lightnight":"lightnight-white",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"lightnight"===o&&ae.Z.activeSvgIcon)}),loading:(0,A.jsx)(z.Z,{name:"dark"===g?"loading":"loading-white",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"loading"===o&&ae.Z.activeSvgIcon)}),puzzle:(0,A.jsx)(z.Z,{name:"dark"===g?"puzzle":"puzzle-white",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"puzzle"===o&&ae.Z.activeSvgIcon)}),star:(0,A.jsx)(z.Z,{name:"dark"===g?"star":"star-white",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"star"===o&&ae.Z.activeSvgIcon)})}[e],variant:o===e?"solid":"plain",sx:{"& .Joy-checked":{backgroundColor:"transparent"},"& .MuiRadio-label":{width:"18px",height:"18px"}},slotProps:{input:{"aria-label":e},action:{sx:{"&:hover":{backgroundColor:"transparent"},borderRadius:0,transition:"none"}},label:{sx:{lineHeight:0}}}})},e)}))})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("p",{className:ae.Z.title,children:"Background"}),(0,A.jsx)(G.Z,{orientation:"horizontal","aria-label":"Backgrounds",name:"background",variant:"outlined",value:m,onChange:function(e){return u(e.target.value)},sx:{flexWrap:"wrap",width:"260px",marginBottom:"24px",border:"none",gap:"4px"},children:["defaultBg","flowers","leaves","mountainsAndBalloon","nature","oceanAndYacht","orangePlanet","planets","rocksAndOcean","sakura","sky","skyBalloons","starsAndShine","trailerInTheCanyon","yacht","youngMonth"].map((function(e){return(0,A.jsx)(X.Z,{sx:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,A.jsx)(Q.Z,{value:e,disableIcon:!0,overlay:!0,name:"background",label:{defaultBg:"dark"===g?(0,A.jsx)(ee.Z,{name:re,alt:re}):(0,A.jsx)(ee.Z,{name:ve,alt:"icon"}),flowers:(0,A.jsx)(ee.Z,{name:te,alt:"icon"}),leaves:(0,A.jsx)(ee.Z,{name:ne,alt:"icon"}),mountainsAndBalloon:(0,A.jsx)(ee.Z,{name:se,alt:"icon"}),nature:(0,A.jsx)(ee.Z,{name:oe,alt:"icon"}),oceanAndYacht:(0,A.jsx)(ee.Z,{name:ie,alt:"icon"}),orangePlanet:(0,A.jsx)(ee.Z,{name:le,alt:"icon"}),planets:(0,A.jsx)(ee.Z,{name:ce,alt:"icon"}),rocksAndOcean:(0,A.jsx)(ee.Z,{name:de,alt:"icon"}),sakura:(0,A.jsx)(ee.Z,{name:me,alt:"icon"}),sky:(0,A.jsx)(ee.Z,{name:ue,alt:"icon"}),skyBalloons:(0,A.jsx)(ee.Z,{name:he,alt:"icon"}),starsAndShine:(0,A.jsx)(ee.Z,{name:ge,alt:"icon"}),trailerInTheCanyon:(0,A.jsx)(ee.Z,{name:xe,alt:"icon"}),yacht:(0,A.jsx)(ee.Z,{name:pe,alt:"icon"}),youngMonth:(0,A.jsx)(ee.Z,{name:be,alt:"icon"})}[e],variant:m===e?"solid":"plain",sx:"violet"===g?{"& .Joy-checked":{backgroundColor:"transparent",outline:"2px solid #5255BC",borderRadius:"6px",zIndex:"99"}}:{"& .Joy-checked":{backgroundColor:"transparent",outline:"2px solid #BEDBB0",borderRadius:"6px",zIndex:"99"}},slotProps:{input:{"aria-label":e},action:{sx:{"&:hover":{backgroundColor:"transparent"},borderRadius:0,transition:"none"}},label:{sx:{lineHeight:0}}}})},e)}))})]}),(0,A.jsx)($.Z,{text:"Create"})]})})},Be="NeedHelp_label__3X2O7",Ze="NeedHelp_textarea__+QoR6",fe="NeedHelp_errorMessage__YwA2C",Ce="NeedHelp_button__lgwfC",Ae=w.Ry().shape({email:w.Z_().email("Email must be a valid email").min(3,"Email must be at least 3 characters").max(64,"Email must be less than or equal to 64 characters").required("Email is a required field"),comment:w.Z_().required("Comment is a required field")}),Se={email:"",comment:""},Ne=function(e){var a=e.closeModal;return(0,A.jsx)(T.J9,{initialValues:Se,validationSchema:Ae,onSubmit:function(e,r){var t=r.resetForm,n={email:e.email,comment:e.comment};console.log(n),a(),t()},children:(0,A.jsxs)(T.l0,{autoComplete:"off",children:[(0,A.jsx)(I.Z,{name:"email",placeholder:"Email address"}),(0,A.jsxs)("label",{className:Be,children:[(0,A.jsx)(T.gN,{as:"textarea",name:"comment",placeholder:"Comment",className:Ze}),(0,A.jsx)(T.Bc,{name:"comment",component:"span",className:fe})]}),(0,A.jsx)("button",{type:"submit",className:Ce,children:"Send"})]})})},ke=r(596),Pe={container:"Sidebar_container__tRE6e",sectionTop:"Sidebar_sectionTop__kXrut",logoWrap:"Sidebar_logoWrap__fIZIy",logoText:"Sidebar_logoText__j+pLJ",boardsTitle:"Sidebar_boardsTitle__EnqDF",createBoard:"Sidebar_createBoard__Vww8s",buttonCreate:"Sidebar_buttonCreate__5kUMF",sectionBoards:"Sidebar_sectionBoards__iwH2u",boardsList:"Sidebar_boardsList__n6qaq",boardItem:"Sidebar_boardItem__-Gzo2",boardItemActive:"Sidebar_boardItemActive__MHmWx Sidebar_boardItem__-Gzo2",boardName:"Sidebar_boardName__o2iew",boardEditIcons:"Sidebar_boardEditIcons__6bzF5",helpWrapper:"Sidebar_helpWrapper__bCJj5",helpSend:"Sidebar_helpSend__ZNI1k",helpText:"Sidebar_helpText__YwZd4",btnLogout:"Sidebar_btnLogout__FPSmN",icons:"Sidebar_icons__AoxeN"},_e=r(4110),Te=w.Ry().shape({title:w.Z_().required("Title is a required field")}),Ie=function(e){var a=e.closeModal,r=e.boardToEdit,t=(0,n.useState)(r[0].icon),o=(0,i.Z)(t,2),l=o[0],c=o[1],d=(0,n.useState)(r[0].background),m=(0,i.Z)(d,2),u=m[0],g=m[1],x=(0,s.v9)(_e._U),p=(0,s.v9)(P.selectUserTheme),b=(0,s.I0)();return(0,A.jsx)(T.J9,{validationSchema:Te,onSubmit:function(e,r){var t=r.resetForm;b((0,W.CJ)({id:x,data:{title:e.title,icon:l,background:u}})),a(),t()},initialValues:{title:r[0].title},children:(0,A.jsxs)(T.l0,{children:[(0,A.jsx)(I.Z,{name:"title",placeholder:"Title",value:r[0].title}),(0,A.jsxs)("div",{children:[(0,A.jsx)("p",{className:ae.Z.title,children:"Icons"}),(0,A.jsx)(G.Z,{orientation:"horizontal","aria-label":"Icons",name:"icons",variant:"outlined",value:l,onChange:function(e){return c(e.target.value)},sx:{marginBottom:"24px",border:"none",gap:"8px"},children:["colors","hexagon","project","container","lightnight","loading","puzzle","star"].map((function(e){return(0,A.jsx)(X.Z,{sx:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,A.jsx)(Q.Z,{value:e,disableIcon:!0,overlay:!0,name:"icons",label:{colors:(0,A.jsx)(z.Z,{name:"colors",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"colors"===l&&ae.Z.activeSvgIcon)}),hexagon:(0,A.jsx)(z.Z,{name:"hexagon",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"hexagon"===l&&ae.Z.activeSvgIcon)}),project:(0,A.jsx)(z.Z,{name:"project",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"project"===l&&ae.Z.activeSvgIcon)}),container:(0,A.jsx)(z.Z,{name:"container",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"container"===l&&ae.Z.activeSvgIcon)}),lightnight:(0,A.jsx)(z.Z,{name:"lightnight",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"lightnight"===l&&ae.Z.activeSvgIcon)}),loading:(0,A.jsx)(z.Z,{name:"loading",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"loading"===l&&ae.Z.activeSvgIcon)}),puzzle:(0,A.jsx)(z.Z,{name:"puzzle",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"puzzle"===l&&ae.Z.activeSvgIcon)}),star:(0,A.jsx)(z.Z,{name:"star",width:18,height:18,secondaryClassName:(0,h.Z)(ae.Z.svgIcon,"star"===l&&ae.Z.activeSvgIcon)})}[e],variant:l===e?"solid":"plain",sx:{"& .Joy-checked":{backgroundColor:"transparent"},"& .MuiRadio-label":{width:"18px",height:"18px"}},slotProps:{input:{"aria-label":e},action:{sx:{"&:hover":{backgroundColor:"transparent"},borderRadius:0,transition:"none"}},label:{sx:{lineHeight:0}}}})},e)}))})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("p",{className:ae.Z.title,children:"Background"}),(0,A.jsx)(G.Z,{orientation:"horizontal","aria-label":"Backgrounds",name:"background",variant:"outlined",value:u,onChange:function(e){return g(e.target.value)},sx:{flexWrap:"wrap",width:"260px",marginBottom:"24px",border:"none",gap:"4px"},children:["defaultBg","flowers","leaves","mountainsAndBalloon","nature","oceanAndYacht","orangePlanet","planets","rocksAndOcean","sakura","sky","skyBalloons","starsAndShine","trailerInTheCanyon","yacht","youngMonth"].map((function(e){return(0,A.jsx)(X.Z,{sx:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,A.jsx)(Q.Z,{value:e,disableIcon:!0,overlay:!0,name:"background",label:{defaultBg:(0,A.jsx)(ee.Z,{name:re,alt:re}),flowers:(0,A.jsx)(ee.Z,{name:te,alt:te}),leaves:(0,A.jsx)(ee.Z,{name:ne,alt:ne}),mountainsAndBalloon:(0,A.jsx)(ee.Z,{name:se,alt:se}),nature:(0,A.jsx)(ee.Z,{name:oe,alt:oe}),oceanAndYacht:(0,A.jsx)(ee.Z,{name:ie,alt:ie}),orangePlanet:(0,A.jsx)(ee.Z,{name:le,alt:le}),planets:(0,A.jsx)(ee.Z,{name:ce,alt:ce}),rocksAndOcean:(0,A.jsx)(ee.Z,{name:de,alt:de}),sakura:(0,A.jsx)(ee.Z,{name:me,alt:me}),sky:(0,A.jsx)(ee.Z,{name:ue,alt:ue}),skyBalloons:(0,A.jsx)(ee.Z,{name:he,alt:he}),starsAndShine:(0,A.jsx)(ee.Z,{name:ge,alt:ge}),trailerInTheCanyon:(0,A.jsx)(ee.Z,{name:xe,alt:xe}),yacht:(0,A.jsx)(ee.Z,{name:pe,alt:pe}),youngMonth:(0,A.jsx)(ee.Z,{name:be,alt:be})}[e],variant:u===e?"solid":"plain",sx:"violet"===p?{"& .Joy-checked":{backgroundColor:"transparent",outline:"2px solid #5255BC",borderRadius:"6px",zIndex:"99"}}:{"& .Joy-checked":{backgroundColor:"transparent",outline:"2px solid #BEDBB0",borderRadius:"6px",zIndex:"99"}},slotProps:{input:{"aria-label":e},action:{sx:{"&:hover":{backgroundColor:"transparent"},borderRadius:0,transition:"none"}},label:{sx:{lineHeight:0}}}})},e)}))})]}),(0,A.jsx)($.Z,{text:"Edit"})]})})},we=function(){var e=(0,s.v9)(_e.E$),a=(0,s.v9)(P.selectUserTheme),r=(0,s.v9)(P.selectName),o=(0,s.v9)(_e._U),l=(0,s.I0)(),c=(0,t.s0)(),d=(0,n.useState)(!1),m=(0,i.Z)(d,2),u=m[0],g=m[1],x=(0,n.useState)(!1),p=(0,i.Z)(x,2),b=p[0],v=p[1],j=(0,n.useState)(!1),y=(0,i.Z)(j,2),F=y[0],B=y[1],Z=(0,n.useState)(null),f=(0,i.Z)(Z,2),C=f[0],S=f[1],N=(0,n.useState)(null),k=(0,i.Z)(N,2),_=k[0],T=k[1];(0,n.useEffect)((function(){r&&l((0,W.sj)())}),[l,r]),(0,n.useEffect)((function(){if(0!==e.length&&!o){S(e[0]._id);var a=e[0].title.split(" ").join("-").toLowerCase();c("/home/".concat(a))}}),[e,o,c]),(0,n.useEffect)((function(){l((0,W.WU)(C))}),[C,l]);var I=function(){return g(!u)},w=function(){return v(!b)},M=function(){return B(!F)};return(0,A.jsxs)("nav",{children:[(0,A.jsx)("section",{className:Pe.sectionTop,children:(0,A.jsxs)("div",{className:Pe.container,children:[(0,A.jsxs)("div",{className:Pe.logoWrap,children:[(0,A.jsx)(O,{}),(0,A.jsx)("p",{className:Pe.logoText,children:"Task Pro"})]}),(0,A.jsx)("p",{className:Pe.boardsTitle,children:"My boards"}),(0,A.jsxs)("div",{className:Pe.createBoard,children:[(0,A.jsx)("p",{children:"Create a new board"}),(0,A.jsx)("button",{type:"button",className:Pe.buttonCreate,onClick:I,children:(0,A.jsx)(z.Z,{name:"icon-btn-plus",width:20,height:20})})]})]})}),(0,A.jsx)("section",{className:Pe.sectionBoards,children:(0,A.jsx)("ul",{className:Pe.boardsList,children:null===e||void 0===e?void 0:e.map((function(r){var t=r._id===C?Pe.boardItemActive:Pe.boardItem;return(0,A.jsxs)("li",{className:t,onClick:function(){return function(e,a){S(e);var r=a.split(" ").join("-").toLowerCase();c("/home/".concat(r))}(r._id,r.title)},children:[(0,A.jsxs)("div",{className:Pe.boardName,children:[(0,A.jsx)(z.Z,{name:r.icon,width:18,height:18,className:Pe.boardIcon}),(0,A.jsx)("p",{children:r.title})]}),r._id===C&&(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{className:Pe.boardEditIcons,children:[(0,A.jsx)(ke.Z,{name:"icon-pencil",width:16,height:16,secondaryClassName:(0,h.Z)("violet"===a&&Pe.icons),onClick:function(){return r._id,T(e.filter((function(e){return e._id===o}))),void M()}}),(0,A.jsx)(ke.Z,{name:"icon-trash",width:16,height:16,secondaryClassName:(0,h.Z)("violet"===a&&Pe.icons),onClick:function(){return e=r._id,l((0,W.Zz)(e)),void l((0,W.WU)(null));var e}})]})})]},r._id)}))})}),(0,A.jsx)("section",{className:Pe.sectionHelp,children:(0,A.jsx)("div",{className:Pe.container,children:(0,A.jsxs)("div",{className:Pe.helpWrapper,children:[(0,A.jsx)("img",{src:D,alt:"cactus",className:Pe.helpCactus}),(0,A.jsxs)("p",{className:Pe.helpText,children:["If you need help with ",(0,A.jsx)("br",{}),(0,A.jsx)("span",{children:" TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,A.jsxs)("button",{className:Pe.helpSend,onClick:w,children:[(0,A.jsx)(z.Z,{name:"icon-help-circle",width:20,height:20,secobdaryClassName:Pe.helpIcon}),"Need help?"]})]})})}),(0,A.jsx)("section",{className:Pe.sectionLogOut,children:(0,A.jsx)("div",{className:Pe.container,children:(0,A.jsxs)("button",{className:Pe.btnLogout,onClick:function(){l((0,E.ne)())},children:[(0,A.jsx)(z.Z,{name:"icon-iconlogout",width:32,height:32}),"Log out"]})})}),u&&(0,A.jsx)(U.Z,{title:"New board",closeModal:I,children:(0,A.jsx)(Fe,{closeModal:I})}),b&&(0,A.jsx)(U.Z,{title:"Need help",closeModal:w,children:(0,A.jsx)(Ne,{closeModal:w})}),F&&(0,A.jsx)(U.Z,{title:"Edit board",closeModal:M,children:(0,A.jsx)(Ie,{closeModal:M,boardToEdit:_})})]})},Me=r(685),Ee="WelcomePageBoard_welcomePage__bfwyS",He="WelcomePageBoard_welcomeContainerDiscription__Z4B6z",Le="WelcomePageBoard_welcomeDiscription__BuMbu",Ue="WelcomePageBoard_createBoardLink__KmUes",We=function(){var e=(0,n.useState)(!1),a=(0,i.Z)(e,2),r=a[0],t=a[1];return(0,A.jsxs)("div",{children:[(0,A.jsx)("div",{className:Ee,children:(0,A.jsx)(Me.Z,{})}),(0,A.jsx)("div",{className:He,children:(0,A.jsxs)("p",{className:Le,children:["Before starting your project, it is essential "," ",(0,A.jsx)("span",{className:Ue,onClick:function(){t(!0)},children:"to create a board"})," "," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})}),r&&(0,A.jsx)(U.Z,{title:"New board",closeModal:function(){t(!1)},children:(0,A.jsx)(Fe,{})})]})},qe=r(1673),Re={hidden:"HomePage_hidden__zxuF6",sideBarBackDrop:"HomePage_sideBarBackDrop__b987A",showMobile:"HomePage_showMobile__g2GpM",sideBar:"HomePage_sideBar__W15jR",sideBarOpen:"HomePage_sideBarOpen__V9qKB HomePage_sideBar__W15jR",homeWrap:"HomePage_homeWrap__4oaan",screenWrap:"HomePage_screenWrap__vfEGW"},Ye=function(){var e=(0,s.I0)(),a=(0,s.v9)(_e.E$),r=(0,o.useMediaQuery)({minWidth:1280}),i=(0,s.v9)(_e.bN);(0,n.useEffect)((function(){e((0,W.km)())}),[e]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(n.Suspense,{fallback:null,children:[(0,A.jsxs)("div",{className:Re.homeWrap,children:[r&&(0,A.jsx)("div",{className:Re.sideBar,children:(0,A.jsx)(we,{})}),(0,A.jsxs)("div",{className:Re.screenWrap,children:[(0,A.jsx)(Y,{}),a.length>0?(0,A.jsx)(t.j3,{}):(0,A.jsxs)(qe.Z,{className:Re.containerWelcomeDashboard,children:[(0,A.jsx)(t.j3,{}),(0,A.jsx)(We,{})]})]})]}),(0,A.jsx)("div",{className:(0,h.Z)(Re.sideBarBackDrop,i&&Re.showMobile),onClick:function(a){return function(a){a.target===a.currentTarget&&e((0,W.GB)(!1))}(a)},children:(0,A.jsx)("div",{className:Re.sideBarOpen,children:(0,A.jsx)(we,{})})})]})})}},6191:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU0SURBVHgB7Z2JcvI6DIUTs7RAocB9/1fsbWnLvvycuAqKyQaxHRL0zdBCYpj2RJIt2cHhfr8/BTdwOp2ix/Gof9OxNhCGYfy801HRa36s1GeUFfR4PAaHw7E14pUFgkJcpVS59kWCQsD9/vB0QpqUFTZTUO3W2iqFCxC10+lknu+mHRSrzAYGhv6j2+2kxtcr+xUxi8nTSJVtKCQhrUwSgiJmipjlgVaHQ1LUWFDpgO7DHEoqfkK4D+76kaDi6tWgISb4E1TErAp5uOLqCvdDNQ4l1mkPGKaS2GmPyEIDwRqwzbOFSvy0RWSh4vF2EZe3jAhqGRHUMiKoZbpBi0Avu15vzgNsXazodrvRI2/KwjatEBRCfn9/n8Vcp55/fX0NRqORF2HD5XLV6IETCryfn59XhV4TiDmdTp2L2ugYmiZmr9cPhsNhZJF4brZ1nWo32uV/f39jMZUKg8nkPej3LyKeNQ22222wWCz+ZiQOUWiYTCaBKxproRCHx8zxeJIQk8AxLiDe49JKGy0oAdd+eXnJbAtRe71e/Hqz2QSuaKygu90uft7v9wrbc0GLOrAqtGJgX8aFb11Fdy+NFZQPf7i1ZsHbYLDvisYKymMmxEJvnsVms02cF0FTgAsjAyK+vr5SO5vtdnceKi3i13iPy8H9Q41DKYUka0LvnJcyjsfjs3Vu49UbEJV6dL32aJ+wTCxFxOe55KFSz4+Pj0gEDtxzPp9nvkdnQP8XrnyBmNPp7HlST2Q9ppgAx2C1WegcfZZwfxOcm8//e57iCOIcrIyAW2LpNRcShY20TIgDa8UFoAuDz4CYvoZMoPYYqvPrZKdBcQ5pIg13IC5cP08cWCAeeVmTa2p3eV7gMDsN5OB0kwDa/Pz8BI9OrYLCAnmBYzR6S8Q5PEdPTqxWK6d5uA1qExQWB+sk4OppHQvcF/VNAqU4l7l4VWqLoXmuboJzm806Hm9C1NlsFp/HseVyGVk7YizGoW9vb147I6IWC4XrmrXMvCENhEEbAh0VBCQwoKcLhB4en4/qfB14F9R0dVhf0XAIoA13fRIQv9PyeFN0X3gXFJZDC3xvTQV1Gqr/ZEo1zYvDP4+HFV94FdT8B5Hh3AJc//19Gr/mmRVdHD05p4vJFG994k3QNFe/JxVEbs+HUgS/OHz86tv1vQnKO4mqVZ/BYJCY0oDl8ruEcaHqcn0vgprTvbe6ehrcCuHaZhbFRffp+s4FReGDu/pwaGdJjGmFGCqZvX0dru9U0LTCBx/6VMV0fRRQ+IRdHa7vVNBbsqF7KSqg+HZ9Z4IWFT5sUaaA4tP1nQhatvBhi6ICik/XdyKoD1c3MbMo07V9ub51QdGr31L4sEVRAQWYrp+1QLcKDgS9xC+4eZnChy2yCigELiwslUBJ0DbW66H8zmbcpcdjqW+ogMLnmHj+7+ImbOuCwirJlbAEBo864bOgJoOB/Y7SusubbveouBp5OJuXh1Ug8D/alxugU0IsdRXbnc0p0T1Cz4bcSWcZEdQyIqhlRFDLqBrWArSas4WKoraI5rZCMVGriKAWwQSkwg/BDsjClDmnLdwHfee9ohdCNcgoo596V4FAuBNoR9Mvsa8/YyHDFkpdpnhiQfVOAv6+PaYt6I0CLn2QMk9KPC0PpDI79KvuXe8gEAgFQCOESdMA1XXD8K9hIGSQJWZ0Lm+3Gtx18ci3sNQB7ViTFRq7RW8G+OqzZ/+e0TyrTLQru0GV3qXlOTeo0hN7ljaoMuHbp2lxT62xXm184SWNVLdvofYPYo5GT6ON/I4AAAAASUVORK5CYII="},3770:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=869.8e99ad5e.chunk.js.map