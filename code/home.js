let counts = {
    taeyong: parseInt(localStorage.getItem('taeyongCount')) || 0,
    taeil: parseInt(localStorage.getItem('taeilCount')) || 0,
    johnny: parseInt(localStorage.getItem('johnnyCount')) || 0,
    yuta: parseInt(localStorage.getItem('yutaCount')) || 0,
    kun: parseInt(localStorage.getItem('kunCount')) || 0,
    doyoung: parseInt(localStorage.getItem('doyoungCount')) || 0,
    ten: parseInt(localStorage.getItem('tenCount')) || 0,
    jaehyun: parseInt(localStorage.getItem('jaehyunCount')) || 0,
    winwin: parseInt(localStorage.getItem('winwinCount')) || 0,
    jungwoo: parseInt(localStorage.getItem('jungwooCount')) || 0,
    lucas: parseInt(localStorage.getItem('lucasCount')) || 0,
    mark: parseInt(localStorage.getItem('markCount')) || 0,
    xiaojun: parseInt(localStorage.getItem('xiaojunCount')) || 0,
    hendery: parseInt(localStorage.getItem('henderyCount')) || 0,
    renjun: parseInt(localStorage.getItem('renjunCount')) || 0,
    jeno: parseInt(localStorage.getItem('jenoCount')) || 0,
    haechan: parseInt(localStorage.getItem('haechanCount')) || 0,
    jaemin: parseInt(localStorage.getItem('jaeminCount')) || 0,
    yangyang: parseInt(localStorage.getItem('yangyangCount')) || 0,
    shotaro: parseInt(localStorage.getItem('shotaroCount')) || 0,
    sungchan: parseInt(localStorage.getItem('sungchanCount')) || 0,
    chenle: parseInt(localStorage.getItem('chenleCount')) || 0,
    jisung: parseInt(localStorage.getItem('jisungCount')) || 0
  };
  
  let submitForm = () => {
    let values = "";
    let taeyongChecked = document.getElementsByName("taeyong")[0].checked;
    let taeilChecked = document.getElementsByName("taeil")[0].checked;
    let johnnyChecked = document.getElementsByName("johnny")[0].checked;
    let yutaChecked = document.getElementsByName("yuta")[0].checked;
    let kunChecked = document.getElementsByName("kun")[0].checked;
    let doyoungChecked = document.getElementsByName("doyoung")[0].checked;
    let tenChecked = document.getElementsByName("ten")[0].checked;
    let jaehyunChecked = document.getElementsByName("jaehyun")[0].checked;
    let winwinChecked = document.getElementsByName("winwin")[0].checked;
    let jungwooChecked = document.getElementsByName("jungwoo")[0].checked;
    let lucasChecked = document.getElementsByName("lucas")[0].checked;
    let markChecked = document.getElementsByName("mark")[0].checked;
    let xiaojunChecked = document.getElementsByName("xiaojun")[0].checked;
    let henderyChecked = document.getElementsByName("hendery")[0].checked;
    let renjunChecked = document.getElementsByName("renjun")[0].checked;
    let jenoChecked = document.getElementsByName("jeno")[0].checked;
    let haechanChecked = document.getElementsByName("haechan")[0].checked;
    let jaeminChecked = document.getElementsByName("jaemin")[0].checked;
    let yangyangChecked = document.getElementsByName("yangyang")[0].checked;
    let shotaroChecked = document.getElementsByName("shotaro")[0].checked;
    let sungchanChecked = document.getElementsByName("sungchan")[0].checked;
    let chenleChecked = document.getElementsByName("chenle")[0].checked;
    let jisungChecked = document.getElementsByName("jisung")[0].checked;
  
    if (taeyongChecked) {
      counts.taeyong++;
    }
    if (taeilChecked) {
      counts.taeil++;
    }
    if (johnnyChecked) {
      counts.johnny++;
    }
    if (yutaChecked) {
      counts.yuta++;
    }
    if (kunChecked) {
      counts.kun++;
    }
    if (doyoungChecked) {
      counts.doyoung++;
    }
    if (tenChecked) {
      counts.ten++;
    }
    if (jaehyunChecked) {
      counts.jaehyun++;
    }
    if (winwinChecked) {
      counts.winwin++;
    }
    if (jungwooChecked) {
      counts.jungwoo++;
    }
    if (lucasChecked) {
      counts.lucas++;
    }
    if (markChecked) {
      counts.mark++;
    }
    if (xiaojunChecked) {
      counts.xiaojun++;
    }
    if (henderyChecked) {
      counts.hendery++;
    }
    if (renjunChecked) {
      counts.renjun++;
    }
    if (jenoChecked) {
      counts.jeno++;
    }
    if (haechanChecked) {
      counts.haechan++;
    }
    if (jaeminChecked) {
      counts.jaemin++;
    }
    if (yangyangChecked) {
      counts.yangyang++;
    }
    if (shotaroChecked) {
      counts.shotaro++;
    }
    if (sungchanChecked) {
      counts.sungchan++;
    }
    if (chenleChecked) {
      counts.chenle++;
    }
    if (jisungChecked) {
      counts.jisung++;
    }
  
    if (!(taeyongChecked || taeilChecked || johnnyChecked || yutaChecked || kunChecked
      || doyoungChecked || tenChecked || jaehyunChecked || winwinChecked || jungwooChecked
      || lucasChecked || markChecked || xiaojunChecked || henderyChecked || renjunChecked
      || jenoChecked || haechanChecked || jaeminChecked || yangyangChecked || shotaroChecked
      || sungchanChecked || chenleChecked || jisungChecked)) {
      alert("Please select at least one member.");
    } else {
      localStorage.setItem('taeyongCount', counts.taeyong);
      localStorage.setItem('taeilCount', counts.taeil);
      localStorage.setItem('johnnyCount', counts.johnny);
      localStorage.setItem('yutaCount', counts.yuta);
      localStorage.setItem('kunCount', counts.kun);
      localStorage.setItem('doyoungCount', counts.doyoung);
      localStorage.setItem('tenCount', counts.ten);
      localStorage.setItem('jaehyunCount', counts.jaehyun);
      localStorage.setItem('winwinCount', counts.winwin);
      localStorage.setItem('jungwooCount', counts.jungwoo);
      localStorage.setItem('lucasCount', counts.lucas);
      localStorage.setItem('markCount', counts.mark);
      localStorage.setItem('xiaojunCount', counts.xiaojun);
      localStorage.setItem('henderyCount', counts.hendery);
      localStorage.setItem('renjunCount', counts.renjun);
      localStorage.setItem('jenoCount', counts.jeno);
      localStorage.setItem('haechanCount', counts.haechan);
      localStorage.setItem('jaeminCount', counts.jaemin);
      localStorage.setItem('yangyangCount', counts.yangyang);
      localStorage.setItem('shotaroCount', counts.shotaro);
      localStorage.setItem('sungchanCount', counts.sungchan);
      localStorage.setItem('chenleCount', counts.chenle);
      localStorage.setItem('jisungCount', counts.jisung);
  
      let sortedKeys = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
      for (let key of sortedKeys) {
        values += key + ": " + counts[key] + " vote(s)<br>";
      }
  
      document.getElementById("results").innerHTML = values;
    }
  };
  