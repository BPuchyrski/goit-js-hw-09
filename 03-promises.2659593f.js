let e=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');function n(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector("form").addEventListener("click",(l=>{l.preventDefault();let u=Number(e.value),i=Number(t.value),r=Number(o.value);for(let e=0;e<r;e++)n(e+1,u).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),u+=i}));
//# sourceMappingURL=03-promises.2659593f.js.map