import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";const t={form:document.querySelector(".form"),input:document.querySelector('input[name ="delay"]'),button:document.querySelector('button[type ="submit"]')};t.form.addEventListener("submit",i=>{i.preventDefault();const e=t.input.value.trim(),r=document.querySelector('input[type = "radio"]:checked');new Promise((n,f)=>{setTimeout(()=>{r.value==="fulfilled"?n(e):f(e)},e)}).then(s).catch(l);function s(){o.show({title:"OK",titleColor:"#fff",titleSize:"16px",message:`✅ Fulfilled promise in ${e}ms`,messageColor:"#fff",backgroundColor:"#59a10d",iconColor:"#fff",progressBarColor:"#326101",position:"topRight"})}function l(){o.show({title:"ERROR",titleColor:"#fff",titleSize:"16px",message:`❌ Rejected promise in ${e}ms`,messageColor:"#fff",backgroundColor:"#ef4040",iconColor:"#fff",progressBarColor:"#b51b1b",position:"topRight"})}});
//# sourceMappingURL=commonHelpers2.js.map
