(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3975,5874],{43975:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});var n=a(98838),o=a(46287),r=a(23388);const i={id:"@jupyterlab/mathjax2-extension:plugin",autoStart:!0,provides:o.ILatexTypesetter,activate:()=>{const[t,e]=["fullMathjaxUrl","mathjaxConfig"],a=n.PageConfig.getOption(t),o=n.PageConfig.getOption(e);if(!a){const a=`${i.id} uses '${t}' and '${e}' in PageConfig to operate but '${t}' was not found.`;throw new Error(a)}return new r.MathJaxTypesetter({url:a,config:o})}},s=i}}]);
//# sourceMappingURL=3975.bundle.js.map