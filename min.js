var e="&merge_request[target_branch]=",o=window.location.href.split("2F")[1];console.log(o),window.location.href+=0<window.location.href.indexOf("feature")?e+"release%2F"+o:0<window.location.href.indexOf("uat")?e+"uat":0<window.location.href.indexOf("qa")?e+"qa":0<window.location.href.indexOf("release")?e+"main":"";