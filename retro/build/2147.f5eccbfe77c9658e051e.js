(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2147],{2147:(e,t,s)=>{"use strict";s.r(t),s.d(t,{DocumentManager:()=>S,DocumentWidgetManager:()=>E,IDocumentManager:()=>v,PathStatus:()=>R,SaveHandler:()=>P,SavingStatus:()=>A,isValidFileName:()=>u,nameOnSaveDialog:()=>h,renameDialog:()=>l,renameFile:()=>c,shouldOverwrite:()=>d});var n=s(19573),i=s(87939),a=s(17179),r=s(77031);const o="jp-FileDialog";function l(e,t,s){const r=(s=s||a.nullTranslator).load("jupyterlab");return(0,n.showDialog)({title:r.__("Rename File"),body:new g(t),focusNodeSelector:"input",buttons:[n.Dialog.cancelButton({label:r.__("Cancel")}),n.Dialog.okButton({label:r.__("Rename")})]}).then((s=>{if(!s.value)return null;if(!u(s.value))return(0,n.showErrorMessage)(r.__("Rename Error"),Error(r.__('"%1" is not a valid name for a file. Names must have nonzero length, and cannot include "/", "\\", or ":"',s.value))),null;const a=i.PathExt.dirname(t),o=i.PathExt.join(a,s.value);return c(e,t,o)}))}function h(e,t,s){const r=(s=s||a.nullTranslator).load("jupyterlab"),o=t.path;return(0,n.showDialog)({title:r.__("Name File"),body:new p(e,o),focusNodeSelector:"input",buttons:[n.Dialog.okButton({label:r.__("Enter")})]}).then((s=>{if(t.model.dirty=!1,t.contentsModel.renamed=!0,!s.value)return c(e,o,o);if(!u(s.value))return(0,n.showErrorMessage)(r.__("Naming Error"),Error(r.__('"%1" is not a valid name for a file. Names must have nonzero length, and cannot include "/", "\\", or ":"',s.value))),c(e,o,o);const a=i.PathExt.dirname(o),l=i.PathExt.join(a,s.value);return c(e,o,l)}))}function c(e,t,s){return e.rename(t,s).catch((n=>{if(-1===n.message.indexOf("409"))throw n;return d(s).then((n=>n?e.overwrite(t,s):Promise.reject("File not renamed")))}))}function d(e,t){const s=(t=t||a.nullTranslator).load("jupyterlab"),i={title:s.__("Overwrite file?"),body:s.__('"%1" already exists, overwrite?',e),buttons:[n.Dialog.cancelButton({label:s.__("Cancel")}),n.Dialog.warnButton({label:s.__("Overwrite")})]};return(0,n.showDialog)(i).then((e=>Promise.resolve(e.button.accept)))}function u(e){return e.length>0&&!/[\/\\:]/.test(e)}class g extends r.Widget{constructor(e){super({node:_.createRenameNode(e)}),this.addClass(o);const t=i.PathExt.extname(e),s=this.inputNode.value=i.PathExt.basename(e);this.inputNode.setSelectionRange(0,s.length-t.length)}get inputNode(){return this.node.getElementsByTagName("input")[0]}getValue(){return this.inputNode.value}}var _;!function(e){e.createRenameNode=function(e,t){const s=(t=t||a.nullTranslator).load("jupyterlab"),n=document.createElement("div"),i=document.createElement("label");i.textContent=s.__("File Path");const r=document.createElement("span");r.textContent=e;const o=document.createElement("label");o.textContent=s.__("New Name"),o.className="jp-new-name-title";const l=document.createElement("input");return n.appendChild(i),n.appendChild(r),n.appendChild(o),n.appendChild(l),n}}(_||(_={}));class p extends r.Widget{constructor(e,t){super({node:_.createNameFileNode(e)}),this.addClass(o);const s=i.PathExt.extname(t),n=this.inputNode.value=i.PathExt.basename(t);this.inputNode.setSelectionRange(0,n.length-s.length)}get inputNode(){return this.node.getElementsByTagName("input")[0]}getValue(){return this.inputNode.value}get checkboxNode(){return this.node.getElementsByTagName("input")[1]}getChecked(){return this.checkboxNode.checked}}!function(e){e.createNameFileNode=function(e,t){const s=(t=t||a.nullTranslator).load("jupyterlab"),n=document.createElement("div"),i=document.createElement("input"),r=document.createElement("input"),o=document.createElement("label"),l=document.createElement("div");return r.type="checkbox",r.classList.add("jp-FileDialog-Checkbox"),r.addEventListener("change",(function(){e.nameFileOnSave=!this.checked})),o.textContent=s.__("Don't ask me again"),n.appendChild(i),l.appendChild(r),l.appendChild(o),n.appendChild(l),n}}(_||(_={}));var m=s(66065);const v=new m.Token("@jupyterlab/docmanager:IDocumentManager");var f=s(61421),y=s(79028),w=s(20337),x=s(58137);class P{constructor(e){this._autosaveTimer=-1,this._minInterval=-1,this._interval=-1,this._isActive=!1,this._inDialog=!1,this._isDisposed=!1,this._multiplier=10,this._context=e.context;const t=e.saveInterval||120;this._minInterval=1e3*t,this._interval=this._minInterval,this._context.fileChanged.connect(this._setTimer,this),this._context.disposed.connect(this.dispose,this)}get saveInterval(){return this._interval/1e3}set saveInterval(e){this._minInterval=this._interval=1e3*e,this._isActive&&this._setTimer()}get isActive(){return this._isActive}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,clearTimeout(this._autosaveTimer),x.Signal.clearData(this))}start(){this._isActive=!0,this._setTimer()}stop(){this._isActive=!1,clearTimeout(this._autosaveTimer)}_setTimer(){clearTimeout(this._autosaveTimer),this._isActive&&(this._autosaveTimer=window.setTimeout((()=>{this._save()}),this._interval))}_save(){const e=this._context;if(this._setTimer(),!e)return;if(!e.contentsModel||!e.contentsModel.writable||!e.model.dirty||this._inDialog)return;const t=(new Date).getTime();e.save().then((()=>{if(this.isDisposed)return;const e=(new Date).getTime()-t;this._interval=Math.max(this._multiplier*e,this._minInterval),this._setTimer()})).catch((e=>{"Cancel"!==e.message&&console.error("Error in Auto-Save",e.message)}))}}var C,D,b=s(98669),F=s(91884);class E{constructor(e){this._activateRequested=new x.Signal(this),this._isDisposed=!1,this._registry=e.registry,this.translator=e.translator||a.nullTranslator}get activateRequested(){return this._activateRequested}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,x.Signal.disconnectReceiver(this))}createWidget(e,t){const s=e.createNew(t);return this._initializeWidget(s,e,t),s}_initializeWidget(e,t,s){C.factoryProperty.set(e,t);const n=new b.DisposableSet;(0,y.each)(this._registry.widgetExtensions(t.name),(t=>{const i=t.createNew(e,s);i&&n.add(i)})),C.disposablesProperty.set(e,n),e.disposed.connect(this._onWidgetDisposed,this),this.adoptWidget(s,e),s.fileChanged.connect(this._onFileChanged,this),s.pathChanged.connect(this._onPathChanged,this),s.ready.then((()=>{this.setCaption(e)}))}adoptWidget(e,t){C.widgetsProperty.get(e).push(t),F.MessageLoop.installMessageHook(t,this),t.addClass("jp-Document"),t.title.closable=!0,t.disposed.connect(this._widgetDisposed,this),C.contextProperty.set(t,e)}findWidget(e,t){const s=C.widgetsProperty.get(e);if(s)return(0,y.find)(s,(e=>{const s=C.factoryProperty.get(e);return!!s&&s.name===t}))}contextForWidget(e){return C.contextProperty.get(e)}cloneWidget(e){const t=C.contextProperty.get(e);if(!t)return;const s=C.factoryProperty.get(e);if(!s)return;const n=s.createNew(t,e);return this._initializeWidget(n,s,t),n}closeWidgets(e){const t=C.widgetsProperty.get(e);return Promise.all((0,y.toArray)((0,y.map)(t,(e=>this.onClose(e))))).then((()=>{}))}deleteWidgets(e){const t=C.widgetsProperty.get(e);return Promise.all((0,y.toArray)((0,y.map)(t,(e=>this.onDelete(e))))).then((()=>{}))}messageHook(e,t){switch(t.type){case"close-request":return this.onClose(e),!1;case"activate-request":{const t=this.contextForWidget(e);t&&this._activateRequested.emit(t.path);break}}return!0}async setCaption(e){const t=this.translator.load("jupyterlab"),s=C.contextProperty.get(e);if(!s)return;const n=s.contentsModel;if(n)return s.listCheckpoints().then((a=>{if(e.isDisposed)return;const r=a[a.length-1],o=r?i.Time.format(r.last_modified):"None";let l=t.__("Name: %1\nPath: %2\n",n.name,n.path);s.model.readOnly?l+=t.__("Read-only"):l+=t.__("Last Saved: %1\n",i.Time.format(n.last_modified))+t.__("Last Checkpoint: %1",o),e.title.caption=l}));e.title.caption=""}async onClose(e){var t;const[s,n]=await this._maybeClose(e,this.translator);if(e.isDisposed)return!0;if(s){if(!n){const s=C.contextProperty.get(e);if(!s)return!0;(null===(t=s.contentsModel)||void 0===t?void 0:t.writable)?await s.save(!0):await s.saveAs()}if(e.isDisposed)return!0;e.dispose()}return s}onDelete(e){return e.dispose(),Promise.resolve(void 0)}_maybeClose(e,t){var s;const i=(t=t||a.nullTranslator).load("jupyterlab"),r=C.contextProperty.get(e);if(!r)return Promise.resolve([!0,!0]);let o=C.widgetsProperty.get(r);if(!o)return Promise.resolve([!0,!0]);o=(0,y.toArray)((0,y.filter)(o,(e=>{const t=C.factoryProperty.get(e);return!!t&&!1===t.readOnly})));const l=C.factoryProperty.get(e);if(!l)return Promise.resolve([!0,!0]);if(!r.model.dirty||o.length>1||l.readOnly)return Promise.resolve([!0,!0]);const h=e.title.label,c=(null===(s=r.contentsModel)||void 0===s?void 0:s.writable)?i.__("Save"):i.__("Save as");return(0,n.showDialog)({title:i.__("Save your work"),body:i.__('Save changes in "%1" before closing?',h),buttons:[n.Dialog.cancelButton({label:i.__("Cancel")}),n.Dialog.warnButton({label:i.__("Discard")}),n.Dialog.okButton({label:c})]}).then((e=>[e.button.accept,"warn"===e.button.displayType]))}_widgetDisposed(e){const t=C.contextProperty.get(e);if(!t)return;const s=C.widgetsProperty.get(t);s&&(y.ArrayExt.removeFirstOf(s,e),s.length||t.dispose())}_onWidgetDisposed(e){C.disposablesProperty.get(e).dispose()}_onFileChanged(e){const t=C.widgetsProperty.get(e);(0,y.each)(t,(e=>{this.setCaption(e)}))}_onPathChanged(e){const t=C.widgetsProperty.get(e);(0,y.each)(t,(e=>{this.setCaption(e)}))}}!function(e){e.contextProperty=new w.AttachedProperty({name:"context",create:()=>{}}),e.factoryProperty=new w.AttachedProperty({name:"factory",create:()=>{}}),e.widgetsProperty=new w.AttachedProperty({name:"widgets",create:()=>[]}),e.disposablesProperty=new w.AttachedProperty({name:"disposables",create:()=>new b.DisposableSet})}(C||(C={}));class S{constructor(e){this._activateRequested=new x.Signal(this),this._contexts=[],this._isDisposed=!1,this._autosave=!0,this._nameFileOnSave=!0,this._optionChanged=new x.Signal(this),this._autosaveInterval=120,this.translator=e.translator||a.nullTranslator,this.registry=e.registry,this.services=e.manager,this._collaborative=!!e.collaborative,this._dialogs=e.sessionDialogs||n.sessionContextDialogs,this._docProviderFactory=e.docProviderFactory,this._opener=e.opener,this._when=e.when||e.manager.ready;const t=new E({registry:this.registry,translator:this.translator});t.activateRequested.connect(this._onActivateRequested,this),this._widgetManager=t,this._setBusy=e.setBusy}get activateRequested(){return this._activateRequested}get autosave(){return this._autosave}set autosave(e){this._autosave=e,this._contexts.forEach((t=>{const s=D.saveHandlerProperty.get(t);s&&(!0!==e||s.isActive?!1===e&&s.isActive&&s.stop():s.start())}))}get autosaveInterval(){return this._autosaveInterval}set autosaveInterval(e){this._autosaveInterval=e,this._contexts.forEach((t=>{const s=D.saveHandlerProperty.get(t);s&&(s.saveInterval=e||120)}))}get nameFileOnSave(){return this._nameFileOnSave}set nameFileOnSave(e){this._nameFileOnSave!=e&&this._optionChanged.emit({nameFileOnSave:e}),this._nameFileOnSave=e}get optionChanged(){return this._optionChanged}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,x.Signal.clearData(this),this._contexts.forEach((e=>this._widgetManager.closeWidgets(e))),this._widgetManager.dispose(),this._contexts.length=0)}cloneWidget(e){return this._widgetManager.cloneWidget(e)}closeAll(){return Promise.all(this._contexts.map((e=>this._widgetManager.closeWidgets(e)))).then((()=>{}))}closeFile(e){const t=this._contextsForPath(e).map((e=>this._widgetManager.closeWidgets(e)));return Promise.all(t).then((e=>{}))}contextForWidget(e){return this._widgetManager.contextForWidget(e)}copy(e,t){return this.services.contents.copy(e,t)}createNew(e,t="default",s){return this._createOrOpenDocument("create",e,t,s)}deleteFile(e){return this.services.sessions.stopIfNeeded(e).then((()=>this.services.contents.delete(e))).then((()=>(this._contextsForPath(e).forEach((e=>this._widgetManager.deleteWidgets(e))),Promise.resolve(void 0))))}findWidget(e,t="default"){const s=i.PathExt.normalize(e);let n=[t];if("default"===t){const e=this.registry.defaultWidgetFactory(s);if(!e)return;n=[e.name]}else null===t&&(n=this.registry.preferredWidgetFactories(s).map((e=>e.name)));for(const e of this._contextsForPath(s))for(const t of n)if(null!==t){const s=this._widgetManager.findWidget(e,t);if(s)return s}}newUntitled(e){return"file"===e.type&&(e.ext=e.ext||".txt"),this.services.contents.newUntitled(e)}open(e,t="default",s,n){return this._createOrOpenDocument("open",e,t,s,n)}openOrReveal(e,t="default",s,n){const i=this.findWidget(e,t);return i?(this._opener.open(i,n||{}),i):this.open(e,t,s,n||{})}overwrite(e,t){const s=`${t}.${m.UUID.uuid4()}`,n=()=>this.rename(s,t);return this.rename(e,s).then((()=>this.deleteFile(t))).then(n,n)}rename(e,t){return this.services.contents.rename(e,t).then((e=>{"notebook"!=e.type&&"file"!=e.type||(e.renamed=!0)}))}_findContext(e,t){const s=this.services.contents.normalize(e);return(0,y.find)(this._contexts,(e=>e.path===s&&e.factoryName===t))}_contextsForPath(e){const t=this.services.contents.normalize(e);return this._contexts.filter((e=>e.path===t))}_createContext(e,t,s){const n=this.services.contents.getModelDBFactory(e)||void 0,i=new f.Context({opener:(e,t)=>{this._widgetManager.adoptWidget(i,e),this._opener.open(e,t)},manager:this.services,factory:t,path:e,kernelPreference:s,modelDBFactory:n,setBusy:this._setBusy,sessionDialogs:this._dialogs,collaborative:this._collaborative,docProviderFactory:this._docProviderFactory}),a=new P({context:i,saveInterval:this.autosaveInterval});return D.saveHandlerProperty.set(i,a),i.ready.then((()=>{this.autosave&&a.start()})),i.disposed.connect(this._onContextDisposed,this),this._contexts.push(i),i}_onContextDisposed(e){y.ArrayExt.removeFirstOf(this._contexts,e)}_widgetFactoryFor(e,t){const{registry:s}=this;if("default"===t){const n=s.defaultWidgetFactory(e);if(!n)return;t=n.name}return s.getWidgetFactory(t)}_createOrOpenDocument(e,t,s="default",n,i){const a=this._widgetFactoryFor(t,s);if(!a)return;const r=a.modelName||"text",o=this.registry.getModelFactory(r);if(!o)return;const l=this.registry.getKernelPreference(t,a.name,n);let h,c=Promise.resolve(void 0);if("open"===e)h=this._findContext(t,o.name)||null,h||(h=this._createContext(t,o,l),c=this._when.then((()=>h.initialize(!1))));else{if("create"!==e)throw new Error(`Invalid argument 'which': ${e}`);h=this._createContext(t,o,l),c=this._when.then((()=>h.initialize(!0)))}const d=this._widgetManager.createWidget(a,h);return this._opener.open(d,i||{}),c.catch((e=>{d.close()})),d}_onActivateRequested(e,t){this._activateRequested.emit(t)}}!function(e){e.saveHandlerProperty=new w.AttachedProperty({name:"saveHandler",create:()=>{}})}(D||(D={}));var T=s(96927),M=s.n(T),N=s(34016);function W(e){const t=(e.translator||a.nullTranslator).load("jupyterlab");return M().createElement(N.TextItem,{source:t.__("Saving %1",e.fileStatus)})}class A extends n.VDomRenderer{constructor(e){super(new A.Model(e.docManager)),this.translator=e.translator||a.nullTranslator}render(){return null===this.model||null===this.model.status?null:M().createElement(W,{fileStatus:this.model.status,translator:this.translator})}}function O(e){return M().createElement(N.TextItem,{source:e.name,title:e.fullPath})}!function(e){class t extends n.VDomModel{constructor(e){super(),this._onStatusChange=(e,t)=>{this._status=t,"completed"===this._status?(setTimeout((()=>{this._status=null,this.stateChanged.emit(void 0)}),2e3),this.stateChanged.emit(void 0)):this.stateChanged.emit(void 0)},this._status=null,this._widget=null,this._status=null,this.widget=null,this._docManager=e}get status(){return this._status}get widget(){return this._widget}set widget(e){const t=this._widget;if(null!==t){const e=this._docManager.contextForWidget(t);e&&e.saveState.disconnect(this._onStatusChange)}if(this._widget=e,null===this._widget)this._status=null;else{const e=this._docManager.contextForWidget(this._widget);e&&e.saveState.connect(this._onStatusChange)}}}e.Model=t}(A||(A={}));class R extends n.VDomRenderer{constructor(e){super(new R.Model(e.docManager)),this.node.title=this.model.path}render(){return M().createElement(O,{fullPath:this.model.path,name:this.model.name})}}!function(e){class t extends n.VDomModel{constructor(e){super(),this._onTitleChange=e=>{const t=this._getAllState();this._name=e.label,this._triggerChange(t,this._getAllState())},this._onPathChange=(e,t)=>{const s=this._getAllState();this._path=t,this._name=i.PathExt.basename(t),this._triggerChange(s,this._getAllState())},this._path="",this._name="",this._widget=null,this._docManager=e}get path(){return this._path}get name(){return this._name}get widget(){return this._widget}set widget(e){const t=this._widget;if(null!==t){const e=this._docManager.contextForWidget(t);e?e.pathChanged.disconnect(this._onPathChange):t.title.changed.disconnect(this._onTitleChange)}const s=this._getAllState();if(this._widget=e,null===this._widget)this._path="",this._name="";else{const e=this._docManager.contextForWidget(this._widget);e?(this._path=e.path,this._name=i.PathExt.basename(e.path),e.pathChanged.connect(this._onPathChange)):(this._path="",this._name=this._widget.title.label,this._widget.title.changed.connect(this._onTitleChange))}this._triggerChange(s,this._getAllState())}_getAllState(){return[this._path,this._name]}_triggerChange(e,t){e[0]===t[0]&&e[1]===t[1]||this.stateChanged.emit(void 0)}}e.Model=t}(R||(R={}))}}]);
//# sourceMappingURL=2147.f5eccbfe77c9658e051e.js.map