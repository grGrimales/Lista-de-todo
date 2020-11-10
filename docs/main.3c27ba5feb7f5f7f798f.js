(()=>{"use strict";function a(d){if(c[d])return c[d].exports;var e=c[d]={exports:{}};return b[d](e,e.exports,a),e.exports}var b={513:(a,b,c)=>{function d(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function e(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function f(d,a,b){return a&&e(d.prototype,a),b&&e(d,b),d}function g(i,a){var b;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=h(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var j,f=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return f=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{f||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function h(d,e){if(d){if("string"==typeof d)return i(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?i(d,e):void 0}}function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function j(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function k(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function l(d,a,b){return a&&k(d.prototype,a),b&&k(d,b),d}function m(i,a){var b;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=n(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var j,f=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return f=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{f||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function n(d,e){if(d){if("string"==typeof d)return o(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?o(d,e):void 0}}function o(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}c.d(b,{L:()=>x});var p=function(){function h(a){d(this,h),this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return f(h,null,[{key:"fromJson",value:function(a){var b=a.id,c=a.tarea,d=a.completado,e=a.creado,f=new h(c);return f.id=b,f.completado=d,f.creado=e,f}}]),h}(),q=function(){function b(){j(this,b),this.cargarLocalStorage()}return l(b,[{key:"nuevoTodo",value:function(b){this.todos.push(b),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(c){this.todos=this.todos.filter(function(a){return a.id!=c}),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var a,b=g(this.todos);try{for(b.s();!(a=b.n()).done;){var c=a.value;if(c.id==e){c.completado=!c.completado,this.guardarLocalStorage();break}}}catch(c){b.e(c)}finally{b.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter(function(b){return!b.completado}),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(function(b){return p.fromJson(b)})}}]),b}(),r=document.querySelector(".new-todo"),s=document.querySelector(".todo-list"),t=document.querySelector(".clear-completed"),u=document.querySelector(".filters"),v=document.querySelectorAll(".filtro"),w=function(d){var a="\n    <li class=\"".concat(d.completado?"completed":"","\" data-id=\"$ { todo.id}\">\n\t\t<div class=\"view\">\n\t\t\t\t<input class=\"toggle\" type=\"checkbox\" ").concat(d.completado?"checked":"",">\n\t\t\t\t<label>").concat(d.tarea,"</label>\n\t\t\t\t<button class=\"destroy\"></button>\n\t\t</div>\n\t\t<input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>"),b=document.createElement("div");return b.innerHTML=a,s.append(b.firstElementChild),b.firstElementChild};r.addEventListener("keyup",function(c){if(13===c.keyCode&&0<r.value.length){console.log(r.value);var a=new p(r.value);x.nuevoTodo(a),w(a),r.value=""}}),s.addEventListener("click",function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=b.getAttribute("data-id");a.includes("input")?(x.marcarCompletado(c),b.classList.toggle("completed")):a.includes("button")&&(x.eliminarTodo(c),s.removeChild(b))}),t.addEventListener("click",function(){x.eliminarCompletados();for(var c,a=s.children.length-1;0<=a;a--)c=s.children[a],c.classList.contains("completed")&&s.removeChild(c)}),u.addEventListener("click",function(g){var a=g.target.text;if(a){v.forEach(function(b){return b.classList.remove("selected")}),g.target.classList.add("selected");var b,c=m(s.children);try{for(c.s();!(b=c.n()).done;){var d=b.value;d.classList.remove("hidden");var e=d.classList.contains("completed");"Pendientes"===a?e&&d.classList.add("hidden"):"Completados"===a?e||d.classList.add("hidden"):void 0}}catch(b){c.e(b)}finally{c.f()}}});var x=new q;x.todos.forEach(function(b){return w(b)})}},c={};(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})(),a(513)})();