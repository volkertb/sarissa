/**
                converted.setProperty("AllowDocumentFunction", true); 
                converted.resolveExternals = true; 
            }
            var outDoc=new ActiveXObject(_SARISSA_DOM_PROGID);
            this.processor.output=outDoc;
            this.processor.transform();
            return outDoc;
            this.processor.input = sourceDoc;
            var outDoc = new ActiveXObject(_SARISSA_DOM_XMLWRITER);
            this.processor.output = outDoc; 
            this.processor.transform();
            var oDoc = new ActiveXObject(_SARISSA_DOM_PROGID);
            oDoc.loadXML(outDoc.output+"");
            return oDoc;
                }
                else if(oNode.nodeName == "td"){
                    tmp = document.createElement("tr");
                }
                else if(oNode.nodeName == "option"){
                    tmp = document.createElement("select");
                }
                else{
                    tmp = document.createElement("div");
                };
                if(bChildren){
                    tmp.innerHTML = oNode.xml ? oNode.xml : oNode.outerHTML;
                }else{
                    tmp.innerHTML = oNode.xml ? oNode.cloneNode(false).xml : oNode.cloneNode(false).outerHTML;
                };