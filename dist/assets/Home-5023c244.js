import{_ as p,r as f,o as n,c as a,a as e,b as u,w as _,d as h,t as c,s as r,e as b,f as v,F as w,g as y,h as $}from"./index-0e37ea7f.js";const k={name:"SongItem",props:["song"]},S={class:"flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"},D={class:"text-gray-500 text-sm"},I={class:"text-gray-600 text-lg"},P=["onClick"],B=e("i",{class:"fa fa-comments text-gray-600"},null,-1);function C(o,t,s,d,m,x){const i=f("router-link");return n(),a("li",S,[e("div",null,[u(i,{to:{name:"song",params:{id:s.song.docID}},class:"font-bold block text-gray-600"},{default:_(()=>[h(c(s.song.modified_name),1)]),_:1},8,["to"]),e("span",D,c(s.song.display_name),1)]),e("div",I,[u(i,{custom:"",to:{name:"song",params:{id:s.song.docID},hash:"#comments"}},{default:_(({navigate:l})=>[e("span",{class:"comments",onClick:l},[B,h(" "+c(s.song.comment_count),1)],8,P)]),_:1},8,["to"])])])}const q=p(k,[["render",C]]),E={beforeMount(o,t){let s=`fa fa-${t.value.icon} text-green-400 text-2xl`;t.value.right&&(s+=" float-right"),o.innerHTML+=`<i class="${s}"></i>  `}},H="/assets/img/introduction-music.png",L={name:"Home",components:{AppSongItem:q},directives:{"icon-secondary":E},data(){return{songs:[],maxPerPage:5,pendingRequest:!1}},async created(){this.getSongs(),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const{scrollTop:o,offsetHeight:t}=document.documentElement,{innerHeight:s}=window;Math.round(o)+s===t&&this.getSongs()},async getSongs(){if(this.pendingRequest)return;this.pendingRequest=!0;let o;if(this.songs.length){const t=await r.doc(this.songs[this.songs.length-1].docID).get();o=await r.orderBy("modified_name").startAfter(t).limit(this.maxPerPage).get()}else o=await r.orderBy("modified_name").limit(this.maxPerPage).get();o.forEach(t=>{this.songs.push({docID:t.id,...t.data()})}),this.pendingRequest=!1}}},N={class:"mb-8 py-20 text-white text-center relative"},R=e("div",{class:"absolute inset-0 w-full h-full bg-contain introduction-bg",style:{"background-image":"url(assets/img/header.png)"}},null,-1),M={class:"container mx-auto"},T={class:"text-white main-header-content"},V={class:"font-bold text-5xl mb-5"},j=e("p",{class:"w-full md:w-8/12 mx-auto"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dolor mollis, congue augue non, venenatis elit. Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna pulvinar, fringilla lorem eget, ullamcorper urna. ",-1),A=e("img",{class:"relative block mx-auto mt-5 -mb-20 w-auto max-w-full",src:H},null,-1),F={class:"container mx-auto"},O={class:"bg-white rounded border border-gray-200 relative flex flex-col"},W={class:"px-6 pt-6 pb-5 font-bold border-b border-gray-200"},U=e("span",{class:"card-title"},"Songs",-1),z=[U],G={id:"playlist"};function J(o,t,s,d,m,x){const i=f("app-song-item"),l=b("icon-secondary");return n(),a("main",null,[e("section",N,[R,e("div",M,[e("div",T,[e("h1",V,c(o.$t("home.listen")),1),j])]),A]),e("section",F,[e("div",O,[v((n(),a("div",W,z)),[[l,{icon:"headphones-alt",right:!0}]]),e("ol",G,[(n(!0),a(w,null,y(m.songs,g=>(n(),$(i,{key:g.docID,song:g},null,8,["song"]))),128))])])])])}const Q=p(L,[["render",J]]);export{Q as default};